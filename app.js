var http = require("http");
var router = require("./router");


//http Status(200): OK, send response "hello world"
var app = http.createServer(function(req, res) {
    console.log(req.url);

    router.home(req, res);
    router.contact(req, res);
    router.detail(req, res);
});

app.listen(3030, function (){
  console.log("Server is running at localhost:3030");
});

