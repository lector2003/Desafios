//importar librerias
import knex from "knex"

//importar configuracion de la base de datos
import {options} from "../../options/options"

//crear clase para administrar base de datos

class ClientProduct{
    constructor(options){
        this.knex = knex(options)
    }

    //crear tabla
    async createTable(){
        if(await this.knex.schema.hasTable("products")){
            return console.log("tabla creada")
        }else{
            await this.knex.schema.createTable("products", (table)=>{
                table.increments("id").primary
                table.string("name", 20).notNullable
                table.string("image", 350).notNullable
                table.integer("price").notNullable
            })
        }
       
    }

    //leer base de datos
    async getAll(){
       const data =  await this.knex.from("products").select("*")
       return data
    }

    //guardar productos
    async save(obtj){
        await this.knex("products").insert(obtj)
    }

    //borrar producto segun su id
    async deleted(id){
       await this.knex("products").where("id", id).del()
    }

    //modificar precio segun su id
    async updatePrice(id, obj){
        await this.knex("products").where("id", id).update(obj)
    }
}

export const clientProduct = new ClientProduct(options)

