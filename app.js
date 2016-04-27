var http = require("http");
var url = require("url");
var querystring = require("querystring");

function go(route, handle) {
	function onRequest(request, response) {
		var text = querystring.parse(request.body);
		console.log("Received data : " + text + " | " + text.text + " | " + request.body.text + " | " + request.body.user_name);
		var pathname = url.parse(request.url).pathname;

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

	http.createServer(onRequest).listen(process.env.PORT);
	console.log("Server has started!");
}

exports.start = go;

//process.env.PORT

