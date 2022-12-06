//importar librerias
import { denormalize, normalize,schema } from "normalizr";
import { modelUserMenssage } from "../models/userMenssage";
const util = require("util")

export const normalizar = async()=>{
    try {
        const mensajes = await modelUserMenssage.find()

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

        const normalizeData = normalize(mensajes,finalSchema)

        return normalizeData

    } catch (error) {
        console.log(error)
    }
}

export const desnormalizar = async()=>{
    try {
        const mensajes = await modelUserMenssage.find()

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

        const normalizeData = await normalizar()

        const desnormalizeData = denormalize(normalizeData.result, finalSchema, normalizeData.entities)

        return desnormalizeData

    } catch (error) {
        console.log(error)
    }
}
