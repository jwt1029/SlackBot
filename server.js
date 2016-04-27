var server = require("./app");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/calc"] = requestHandlers.calc;
handle["/hantemp"] = requestHandlers.hantemp;

server.start(router.route, handle);