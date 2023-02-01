"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.credentials = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar librerias

_dotenv["default"].config();
var credentials = {
  StringConnection: process.env.MONGO_ATLAS,
  PORT: process.env.PUERTO,
  CRYPTO: process.env.CRYPTO,
  SECRET: process.env.SECRET,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  PORT_GMAIL: process.env.PORT_GMAIL,
  TOKEN: process.env.TOKEN,
  SID: process.env.SID,
  CEL_TWILIO: process.env.CEL_TWILIO
};
exports.credentials = credentials;