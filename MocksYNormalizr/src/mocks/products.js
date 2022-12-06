//importar librerias
import { Router } from "express";
import {faker} from '@faker-js/faker'

//crear ruta e productos falsos
export const routeProductsMock= Router()

//mostrar 5 user al azar
routeProductsMock.get('/',(req,res)=>{
    const data = []

    //configuracion del idioma
  faker.locale="es"

    //agregar 5 productos al array
    for(let i =0;i<5;i++){
        data.push({
            name: faker.commerce.productName(),
            price:faker.commerce.price(100,500,0,"$"),
            image:faker.image.imageUrl(200, 600, 'sports')
        })
    }

    //respuesta del servidor
    res.send([
        data
    ])
})

