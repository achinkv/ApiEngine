'use strict';

var OAuth = require('oauth').OAuth;
var OAuth2 = require('oauth').OAuth2;
var querystring = require('querystring');
var superagent = require("superagent");
var globaljson = {}; //used to store data which will be needed in the subsequent calls.
var utils = require("./utils/utils");
var apiconfig = require("./utils/apiconfig");
var ejs = require('ejs');

function preparerequest(reqobj) { //this function just converts the object passed to it in a url.
    var reqstr = "?";
    for (var prop in reqobj) {

        console.log("o." + prop + " = " + reqobj[prop]);
        if (prop === "url") {
            reqstr = reqobj[prop] + reqstr;
        } else {
            reqstr = reqstr + "&" + prop + "=" + reqobj[prop];
        }


    }
    console.log(reqstr);
    return reqstr;

};

function extend(a, b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) {
            a[key] = b[key];
        }
    }
    return a;
}

function getparamsfromconfig(apiobj) { //get object from config base on api and action and then merge it with incoming object.

    var configobj = apiconfig[apiobj.api][apiobj.action];

    var completeapiobj = extend(apiobj, configobj); //merges incoming apiobj with object from config based on the api and the action.

    var temp = JSON.stringify(completeapiobj);
    var mergedstring = ejs.render(temp, completeapiobj);
    var mergedobj = JSON.parse(mergedstring);

    console.log(mergedobj);
    return mergedobj;
}


