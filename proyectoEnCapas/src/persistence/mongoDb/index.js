//importar librerias
import mongoose, { set }  from "mongoose"
import dotenv from "dotenv"

dotenv.config()


//funcion para conectar a la base de datos
export const initMongoose = async()=>{
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_ATLAS)
        console.log("se conecto")
    } catch (error) {
        console.log(error)
    }
}