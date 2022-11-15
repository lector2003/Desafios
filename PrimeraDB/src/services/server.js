//importar librerias
import express, { urlencoded } from "express"
import http from "http"
import { initWs } from "./socket";
import path from "path";
import { mainRoute } from "../routes";

//levantar servidor
const app = express()
const server = http.Server(app)

//configuracion express
app.use(urlencoded({extended:true}));
app.use(express.json())

//definir carpeta public
app.use(express.static("public"))
//controlador de rutas
app.use("/api", mainRoute)


//configuracion ejs
const rutaViews = path.resolve(__dirname, "../../views")
app.set("view engine", "ejs")
app.set("views", rutaViews)



initWs(server)
//exportar app
export default server