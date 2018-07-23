console.log("starting app.js");
const fs = require('fs');
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");
const yargs = require("yargs");

// console.log(_.isString("Andrew"));

// var filteredArray = _.uniq(["mike","andrew",1,2,3,3,4]);
// console.log(filteredArray);

// var user = os.userInfo();

// var res = notes.addNote();

// var sum = notes.add(10,10);

// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');
var argv = yargs.argv;
var command = process.argv[2];
console.log(`Command: ${command}`);

console.log(yargs.argv);

if (command === "add"){
    console.log("Adding new note");
    notes.addNote(argv.title, argv.body);
    // TO RUN THIS: node app.js add --title=secret --body="This is my secret"
}
else if (command === "read"){
    console.log("reading a note");
    notes.getNote(argv.title);
}
else if (command === "remove"){
    console.log("Removing a note");
    notes.removeNote(argv.title);
}
else if (command === "list"){
    console.log("listing all notes");
    notes.getAll();
}
else{
    console.log("Not recognized");
}