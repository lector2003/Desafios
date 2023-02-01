"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSigNup = exports.renderLogin = exports.renderIndex = exports.renderErrSignup = exports.renderErrLogin = exports.logOut = void 0;
//renderizar el inicio
var renderIndex = function renderIndex(req, res) {
  res.render("index");
};

//renderizar form del login
exports.renderIndex = renderIndex;
var renderLogin = function renderLogin(req, res) {
  res.render("login");
};

//renderizar form del signup
exports.renderLogin = renderLogin;
var renderSigNup = function renderSigNup(req, res) {
  res.render("signup");
};

//renderizar vista de error de logeo
exports.renderSigNup = renderSigNup;
var renderErrLogin = function renderErrLogin(req, res) {
  res.render("errLogin");
};

//renderizar vista de error de signup
exports.renderErrLogin = renderErrLogin;
var renderErrSignup = function renderErrSignup(req, res) {
  res.render("errSignup");
};

//logout
exports.renderErrSignup = renderErrSignup;
var logOut = function logOut(req, res) {
  req.session.destroy();
  res.redirect("/api/inicio");
};
exports.logOut = logOut;