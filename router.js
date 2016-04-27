function route(handle, pathname, response) {
    console.log("About tp route a request for " + pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response);
    }
    else {
        console.log("Undefined request handler for " + pathname);
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;