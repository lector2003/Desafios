//importar funciones
import { cartCreate,cartDelete,cartProductsGetAll,cartSaveProduct,productCartDelete } from "../services/cart";

export const createCartController = async(req,res)=>{
    try {
        const cart =await cartCreate()
        res.json({cart})
    } catch (error) {
        console.log(error)
    }
}

export const deleteCartController = async(req,res)=>{
    try {
        const id=req.params.id

        await cartDelete(id)

        res.json({msg:`Carrito con id ${id} eliminado`})
    } catch (error) {
        console.log(error)
    }
}

export const getAllCartProductsController = async(req,res)=>{
    try {
        const id=req.params.id

        const products = await cartProductsGetAll(id)
        res.json({products})
    } catch (error) {
        console.log(error)
    }
}

export const saveProductsCartController = async (req,res)=>{
    try {
        const idCart= req.params.idCart

        const idProd = req.params.idProd

        await cartSaveProduct(idCart,idProd)

        res.json({msg:`Producto con id ${idProd} agregado al carrito con id ${idCart}`})

    } catch (error) {
        console.log(error)
    }
}

export const deletePorductCartController=async(req,res)=>{
    try {
        const idCart= req.params.idCart

        const idProd = req.params.idProd

        await productCartDelete(idCart,idProd)

    res.json({msg:`Producto con id ${idProd} eliminado del carrito con id ${idCart}`})
    } catch (error) {
        console.log(error)
    }
}