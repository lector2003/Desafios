//importar server y conexion db
import app from "./services/server";
import { initDb } from "./services/db";
import { dataPort } from "./congif/portArgv";

//iniciar conexion
const init = ()=>{
    initDb()

    //determinar puerto
    const PORT=dataPort.puerto

    app.listen(PORT,()=>{
        console.log(`Escuchando en el puerto ${PORT}`)
    })
}

init()