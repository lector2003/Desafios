"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar librerias

//nombre de la colleccion 
var ColectionProducts = "products";

//crear esquema de productos
var SchemaProducts = new _mongoose["default"].Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  description: {
    type: String,
    require: true,
    max: 200,
    min: 10
  },
  code: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  stock: {
    type: Number,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var modelProducts = new _mongoose["default"].model(ColectionProducts, SchemaProducts);
var _default = modelProducts;
exports["default"] = _default;