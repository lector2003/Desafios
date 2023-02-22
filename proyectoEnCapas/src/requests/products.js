//importar librerias
import axios from "axios"

//consulta de todos los productos
export const axiosGetProducts = async()=>{
    try {
        const response = await axios.get("http://localhost:8080/api/products")
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

//consulta de producto por id
export const axiosGetProductsById = async ()=>{
    try {
        const response = await axios.get("http://localhost:8080/api/products/63d95c330123397fe9a9c500")
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

//consulta para agregar productos
export const axiosPostProducts = async()=>{
    try {
        const url = "http://localhost:8080/api/products"

        const data = {
            name:"Pelota",
            description:"Redonda",
            image:".....",
            stock:10,
            price:4000
        }

        const response = await axios.post(url,data)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

//consulta para borrar productos
export const axiosDeleteProductById = async ()=>{
    try {
        const url = "http://localhost:8080/api/products/63e4239e388e2da411783153"

        const response = await axios.delete(url)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

