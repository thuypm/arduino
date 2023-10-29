const io = require("socket.io");

const startSockerServer = (httpServer) => {
  const instance = io(httpServer);
  instance.on("connection", (socket) => {
    // socket.emit("send-data", "string");
    socket.broadcast.emit("hello", "world");
  });
};
module.exports = {
  startSockerServer,
};
