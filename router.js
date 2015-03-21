var express = require('express');
var router = express.Router();
var OneApiService = require('./OneApiService')();
/* GET home page. */
router.get('/', function(req, res) {

    res.render('apiscreen.html');
});



router.put('/fyler', function(req, resp) {
    var params = req.body;
    console.log(params);
    var inputparams = {
        "apiinfo": params['commands'][0]['apiinfo']
    }
    var what = params['commands'][0]['what']; //what service to call.
    var handler = params['commands'][0]['handler']; //which handler to call
    var whatmodule = require('./' + what)(); //first requires the whatmodule.
    whatmodule[handler](inputparams, function(err, res) { //the call handler function of whatmodule
        resp.json(res);
    });


});

module.exports = router;
