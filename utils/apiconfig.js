module.exports = {
    "TWITTER": {
        "GETUSERINFO": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/users/show.json?screen_name=<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "GETHOMETIMELINE": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/statuses/home_timeline.json",
            "finalurlmethod": "GET"
        },
        "GETUSERTIMELINE": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/statuses/user_timeline.json",
            "finalurlmethod": "GET"
        },
        "FRIENDS": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/friends/list.json?screen_name=<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "FOLLOWERS": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/followers/list.json?screen_name=<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "POSTTWEET": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/statuses/update.json",
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        },
        "DELETETWEET": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/statuses/destroy/<%= finalurlvariables%>.json",
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        },
        "DIRECTMESSAGE": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/direct_messages/new.json",
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        },
        "PLACETRENDSEARCH": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/trends/place.json?id=<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "RETWEET": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/statuses/retweet/<%= finalurlvariables%>.json",
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        },
        "TRENDSEARCH": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/search/tweets.json?q=<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "TWEETIMAGE": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.twitter.com/1.1/statuses/update.json",
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        },
        "UPLOADIMAGE": {
            "oauth1": "true",
            "oauthurl": "https://api.twitter.com/oauth/access_token",
            "requesttokenurl": "https://api.twitter.com/oauth/request_token",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://api.twitter.com/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://upload.twitter.com/1.1/media/upload.json",
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        }
    },
    "FACEBOOK": {
        "COMMENTONPOST": {
            "oauth2": "true",
            "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
            "oauthurl": "https://graph.facebook.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://graph.facebook.com/v2.2/<%= finalurlvariables%>/comments",
            "finalurlmethod": "POST"
        },
        "DELETEPOST": {
            "oauth2": "true",
            "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
            "oauthurl": "https://graph.facebook.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://graph.facebook.com/<%= finalurlvariables%>",
            "finalurlmethod": "POST",
            "finalurldata": {
                "method": "delete"
            }
        },
        "GETFEED": {
            "oauth2": "true",
            "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
            "oauthurl": "https://graph.facebook.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://graph.facebook.com/me/home",
            "finalurlmethod": "GET"
        },
        "GETUSERINFO": {
            "oauth2": "true",
            "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
            "oauthurl": "https://graph.facebook.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://graph.facebook.com/<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "LIKEPOST": {
            "oauth2": "true",
            "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
            "oauthurl": "https://graph.facebook.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://graph.facebook.com/v2.2/<%= finalurlvariables%>/likes",
            "finalurlmethod": "POST",
            "finalurldata": {}
        },
        "POST": {
            "oauth2": "true",
            "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
            "oauthurl": "https://graph.facebook.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://graph.facebook.com/me/feed",
            "finalurlmethod": "POST"
        },
        "POSTIMAGE": {
            "oauth2": "true",
            "requesttokenurl": "https://www.facebook.com/v2.2/dialog/oauth",
            "oauthurl": "https://graph.facebook.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://graph.facebook.com/v2.2/me/photos",
            "finalurlmethod": "POST"
        }

    },
    "LINKEDIN": {
        "COMMENTONPOST": {
            "oauth1": "true",
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.linkedin.com/v1/people/~/network/updates/key=<%= finalurlvariables%>/update-comments?format=json",
            "finalurldatastringify": "true",
            "headers": {
                "Content-Type": "application/json",
                "x-li-format": "json"
            },
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        },
        "GETFEED": {
            "oauth1": "true",
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authorize?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "http://api.linkedin.com/v1/people/~/network/updates?format=json",
            "finalurlmethod": "GET"
        },
        "GETUSERINFO": {
            "oauth1": "true",
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authorize?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.linkedin.com/v1/people/~?format=json",
            "finalurlmethod": "GET"
        },
        "LIKEPOST": {
            "oauth1": "true",
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authenticate?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.linkedin.com/v1/people/~/network/updates/key=<%= finalurlvariables%>/is-liked?format=json",
            "finalurldata": "true",
            "finalurldatastringify": "true",
            "headers": {
                "Content-Type": "application/json",
                "x-li-format": "json"
            },
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "PUT"
        },
        "MESSAGEUSERS": {
            "oauth1": "true",
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authorize?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.linkedin.com/v1/people/~/mailbox",
            "finalurlcontenttype": "application/json",
            "finalurldatastringify": "true",
            "finalurlmethod": "POST",
            "headers": {
                "Content-Type": "application/json",
                "x-li-format": "json"
            }
        },
        "POST": {
            "oauth1": "true",
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authorize?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.linkedin.com/v1/people/~/shares?format=json",
            "finalurldatastringify": "true",
            "headers": {
                "Content-Type": "application/json",
                "x-li-format": "json"
            },
            "finalurlcontenttype": "application/json",
            "finalurlmethod": "POST"
        },
        "SEARCHUSERS": {
            "oauth1": "true",
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authorize?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurlvariables": "https://api.linkedin.com/v1/people-search?<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "USERCONNECTIONS": {
            "oauthurl": "https://api.linkedin.com/uas/oauth/accessToken",
            "requesttokenurl": "https://api.linkedin.com/uas/oauth/requestToken",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier_url": "https://www.linkedin.com/uas/oauth/authorize?oauth_token=",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.linkedin.com/v1/people/~/connections?format=json",
            "finalurlmethod": "GET",
        }
    },
    "DROPBOX": {
        "DELETE": {
            "oauth2": "true",
            "oauthurl": "https://api.dropbox.com/1/oauth2/token",
            "requesttokenurl": "https://www.dropbox.com/1/oauth2/authorize",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "finalurl": "https://api.dropbox.com/1/fileops/delete",
            "finalurlmethod": "POST"
        },
        "GETFILE": {
            "oauth2": "true",
            "oauthurl": "https://api.dropbox.com/1/oauth2/token",
            "requesttokenurl": "https://www.dropbox.com/1/oauth2/authorize",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "finalurl": "https://api-content.dropbox.com/1/files/auto/<%= finalurlvariables%>",
            "finalurldata": {},
            "finalurlmethod": "GET"
        },
        "INFO": {
            "oauth2": "true",
            "oauthurl": "https://api.dropbox.com/1/oauth2/token",
            "requesttokenurl": "https://www.dropbox.com/1/oauth2/authorize",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "finalurl": "https://api.dropbox.com/1/account/info",
            "finalurlmethod": "GET"
        },
        "METADATA": {
            "oauth2": "true",
            "oauthurl": "https://api.dropbox.com/1/oauth2/token",
            "requesttokenurl": "https://www.dropbox.com/1/oauth2/authorize",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "finalurldata": {},
            "finalurlmethod": "POST"
        },
        "PUTFILE": {
            "oauth2": "true",
            "oauthurl": "https://api.dropbox.com/1/oauth2/token",
            "requesttokenurl": "https://www.dropbox.com/1/oauth2/authorize",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "finalurl": "https://api-content.dropbox.com/1/files_put/auto/",
            "finalurldata": {
                "param": "val"
            },

            "finalrequestheaders": {
                "Content-Type": "text/plain"
            },
            "finalurlmethod": "PUT"
        },
        "SEARCH": {
            "oauth2": "true",
            "oauthurl": "https://api.dropbox.com/1/oauth2/token",
            "requesttokenurl": "https://www.dropbox.com/1/oauth2/authorize",
            "version": "1.0",
            "encoding": "HMAC-SHA1",
            "finalurl": "https://api.dropbox.com/1/search/auto/",
            "finalurlmethod": "POST"
        }
    },
    "SMARTERER": {
        "USERINFO": {
            "oauth2": "true",
            "requesttokenurl": "https://smarterer.com/oauth/authorize",
            "oauthurl": "https://smarterer.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://smarterer.com/api/users/<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "GETBADGES": {
            "oauth2": "true",
            "requesttokenurl": "https://smarterer.com/oauth/authorize",
            "oauthurl": "https://smarterer.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://smarterer.com/api/badges/<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "SEARCHTESTS": {
            "oauth2": "true",
            "requesttokenurl": "https://smarterer.com/oauth/authorize",
            "oauthurl": "https://smarterer.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://smarterer.com/api/search/tests?q=<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        },
        "TESTDESCRIPTION": {
            "oauth2": "true",
            "requesttokenurl": "https://smarterer.com/oauth/authorize",
            "oauthurl": "https://smarterer.com/oauth/access_token",
            "version": "2.0",
            "encoding": "HMAC-SHA1",
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://smarterer.com/api/tests/<%= finalurlvariables%>",
            "finalurlmethod": "GET"
        }
    },
    "CRUNCHBASE": {
        "SEARCHORGANIZATIONS": {
            "finalurl": "https://api.crunchbase.com/v/2/organizations",
            "finalurlmethod": "GET",
            "keyname": "user_key"
        },
        "ORGANIZATIONINFO": {
            "finalurl": "https://api.crunchbase.com/v/2/organization/<%= finalurlvariables%>",
            "finalurlmethod": "GET",
            "keyname": "user_key"
        }
    },
    "ANGELLIST": {
        "USERINFO": {
            "oauth2": "true",
            "requesttokenurl": "https://angel.co/api/oauth/authorize",
            "oauthurl": "https://angel.co/api/oauth/token",
            "version": "2.0",
            "parameters": {
                "response_type": "code"
            },
            "encoding": "HMAC-SHA1",
            "step2parameters": {
                "grant_type": "authorization_code"
            },
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.angel.co/1/me",
            "finalurlmethod": "GET"
        },
        "GETJOBS": {
            "oauth2": "true",
            "requesttokenurl": "https://angel.co/api/oauth/authorize",
            "oauthurl": "https://angel.co/api/oauth/token",
            "version": "2.0",
            "parameters": {
                "response_type": "code"
            },
            "encoding": "HMAC-SHA1",
            "step2parameters": {
                "grant_type": "authorization_code"
            },
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.angel.co/1/jobs",
            "finalurlmethod": "GET"
        },
        "SEARCH": {
            "oauth2": "true",
            "requesttokenurl": "https://angel.co/api/oauth/authorize",
            "oauthurl": "https://angel.co/api/oauth/token",
            "version": "2.0",
            "parameters": {
                "response_type": "code"
            },
            "encoding": "HMAC-SHA1",
            "step2parameters": {
                "grant_type": "authorization_code"
            },
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.angel.co/1/search",
            "finalurlmethod": "GET"
        },
        "GETCOMMENTS": {
            "oauth2": "true",
            "requesttokenurl": "https://angel.co/api/oauth/authorize",
            "oauthurl": "https://angel.co/api/oauth/token",
            "version": "2.0",
            "parameters": {
                "response_type": "code"
            },
            "encoding": "HMAC-SHA1",
            "step2parameters": {
                "grant_type": "authorization_code"
            },
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": "https://api.angel.co/1/comments",
            "finalurlmethod": "GET"
        },
        "GETPROFILE": {
            "oauth2": "true",
            "requesttokenurl": "https://angel.co/api/oauth/authorize",
            "oauthurl": "https://angel.co/api/oauth/token",
            "version": "2.0",
            "parameters": {
                "response_type": "code"
            },
            "encoding": "HMAC-SHA1",
            "step2parameters": {
                "grant_type": "authorization_code"
            },
            "oauth_verifier": "<%= oauth_verifier %>",
            "finalurl": " https://api.angel.co/1/users/<%= id%>",
            "finalurlmethod": "GET"
        }
    },

    "MANDRILL": {
        "SENDMAIL": {
            "keyname": "key",
            "finalurlmethod": "POST",
            "finalurl": "https://mandrillapp.com/api/1.0/messages/send.json",
            "addkeytodata": "true"
        }
    },
    "FLICKR": {
        "SEARCHPHOTOS": {
            "keyname": "api_key",
            "finalurlmethod": "GET",
            "finalurl": "https://api.flickr.com/services/rest?method=flickr.photos.search&format=json"
        }

    },
    "WIKIPEDIA": {
        "GETCONTENT": {
            "finalurlmethod": "GET",
            "finalurl": "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content"
        }
    },
    "TWILIO": {
        "SENDMESSAGE": {
            "finalurlmethod": "POST",
            "finalurl": "https://api.twilio.com/2010-04-01/Accounts/<%=key1%>/Messages.json",
            "auth": {
                "u": "<%=key1%>",
                "p": "<%=key2%>"
            },
            "headers":{
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
            }

        }
    },
    "YOUTUBE": {
        "SEARCHVIDEOS": {
            "finalurlmethod": "GET",
            "keyname": "key",
            "finalurl": "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet",
        }
    },
    "GOOGLEPLACES": {
        "SEARCHPLACES": {
            "finalurlmethod": "GET",
            "keyname": "key",
            "finalurl": "https://maps.googleapis.com/maps/api/place/textsearch/json"
        }
    }
}
