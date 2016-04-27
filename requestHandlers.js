var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called");
    
    exec("dir", function(error, stdout, stderr) {
        response.writeHead(200, {"Content-Type" : "text/plain; charset=euckr"});
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("Request handler 'upload' was called");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello Upload");
    response.end();
}

function admin(response) {
    console.log("You don't have permission!");
}

function calc(response) {
    console.log("Someone tried calc!");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("1 + 1 = 2!");
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.admin = admin;
exports.calc = calc;