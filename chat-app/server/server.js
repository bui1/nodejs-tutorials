const path = require("path");
const http = require("http");
const express  = require("express");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
let app = express();
const publicPath = path.join(__dirname, "../public");

var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("createMessage", (message) => {
        // socket is for us only. io is for all connections
        console.log("createMessage", message);
        io.emit("newMessage", {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
    });

    socket.on("disconnect", () => {
        console.log("User was disconnected");
    });
});


server.listen(port, () => {
    console.log("Server is up on port ", port);
});

