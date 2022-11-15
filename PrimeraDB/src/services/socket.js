//importar librerias
import socket from "socket.io"
import { clientProduct } from "../controller/products"
import {clientChat} from "../controller/menssage"
import format from "../utils/formatMsg"


//logica para importar e iniciar conexion WS
let io

export const initWs = (server)=>{
    io = socket(server)

    io.on("connection", async(socket)=>{

        //crear tabla
        await clientProduct.createTable()

        //leer base de datos
       const data = await clientProduct.getAll()
    
       //enviar productos al cliente
       socket.emit("productos", data)

        //recibir data del cliente
        socket.on("data", async(data)=>{
            await clientProduct.save(data)
        })

        //crear tabla chat
        await clientChat.createTable()
        //mandar infro del tabla del chat
        const chat = await clientChat.getAllMenssage()
        socket.emit("mensaje", chat)

        //recibir data del mensaje
        socket.on("chatMensaje", async(data)=>{
            await clientChat.saveMenssage(format(data.user, data.menssage))
        })
    })
    return io
}

export const getWsServer = ()=>{
    return io
}



