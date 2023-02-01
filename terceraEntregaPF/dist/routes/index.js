"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRoute = void 0;
var _express = require("express");
var _os = _interopRequireDefault(require("os"));
var _cluster = _interopRequireDefault(require("cluster"));
var _minimist = _interopRequireDefault(require("minimist"));
var _loggers = _interopRequireDefault(require("../services/loggers"));
var _session = require("./session");
var _products = require("./products");
var _cart = require("./cart");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar librerias

//importar loggs

//importarrutas secundarias

//declarar la ruta principal
var mainRoute = (0, _express.Router)();

//nucleos de la pc
exports.mainRoute = mainRoute;
var numCpus = _os["default"].cpus.length;

//obtener los argumentos pasados
var arg = (0, _minimist["default"])(process.argv.slice(2));

//modo cluster
var modCluster = arg.cluster;

//logica de pasar a modo cluster o a modo fork
if (modCluster && _cluster["default"].isPrimary) {
  _loggers["default"].info("se activo modo cluster");
  var clusterRouter = (0, _express.Router)();
  clusterRouter.use("/", mainRoute);
  for (var i = 0; i < numCpus; i++) {
    _cluster["default"].fork();
    //ruta de sessiones
    mainRoute.use("/", _session.sessionRoute);
    //ruta de productos
    mainRoute.use("/products", _products.productsRoute);

    //ruta del carrito
    mainRoute.use("/cart", _cart.cartRoute);
  }
  _cluster["default"].on("exit", function (worker) {
    _loggers["default"].error("no se murio el server");
    _loggers["default"].info("Worker ".concat(worker.process.pid, " died at ").concat(Date()));
    _cluster["default"].fork();
  });
} else {
  var forkRoute = (0, _express.Router)();
  forkRoute.use("/", mainRoute);
}

//ruta de sessiones
mainRoute.use("/", _session.sessionRoute);

//ruta de productos
mainRoute.use("/products", _products.productsRoute);

//ruta del carrito
mainRoute.use("/cart", _cart.cartRoute);