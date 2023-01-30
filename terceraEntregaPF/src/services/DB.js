//importar librerias
import mongoose from "mongoose"

//importar logs
import logger from "./loggers"

//importar credenciales
import { credentials } from "../credentials/credentials"

//crear coneccion a la base de datos

export const initMongoose = async()=>{
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(credentials.StringConnection)
        logger.info("Se conecto a la db")
    } catch (error) {
        logger.error(error)
    }
}