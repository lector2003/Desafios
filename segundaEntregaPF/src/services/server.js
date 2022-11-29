//importar librerias
import express, { urlencoded } from "express"

//importar ruta principal
import mainRoute from "../routes"

//crear server
const app = express()

//configuracion express
app.use(express.json())
app.use(urlencoded({extended:true}))

//manejar las rutas
app.use("/api", mainRoute)

//exportar servidor
export default app