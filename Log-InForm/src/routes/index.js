//importar libreriras
import { Router } from "express";

//importar rutas
import routeSessions from "./sessions";

//determinar ruta principal
export const mainRoute = Router()

//manejar rutas con la ruta principal
mainRoute.use("/", routeSessions)

