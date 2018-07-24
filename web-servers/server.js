const express = require("express");
const hbs = require("hbs"); // handlebreaks
const fs = require("fs");

var app = express(); // can configure later

hbs.registerPartials(__dirname + "/views/partials");

app.use((req, res, next) => {//  register middleware
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);

    fs.appendFile("server.log", log + "\n", (err) => {
        if (err){
            console.log("Unable to append to server.log file");
        }
    });
    next();
});

// app.use((req,res,next) => {
//     res.render("maintenence.hbs");
// });

hbs.registerHelper("getCurrentYear", () => {
    new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text) => {
    return text.toUpperCase();
});

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public")); //  register middleware


// Home page with request and response
app.get("/", (req,res) => { 
    // res.send("<h1>Hello Express</h1>");
    // res.send({
    //     name: "TEst name",
    // });
    res.render("home.hbs", {
        pageTitle: "Home page",
        welcomeMessage: "Welcome to the website"
    });
});

app.get('/about', (req,res) => {
    //res.send("About page");
    res.render("about.hbs", {
        pageTitle: "About page",
    });
});

app.listen(3000, () => {
    console.log("Server is up on port", 3000);
});