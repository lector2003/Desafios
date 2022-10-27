//importar librerias
const {Router} = require("express")
const rutaProductos = require("./productos")

const mainRouter = Router()

mainRouter.use("/", rutaProductos)






module.exports = mainRouter