var https = require('https');

console.log('I did it!');

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function() {
  console.log("in response handler callback!");

}

console.log("i'm about to make the request!");

https.request(options, callback).end();
console.log("I've made the request!");

