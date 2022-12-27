//importar librerias
import mongoose from "mongoose"

//importar variables de entorno
import config from "../congif/index"


//crear conexion a la db
export const initDb=()=>{
    mongoose.set('strictQuery', false)
    mongoose.connect(config.MONGO_ATLAS)
    console.log("Se conecto a la db")
}