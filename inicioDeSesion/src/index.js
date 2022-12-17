//importar server y conexion db
import app from "./services/server";
import { initDb } from "./services/db";

//iniciar conexion
const init = ()=>{
    initDb()

    //determinar puerto
    const PORT=8080

    app.listen(PORT,()=>{
        console.log(`Escuchando en el puerto ${PORT}`)
    })
}

init()