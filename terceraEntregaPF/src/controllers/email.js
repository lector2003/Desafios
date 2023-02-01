//importar transporter de email
import { transporter } from "../services/email";

//importar credenciales
import { credentials } from "../credentials/credentials";
//importar loggs
import logger from "../services/loggers";

//enviar email con los datos de los usuarios
export const sendEmailInfoUser = async(user)=>{
    try {
        const email = await transporter.sendMail({
            from:credentials.EMAIL,
            to:credentials.EMAIL,
            subject:"Nuevo registro",
           text:`${user}`
        })

        logger.info("Email enviado")
        logger.info(email)
        
        
    } catch (error) {
        logger.error(error)
        logger.error("No se envio")
    }
}

//enviar email con los productos para comprar
export const sendEmailProducts = async(products,name,mail)=>{
    try {
        const email = await transporter.sendMail({
            from:credentials.EMAIL,
            to:credentials.EMAIL,
            subject:`Nuevo pedido de ${name} Email: ${mail}`,
           text:`${products}`
        })

        logger.info("email enviado")

    } catch (error) {
        logger.error(error)
    }
}