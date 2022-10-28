//importar librerias
const socket = require("socket.io");
const server = require("./server");
const fs = require("fs");
const path = require("path");

//ruta json
const rutaProduct = path.resolve(__dirname, "../../products.json");

//logica para exportar e iniciar la conexion WS
let io;



const initWs = (server) => {
  io = socket(server);

  io.on("connection", (socket) => {
    socket.on("data", async (data) => {

   
      const array = await fs.promises.readFile(rutaProduct, "utf-8")
      const dataParse = JSON.parse(array)
      dataParse.push(data)
      await fs.promises.writeFile(rutaProduct, JSON.stringify(dataParse, null, "\t"))
    });
  });
  return io;
};

const getWsServer = () => {
  return io;
};

module.exports = {
  initWs,
  getWsServer,
};
