//importar librerias
import { Router } from "express";
import { clientProduct } from "../controller/products";

//crear ruta de productos
export const routeProduct = Router()

//borrar prodcuto
routeProduct.delete("/:id", async(req, res)=>{
    const id = req.params.id
     const data = await clientProduct.getAll()

     const ind = data.findIndex(product => product.id == id)

     //validacion
      if(ind<0 || ind> data.length){
        return res.status(400).json({
             msg:"Prosucto no encontrado"
         })
      }

      await clientProduct.deleted(id)

 res.send({
    msg:`Producto con id ${id} borrado`
 })
    
})

//modificar producto
routeProduct.put("/:id", async(req, res)=>{
    const id = req.params.id;

    

    const data = await clientProduct.getAll()

    const ind = data.findIndex(product => product.id == id)

    //validacion
     if(ind<0 || ind> data.length){
       return res.status(400).json({
            msg:"Prosucto no encontrado"
        })
     }


    //crear formato del producto
    const { name,  image, price } = req.body;

    //validacion de campos
    if (!name || !image || !price) {
      return res.status(401).json({
        error: "Campos invalidos",
      });
    }

    if (!isNaN(name) || !isNaN(image)) {
      return res.status(401).json({
        error: "Campos invalidos",
      });
    }

    if (isNaN(price)) {
    return  res.status(401).json({
        error: "Campos invalidos",
      });
    }

    //modificar campos
    const newProduct = {
      name,
      image,
      price,
      id: data[ind].id,
    };


    await clientProduct.updatePrice(id, newProduct)
    res.send({
        msg:`Producto con id ${id} modificado`
    })

})



