console.log("starting notes.js");

// module.exports.age = 25;

// module.exports.addNote = () => {
//     console.log("add new notes");
//     return "new notes";
// };

// module.exports.add = (a,b) => {
//     return a+b;
// };

var addNote = (title, body) => {
    console.log("Adding note", title, body);
};

var getAll= () =>{
    console.log("Getting all notes");
};

var getNote = (title) => {
    console.log("Getting title", title);
}

var removeNote = (title) => {
    console.log("Removing note: ", title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};