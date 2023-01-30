//importar server y coneccion a la base de datos
import app from "./services/server";
import { initMongoose } from "./services/DB";

//importar credenciales
import { credentials } from "./credentials/credentials";

//importar loggs
import  logger  from "./services/loggers";

const PORT = credentials.PORT

//poner a escuchar al server y iniciar coneccion a base de datos
const init = ()=>{
    initMongoose()

    app.listen(PORT,()=>{
        logger.info(`Escuchando en el puerto ${PORT}`)
    })
}

init()