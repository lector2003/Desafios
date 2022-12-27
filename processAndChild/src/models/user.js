//importar librerias
import mongoose from "mongoose"
import { Schema } from "mongoose"
import bcrypt from "bcryptjs"

//nombrar la coleccion
const NameCollection = "Users"

//crear modelo de usuarios
const SchemaUsers = new Schema({
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
})

//encriptar la password
SchemaUsers.methods.encryptPassword = async (password)=>{
    try {
        const encrypt  = await bcrypt.genSalt(15)
        return await bcrypt.hash(password,encrypt)
    } catch (error) {
        console.log(error)
    }
}

//comparar password ingresada con la encriptada
SchemaUsers.methods.comparePassword=async function(password){
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        console.log(error)
    }
}

export const UserModel = new mongoose.model(NameCollection,SchemaUsers)

