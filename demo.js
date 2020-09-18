var http = require('http');
var dt = require('./demoModule');
var starPattern = require('./starPatternModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write("\n");
  res.write("Star Pattern: " + starPattern.starPattern());
  res.end();
}).listen(8080);