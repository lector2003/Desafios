const {Router} = require('express')
const fs = require('fs')
const path = require('path')
const ruta = path.resolve(__dirname, '../../productos.json')
const { v4: uuidv4 } = require('uuid');




const rutaProductos = Router()

rutaProductos.get('/', async(req, res)=>{
    const data =  await fs.promises.readFile(ruta, "utf-8")
    const productos = JSON.parse(data)
    res.json({
        data: productos
    })
})

rutaProductos.get("/:id" , async(req,res)=>{
    const id = req.params.id
    const data =  await fs.promises.readFile(ruta, "utf-8")
    const productos = JSON.parse(data)

    const indice = productos.findIndex(producto => producto.id == id)

    if(indice<0||indice> productos.length){
        res.status(404).json({
            error:'Producto no encontrado'
        })
    }else{
        res.json(
            {
                data: productos[indice]
            }
        )
    }

    
})

rutaProductos.post('/', async(req, res)=>{
    const data =  await fs.promises.readFile(ruta, "utf-8")
    const productos = JSON.parse(data)
    const body = req.body

    
    const newProduct = {
        title:body.title,
        price:body.price,
        thumbail: body.thumbail,
        id:uuidv4()
    }

    if(!newProduct.title||!newProduct.price){
        res.status(400).json({
            error :"Campos invalidos"
        })
    }else{
        productos.push(newProduct)

    await fs.promises.writeFile(ruta, JSON.stringify(productos, null, "\t"))
     res.redirect("/")
    }

    
     
    

})

rutaProductos.put('/:id', async(req,res)=>{
    const id = req.params.id
    const data =  await fs.promises.readFile(ruta, "utf-8")
    const productos = JSON.parse(data)

    const indice = productos.findIndex(producto => producto.id == id)

    if(indice<0||indice> productos.length){
        
       return res.status(404).json({
            error:'Producto no encontrado'
        })
    }

    const {title, price, thumbail} = req.body

    if (!title || !price){
        return res.status(400).json({
            msg:"campos invalidos"
        })
    }

    const productoActualizado = {
        title,
        price,
        thumbail,
        id:productos[indice].id
    }

    productos.splice(indice, 1, productoActualizado)

  await  fs.promises.writeFile(ruta, JSON.stringify(productos, null, "\t"))
    
        res.send ({
            msg:`usuario modificado con id ${id}`,
            data: productos
        })



})

rutaProductos.delete('/:id', async(req, res)=>{
    const id = req.params.id
    const data =  await fs.promises.readFile(ruta, "utf-8")
    const productos = JSON.parse(data)

    const indice = productos.findIndex(producto => producto.id == id)

    if(indice<0||indice> productos.length){
        res.status(404).json({
            error:'Producto no encontrado'
        })

    }

    productos.splice(indice, 1)

    await  fs.promises.writeFile(ruta, JSON.stringify(productos, null, "\t"))

    res.send(
        {
            msg:`Producto con id ${id} eliminado`
        }
    )

})










module.exports = rutaProductos