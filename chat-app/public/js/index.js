
var socket = io();  
socket.on("connect", function() {
    console.log("Connected to server");

    socket.emit("createEmail", {
        to: "give@ex.com",
        text: "Some text here"
    });
}); 

socket.on("disconnect", function() {
    console.log("Disconnected from server");
});

socket.on("newEmail", function(email){
    console.log("New Email", email);
});

socket.on("newMessage", function(message) {
    console.log("New messsage", message);
});