const express = require("express");
const hbs = require("hbs"); // handlebreaks

var app = express(); // can configure later

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public")); // to render HTML from a absolute path


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
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log("Server is up on port", 3000);
});