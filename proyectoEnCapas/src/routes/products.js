//importar librerias
import { Router } from "express";

export const productsRoute = Router()

//importar funciones
import { saveController,getAllController,deleteByIdController,getAllByIdController } from "../controllers/products";

productsRoute.get("/",getAllController)

productsRoute.get("/:id",getAllByIdController)

productsRoute.post("/", saveController)

productsRoute.delete("/:id", deleteByIdController)