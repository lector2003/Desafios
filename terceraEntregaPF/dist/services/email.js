"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;
var _nodemailer = require("nodemailer");
var _credentials = require("../credentials/credentials");
//importar librerias

//importar crendenciales

//configuracion del envio de mail
var transporter = (0, _nodemailer.createTransport)({
  service: "gmail",
  port: _credentials.credentials.PORT_GMAIL,
  auth: {
    user: _credentials.credentials.EMAIL,
    pass: _credentials.credentials.PASSWORD
  }
});
exports.transporter = transporter;