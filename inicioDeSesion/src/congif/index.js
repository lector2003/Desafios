//importar librerias
import dotenv from "dotenv"

dotenv.config()

export default {
    MONGO_ATLAS : process.env.MONGO_ATLAS,
SECRET:process.env.SECRET,
CRYPTO:process.env.CRYPTO
}