const server = require("./services/server")

const PORT = 8080

server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))