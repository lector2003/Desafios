//importar librerias
import socket from "socket.io"

//importar modelo de usuarios
import {modelUserMenssage} from "../models/userMenssage"
//crear conexion
let io
export const  initWs = (server)=>{

     io = socket(server)

    io.on("connection", async(socket)=>{
        console.log("Conectado al socket")

        //enviar mensajes
        const menssages = await modelUserMenssage.find()

        socket.emit("mensajes", menssages)

        //recibir mensajes
        socket.on("data",async(data)=>{
            console.log("se mando")
           // console.log(data)
            await modelUserMenssage.create(data)
        })

       
    })
    return io
}