//importar librerias
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

//establecer string de conexion
const StringConnection  = process.env.MONGO_ATLAS

//conectar a la base de datos
export const initMongoose = async()=>{
    try {
        await mongoose.connect(StringConnection)
        console.log("Se conecto")
    } catch (error) {
        console.log(error)
        console.log("no se pudo conectar")
    }
}