//importar librerias
const socket = require("socket.io");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const formato = require("../utils/formatoMsg")

//ruta json prodcutos
const rutaProduct = path.resolve(__dirname, "../../products.json");
//ruta json mensajes
const RutaMsg = path.resolve(__dirname, "../../mensajes.json")
console.log(RutaMsg)

//logica para exportar e iniciar la conexion WS
let io;

const initWs = (server) => {
  io = socket(server);

  io.on("connection", async(socket) => {
    console.log("se conecto")
   
    
  
    //Leer el json
    const data = await fs.promises.readFile(rutaProduct, "utf-8")
    const dataParse = JSON.parse(data)

    //mandar al usuario los datos del json
    socket.emit("dataProductos",dataParse )

    //recibir del usuario, el producto
    socket.on("data", async(data)=>{
      
      data["id"] = uuidv4()
      dataParse.push(data)

      //Guarda los productos enviados en el json
      await fs.promises.writeFile(rutaProduct, JSON.stringify(dataParse, null, "\t"))

    })
    

    //mandar info json msg al user
    const dataMsg = await fs.promises.readFile(RutaMsg, "utf-8")
    const dataMsgParse = JSON.parse(dataMsg)
    socket.emit("mensaje", dataMsgParse)

    //recibir mensaje del usurario y guarsarlo en el json
    socket.on("chatMensaje", async(data)=>{
      dataMsgParse.push(formato(data.User, data.Msg))
      await fs.promises.writeFile(RutaMsg, JSON.stringify(dataMsgParse, null, "\t"))
    })
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
