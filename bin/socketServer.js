const io = require("socket.io");
const { SerialPort } = require("serialport");

const startSockerServer = (httpServer) => {
  const instance = io(httpServer);

  // const arduinoSerialPort = new SerialPort({
  //   path: process.env.COM_NAME || "COM6",
  //   baudRate: Number(process.env.COM_BAURATE) || 9600,
  // });
  // arduinoSerialPort.on("open", function () {
  //   console.log("Serial Port " + arduinoCOMPort + " is opened.");
  //   arduinoSerialPort.on("data", (data) => {
  //     console.log(data.toString());
  //   });
  // });

  setInterval(() => {
    const str = "fire:" + (Math.round(Math.random() * 1000) % 100);
    const extractValue = str.split(":");
    if (extractValue.length === 2) {
      instance.emit("new-data", {
        [extractValue[0]]: Number(extractValue[1]),
      });
    }
  }, 1000);

  //   instance.on("connection", (socket) => {
  //     // socket.emit("send-data", "string");
  //     socket.broadcast.emit("signal", "world");
  //   });
};
module.exports = {
  startSockerServer,
};
