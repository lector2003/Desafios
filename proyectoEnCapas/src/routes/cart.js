//importar librerias
import { Router } from "express";

export const cartRoute= Router()

//importar funciones
import { createCartController,
    deleteCartController,
    saveProductsCartController
    ,deletePorductCartController,
    getAllCartProductsController } from "../controllers/cart";

    cartRoute.get("/:id", getAllCartProductsController)

    cartRoute.post("/", createCartController)

    cartRoute.post("/:idCart/:idProd", saveProductsCartController)

    cartRoute.delete("/:id", deleteCartController)

    cartRoute.delete("/:idCart/:idProd", deletePorductCartController)