//importar librerias
import { Router } from "express";

//importar funciones del controller
import { getAll} from "../controllers/products";

//importar  middleware
import { isLogged } from "../middlewares/session";

//determinar ruta de productos
export const productsRoute = Router()

//renderizar productos
productsRoute.get("/",isLogged, getAll)

//guardar productos
//productsRoute.post("/",checkBody, save)

