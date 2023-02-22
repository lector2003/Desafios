//importar librerias
import axios from "axios";

//consulta para crear carrito
export const axiosPostCart = async()=>{
    try {
        const url = "http://localhost:8080/api/cart"

        const response = await axios.post(url)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

//consulta para agregar productos al carrito
export const axiosPostCartProducts = async()=>{
    try {
        const url = "http://localhost:8080/api/cart/63d98975af2abc84358b938d/63d864fb4e346b4b3a54c885"

        const resp = await axios.post(url)
        console.log(resp.data)
    } catch (error) {
        console.log(error)
    }
}

//consulta para ver productos agregados al carrito 
export const axiosGetCartProducts = async ()=>{
    try {
        const resp = await axios.get("http://localhost:8080/api/cart/63d98975af2abc84358b938d")
        console.log(resp.data)
    } catch (error) {
        console.log(error)
    }
}

//consulta para borrar carrito
export const axiosDeleteCart = async()=>{
    try {
       const url ="http://localhost:8080/api/cart/63d98d398269d703fd54f736" 
       const resp = await axios.delete(url)
       console.log(resp.data)
    } catch (error) {
        console.log(error)
    }
}

export const axiosDeleteCartProduct = async()=>{
    try {
        const url = "http://localhost:8080/api/cart/63d98975af2abc84358b938d/63d864fb4e346b4b3a54c885" 
        const resp = await axios.delete(url)
        console.log(resp.data)
    } catch (error) {
        console.log(error)
    }
}