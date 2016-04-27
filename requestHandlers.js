var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called");

    exec("dir", function (error, stdout, stderr) {
        response.writeHead(200, { "Content-Type": "text/plain; charset=euckr" });
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("Request handler 'upload' was called");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

function admin(response) {
    console.log("You don't have permission!");
}

function calc(response) {
    console.log("Someone tried calc!");

    var jsonData = JSON.stringify({
        "response_type": "in_channel",
        "text": "New Help Ticket Received:",
        "attachments": [
            {
                "title": "App hangs on reboot",
                "title_link": "http://domain.com/ticket/123456",
                "text": "If I restart my computer without quitting your app, it stops the reboot sequence.\nhttp://domain.com/ticket/123456",
            }
        ]
    });
    response.writeHead(200, { "Content-Type": "application/json" });

    response.write(jsonData);
    response.end();
}

function hantemp(response) {
    var req = require("request");
    console.log("Hello Han!");

    req("http://hangang.dkserver.wo.tc/", function (err, res, body) {
        datas = JSON.parse(body);
        console.log("Hangang's temperature is : " + datas.temp);
        var jsonData = JSON.stringify({
            "response_type": "in_channel",
            "text": "HanGang's temperature is : " + datas.temp + " 'C"
        });
        response.writeHead(200, { "Content-Type": "application/json" });

        response.write(jsonData);
        response.end();
    });

}

exports.start = start;
exports.upload = upload;
exports.admin = admin;
exports.calc = calc;
exports.hantemp = hantemp;