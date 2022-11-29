//importar librerias
import mongoose from "mongoose";

//importar nombre de la coleccion del carrito
import { CartName } from "./cart";

//nombrar a la coleccion de productos
const ProductsName = "products"

//crear esquema de los productos
const SchemaProducts = new mongoose.Schema(
    {
        name:{type:String, require:true, unique:true},
        description:{type:String, require:true, max:200, min:10},
        code:{type:String, require:true},
        image:{type:String, require:true},
        stock:{type:Number,require:true},
        price:{type:Number,require:true}
    },
    {
        timestamps:true,versionKey:false
    }
)

const ModelProducts = new mongoose.model(ProductsName, SchemaProducts)

export default ModelProducts