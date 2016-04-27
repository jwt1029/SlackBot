var http = require("http");
var url = require("url");
var querystring = require("querystring");

function go(route, handle) {
	function onRequest(request, response) {
		var text = querystring.parse(request.body);
		console.log("Received data : " + text.toString() + " | " + text.text);
		var pathname = url.parse(request.url).pathname;
		
		route(handle, pathname, response);
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has started!");
}

exports.start = go;

//process.env.PORT