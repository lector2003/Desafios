//imortar models
import modelProducts from "../models/products";
import modelCart from "../models/cart";

//importar loggs
import logger from "../services/loggers";


//crear carrito
export const createCart = async(req,res)=>{
    try {
        const newCart = {
            products:[]
        }

        //guardar carrito en la base de datos
        await modelCart.create(newCart)

        res.json({msg:"Carrito creado"})
    } catch (error) {
        logger.error(error)
        logger.error("No se creo el carrito")
    }
}

export const deleteCart =async(req,res)=>{
    try {
        //traer id del req.params
        const {id}=req.params

        //traer carrito
        const cart = modelCart.findById(id)

        //validacion
        if(!cart){
          return  res.status(404).json({msg:"El carrito no existe"})
        }

        await modelCart.findByIdAndDelete(id)

        res.send({msg:`Carrito con id ${id} eliminado`})

    } catch (error) {
        logger.error(error)
    }
}

export const getAllCartProducts = async(req,res)=>{
    try {
        //traer id de req.params
        const {id}=req.params

        const cart = modelCart.findById(id)


        //validacion
        if(!cart){
            return res.status(404).json({msg:"No se encontro el carrito"})
        }

        //productos dentro del carrito
        const productsCart = cart.products
        res.json({
           productsCart
        })
    } catch (error) {
        logger.error(error)
    }
}

export const saveProductsCart = async(req,res)=>{
    try {
        //traer id del carrito
        const {id}=req.params

        //traer producto ingresado por el cliente
        const {id_product}=req.body

        //buscar producto en la base de datos
        const product = await modelProducts.findById(id_product)

        //traer carrito
        const cart =await modelCart.findById(id)

        if(!cart){
            return res.status(404).json({msg:"No hay carrito"})
        }

        //agregar producto al array del carrito
        cart.products.push(product)

        //modificar carrito
        await modelCart.findByIdAndUpdate(id,cart,{new:true})

        res.json({msg:`Producto agregado al carrito ${id}`,
    cart})
    } catch (error) {
        logger.error(error)
    }
}

export const deletePorductCart=async(req,res)=>{
    try {
        //traer id del carrito
        const {id}=req.params

        //traer id del producto
        const id_prod = req.params.id_prod

        //traer carrito
        const cart = await modelCart.findById(id)

        if(!cart){
            return res.status(404).json({msg:'No hay carrito'})
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

          await modelCart.findByIdAndUpdate(id,cart),{new:true}

          //respuesta del servidor
          res.send({
            msg:`Producto con el id ${id_prod} eliminado del carrito con id ${id}`
          })
    } catch (error) {
        logger.error(error)
    }
}