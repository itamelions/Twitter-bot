var twit = require("twit");
var express = require("express");
var app = express();
var Twitter = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

var myArray = [
  "maitama",
  "maitama extension",
  "katampe",
  "jabi lake",
  "jabi mall",
  "AbujaTwitterCommunity",
  "garki",
  "asokoro",
  "gwarimpa",
  "gwagwalada",
  "lokogoma",
  "lugbe",
  "guzape",
  "gwags",
];

var randomQuery = myArray[Math.floor(Math.random()*myArray.length)];

// app.all("/tweet", function (request, response) {
var retweet = function() {
  //     var search_terms = process.env.SEARCH_TERMS.split(',');
  // var search_terms = process.env.SEARCH_TERMS.split(',');
  //   // console.log('search_terms', search_terms);
  //   if (Object.prototype.toString.call( search_terms ) === '[object Array]' && search_terms.length > 1){
  //     search_terms = search_terms.join(' OR ');
  //   }
  var params = {
    q: randomQuery, // Hashtags to search tweets within    
    // q: process.env.SEARCH_TERMS, // Hashtags to search tweets within
    // result_type: 'mixed',
    // since:'2020-02-02',
    // until: '2020-02-07',
    // count: 15,
    // since_id: 10,
    // max_id: '13',
    lang: "en"
  };
  // twitter.get('"https://api.twitter.com/1.1/search/tweets.json"')
  console.log(randomQuery);
  Twitter.get("search/tweets", params, function(err, data) {
    if (!err) {
      for (let i = 0; i < data.statuses.length; i++) {
        var retweetId = data.statuses[i].id_str;
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId
          },
          function(err, response) {
            if (response) {
              console.log('Retweeted '+retweetId+'!!!');
              // console.log(response);
            }
            if (err) {
              // console.log(err);
              console.log("Problem when retweeting. Possibly already retweeted this tweet!");
            }
          }
        );
      }
    } else {
      console.log("Error during tweet search call");
    }
  });
};

retweet();
// });

// app.all("/tweet", function (request, response) {
// retweet();
// });
