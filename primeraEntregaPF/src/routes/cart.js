//importar router de express
import { Router } from "express";

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
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

//iniciar dia y fecha actual
const now = moment().format("MMMM Do YYYY, h:mm:ss a");

//instanciar ruta al json de caritos
const routeCartJson = path.resolve(__dirname, "../json/cart.json");
//insfanciar ruta al json de productos
const routeProductsJson = path.resolve(__dirname, "../json/products.json");

//importar controlador
import { ProductsController } from "../controller/products";

//iniciar ruta del carrito
const routeCart = Router();

//crear carrito
routeCart.post("/",admi, async (req, res) => {
  try {
    //creacion del carrito
    const newCart = {
      products: [],
      id: uuidv4(),
      timestamp: now,
    };

    //leer json del carrito
    const containerCarts = await ProductsController.getAll(routeCartJson);

    //agregar carrito creado alarray
    containerCarts.push(newCart);

    //agregar carrito al json
    await ProductsController.save(routeCartJson, containerCarts);

    //respuesta del seridor
    res.send({
      data: newCart.id,
    });
  } catch (error) {
    console.log(error);
  }
});

//borrar carrito
routeCart.delete("/:id",admi, async (req, res) => {
  try {
    const id = req.params.id;

    //leer json cart
    const containerCarts = await ProductsController.getAll(routeCartJson);

    //obtener indice segun id
    const index = containerCarts.findIndex((cart) => cart.id == id);

    //validacion
    if (index < 0 || index > containerCarts.length) {
      return res.status(404).json({
        msg: "Carrito no encontrado",
      });
    }

    //borrar carrito del array
    containerCarts.splice(index, 1);

    //agregar nuevo array al json
    await ProductsController.save(routeCartJson, containerCarts);

    //respuesta del servidor
    res.send({
      msg: `Carrito con id ${id} eliminado`,
    });
  } catch (error) {
    console.log(error);
  }
});

//mostrar los productos del carrito
routeCart.get("/:id/products", admi, async (req, res) => {
  try {
    const id = req.params.id;

    //leer json cart
    const containerCarts = await ProductsController.getAll(routeCartJson);

    //inidicar indice segun lo agregado por el cliente
    const index = containerCarts.findIndex((cart) => cart.id == id);

    //validaciones
    if (containerCarts[index].products.length == 0) {
      return res.status(404).send({
        error: "No hay productos agregados al carrito",
      });
    }

    //respuesta del servidor
    res.send({
      data: containerCarts[index].products,
    });
  } catch (error) {
    console.log(error);
  }
});

//incorporar productos al carrito segun su id
routeCart.post("/:id/products",admi, async (req, res) => {
  try {
    const id = req.params.id;

    //leer json cart
    const containerCarts = await ProductsController.getAll(routeCartJson);

    //leer json products
    const productsJson = await ProductsController.getAll(routeProductsJson);

    //inidicar indice segun lo agregado por el cliente
    const index = containerCarts.findIndex((cart) => cart.id == id);

    //atrapar lo ingresado por el cliente
    const { idProduct, amount } = req.body;

    //validaciones
    if (!amount || !idProduct) {
      return res.status(401).send({
        error: "Ingrese datos validos",
      });
    }

    if (index < 0 || index > containerCarts.length) {
      return res.status(404).json({
        msg: "Carrito no encontrado",
      });
    }

    //recorrer array de productos para encontrar el que coincide con el id
    const indexProduct = productsJson.findIndex(
      (product) => product.id == idProduct
    );

    //validacion
    if (indexProduct < 0 || indexProduct > productsJson.length) {
      return res.status(404).json({
        msg: "Este producto no existe",
      });
    }

    //dar forma al producto atrapado
    const forProduct = productsJson[indexProduct];

    const newProductCart = {
      amount: amount,
      id: idProduct,
      name: forProduct.name,
      price: forProduct.price,
      description: forProduct.description,
      stock: forProduct.stock,
      image: forProduct.image,
      code: forProduct.code,
      timestamp: now,
    };

    // agregar el producto al carrito correspondiente segun su id
    containerCarts[index].products.push(newProductCart);

    //reescribir el json
    await ProductsController.save(routeCartJson, containerCarts);

    //respuesta del servidor
    res.send({
      data: containerCarts[index],
    });
  } catch (error) {
    console.log(error);
  }
});

//borrar producto del carrito
routeCart.delete("/:id/products/:id_prod",admi, async (req, res) => {
  try {
    //capturar los ids del carrito y del producto
    const idCart = req.params.id;
    const idProduct = req.params.id_prod;

    //leer json cart y json products
    const containerCarts = await ProductsController.getAll(routeCartJson);
    const productsJson = await ProductsController.getAll(routeProductsJson);

    //inidicar indice segun lo agregado por el cliente
    const indexCart = containerCarts.findIndex((cart) => cart.id == idCart);
    const indexProduct = containerCarts[indexCart].products.findIndex(
      (product) => product.id == idProduct
    );

    //validaciones
    if (indexCart < 0 || indexCart > containerCarts.length) {
      return res.status(404).send({
        error: "Carrito no encontrado",
      });
    }

    if (indexProduct < 0 || indexProduct > productsJson.length) {
      return res.status(404).send({
        error: "Producto no encontrado",
      });
    }

    //borrar producto del carrito
    containerCarts[indexCart].products.splice(indexProduct, 1);

    //reescribir json
    await ProductsController.save(routeCartJson, containerCarts);

    //respuesta del servidor
    res.send({
      msg: `Producto con el id ${idProduct} eliminado del carrito con id ${idCart}`,
      data: containerCarts[indexCart]
    });
  } catch (error) {
    console.log(error);
  }
});

//exportar ruta
export default routeCart;
