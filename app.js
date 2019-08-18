const express = require("express");
const app = express();
// app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");

app.get("/", function(req, res) {   
   res.render("index");
});


app.listen(8081 || process.env.PORT,  "127.0.0.1" || process.env.IP, function() {
   console.log("Express server is running...");
});