//importar metodos
import * as MongoDbProduct from "./mongoDb/products.js"
import * as MongoDbCart from "./mongoDb/cart.js"
import { initMongoose } from "./mongoDb"

//importar funtion del dto
import { asDto } from "../dto/products.js"

let daoCart
let daoProducts

const init = async()=>{
    await initMongoose()
}

init()

daoCart= MongoDbCart
daoProducts=MongoDbProduct

//funciones del carrito

export async function createCart(){
    return await daoCart.createCart()
}

export async function deleteCart(id){
    return await daoCart.deleteCart(id)
}

export async function getAllCartProducts(id){
    return await daoCart.getAllCartProducts(id)
}

export async function saveProductsCart(idCart,idProd){
    return await daoCart.saveProductsCart(idCart,idProd)
}

export async function deletePorductCart(idCart,idProd){
    return await daoCart.deletePorductCart(idCart,idProd)
}


//funciones de products
export async function getAll(){
    return await daoProducts.getAll()
}

export async function getAllById(id){
    return await daoProducts.getAllById(id)
}

export async function save(prod){
    return await daoProducts.save(prod)
}

export async function deleteById(id){
    return await daoProducts.deleteById(id)
}


//exportar dao
export function getDaoCart(){
    return daoCart
}

export function getDaoProducts(){
    return daoProducts
}