"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLogged = void 0;
//verificar si hay una sesion iniciada
var isLogged = function isLogged(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/api/inicio");
  }
  next();
};
exports.isLogged = isLogged;