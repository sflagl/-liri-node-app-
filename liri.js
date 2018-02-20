
var Twitter = require('twitter');

var key = require('./key'); // this is where my twitter secret codes are

// console.log(config);

var twitterObject = new Twitter(key);

var params = {
      q: 'samGT18', 
      count: 10
    }

twitterObject.get('search/tweets', params,
  getTweets);  // search for tweets

function getTweets(error, tweets, response) {
  var tweets = tweets.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text + " | " + tweets[i].created_at);
  }
  
};






// require("dotenv").config();

// var request = require('request');
// request('http://www.omdbapi.com/?i=tt3896198&apikey=6c4af503', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


// The line below makes the contents of keys.js accessible in liri.js

// var keys = require('./key.js');


// console.log(key);

// adding twitter and spotify to file

// var Twitter = require('twitter');

// import package, module, library

// var Spotify = require('node-spotify-api');

// var request = require('request');

// var request = require('fs'); 

// fs - file system



// var spotify = new Spotify({
//   id: 'e9737a461d5f4dcebe8e6bc75ca9f265',
//   secret: 'a2ba81b66a8a40828c2a711da6d69438'
// });


// spotify.search(
// 	{ type: artistOrAlbumName, 
// 	  query: songTitle 
// 	}, 
// 	function(err, data) {
// 	    if ( err ) {
// 	        console.log('Error occurred: ' + err);
// 	        return;
//     }
 	
//  	console.log(spotify.search()

// });

// lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)

// search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)

// get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/ 


