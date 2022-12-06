//importar librerias
import express, { urlencoded } from "express"
import http from "http"
import { initWs } from "./socket"
import path from "path"

//importar ruta de mocks
import { routeMocks } from "../mocks"
import { mainRoute } from "../routes"

//creacion del server
const app = express()
const server = http.Server(app)

//config express
app.use(express.json())
app.use(urlencoded({extended:true}))

//definir carpeta public
app.use(express.static("public"))

//definir manejador de todas las rutas
app.use("/api", routeMocks)
app.use("/api", mainRoute)

//config ejs
const rutaViews = path.resolve(__dirname, "../../views")
app.set("view engine", "ejs")
app.set("views", rutaViews)

//inciar server socket
initWs(server)

//exportar server
export default server