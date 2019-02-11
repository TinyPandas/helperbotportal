var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
	if (req.url === "/") {
		fs.readFile("./index.html", "UTF-8", function (err, html) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
		});
	} else if(req.url.match("\.css$")) {
		var cssPath = path.join(__dirname, '', req.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		res.writeHead(200, {"Content-Type": "text/css"});
		fileStream.pipe(res);
	} else {
		fs.readFile("." + req.url, "UTF-8", function (err, html) {
			if (err) {
				res.writeHead(404, {"Content-Type": "text/html"});
				res.end("No Page Found");
			} else {
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end(html);
			}
		});
	}
}).listen(80);