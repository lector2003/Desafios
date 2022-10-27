//importar librerias
const {Router} = require("express")
const {getWsServer, initWs} = require("../services/socket")
const fs = require("fs")
const path = require("path")

const rutaProductos = Router()

 //definir ruta del json
const ruta = path.resolve(__dirname, "../../productos.json")

//logica recibir productos
const init = () =>{
    initWs(rutaProductos)

    const ioServer = getWsServer()

ioServer.on("dataProduct", async(data)=>{
 await fs.promises.writeFile(ruta, JSON.parse(data))
})
}





module.exports = rutaProductos

