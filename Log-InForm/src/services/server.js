//importar libreriras
import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import path from "path"

//importar ruta principal
import { mainRoute } from "../routes"

//importar configuracion de sesiones
import { StoreOptions } from "./sessions"

//iniciar server
const app = express()


//configuracion del server general
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(session(StoreOptions))

//configuracion de ejs
const viewPath = path.resolve(__dirname, "../../views")
 app.use(express.static("public"))
 app.set("view engine", "ejs")
app.set("views", viewPath)

//manejar la rutas
app.use("/api", mainRoute)


//exportar el server
export default app