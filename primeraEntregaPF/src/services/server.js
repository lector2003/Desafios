//importar libreria express
import express, { urlencoded } from "express"

//importar ruta principal desde la carpeta routes
import  routePrincipal from "../routes"

//iniciar server
const app = express()

//configuracion de express
app.use(express.json())
app.use(urlencoded({extended:true}))

//manejar todas las rutas secundarias a traves de "api"
app.use("/api", routePrincipal)

//exportar el server
export default app