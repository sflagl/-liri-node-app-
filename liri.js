
require("dotenv").config();
var fs = require("fs");

//Requiring my NPM Packages

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

// Importing Twitter and Spotify keys
var keys = require("./keys");

// Twitter Section ----------------------------------------------------------
var getTweets = function() {
    var client = new Twitter(keys.twitter);
  
    var params = {
      screen_name: "samGT18"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
      if (!error) {
        for (var i = 0; i < tweets.length; i++) {
          console.log(tweets[i].created_at);
          console.log("");
          console.log(tweets[i].text);
        }
      }
    });
  };

// Spotify Section ----------------------------------------------------------

var ArtistNames = function(artist) {
    return artist.name;

    var artists = artist.name;

    for (var i = 0; i < artist.length; i++) {
        console.log(artist);
    }

    artists.forEach((artist, index) => {
        console.log(artist);
      });
  };
  

var spotify = new Spotify(keys.spotify);

var findSongOnSpotify = function(songNameNotFound) {
  if (songNameNotFound === undefined) {
    songNameNotFound = "That song name was not found";
  }

  spotify.search(
    {
      type: "track",
      query: songNameNotFound
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log("artist(s): " + songs[i].artists.map(ArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};


// Movie Section ----------------------------------------------------------


var getMovie = function(movieName) {
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }

  var url = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=6c4af503";

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);

      // console.log(jsonData);

      console.log("---------------------------------------------------");
      console.log("Title: " + jsonData.Title + " | " + "Year: " + jsonData.Year + " | " + "Rated: " + jsonData.Rated);
      console.log("---------------------------------------------------");
      console.log("IMDB Rating: " + jsonData.imdbRating + " | " + " Country: " + jsonData.Country + " | " + " Language: " + jsonData.Language);
      console.log("---------------------------------------------------");
      console.log("Plot: " + jsonData.Plot);
      console.log("---------------------------------------------------");
      console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[0].Value + " | " + "Actors: " + jsonData.Actors);
      console.log("---------------------------------------------------");
    }
  });
};

// Function for running a command based on text file
var testFile= function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    // console.log(data);

    var dataArr = data.split(" | ");

    if (dataArr.length === 2) {
      pick(dataArr[0], dataArr[1]);
    }
    else if (dataArr.length === 1) {
      pick(dataArr[0]);
    }
  });
};

// Function for determining which command is executed
var searchCriteria = function(keywords, data) {

  var keywords = process.argv[2];

    if(keywords === "movie-this"){
        getMovie(data);
   
    } else if(keywords === "my-tweets"){
        getTweets();
 
    } else if(keywords === "spotify-this-song"){
        findSongOnSpotify(data);

    } else if(keywords === "do-what-it-says"){
        testFile();

    } else{
        console.log("LIRI does not have that ");   
    }
};


var search = function(argOne, argTwo) {
  searchCriteria(argOne, argTwo);
};

search(process.argv[2], process.argv[3]);



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
