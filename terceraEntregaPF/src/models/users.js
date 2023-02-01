//importr librerias
import mongoose  from "mongoose";
import bcrypt from "bcryptjs"

//importar loggs
import logger from "../services/loggers"

//nombre de la coleccion
const ColectionUsers = "users"

//creacion del esquema de usuarios
const SchemaUsers = new mongoose.Schema(
    {
        email:{type:String, require:true,unique:true},
        password:{type:String,require:true},
        name:{type:String, require:true},
        age:{type:Number,require:true},
        phoneNumber:{type:Number,require:true,unique:true},
        cart:{type:Object,require :true}
    },
    {
        timestamps:true,versionKey:false
    }
)


//metodo para encriptar password
SchemaUsers.methods.encryptPassword=async(password)=>{
    try {
        const encrypt = await bcrypt.genSalt(15)
        return await bcrypt.hash(password,encrypt)
    } catch (error) {
        logger.error(error)
    }
}

//metodo para comparar password encriptada
SchemaUsers.methods.comparePassword = async function(password){
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        logger.error(error)
    }
    
}

//crear modelo de usuarios
const modelUsers = new mongoose.model(ColectionUsers,SchemaUsers)

export default modelUsers