var http = require("http");
var url = require("url");
var querystring = require("querystring");


function go(route, handle) {
	function onRequest(request, response) {


		var text = querystring.parse(request.body);
		//		console.log("Received data : " + text + " | " + text.text + " | " + request.body.text + " | " + request.body.user_name);
		var pathname = url.parse(request.url).pathname;

		var fs = require("fs");
		if (request.url.indexOf('mycss.css') != -1) { //req.url has the pathname, check if it conatins '.css'

			fs.readFile('./web/style/mycss.css', function (err, data) {
				if (err) console.log(err);
				response.writeHead(200, { 'Content-Type': 'text/css' });
				response.write(data);
				response.end();
			});
		}
		
		if (request.url.indexOf('myscript.js') != -1) { //req.url has the pathname, check if it conatins '.css'

			fs.readFile('./web/js/myscript.js', function (err, data) {
				if (err) console.log(err);
				response.writeHead(200);
				response.write(data);
				response.end();
			});
		}
		
		else {
			/*
					var POST_DATA = [];
					request.on('data', function (data) {
						POST_DATA += data;
			
					});
					request.on('end', function () {
						var QueryString = require('querystring').parse(POST_DATA);
					});
			*/
			route(handle, pathname, response);
		}
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started!");
}

exports.start = go;

//process.env.PORT

