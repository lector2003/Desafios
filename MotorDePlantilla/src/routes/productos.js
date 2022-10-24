const {Router}= require("express")
const fs = require('fs')
const path = require('path')
const ruta = path.resolve(__dirname, '../../productos.json')
const { v4: uuidv4 } = require('uuid');
const express = require('express')



const rutaProductos = Router()

rutaProductos.use(express.static("public"))

//End Points de /productos Mostrar
 
rutaProductos.get('/', async(req, res, next)=>{
    const data =  await fs.promises.readFile(ruta, "utf-8")
    const productos = JSON.parse(data)
    res.render("index", {productos})
})

//Agregar Productos
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
     res.redirect("/api/productos")
    }

    
})


//Mostrar Historial
rutaProductos.get('/historial', async(req, res)=>{
    const data =  await fs.promises.readFile(ruta, "utf-8")
    const productos = JSON.parse(data)
    res.render("historialProduct", {productos})
})




module.exports = rutaProductos