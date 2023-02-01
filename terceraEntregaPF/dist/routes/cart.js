"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartRoute = void 0;
var _express = require("express");
var _cart = require("../controllers/cart");
var _session = require("../middlewares/session");
//importar librerias

//importar funciones del controller

//importar middleware

//declarar ruta del carrito
var cartRoute = (0, _express.Router)();

//renderizar productos dentro del carrito
exports.cartRoute = cartRoute;
cartRoute.get("/:id", _session.isLogged, _cart.getAllCartProducts);

//guardar productos en el carrito
cartRoute.post("/:id/:id_product", _session.isLogged, _cart.saveProductsCart);

//comprar productos
cartRoute.post("/:id", _session.isLogged, _cart.buyProducts);