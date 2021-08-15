var express = require('express');
var router = express.Router();
let { PythonShell } = require('python-shell');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'dyzphoria_bot API' });
});


// RETURN TWEET
router.get('/tweet', callreturn_tweet);

function callreturn_tweet(req, res) {
  console.log(
    req.query.index
  )
  const index = req.query.index
  if (!index) {
    res.send('No Params found! Endpoint requires an index param');
    return
  }
  var options = {
    args:
      [
        req.query.index
      ]
  }
  // Wrap in condition later to gate which script gets run if no params are passed
    PythonShell.run('./scripts/return_tweet.py', options, function (err, data) {
      if (err) res.send(err);
      res.send(data.toString())
    });
 

}

module.exports = router;
