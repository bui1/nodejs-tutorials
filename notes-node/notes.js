console.log("starting notes.js");

module.exports.age = 25;

module.exports.addNote = () => {
    console.log("add new notes");
    return "new notes";
};

module.exports.add = (a,b) => {
    return a+b;
};