//importar librerias
import modelProducts from "../models/products";

export const checkBody = async(req,res,next)=>{
    try {
        const {name, price, stock, description,image}= req.body

         //validacion de campos
    if (!name || !description || !image || !price || !stock) {
        return res.status(401).json({
          error: "Campos invalidos",
        });
      }
  
      if (!isNaN(name) || !isNaN(description) || !isNaN(image)) {
        return res.status(401).json({
          error: "Campos invalidos",
        });
      }
  
      if (isNaN(price) || isNaN(stock)) {
      return  res.status(401).json({
          error: "Campos invalidos",
        });
      }
      
      next()
    } catch (error) {
        console.log(error)
    }
}

export const checkProduct = async(req,res,next)=>{
    try {
        //traer id ppr params
        const {id}= req.params

        const product = await modelProducts.findById(id)

        if(!product){
          return res.status(404).send({
            msg:"Producto no encontrado"
          })
        }

        

        next()
    } catch (error) {
      return res.status(404).send({
        msg:"Producto no encontrado"
      }) 
    }
}

export const checkProductBody = async(req,res,next)=>{
  try {
      //traer id ppr params
      const {id_product}= req.body

      const product = await modelProducts.findById(id_product)

      if(!product){
        return res.status(404).send({
          msg:"Producto no encontrado"
        })
      }

      

      next()
  } catch (error) {
    return res.status(404).send({
      msg:"Producto no encontrado"
    })
  }
}