//importar librerias
const {Router} = require("express")
const {getWsServer, initWs} = require("../services/socket")
const fs = require("fs")
const path = require("path")

const rutaProductos = Router()

 //definir ruta del json
const ruta = path.resolve(__dirname, "../../productos.json")

//logica recibir productos





module.exports = rutaProductos

