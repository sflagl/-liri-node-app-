
console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
// var Spotify = require('node-spotify-api');
// var Twitter = require('twitter');

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


// var Twitter = require('twitter');

// var client = new Twitter({
//   consumer_key: 'GAFeWnEvSPdtjDxYtdHEJmrhY',
//   consumer_secret: 'twXH4Mbv9gJBnDFm92z1bWep3ocPf4CwuoNYFUPpOJW2VOBzgW',
//   access_token_key: '964346940719845377-iuljZ96mtfwhYBiz2ZO9a7gH891I40q',
//   access_token_secret: 'cAHD7CwFkG3pTErAbGe709OnCHuvWVkfMFEcpS6i3qCfh'
// });

// client.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });


// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
// });


// spotify
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });


// console.log('this is loaded');

// exports.twitter = {
//   consumer_key: process.env.GAFeWnEvSPdtjDxYtdHEJmrhY,
//   consumer_secret: process.env.twXH4Mbv9gJBnDFm92z1bWep3ocPf4CwuoNYFUPpOJW2VOBzgW,
//   access_token_key: process.env.964346940719845377-iuljZ96mtfwhYBiz2ZO9a7gH891I40q,
//   access_token_secret: process.env.cAHD7CwFkG3pTErAbGe709OnCHuvWVkfMFEcpS6i3qCfh
// };


// exports.spotify = {
//   id: process.env.e9737a461d5f4dcebe8e6bc75ca9f265,
//   secret: process.env.a2ba81b66a8a40828c2a711da6d69438
// };


 
