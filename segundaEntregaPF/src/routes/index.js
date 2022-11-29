//importar librerias
import { Router } from "express";

//importar rutas
import productRoute from "./products";
import cartRoute from "./cart";

const mainRoute = Router()

mainRoute.use("/products", productRoute)
mainRoute.use("/cart", cartRoute)

export default mainRoute