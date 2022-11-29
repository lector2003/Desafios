//importar librerias
import { Router } from "express";

//importar controller
import { createCart, deleteCart, deletePorductCart, getAllCartProducts, saveProductsCart } from "../controllers/cart";
import {checkProduct, checkProductBody} from "../middlewares/products"

//crear ruta del carrito
const cartRoute = Router()

//crear carrito
cartRoute.post("/", createCart)

//borrar carrito
cartRoute.delete("/:id", deleteCart)

//ver prodcutos del carrito
cartRoute.get("/:id/products", getAllCartProducts)

cartRoute.post("/:id/products", checkProductBody,saveProductsCart)

cartRoute.delete("/:id/products/:id_prod", deletePorductCart)

//638550bf3fb857fbd995c3aa
//6384c1c10df52e942727dc4f`


export default cartRoute