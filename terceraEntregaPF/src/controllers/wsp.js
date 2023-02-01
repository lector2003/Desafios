//importar cliente de twilio
import { clientTwilio } from "../services/wsp";

//importar loggs
import logger from "../services/loggers";

//importar credenciales
import { credentials } from "../credentials/credentials";

export const sendWsp = async (msj) => {
  try {
    const menssage = {
        body:`Orden de compra ${msj}`,   
        from:credentials.CEL_TWILIO,
        to:"whatsapp:+5493516618464"
    }

    const response = await clientTwilio.messages.create(menssage)
    logger.info(response)
  } catch (error) {
    logger.error(error)
    logger.error("No se mando")
  }
};
