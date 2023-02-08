//imortar models
import modelCart from "./schemas/cart";
import modelProducts from "./schemas/products";

//crear carrito
export const createCart = async () => {
  try {
    const newCart = {
      products: [],
    };

    //guardar carrito en la base de datos
    const cart = await modelCart(newCart);
    await modelCart.create(cart);
    //logger.info("carrito creado")
    return cart;
  } catch (error) {
    // logger.error(error)
    // logger.error("No se creo el carrito")
  }
};

export const deleteCart = async (id) => {
  try {
    const cart = modelCart.findById(id);

    await modelCart.findByIdAndDelete(id);
    return cart;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCartProducts = async (id) => {
  try {
    const cart = await modelCart.findById(id);

    //productos dentro del carrito
    const productsCart = cart.products;
    console.log(productsCart);

    return productsCart;
  } catch (error) {
    console.log(error);
  }
};

export const saveProductsCart = async (idCart, idProd) => {
  try {
    //buscar producto en la base de datos
    const product = await modelProducts.findById(idProd);

    //traer carrito
    const cart = await modelCart.findById(idCart);

    //agregar producto al array del carrito
    cart.products.push(product);
    console.log(cart);
    //modificar carrito
    await modelCart.findByIdAndUpdate(idCart, cart, { new: true });

    return cart;
  } catch (error) {
    console.log(error);
  }
};

//borrar producto por id
export const deletePorductCart = async (idCart, idProd) => {
  try {
    //traer carrito
    const cart = await modelCart.findById(idCart);

    //traer indice del producto
    const ind = cart.products.findIndex((prod) => prod._id == idProd);

    console.log(ind);

    //validacion
    if (ind < 0 || ind > cart.products) {
      return "Producto no encontrado";
    }

    //borrae producto
    cart.products.splice(ind, 1);

    await modelCart.findByIdAndUpdate(id, cart), { new: true };

    return cart;
  } catch (error) {
    console.log(error);
  }
};
