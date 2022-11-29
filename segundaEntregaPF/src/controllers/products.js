//importar librerias
import { v4 as uuidv4 } from 'uuid';

//importar modelo de productos
import ModelProducts from '../models/products';

//mostrar todos los productos
export const getAllProducts = async(req,res)=>{
    try {
        //poner todos los productos en una constante
        const products = await ModelProducts.find()

        //validacion
        if(products.length==0){
            return res.status(404).send({
                msg:"No hay productos"
            })
        }
        //respuesta del servidor
        res.send({
            data:products
        })
    } catch (error) {
        console.log(error)
    }
}

//mostrar producto por id
export const getAllProductById = async(req,res)=>{
    try {
        //traer el id por params
        const {id}= req.params

        //traer producto por su id
        const product = await ModelProducts.findById(id)

        //respuesta del servidor
        res.send({
            product
        })
    } catch (error) {
        console.log(error)
    }
}

//borrar producto por su id
export const deleteProduct=async(req,res)=>{
    try {
        //traer id por params
        const {id}= req.params

        //borrar producto
        await ModelProducts.findByIdAndDelete(id)

        //respuesta del servidor
        res.send({
            msg:`Producto con id ${id} borrado`
        })
    } catch (error) {
        console.log(error)
    }
}

//crear producto
export const createProduct = async(req,res)=>{
    try {
        //capturar los datos del cliente
        const {name,description,price,stock,image,}= req.body

        //crear producto
        const product = {
            name,
            description,
            price,
            stock,
            image,
            code:uuidv4()
        }

        //guardar producto
        await ModelProducts.create(product)

        //respuesta del servidor
        res.send({
            msg:"Producto creado",
            product
        })

    } catch (error) {
        console.log(error)
    }
}

//modificar producto
export const updateProduct = async(req,res)=>{
    try {
        //traer id por params
        const {id}= req.params

        //traer el producto modificado del cliente
        const {name,description,price,stock,image}=req.body

        //modificar producto
         await ModelProducts.findByIdAndUpdate(id,{name,price,stock,description,image},{new:true})

         //respuesta del servidor
         res.send({
            msg:`Producto con id ${id} modificado`
         })
    } catch (error) {
        console.log(error)
    }
}

