//importar servidor
import server from "./services/server";

const PORT = 8080

//poner a escuchar en el puerto
server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

insertMany([{nombre:"Pablo",edad:25},{nombre:"Juan",edad:22},{nombre:"Lucia",edad:25},{nombre:"Juan",edad:29},{nombre:"Fede",edad:35}])
