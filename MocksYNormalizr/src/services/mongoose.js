//importar librerias
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

//definir string de conexion
const StringConnectionn = process.env.MONGO_ATLAS

//crear conexion 
export const initMongoose = async()=>{
    try {
       await mongoose.connect(StringConnectionn)
        console.log("se conecto")
    } catch (error) {
        console.log(error)
        console.log("No se conecto")
    }
}