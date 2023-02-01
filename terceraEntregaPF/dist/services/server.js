"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _path = _interopRequireDefault(require("path"));
var _session = require("./session");
var _auth = require("./auth");
var _routes = require("../routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//importar librerias

//importar las opcciones de session

//importar funciones de login y signup

//importar ruta principal

//crear server
var app = (0, _express["default"])();

//configuracion express
app.use(_express["default"].json());
app.use((0, _express.urlencoded)({
  extended: true
}));

//configuracion de las sesiones
app.use((0, _expressSession["default"])(_session.StoreOpcion));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());

//configuracion para las funciones de login y signup
_passport["default"].use("login", _auth.loginFuc);
_passport["default"].use("signup", _auth.signupFuc);
var viewPath = _path["default"].resolve(__dirname, "../../views");
app.use(_express["default"]["static"]("public"));
app.set("view engine", "ejs");
app.set("views", viewPath);
app.use("/api", _routes.mainRoute);

//exportar app
var _default = app;
exports["default"] = _default;