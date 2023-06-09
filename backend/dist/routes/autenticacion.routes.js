"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autenticacion_controller_1 = require("../controllers/autenticacion.controller");
const autenticacionController = new autenticacion_controller_1.AutenticacionController();
const enrutadorAut = (0, express_1.Router)();
enrutadorAut.route('/registro').post(autenticacionController.registrar);
enrutadorAut.route('/ingreso').post(autenticacionController.ingresar);
exports.default = enrutadorAut;
