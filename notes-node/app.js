const fs = require('fs');
const os = require("os");
const notes = require("./notes.js");

var user = os.userInfo();

var res = notes.addNote();

var sum = notes.add(10,10);

fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');