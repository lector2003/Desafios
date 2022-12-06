//importar librerias
import { Router } from "express";

//importar rutas
import { routeProductsMock } from "./products";

//crear ruta que maneje los mocks
export const routeMocks = Router()

//establecer manejador de rutas
routeMocks.use("/products-test", routeProductsMock)



