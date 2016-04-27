var http = require("http");
var url = require("url");

function go(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for <" + pathname + "> received!");
		
		route(handle, pathname, response);
	}
	
	http.createServer(onRequest).listen(process.env.PORT);
	console.log("Server has started!");
}

exports.start = go;

//process.env.PORT