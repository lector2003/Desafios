"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientTwilio = void 0;
var _twilio = _interopRequireDefault(require("twilio"));
var _credentials = require("../credentials/credentials");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importar librerias

//importar credenciales

//crear cliente de twilio
var clientTwilio = (0, _twilio["default"])(_credentials.credentials.SID, _credentials.credentials.TOKEN);
exports.clientTwilio = clientTwilio;