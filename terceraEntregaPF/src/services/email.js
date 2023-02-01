//importar librerias
import {createTransport}from "nodemailer"

//importar crendenciales
import { credentials } from "../credentials/credentials"

//configuracion del envio de mail
export const transporter = createTransport({
    service:"gmail",
    port:credentials.PORT_GMAIL,
    auth:{
        user:credentials.EMAIL,
        pass:credentials.PASSWORD
    }
})