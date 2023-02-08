//impotar funciones 
import { saveProduct, deleteProduct, getAllProductById,getAllProducts } from "../services/products";

export const saveController=async(req,res)=>{
    try {
        const {body}= req

        await saveProduct(body)
        res.json({msg:"Producto agregado"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteByIdController = async(req,res)=>{
    try {
        const id = req.params.id

        await deleteProduct(id)

        res.json({msg:`Producto con el id ${id} eliminado`})
    } catch (error) {
        console.log(error)
    }
}

export const getAllByIdController=async(req,res)=>{
    try {
        const id=req.params.id

        const prod = await getAllProductById(id)
        res.json({prod})
    } catch (error) {
        console.log(error)
    }
}

export const getAllController = async(req,res)=>{
    try {
        const products = await getAllProducts()
        res.json({products})
    } catch (error) {
        console.log(error)
    }
}