//importar librerias
import express, { urlencoded } from "express";

//importar ruta principal
import { mainRoute } from "./routes";

const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))

app.use("/api", mainRoute)

export default app