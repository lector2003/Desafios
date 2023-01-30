//importar librerias
import dotenv from "dotenv"

dotenv.config()

export const credentials = {
    StringConnection : process.env.MONGO_ATLAS,
    PORT:process.env.PUERTO,
    CRYPTO:process.env.CRYPTO,
    SECRET:process.env.SECRET
}