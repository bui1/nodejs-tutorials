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

    socket.emit("newMessage", {
        from: "from@example.com",
        text: "Example email",
        createAt: 123
    });

    socket.on("createEmail", (newEmail) => {
        console.log("createEmail", newEmail);
    });

    socket.on("disconnect", () => {
        console.log("User was disconnected");
    });
});


server.listen(port, () => {
    console.log("Server is up on port ", port);
});

