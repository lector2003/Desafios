//importar librerias
import express, { urlencoded } from "express"
import passport from "passport"
import session from "express-session"
import path from "path"

//importar las opcciones de session
import {StoreOpcion} from "./session"

//importar funciones de login y signup
import { loginFuc, signupFuc } from "./auth"

//importar ruta principal
import { mainRoute } from "../routes"

//crear server
const app = express()

//configuracion express
app.use(express.json())
app.use(urlencoded({extended:true}))

//configuracion de las sesiones
app.use(session(StoreOpcion))
app.use(passport.initialize())
app.use(passport.session())

//configuracion para las funciones de login y signup
passport.use("login",loginFuc)
passport.use("signup",signupFuc)

const viewPath = path.resolve(__dirname,"../../views")
app.use(express.static("public"))
 app.set("view engine", "ejs")
app.set("views", viewPath)

app.use("/api", mainRoute)

//exportar app
export default app