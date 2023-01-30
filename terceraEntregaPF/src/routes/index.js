//importar librerias
import {Router} from "express"

//importarrutas secundarias
import { sessionRoute } from "./session"


//declarar la ruta principal
export const mainRoute = Router()

//ruta de sessiones
mainRoute.use("/",sessionRoute)