//importar librerias
import mongoose from "mongoose"


//nombre de la colleccion 
const ColectionProducts = "products"

//crear esquema de productos
const SchemaProducts = new mongoose.Schema(
    {
    name:{type:String, require:true, unique:true},
    description:{type:String, require:true,max:200,min:10},
    code:{type:String, require:true},
    image:{type:String,require:true},
    stock:{type:Number,require:true},
    price:{type:Number,require:true},
    
    
},
{
    timestamps:true,versionKey:false
}
)

const modelProducts = new mongoose.model(ColectionProducts,SchemaProducts)

export default modelProducts

