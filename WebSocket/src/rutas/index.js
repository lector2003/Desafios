//importar librerias
const {Router} = require("express")
const rutaProductos = require("./productos")
const {getWsServer, initWs} = require("../services/socket")
const fs = require("fs/promises")
const path = require("path")
const socket = require("socket.io");

//ruta json productos
const rutaProduc = path.resolve(__dirname, "../../products.json")

const mainRouter = Router()
// renderizar vista index.ejs
mainRouter.get("/inicio", (req, res)=>{
    res.render("index")
})










module.exports = mainRouter