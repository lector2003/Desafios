const {Router} = require("express")
const rutaProductos = require('./productos')

const rutaPrincipal = Router()

rutaPrincipal.use("/productos", rutaProductos)



module.exports = rutaPrincipal