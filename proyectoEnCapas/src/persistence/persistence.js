//importar metodos
import * as MongoDbProduct from "./mongoDb/products.js"
import * as MongoDbCart from "./mongoDb/cart.js"
import { initMongoose } from "./mongoDb"

let persistenceCart
let persistenceProducts

const init = async()=>{
    await initMongoose()
}

init()

persistenceCart= MongoDbCart
persistenceProducts=MongoDbProduct

//funciones del carrito

export async function createCart(){
    return await persistenceCart.createCart()
}

export async function deleteCart(id){
    return await persistenceCart.deleteCart(id)
}

export async function getAllCartProducts(id){
    return await persistenceCart.getAllCartProducts(id)
}

export async function saveProductsCart(idCart,idProd){
    return await persistenceCart.saveProductsCart(idCart,idProd)
}

export async function deletePorductCart(idCart,idProd){
    return await persistenceCart.deletePorductCart(idCart,idProd)
}


//funciones de products
export async function getAll(){
    return await persistenceProducts.getAll()
}

export async function getAllById(id){
    return await persistenceProducts.getAllById(id)
}

export async function save(prod){
    return await persistenceProducts.save(prod)
}

export async function deleteById(id){
    return await persistenceProducts.deleteById(id)
}


