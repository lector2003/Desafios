//importar server
const server = require("./services/server")

const PORT = 8080

//poner a escuchar al server
server.listen(PORT, ()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})