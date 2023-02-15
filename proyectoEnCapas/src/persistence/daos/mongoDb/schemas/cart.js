//importar ibrerias
import mongoose from "mongoose";

//nombre de la colleccion
const ColectionCarts = "carts"

//crear esquema del carrito
const SchemaCart = new mongoose.Schema(
    {
        products:{type:Array,require:true}
    },
    {
        timestamps:true, versionKey:false
    }
)

//crear modelo
const modelCart = new mongoose.model(ColectionCarts,SchemaCart)

export default modelCart