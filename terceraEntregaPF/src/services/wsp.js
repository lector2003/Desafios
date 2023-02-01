//importar librerias
import twilio from "twilio"

//importar credenciales
import { credentials } from "../credentials/credentials"

//crear cliente de twilio
export const clientTwilio = twilio(credentials.SID, credentials.TOKEN)