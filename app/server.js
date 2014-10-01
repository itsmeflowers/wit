var connect = require ("connect")
var http = require ("http")
var site = connect() 

.use(connect.static(__dirname))
.use(connect.directory);

http.createServer(site).listen(3000);

// var http = require("http"),
//     server;

// server = http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hello World!\n");
// });

// server.listen(3000);

// console.log("Server running on port 3000");
