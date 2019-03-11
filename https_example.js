var https = require('https');
console.log('I did it!');

var options =
{
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var callback = function(response)
{
  console.log("in response handler callback!");
  response.on('data', function(chunk)
  {
    console.log("[-- CHUNK OF LENGTH " + chunk.length + " --]");
    console.log(chunk.toString());

  });

}

console.log("i'm about to make the request!");

https.request(options, callback).end();
console.log("I've made the request!");

