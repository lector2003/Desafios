//importar librerias
import mongoose from "mongoose";

//npmbre de las collecion
export const CartName = "cart"

//creacion del esquema del carrito
const SchemaCart = new mongoose.Schema(
    {
        products:{type:Array, require:true}
    },
    {
        timestamps:true, versionKey:false
    }
)

//creacion del modelo del carrito
const ModelCart = new mongoose.model(CartName, SchemaCart)

export default ModelCart

