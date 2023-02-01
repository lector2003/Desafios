"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar ibrerias

//nombre de la colleccion
var ColectionCarts = "carts";

//crear esquema del carrito
var SchemaCart = new _mongoose["default"].Schema({
  products: {
    type: Array,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});

//crear modelo
var modelCart = new _mongoose["default"].model(ColectionCarts, SchemaCart);
var _default = modelCart;
exports["default"] = _default;