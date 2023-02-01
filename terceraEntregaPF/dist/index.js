"use strict";

var _server = _interopRequireDefault(require("./services/server"));
var _DB = require("./services/DB");
var _credentials = require("./credentials/credentials");
var _loggers = _interopRequireDefault(require("./services/loggers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar server y coneccion a la base de datos

//importar credenciales

//importar loggs

var PORT = _credentials.credentials.PORT;

//poner a escuchar al server y iniciar coneccion a base de datos
var init = function init() {
  (0, _DB.initMongoose)();
  _server["default"].listen(PORT, function () {
    _loggers["default"].info("Escuchando en el puerto ".concat(PORT));
  });
};
init();