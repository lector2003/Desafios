//importar librerias
const { urlencoded } = require("express")
const express = require("express")
const htpp = require("http")
const {initWs}= require("./socket")
const path = require("path")
const mainRouter = require("../rutas/index")
const { rmSync } = require("fs")


//configuracion basica
const app = express()
const server = htpp.Server(app)

//configarion express
app.use(express.json())
app.use(urlencoded({extended:true}))

//definir ruta de public
const rutaPublic = path.resolve(__dirname, "../../public")
//app.use(express.static(rutaPublic))
app.use(express.static("public"))
app.use("/api", mainRouter)

// renderizar vista index.ejs
mainRouter.get("/inicio", (req, res)=>{
    res.render("index")
})

//configuracion ejs
const rutaViews = path.resolve(__dirname, "../../views")
app.set("view engine", "ejs")
app.set("views", rutaViews)





//iniciar server de Secket.io
initWs(server)

module.exports= server