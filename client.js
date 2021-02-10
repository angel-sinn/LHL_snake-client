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

  conn.on("data", (data) => {
    console.log(`Message: ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: SKY");
    //   conn.write("Move: down");
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 1000);
    // setInterval(() => {
    //   conn.write("Move: down");
    // }, 1000);
  });

  return conn;
};

module.exports = {
  connect,
};
