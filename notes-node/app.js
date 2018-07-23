const fs = require('fs');
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");

console.log(_.isString("Andrew"));

var filteredArray = _.uniq(["andrew","andrew",1,2,3,3,4]);
console.log(filteredArray);

var user = os.userInfo();

var res = notes.addNote();

var sum = notes.add(10,10);

fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');