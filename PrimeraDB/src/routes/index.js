//import libreriras
import { Router } from "express";
import { clientProduct } from "../controller/products";

//importar ruta productos
import { routeProduct } from "./products";

//crear ruta principal
export const mainRoute = Router()

//renderizar vista index
mainRoute.get("/inicio", (req,res)=>{
    res.render("index")
})


mainRoute.use("/inicio", routeProduct)