//importar librerias
const socket = require("socket.io");
const server = require("./server");


//logica para exportar e iniciar la conexion WS
let io;

const initWs = (server)=>{
    io = socket(server)

    io.on("connection", (socket)=>{

    })
    return io
}

const getWsServer = ()=>{
    return io
}

module.exports={
    initWs,
    getWsServer
}