// 1. Working with Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// 2. Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// 3. CAH Online
// https://github.com/ajanata/PretendYoureXyzzy
// 4. Comet Programming
// https://en.wikipedia.org/wiki/Comet_%28programming%29
// 5. Socket.io Deployment
// http://book.mixu.net/node/ch13.html
// 6. Method "Overloading" aka "Adaptable Functions" in JavaScript
// http://stackoverflow.com/questions/10855908/how-to-overload-functions-in-javascript
// 7. BDD
// https://en.wikipedia.org/wiki/Behavior-driven_development
// 8. Node Modules
// https://nodejs.org/api/modules.html#modules_modules
// 9. Chai BDD Api
// http://chaijs.com/api/bdd/
// 10. Mocha
// http://mochajs.org/
var path = require('path');
var express = require('express');
var http = require('http').Server();
var io = require('socket.io')(http);
var app = express();

// set an environmental variable named port with the app port
app.set('port', (process.env.PORT || 3000));

// mount the static middleware at the path '/' to serve files from /public
app.use('/', express.static(path.join(__dirname, 'public')));

// emit chat messages
io.on('connection', function(socket){
  console.log('user connected at ' + new Date());
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// cards listen on port 3000
app.listen(app.get('port'), function() {
  console.log('App started on port: ' + app.get('port'));
});

// chat listens on port 1337
http.listen('1337', function() {
  console.log('Http started on port: ' + '1337');
});
