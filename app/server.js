var connect = require('connect');
connect.createServer(
connect.static(__dirname)
	).listen(3000);

// var http = require("http"),
//     server;

// server = http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hello World!\n");
// });

// server.listen(3000);

// console.log("Server running on port 3000");
