require("dotenv").config();

var request = require("request");
var fs = require("fs");

var keys = require('./keys')
console.log(keys);

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

console.log(spotify);

// var Twitter = require('twitter');
// var client = new Twitter(keys.twitter);

// // var params = {
// //     q: '@samGT18',
// //     count: 10
   
// }

// function results(error, data, response) {
//     var tweets = data.statuses;
//     for (var i = 0; i < tweets.length; i++){
//         console.log(tweets[i].text);
//     }
   
//  };

// client.get('users/search', params, results);

// spotify.search({ type: '', query: '' }, function(err, data) {
//     if (err) 
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });

//   spotify.search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
