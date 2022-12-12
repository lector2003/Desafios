//importar librerias
import { Router } from "express";

//importar controller
import { login,loged,logOut, viewLogin, viewLogOut } from "../controller/sessions";

//importar middleware
import { validateLogin } from "../middleware/sessionss";

//definir ruta de las sesiones
const routeSessions= Router()

//iniciar sesion
routeSessions.post("/login", login)

//renderizar vista de login
routeSessions.get("/login", viewLogin)

//renderizar la sesion
routeSessions.get("/loged",validateLogin, loged)

//cerrar sesion
routeSessions.post("/logOut",validateLogin, logOut)


export default routeSessions