//importar librerias
import { Router } from "express";

//importar funciones del controller
import { buyProducts,deletePorductCart, getAllCartProducts, saveProductsCart } from "../controllers/cart";
import { checkBody } from "../middlewares/products";

//importar middleware
import { isLogged } from "../middlewares/session";

//declarar ruta del carrito
export const cartRoute = Router()

//renderizar productos dentro del carrito
cartRoute.get("/:id",isLogged,getAllCartProducts)

//guardar productos en el carrito
cartRoute.post("/:id/:id_product",isLogged,saveProductsCart)

//comprar productos
cartRoute.post("/:id",isLogged,buyProducts)

//borrar productos del carrito
cartRoute.post("/:id/products/:id_prod",isLogged,deletePorductCart)