var OneApiService = function() {


    // step 1 handler
    var step1 = function step1(params, cb) {
        utils.modifyinput(params.apiinfo.oa, function(e, r) {
            params.apiinfo.oa = r;
            params.apiinfo.oa = getparamsfromconfig(params.apiinfo.oa);
            globaljson = params['apiinfo'];

            if (!(globaljson.oa.hasOwnProperty("oauth2") || globaljson.oa.hasOwnProperty("oauth1"))) {

                callnonoauthapis(globaljson, cb);

            } else if (r.oauth_access_token && r.oauth_access_token && (r.oauth_access_token.length > 0)) {

                if (globaljson.oa && (globaljson.oa.oauth1 === "true")) {

                    var oa = new OAuth(globaljson.oa.requesttokenurl,
                        globaljson.oa.oauthurl,
                        globaljson.oa.key1,
                        globaljson.oa.key2,
                        globaljson.oa.version,
                        globaljson.oa.callbackurl,
                        globaljson.oa.encoding,
                        null, ((globaljson && globaljson.oa && globaljson.oa.headers) || null));

                    oauth1finalcallwithaccesstoken(oa, cb);

                } else if (globaljson.oa && (globaljson.oa.oauth2 === "true")) {

                    var oa = new OAuth2(globaljson.oa.key1,
                        globaljson.oa.key2,
                        globaljson.oa.accessurl,
                        globaljson.oa.requesttokenurl,
                        globaljson.oa.oauthurl,
                        null);

                    oauth2finalcallwithaccesstoken(oa, globaljson.oa.oauth_access_token, cb);

                }



            } else {
                console.log("r from utils", r);

                console.log('globaljson after modifyinput:', globaljson);

                if (params && params.apiinfo && params.apiinfo.oa && params.apiinfo.oa.oauth2diff === "true") {
                    // This if condition deals with a different flow of oauth2.
                    superagent.post(params.apiinfo.oa.requesttokenurl)
                        .send("")
                        .set({
                            "Accept": "application/json",
                            "Accept-Language": "en_US"
                        })
                        .auth(globaljson.oa.key1, apiinfo.oa.key2)
                        .end(function(err, response) {
                            console.log(err, response.body);
                            globaljson["access_token"] = response.body.token_type + " " + response.body.access_token;

                            superagent.post(globaljson.oa.oauthurl)
                                .send(globaljson.oa.tokendata)
                                .set({
                                    "Accept": "application/json",
                                    "Authorization": globaljson.access_token
                                })
                                .end(function(err, resp) {
                                    console.log(err, resp.body);


                                    var path;
                                    var links = resp && resp.body && resp.body.links || [];
                                    console.log(links);
                                    for (var i = 0; i < links.length; i++) {
                                        if (links[i].rel === "approval_url") {
                                            path = links[i].href;
                                        } else if (links[i].rel === "execute") {
                                            globaljson["executeurl"] = links[i].href;
                                        }
                                    }
                                    console.log(path);
                                    cb("", [path]);
                                });
                        });


                } else if (params && params.apiinfo && params.apiinfo.oa && params.apiinfo.oa.oauth2 === "true") {
                    //This if condition deals with the standard oauth2 flow followed by many apis.

                    var oa = new OAuth2(globaljson.oa.key1,
                        globaljson.oa.key2,
                        globaljson.oa.accessurl || "",
                        globaljson.oa.requesttokenurl,
                        globaljson.oa.oauthurl,
                        null)

                    var path = oa.getAuthorizeUrl(globaljson.oa.parameters || {}); //function getAuthorizeUrl of oauth.oauth2 library is called and passed parameters which returns a path.

                    cb("", [path]); //callback gets called with the path passed in an array as argument.

                } else {

                    if ((typeof globaljson['oauth'] !== "undefined") && (!globaljson['oauth']) && (globaljson['oa']['oauth_verifier'])) {
                        // return and proceed to step 2 in case oauth is not needed
                        step2(params, cb);
                    } else {



                        var list = [];


                        // GData specifid: scopes that  want access to.this is specific to google
                        var gdataScopes = [
                            querystring.escape(globaljson.oa.url1),
                            querystring.escape(globaljson.oa.url2)
                        ];


                        console.log(globaljson);
                        //var oa = new OAuth(globaljson.oa.requesttokenurl + "?scope=" + gdataScopes.join('+'),
                        var oa = new OAuth(globaljson.oa.requesttokenurl,
                            globaljson.oa.oauthurl,
                            globaljson.oa.key1,
                            globaljson.oa.key2,
                            globaljson.oa.version,
                            globaljson.oa.callbackurl,
                            // "http://localhost:5000/google_cb?action=" + querystring.escape("/google_contacts")
                            globaljson.oa.encoding);

                        //first request to the oauth api provider which fetches an oauth token which is then combined with the oauth verifier url and then this url is sent back to client. This url take the user to the authorization page. 
                        oa.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results) {
                            if (error) {
                                cb(error, []);
                            } else {
                                // store the tokens in the globaljson.
                                globaljson['oa']['oaobject'] = oa;
                                globaljson['oa']['oauth_token'] = oauth_token;
                                globaljson['oa']['oauth_token_secret'] = oauth_token_secret;

                                // redirect the user to authorize the token
                                list.push(globaljson.oa.oauth_verifier_url + oauth_token);
                                console.log('cb', error, list);
                                cb(error, list);
                            }
                        });
                    }
                };
            };
        });
    };

    // step 2 handler    
    var step2 = function step2(params, cb) {
        if (params && params.apiinfo && params.apiinfo.oa && params.apiinfo.oa.oauth2diff === "true") {
            // for a different oauth flow is handle here.
            superagent.post(globaljson.executeurl)
                .send({
                    "payer_id": params.apiinfo.oa.oauth_verifier
                })
                .set({
                    "Accept": "application/json",
                    "Authorization": globaljson.access_token
                })
                .end(function(err, resp) {
                    cb(err, response.text);
                })
        } else if (globaljson && globaljson.oa && globaljson.oa.oauth2 === "true") {
            //the standard oauth flow  is handled here.

            if (globaljson.oa.step2parameters && globaljson.oa.step2parameters.appendtourl && (globaljson.oa.step2parameters.appendtourl === "true")) { //some apis like smarterer's api,for the access_token request , expect the parameters in url.This case is handled here with appendtourl flag.

                delete globaljson.oa.step2parameters.appendtourl;

                globaljson.oa.oauthurl = globaljson.oa.oauthurl + "?client_id=" + globaljson.oa.key1 + "&client_secret=" + globaljson.oa.key2 + "&code=" + params.apiinfo.oa.oauth_verifier + "&" + querystring.stringify(globaljson.oa.step2parameters);
            };

            var oa = new OAuth2(globaljson.oa.key1,
                globaljson.oa.key2,
                globaljson.oa.accessurl || "",
                globaljson.oa.requesttokenurl,
                globaljson.oa.oauthurl,
                null)

            console.log(globaljson);

            //In a standard oauth flow after the user allows access.A code is returned by the api providers which is then used to make another request which brings an access token, then the token is used to make final api endpoint requests needed for various operations.

            oa.getOAuthAccessToken(params.apiinfo.oa.oauth_verifier, globaljson.oa.step2parameters, function(a, access_token, refresh_token, results) { //this function from oauth lib makes a request with the code (params.apiinfo.oa.oauth_verifier) and step2parameter passed by the client.Returns access token.

                console.log('token', access_token, refresh_token, results);

                // store the access token in the globaljson
                globaljson.oa.oauth_access_token = access_token || "";
                globaljson.oa.oauth_access_token_secret = refresh_token || "";

                utils.saveinput(globaljson.oa, function(e, r) {
                    console.log("r from utils", r);
                    console.log("globaljson before entering into protected:", globaljson);
                    oauth2finalcallwithaccesstoken(oa, globaljson.oa.oauth_access_token, cb);
                });





            })



        } else {
            //this block handles the step2 for the oauth 1.0 flow.
            if (typeof(params && params.apiinfo && params.apiinfo.oa && params.apiinfo.oa.oauth_verifier) === "undefined") {
                globaljson = params['apiinfo']; //In case of direct calls for the apis without oauth.
            }



            if ((typeof(globaljson && globaljson['oa'] && globaljson['oa']['oauth_verifier']) !== "undefined") && (globaljson['oa']['oauth_verifier'])) {
                //if oauth_verifier exists,implies that its an oauth 1.0 call.
                var oafromsession = globaljson['oa']['oaobject'];
                //UtilsService.mergeJSON(globaljson, params['apiinfo']);



                console.log('oafromsession', oafromsession);
                console.log('globlajson', globaljson);
                var oa = new OAuth(oafromsession._requestUrl,
                    oafromsession._accessUrl,
                    oafromsession._consumerKey,
                    oafromsession._consumerSecret,
                    oafromsession._version,
                    oafromsession._authorize_callback,
                    oafromsession._signatureMethod,
                    null, ((globaljson && globaljson.oa && globaljson.oa.headers) || null));

                globaljson.oa.oauth_verifier = params.apiinfo.oa.oauth_verifier; //oauth_verifier is set in the globaljson.

                //When the user authorizes the app, the oauth_token,oauth_token_secret and the verifer returned by the api provider is passed to the getOAuthAccessToken method of oauth library.This returns the oauth access token which will then be used to make the final calls to the api endpoint depending upon the intended operation.

                oa.getOAuthAccessToken(
                    globaljson['oa'].oauth_token,
                    globaljson['oa'].oauth_token_secret,
                    params.apiinfo.oa.oauth_verifier, //req.param('oauth_verifier')
                    function(error, oauth_access_token, oauth_access_token_secret, results2) {

                        if (error) {
                            console.log('error');
                            console.log(error);
                        } else {

                            // store the access token in the globaljson
                            globaljson.oa.oauth_access_token = oauth_access_token;
                            globaljson.oa.oauth_access_token_secret = oauth_access_token_secret;


                            var url = globaljson['oa'].oauth_verifier_url + oauth_access_token;

                            utils.saveinput(globaljson.oa, function(e, r) {
                                console.log("r from utils", r);
                                console.log("globaljson before entering into protected:", globaljson);
                                oauth1finalcallwithaccesstoken(oa, cb);
                            });






                        }
                    });

            }

        };
    };

    function oauth1finalcallwithaccesstoken(oa, cb) {

        //Below are the final calls based on the http method and the api endpoint urls.

        var data = [];
        if (globaljson.oa.finalurlmethod === "GET" || globaljson.oa.finalurlmethod === "DELETE") {
            var httpmethod = "";
            if (globaljson.oa.finalurlmethod === "GET") {
                httpmethod = "get";
            } else if (globaljson.oa.finalurlmethod === "DELETE") {
                httpmethod = "delete";

            }
            //call to the oauth lib based on the httpmethod.
            oa[httpmethod](globaljson.oa.finalurl,
                globaljson.oa.oauth_access_token,
                globaljson.oa.oauth_access_token_secret,
                function(error, d, response) {

                    data = d;
                    cb(error, data);

                })
        } else if (globaljson.oa.finalurlmethod === "POST" || globaljson.oa.finalurlmethod === "PUT") {
            var httpmethod = "";
            if (globaljson.oa.finalurlmethod === "POST") {
                httpmethod = "post";
            } else if (globaljson.oa.finalurlmethod === "PUT") {
                httpmethod = "put";

            }
            console.log('oa', oa);
            if (globaljson && globaljson.oa && globaljson.oa.finalurldatastringify && globaljson.oa.finalurldatastringify === "true") { //Some apis expect the data to be sent as query parameter even in the post request.Therefore the finalurldata object is stringified here if finalurldatastringify is set to true.
                globaljson.oa.finalurldata = JSON.stringify(globaljson.oa.finalurldata);
            }
            //call to the oauth lib based on the httpmethod.
            oa[httpmethod](globaljson.oa.finalurl,
                globaljson.oa.oauth_access_token,
                globaljson.oa.oauth_access_token_secret,
                globaljson.oa.finalurldata,
                globaljson.oa.finalurlcontenttype,
                function(error, d, response) {

                    data = d;
                    cb(error, data);

                })
        }


    };

    function oauth2finalcallwithaccesstoken(oa, access_token, cb) {

        if (globaljson.oa.finalurlmethod === "GET") { //final request if the method for the final request is get.

            if (globaljson.oa.finalurldata) {

                globaljson.oa.finalurl += "?" + querystring.stringify(globaljson.oa.finalurldata);
            };
            oa.get(globaljson.oa.finalurl, access_token, function(nullarg, result, response) { //function belongs to oauth.auth2 lib,works for the get type of request.Arguments passed are url for the final request the access_token fetched and a callback.

                console.log(result);

                cb({}, result);
            });

        } else if (globaljson.oa.finalurlmethod === "POST") { //final request if the method for the final request is post.

            var finalrequestparams = globaljson.oa.finalurldata || {}; //data to be sent along the final post request.

            finalrequestparams['access_token'] = access_token; //access_token also set in the finalrequestparams.

            //below is a superagent request for the final request to the intended api endpoint.
            superagent.post(globaljson.oa.finalurl + "?" + querystring.stringify(finalrequestparams))
                .send("")
                .end(function(err, response) {
                    cb(err, response.text);
                })

        } else if (globaljson.oa.finalurlmethod === "PUT") { //final request if the method for the final request is post.

            var finalrequestparams = globaljson.oa.finalurldata || {}; //data to be sent along the final post request.
            var finalrequestbody = globaljson.oa.finalrequestbody || "";
            console.log("finalrequestparams", finalrequestparams, finalrequestbody);
            finalrequestparams['access_token'] = access_token; //access_token also set in the finalrequestparams.
            var contentlength = finalrequestbody.length || 0;
            globaljson.oa.finalrequestheaders['Content-Length'] = contentlength;
            //below is a superagent request for the final request to the intended api endpoint.
            console.log('finalrequestheaders', globaljson.oa.finalrequestheaders);
            superagent.put(globaljson.oa.finalurl + "?" + querystring.stringify(finalrequestparams))
                .set(globaljson.oa.finalrequestheaders || {})
                .send(finalrequestbody)
                .end(function(err, response) {
                    console.log("err", err, "res", response.text);
                    cb(err, response.text);
                })

        };

    };

    function callnonoauthapis(params, cb) {


        //This else block caters to apis which are basically non-oauth.Direct calls are made to the api endpoints based upon the data passed in the params i.e url,data,headers.
        /* if (globaljson.oa && globaljson.oa.finalurldata &&  globaljson.oa.finalurl) {
             console.log('non-oauth block', params.apiinfo);
             params.apiinfo.oa.finalurl = preparerequest(params.apiinfo.oa.finalurldata);

         } else {
             console.log('finalurl', globaljson.oa.finalurl);
             params.apiinfo.oa.finalurl = globaljson.oa.finalurl.replace(/&amp;/g, '&'); // TODO :: FIND A BETTER WAY TO DECODE SUCH ENTITIES

         }*/




        if (globaljson.oa.finalurlmethod === "GET") {
            var requrl = globaljson.oa.finalurl;

            if (globaljson.oa.finalurldata) {


                if (requrl.indexOf("?") > -1) {

                    requrl += "&" + querystring.stringify(globaljson.oa.finalurldata);

                } else {
                    requrl += "?" + querystring.stringify(globaljson.oa.finalurldata);
                }
            }

            if (globaljson.oa.keyname) {
                if (requrl.indexOf("?") > -1) {

                    requrl += "&" + globaljson.oa.keyname + "=" + globaljson.oa.key1;

                } else {
                    requrl += "?" + globaljson.oa.keyname + "=" + globaljson.oa.key1;
                }

            }

            superagent.get(requrl)
                .set(globaljson.oa.headers || {})
                .end(function(err, response) {
                    console.log("non oauth get:", response.text);

                    cb(err, response.text);
                });

        } else if (globaljson.oa.finalurlmethod === "POST") {
            console.log('globaljson.oa:', globaljson.oa);

            if (globaljson.oa.keyname && globaljson.oa.addkeytodata === "true") {

                globaljson.oa.finalurldata[globaljson.oa.keyname] = globaljson.oa.key1;


            };

           // globaljson.oa.finalurl += "?" + querystring.stringify(globaljson.oa.finalurldata);

            superagent(globaljson.oa.finalurlmethod, globaljson.oa.finalurl)
                //superagent(globaljson.oa.finalurlmethod, "http://requestb.in/otolpyot")
                .set(globaljson.oa.headers || {})
                .send(globaljson.oa.finalurldata)
                .auth(globaljson.oa && globaljson.oa.auth && globaljson.oa.auth.u || '', globaljson.oa.auth && globaljson.oa.auth && globaljson.oa.auth.p || '') // TODO :: handle this as per the APIINFO object layter
                .end(function(err, response) {

                    cb(err, response.text);
                });

        } else {

            console.log('globaljson.oa:', globaljson.oa);
            superagent(globaljson.oa.finalurlmethod, globaljson.oa.finalurl)
                .send(globaljson.oa.finalurldata)
                .auth(globaljson.oa && globaljson.oa.auth && globaljson.oa.auth.u || '', globaljson.oa.auth && globaljson.oa.auth && globaljson.oa.auth.p || '') // TODO :: handle this as per the APIINFO object layter
                .end(function(err, response) {

                    cb(err, response.text);
                });
        }
    }



    return {
        step1: step1,
        step2: step2
    };

};

module.exports = OneApiService;
