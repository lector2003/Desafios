//importar librerias
import mongoose from "mongoose";

//nombrar la colleccion
const UserColection = "userMenssage"

//crear esquema
const SchemaUserMenssage = new mongoose.Schema({
    author:{
        nombre:{type:String, required:true},
        apellido:{type:String, required:true},
        edad:{type:String, required:true},
        alias:{type:String,required:true,unique:true},
        avatar:{type:String,required:true},
        email:{type:String,required:true}
    },
    text:{type:String,require:true,min:0,max:1000}
}) 

//crear modelo
export const modelUserMenssage =new mongoose.model(UserColection,SchemaUserMenssage) 