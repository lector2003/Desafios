//importar librerias
import dotenv from "dotenv"

dotenv.config()

export const credentials = {
    StringConnection : process.env.MONGO_ATLAS,
    PORT:process.env.PUERTO,
    CRYPTO:process.env.CRYPTO,
    SECRET:process.env.SECRET,
    EMAIL:process.env.EMAIL,
    PASSWORD:process.env.PASSWORD,
    PORT_GMAIL:process.env.PORT_GMAIL,
    TOKEN:process.env.TOKEN,
    SID:process.env.SID,
    CEL_TWILIO:process.env.CEL_TWILIO
}