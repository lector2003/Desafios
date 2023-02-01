"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsRoute = void 0;
var _express = require("express");
var _products = require("../controllers/products");
var _products2 = require("../middlewares/products");
var _session = require("../middlewares/session");
//importar librerias

//importar funciones del controller

//importar  middleware

//determinar ruta de productos
var productsRoute = (0, _express.Router)();

//renderizar productos
exports.productsRoute = productsRoute;
productsRoute.get("/", _session.isLogged, _products.getAll);

//guardar productos
productsRoute.post("/", _products2.checkBody, _products.save);