//importar librerias
import express, { urlencoded } from "express"
import passport from "passport"
import session from "express-session"
import path from "path"

//importar ruta priincipal
import { mainRoute } from "../routes"

//importar opciones de session
import { StoreOpcion } from "./session"

//importar funciones de login y signup
import {loginFuc, signupFuc} from "./auth"

//crear server
const app = express()

//configuracion general
app.use(express.json())
app.use(urlencoded({extended:true}))

//configuracion de las sesiones
app.use(session(StoreOpcion))
app.use(passport.initialize())
app.use(passport.session())

//configuracion para las funciones de log y sig
passport.use("login",loginFuc)
passport.use("signup",signupFuc)

//configuracion de ejs
const viewPath = path.resolve(__dirname, "../../views")
 app.use(express.static("public"))
 app.set("view engine", "ejs")
app.set("views", viewPath)

//manejar las rutas
app.use("/api",mainRoute)

//exportar server
export default app