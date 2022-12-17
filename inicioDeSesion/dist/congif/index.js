"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar librerias

_dotenv["default"].config();
var _default = {
  MONGO_ATLAS: process.env.MONGO_ATLAS,
  SECRET: process.env.SECRET,
  CRYPTO: process.env.CRYPTO
};
exports["default"] = _default;