//importar funcion del dto
import {asDto} from "../dto/products"

//importar dao
import { getDaoCart,getDaoProducts } from "../daos/daos"

export default class MainRepository{
    constructor(){
        this.daoCart = getDaoCart(),
        this.daoProducts = getDaoProducts()
    }


    //funcion cart
      async getAllCartProducts (id)  {
        try {
          const cart = await this.daoCart.getAllCartProducts(id)
      
          //productos dentro del carrito
          const productsCart = cart.products;
          console.log(productsCart);
      
          return productsCart;
        } catch (error) {
          console.log(error);
        }
      };
      
      //funcion products
      async getAll () {
        try {
          //traer productos de la base de datos
          const products = await this.daoProducts.getAll();
          //const user=req.user
          return asDto(products);
        } catch (error) {
          console.log(error);
        }
      };

      
      
}