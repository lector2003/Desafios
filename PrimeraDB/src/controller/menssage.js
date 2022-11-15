//importar libreriras
import knex from "knex";
import moment from "moment"
import { options } from "../../options/options";

//clase de mensaje
class Client{
    constructor(options){
        this.knex = knex(options)
    }

    //crear tabla del chat
    async createTable(){
        if(await this.knex.schema.hasTable("chat")){
            console.log("tabla del chat creada")
        }else{
            await this.knex.schema.createTable("chat", (table)=>{
                table.increments("id").primary
                table.date("timestamp").notNullable
                table.string("menssage").notNullable
                table.string("user", 100).notNullable
            })
        }
    }

    //leer todo los mensajes dentro de la tablas
    async getAllMenssage(){
        const data = await this.knex.from("chat").select("*")
        return data
    }
    //guardar los datos dentro de la tabla
    async saveMenssage(obj){
        await this.knex("chat").insert(obj)
    }
}

export const clientChat = new Client(options)