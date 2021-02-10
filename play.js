const { on } = require("events");
const net = require("net");

/*
Establishes connection with the game server
*/

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });
  // Interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", function (data) {
    console.log(`Message: ${data}`);
  });

  return conn;
};

console.log("Connecting...");
connect();
