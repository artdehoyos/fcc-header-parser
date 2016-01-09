var express = require("express");

var app = express();
var port = process.env.PORT || 8080;


app.get("/", function(req, res){
    console.log(req.headers);
    
    var data = {
        ipaddress: req.headers["x-forwarded-for"],
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\([\s\S]+?\)/)[0].slice(1, -1)
    };
    
    res.json(data);
    res.end();
    
})

app.listen(port, function(){
    console.log("App listening on " + port + ".");
})