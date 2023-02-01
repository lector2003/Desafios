"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _winston = _interopRequireWildcard(require("winston"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//importar librerias 

//importar componentes de formato
var colorize = _winston.format.colorize,
  timestamp = _winston.format.timestamp,
  combine = _winston.format.combine,
  printf = _winston.format.printf;

//formato de los logs 
var confWinston = {
  transports: [new _winston["default"].transports.Console({
    level: "info"
  }), new _winston["default"].transports.File({
    level: "error",
    filename: "./loggs/logs.error.log"
  }), new _winston["default"].transports.File({
    level: "warn",
    filename: "./loggs/logs.warn.log"
  })],
  format: combine(colorize(), timestamp({
    format: "MMM-DD-YYYY HH:mm:ss"
  }), printf(function (info) {
    return "".concat(info.level, "||").concat([info.timestamp], "||").concat(info.message);
  }))
};
var logger = _winston["default"].createLogger(confWinston);
var _default = logger;
exports["default"] = _default;