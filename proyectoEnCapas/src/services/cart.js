//importar funciones
import { createCart, deletePorductCart,deleteCart,saveProductsCart,getAllCartProducts } from "../persistence/persistence";


export async function cartCreate(){
    const cart = await createCart()
    return cart
}

export async function productCartDelete(idCart,idProd){
    const prod = await deletePorductCart(idCart,idProd)
    return prod
}

export async function cartDelete(id){
    const cart = await deleteCart(id)
    return cart
}

export async function cartSaveProduct(idCart,idProd){
    const cart = await saveProductsCart(idCart,idProd)
    return cart
}

export async function cartProductsGetAll(id){
    const products = await getAllCartProducts(id)
    return products
}