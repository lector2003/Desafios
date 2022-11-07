//importar Router de express
import { Router } from "express";

//importar clase controladora
import { ProductsController } from "../controller/products";

//crear middleware
import config from "../config";
const admi = (req,res,next)=>{
  if(!config.administrador){
  return  res.status(401).send({
      error:"No estas autorizado"
    })
  }

  next()
}

//importar librerias
import path from "path";
import { v4 as uuidv4 } from "uuid";
import moment from "moment"

//iniciar dia y fecha actual
const now =moment().format('MMMM Do YYYY, h:mm:ss a');

//instanciar ruta al json de productos
const routeProductsJson = path.resolve(__dirname, "../json/products.json");

//iniciar la ruta de productos
const routeProducts = Router();

//endpoints...

//mostrar todos los productos
routeProducts.get("/",admi, async (req, res) => {
  try {
    //leer json
    const products = await ProductsController.getAll(routeProductsJson);

    //validacion
    if (products.length == 0) {
      return res.status(400).json({
        msg: "No hay productos",
      });
    }

    //respuesta del servidor
    res.json({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
});

//mostrar productos segun su id
routeProducts.get("/:id", admi,async (req, res) => {
  try {
    const id = req.params.id;

    //leer json
    const products = await ProductsController.getAll(routeProductsJson);

    //sacar el indice del prodcuto segun el dato ingresado por el cliente
    const index = products.findIndex((product) => product.id == id);

    //validacion
    if (index < 0 || index > products.length) {
      return res.status(404).json({
        msg: "Producto no encontrado",
      });
    }

    //respuesta del servidor
    res.json({
      data: products[index],
    });
  } catch (error) {
    console.log(error);
  }
});

//agregar productos
routeProducts.post("/",admi, async (req, res) => {
  try {
    //crear formato del producto
    const { name, description, image, price, stock } = req.body;

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
      res.status(401).json({
        error: "Campos invalidos",
      });
    }

    //creacion del productos
    const product = {
      name,
      description,
      image,
      stock,
      price,
      timestamp: now,
      id: uuidv4(),
      code: uuidv4(),
    };

    //leer json
    const products = await ProductsController.getAll(routeProductsJson);

    //agregar al array nuevo producto
    products.push(product);

    //guardar producto
    await ProductsController.save(routeProductsJson, products);

    //respuesta del servidor
    res.json({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
});

//modificar productos
routeProducts.put("/:id",admi, async (req, res) => {
  try {
    const id = req.params.id;

    //leer json
    const products = await ProductsController.getAll(routeProductsJson);

    //sacar indice del producto segun el dato ingresado por el cliente
    const index = products.findIndex((product) => product.id == id);

    //validaciones
    if (index < 0 || index > products.length) {
      return res.status(404).json({
        msg: "Producto no encontrado",
      });
    }

    //crear formato del producto
    const { name, description, image, price, stock } = req.body;

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

    //modificar campos
    const newProduct = {
      name,
      description,
      image,
      stock,
      price,
      timestamp: products[index].timestamp,
      id: products[index].id,
      code: products[index].code,
    };

    //sustituir producto segun su indice
    products.splice(index, 1, newProduct);

    //reescribir json con el producto modificado
    await ProductsController.save(routeProductsJson, products);

    //respuesta del servidor
    res.json({
      msg: `Producto con id ${id} moddificado`,
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
});

//borrar producto segun su id
routeProducts.delete("/:id", admi,async (req, res) => {
  try {
    const id = req.params.id;

    //leer json
    const products = await ProductsController.getAll(routeProductsJson);

    //sacar indice del producto segun el dato ingresado por el cliente
    const index = products.findIndex((product) => product.id == id);

    //validaciones
    if (index < 0 || index > products.length) {
      return res.status(404).json({
        msg: "Producto no encontrado",
      });
    }

    //borrar producto por id
    products.splice(index, 1);

    //reescribir el json
    await ProductsController.save(routeProductsJson, products);

    //respuesta del servidor
    res.json({
      msg: `Producto con id ${id} eliminado`,
    });
  } catch (error) {
    console.log(error)
  }
});

export default routeProducts;
