var fs = require("fs");
var renderer = require("./renderer"); //렌더러를 만든 후


function home(req, res) {
    // if(req.url == "/") {
    //     fs.readFile("./layout/home.html", function(err, data) {
    //         res.write(data);
    //         res.end();
    //     });
    // }
    if (req.url == "/") {
        return renderer(req, res, "home", {});
    }
}

function contact(req, res) {
    if (req.url == "/contact") {
        return renderer(req, res, "contact", {});
    }
}


function detail(req, res) {
    var detailId = req.url.replace("/", "");
    if (detailId.length > 0) {
        res.write(detailId);
        res.end();
    }
}

module.exports.home = home;
module.exports.contact = contact;
module.exports.detail = detail;
