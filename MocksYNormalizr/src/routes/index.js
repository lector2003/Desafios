//importar librerias
import { Router } from "express";
import { desnormalizar, normalizar } from "../normalizr/normalizr";



//crear ruta 
export const mainRoute = Router()

//renderizar index
mainRoute.get("/", (req,res)=>{
    res.render("index")
})

mainRoute.get("/normalizar", async(req,res)=>{
    try {
     const normalizeData = await normalizar()

        res.json({
          normalizeData
        })
    } catch (error) {
        console.log(error)
    }
})

mainRoute.get("/desnormalizar", async(req,res)=>{
    try {
        
        const desnormalizeData = await desnormalizar()

        res.json({
            desnormalizeData
        })
    } catch (error) {
        console.log(error)
    }
})