//importar servidor y base de datos
import { initMongoose } from "./services/mongoose";
import app from "./services/server";

//establecer puerto
const PORT = 8080

//iniciar conexion a la base de datos 
//poner a escuchar el servidor en el puerto establecido
const init = async()=>{
    try {
        await initMongoose()

        app.listen(PORT,()=>{
            console.log(`Escuchando en el puerto ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

init()