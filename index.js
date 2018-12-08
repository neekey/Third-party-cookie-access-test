var static = require('node-static');
var http = require('http');

var firstPartyFile = new static.Server('./first_party', { cache: 0 });
var thirdPartyFile = new static.Server('./third_party', { cache: 0 });
var firstPartyPort = 8000;
var thirdPartyPort = 8001;

http.createServer(function (request, response) {
    request.addListener('end', function () {
        firstPartyFile.serve(request, response);
    }).resume();
}).listen(firstPartyPort, function() {
    console.log('First party server is now listening on port ' + firstPartyPort);
});


http.createServer(function (request, response) {
    request.addListener('end', function () {
        thirdPartyFile.serve(request, response);
    }).resume();
}).listen(thirdPartyPort, function() {
    console.log('Third party server is now listening on port ' + thirdPartyPort);
});