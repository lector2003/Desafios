//importar librerias
import { denormalize, normalize,schema } from "normalizr";
import { modelUserMenssage } from "../models/userMenssage";
import fs from "fs"
import path from "path";

//determinar ruta del json
const routeNormalizr= path.resolve(__dirname,"../normalizeData.json")

//creacion del esquemas de normalizr
const people = new schema.Entity(
    "people", {}, {
      idAttribute:"email"
    }
)

// const text = new schema.Entity("text",{},{
//     idAttribute:"email"
// })

const menssages = new schema.Entity("menssages",{
    author:people
},{idAttribute:"_id"})

const finalSchema = [menssages]

export const normalizar = async()=>{
    try {
        const mensajes = await modelUserMenssage.find()


        
        const normalizeData = normalize(mensajes,finalSchema)

        await fs.promises.writeFile(routeNormalizr,JSON.stringify(normalizeData,null,"\t"))



        return normalizeData

    } catch (error) {
        console.log(error)
    }
}

export const desnormalizar = async()=>{
    try {
      

        const Data = await fs.promises.readFile(routeNormalizr,"utf-8")
        const normalizeData = JSON.parse(Data)


        const desnormalizeData = denormalize(normalizeData.result, finalSchema, normalizeData.entities)

        return desnormalizeData

    } catch (error) {
        console.log(error)
    }
}
