//importar librerias
import { v4 as uuidv4 } from 'uuid';

//importar modelo de productos
import modelProducts from '../models/products.js'

//importar loggs
//import logger from '../services/loggers.js';

//mostrar todos los productos
export const getAll = async()=>{
    try {
        //traer productos de la base de datos
        const products = await modelProducts.find()
        //const user=req.user
        return products
        

//res.render("products",{products,user})
    } catch (error) {
       // logger.error(error)
    }
}

//mostrar producto por id
export const getAllById = async(id)=>{
    try {
  
        //sacar id de req.params
        //const {id}=req.params

        //producto segun su id
        const product = await modelProducts.findById(id)

       
        //res.json({product})
        return product

    } catch (error) {
       // logger.error(error)
    }
}

//borrar producto segun su id
export const deleteById = async(id)=>{
    try {
        //sacar id de req.params
        //const {id}=req.params


        await modelProducts.findByIdAndDelete(id)

        return
        //res.send({msg:`Producto con id ${id} eliminado`})
    } catch (error) {
        //logger.error(error)
    }
}

//guardar producto a labase de datos
export const save= async(prod)=>{
    try {
        //traer los parametros del body
       // const {name,description,price,image,stock}=req.body

          //crear producto
        //   const product={
        //     name,
        //     description,
        //     code:uuidv4(),
        //     price,
        //     stock,
        //     image
        //   }

          //guardar producto
     const document =      await modelProducts.create(prod)

        //   res.send({
        //     msg:"Producto creado",
        //     product
        //   })
        return document



    } catch (error) {
        //logger.error(error)
    }
}

