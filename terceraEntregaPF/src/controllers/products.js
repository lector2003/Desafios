//importar librerias
import { v4 as uuidv4 } from 'uuid';

//importar modelo de productos
import modelProducts from '../models/products.js'

//importar loggs
import logger from '../services/loggers.js';

//mostrar todos los productos
export const getAll = async(req,res)=>{
    try {
        //traer productos de la base de datos
        const products = await modelProducts.find()
        const user=req.user
        

res.render("products",{products,user})
    } catch (error) {
        logger.error(error)
    }
}

//mostrar producto por id
export const getAllById = async(req,res)=>{
    try {
  
        //sacar id de req.params
        const {id}=req.params

        //producto segun su id
        const product = await modelProducts.findById(id)

       
        res.json({product})

    } catch (error) {
        logger.error(error)
    }
}

//borrar producto segun su id
export const deleteById = async(req,res)=>{
    try {
        //sacar id de req.params
        const {id}=req.params


        await modelProducts.findByIdAndDelete(id)

        res.send({msg:`Producto con id ${id} eliminado`})
    } catch (error) {
        logger.error(error)
    }
}

//guardar producto a labase de datos
export const save= async(req,res)=>{
    try {
        //traer los parametros del body
        const {name,description,price,image,stock}=req.body

          //crear producto
          const product={
            name,
            description,
            code:uuidv4(),
            price,
            stock,
            image
          }

          //guardar producto
          await modelProducts.create(product)

          res.send({
            msg:"Producto creado",
            product
          })




    } catch (error) {
        logger.error(error)
    }
}

//modificar producto
export const update=async(req,res)=>{
    try {
        //traer id del producto
        const {id}=req.params

        //traer producto modificado del cliente
        const {name,stock,price,image,description}=req.body

        //modificar producto
        await modelProducts.findByIdAndUpdate(id,{name,stock,price,image,description},{new:true})

        res.send({msg:`Productos con id ${id} modificado`})


    } catch (error) {
        logger.error(error)
    }
}

//