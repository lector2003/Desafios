"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreOpcion = void 0;
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _credentials = require("../credentials/credentials");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar librerias

//importar credenciales

//configuracion de las sesiones
var StoreOpcion = {
  store: _connectMongo["default"].create({
    mongoUrl: _credentials.credentials.StringConnection,
    crypto: {
      secret: _credentials.credentials.CRYPTO
    }
  }),
  secret: _credentials.credentials.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 180 * 10000000000000
  }
};
exports.StoreOpcion = StoreOpcion;