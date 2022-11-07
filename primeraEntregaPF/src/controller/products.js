//importar librerias
import fs from "fs"



//crear clase controladora
class ControllerProducts {

    //leer archivo json y devolver el contenido
   async getAll(routeJson){

      try {
         const data = await fs.promises.readFile(routeJson, "utf-8")
        const dataParse = JSON.parse(data)  
        return dataParse
      } catch (error) {
         console.log(error)
      }
        
     }

     //guardar contenido en el json
     async save(routeJson, objt){
      try {
        return await fs.promises.writeFile(routeJson,JSON.stringify(objt,null,"\t") )
      } catch (error) {
         console.log(error)
      }
       
     }
}

export const ProductsController = new ControllerProducts()

