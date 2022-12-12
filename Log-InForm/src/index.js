//importar servidor
import app from "./services/server";

//poner a escuchar en el puerto
const PORT =8080

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})