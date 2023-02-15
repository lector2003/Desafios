//importar librerias
import { v4 as uuidv4 } from "uuid";

//importar modelo de productos
import modelProducts from "./schemas/products.js";



//mostrar todos los productos
export const getAll = async () => {
  try {
    //traer productos de la base de datos
    const products = await modelProducts.find();
    //const user=req.user
    return products;
  } catch (error) {
    console.log(error);
  }
};

//mostrar producto por id
export const getAllById = async (id) => {
  try {
    //sacar id de req.params
    //const {id}=req.params

    //producto segun su id
    const product = await modelProducts.findById(id);

    //res.json({product})
    return product;
  } catch (error) {
    // logger.error(error)
  }
};

//borrar producto segun su id
export const deleteById = async (id) => {
  try {
    await modelProducts.findByIdAndDelete(id);

    return;
  } catch (error) {
    console.log(error);
  }
};

//guardar producto a labase de datos
export const save = async (prod) => {
  try {
    //crear producto
    const product = {
      name,
      description,
      code: uuidv4(),
      price,
      stock,
      image,
    };

    //guardar producto
    await modelProducts(product);

    const document = await modelProducts.create(prod);

    return document;
  } catch (error) {
    console.log(error);
  }
};
