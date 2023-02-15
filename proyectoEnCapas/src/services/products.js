//importar funciones
import { save, deleteById, getAll, getAllById } from "../persistence/daos/daos.js";

export async function saveProduct(prod){
    const product = await save(prod)
    return product
}

export async function deleteProduct(id){
    const prod  = await deleteById(id)

    return prod
}

export async function getAllProducts(){
    const products = await getAll()

    return products
}

export async function getAllProductById(id){
    const prod = await getAllById(id)
    return prod
}