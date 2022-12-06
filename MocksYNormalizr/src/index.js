//importar servidor
import { initMongoose } from "./services/mongoose";
import server from "./services/server";

//importar conexion a la db


const init = async()=>{
    try {
        await initMongoose()

        //determinar puerto
        const PORT =8080
        server.listen(PORT, ()=>{
            console.log(`Se conecto en el puerto ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

init()