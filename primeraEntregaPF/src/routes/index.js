//importar Router de express
import { Router } from "express";

//importar ruta secundarias
import  routeProducts  from "./products";
import routeCart from "./cart";

//exportar ruta principal que maneja las secundarias
 const routePrincipal = Router()

//manejar con la ruta principal, las rutas secundarias
routePrincipal.use("/products", routeProducts)
routePrincipal.use("/cart", routeCart)

export default routePrincipal

