//importar librerias
import {Router} from "express"
import { cartRoute } from "./cart"
import { productsRoute } from "./products"

export const mainRoute = Router()

mainRoute.use("/products", productsRoute)

mainRoute.use("/cart", cartRoute)

