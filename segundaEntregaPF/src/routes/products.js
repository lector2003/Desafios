//importar librerias
import { Router } from "express";

//importar controladores
import { getAllProductById,
     getAllProducts,
      deleteProduct,
      createProduct,
      updateProduct
     } from "../controllers/products";

     //importar middleware
     import { checkBody, checkProduct } from "../middlewares/products";

     //crear ruta de productos
     const productRoute = Router()

     //mostrar productos
     productRoute.get("/", getAllProducts)

     //mostrar producto por id
     productRoute.get("/:id",checkProduct, getAllProductById)

     //borrar producto
     productRoute.delete("/:id",checkProduct, deleteProduct)

     //crear producto
     productRoute.post("/",checkBody, createProduct)

     //modificar producto
     productRoute.put("/:id",checkBody,checkProduct, updateProduct)

     export default productRoute