//importar server
import app from "./server"

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})