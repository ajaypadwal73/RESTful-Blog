const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
require("dotenv").config();
require("./databaseConfig").connect();



// mongoose.connect(process.env.DATABASE ,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});


// APP CONFIG
//mongoose.connect("mongodb://localhost:27017/restful_blog_app",{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});

//ROUTES
const blogRoutes = require("./routes/blog");

//MIDDLEWARE CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


//ROUTING
app.get("/", function(req, res){
    res.redirect("/blog/blogs"); 
 });
app.use("/blog", blogRoutes);

//PORT Config
port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log("SERVER IS RUNNING!");
})
