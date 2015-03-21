
### ONE-API

The project is a simplistic way to ineract with any api and aims to frame a uniform structure to consume apis provided by various api providers.Apis like social media platforms use authentication standards like oauth 1.0 and 2.0 for authorizing application on user's behalf.Others just authenticate the app and respond.



This project has a dependency on the node-oauth library, which can be installed by:

npm install oauth.


ABOUT THE STRUCTURE:

```javascript

{
    "commands": [{
        "what": "OneApiService",
        "handler": "step1",
        "apiinfo": {
            "oa": {
                "oauth2": "true",
                "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
                "oauthurl": "https://graph.facebook.com/oauth/access_token",
                "key1": "xxxxxxxxxxxxxxx",
                "key2": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "version": "2.0",
                "callbackurl": "http://localhost:3000/",
                "encoding": "HMAC-SHA1",
                "oauth_verifier": "<%= oauth_verifier %>",
                "finalurl": "https://graph.facebook.com/v2.2/100007404526207_1567930226797113/comments",
                "finalurlmethod": "POST",
                "finalurldata": {
                    "message": "this is a test comment"
                },
                "parameters": {
                    "redirect_uri": "http://localhost:3000/",
                    "scope": "publish_actions" //for more than one permissions comma separated permission names  can can be passed against scope.
                }
            }
        }
    }]
}
```

**The put method on /fyler route in router.js handles the abovementioned structure.It expect a json.**

Inside that an array set against commands key. 

what : Value for what is which service to call.Here, we have only OneApiService as of now.

handler : Which function to call of what service.

apinfo : Object which is passed to the handler as arguments.

oa: The required object for processing oauth calls.



Information contained in the oa object:

requesttokenurl : This url is the first url where an app makes a request along with the app key and secret key
 to the oauth api provider which fetches an oauth token.

oauth_verifier_url : oauth token is appended to the oauth_verifier_url and sent back to the client which takes the user of the app to the authorization page. 

callbackurl: When a user authorizes the app,the api provider redirects the app to the url set in the callbackurl along with an oauth verifier.

key1 : This is identification key of the app given by the api provider when the app is registered.It is generally called app id or app key.

key2: This is  secret identification key of the app given by the api provider when the app is registered.It is generally called secret key.

encoding: Type of encoding.

version: Version of the api given by the api provider.

finalurl: This is the url of the intended api endpoint.

finalurlmethod: Http method for the finalurl.

finalurldata: Data posted at the api endpoint.Usually required in post requests.This is an object.

finalcontenttype: Content-Type sent along with the post with the final request.

headers: If some api endpoint requires some headers, those can be passed in an object against this key.

oauth2: If string true is set against this key, api request will be treated as following oauth2 flow.

parameters: An object which contains parameters used to send along the first request for getting the oauth_verifier.


#### Running the project:

Clone the project.

Run the command npm run devstart.

Hit http://localhost:3000/ in the browser.

Choose an api and then choose the operation and press Shoot.This starts the process for the chosen api operation.

Refresh button reloads the page.







