//importar modelo de carrito
import ModelCart from "../models/cart";
import ModelProducts from "../models/products";

//crear carrito
export const createCart = async(req,res)=>{
    try {

        const newCart={
            products : []
        }
        await ModelCart.create(newCart)

        //respuesta del servidor
        res.json({  
            msg:"se creo el carrito",
            data: await ModelCart.find()
        })
    } catch (error) {
        console.log(error)
        console.log("No se creo el carrito")
    }
}

//borrar carrito
export const deleteCart = async(req,res)=>{
    try {
        const {id}= req.params

        //validacion
        const cart = await ModelCart.findById(id)

        if(!cart){
           return res.status(404).json({
                msg:"No se encontro ese carrito"
            })
        }

        //borrar carrito
        await ModelCart.findByIdAndDelete(id)

        res.json({
            msg:`Carrito con id ${id} eliminado`
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            msg:"No se encontro ese carrito"
        })
    }
}

//mostrar los productos del carrito
export const getAllCartProducts = async(req,res)=>{
    try {
        //capturar el id del carrito
        const {id}= req.params

        //validacion
        const cart = await ModelCart.findById(id)
        
        if(!cart){
            return res.status(404).json({
                msg:"el carrito no existe"
            })
        }

        //respuesta del servidor
        res.json({
            data: cart.products
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            msg:"el carrito no existe"
        })
    }
}

//guardar productos dentro de un carrito
export const saveProductsCart = async(req, res)=>{
    try {
        //capturar los id del carrito
        const {id} = req.params
        
        //traer id y cantidad ingresado por el cliente
        const {id_product}= req.body

        //traer productos
        const product = await ModelProducts.findById(id_product)


        //traer carrito segun su id
        const cart = await ModelCart.findById(id)

        //validacion
        if(!cart){
            return res.status(404).json({
                msg:"Carrito no encontrado"
            })
        }


        //agregar prodcutos al carrito
        cart.products.push(product)

        //guardarlo en la base de datos
        await ModelCart.findByIdAndUpdate(id,cart,{new:true})
        res.json({
            msg:`Producto agregado al carrito con id ${id}`,
            cart
        })



    } catch (error) {
        console.log(error)
        return res.status(404).json({
            msg:"Carrito no encontrado"
        })
    }
    
}

//borrar producto del carrito
export const deletePorductCart = async(req,res)=>{
    try {
        //traer id de producto y de carrito
        const {id}= req.params
        const id_prod = req.params.id_prod

        //traer carrito segun su id
        const cart = await ModelCart.findById(id)
        //validacion
        if(!cart){
            res.status(404).send({
                msg:"No se encontro el carrito"
            })
        }

        //traer indice del producto 
        const ind = cart.products.findIndex((prod)=> prod._id == id_prod)

        console.log(ind)

        //validacion
        if(ind<0||ind>cart.products){
            return res.status(404).send({
                msg:"Producto no encontrado"
            })
        }

        
        
          //borrae producto
          cart.products.splice(ind,1)

          await ModelCart.findByIdAndUpdate(id,cart),{new:true}

          //respuesta del servidor
          res.send({
            msg:`Producto con el id ${id_prod} eliminado del carrito con id ${id}`
          })
        
    } catch (error) {
        console.log(error)
        res.status(404).send({
            msg:"No se encontro el carrito"
        })
    }
}