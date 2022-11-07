//importar server de la carpeta services
import server from "./services/server"


const PORT = 8080

//poner el server a escuchar en el puerto
server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})