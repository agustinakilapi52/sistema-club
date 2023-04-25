"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const socio_controllers_1 = require("../controllers/socio.controllers");
const enrutadorSocio = (0, express_1.Router)();
let socioControllers = new socio_controllers_1.SocioController();
enrutadorSocio.route('/socio').get(socioControllers.listarSocio);
enrutadorSocio.route('/socio').post(socioControllers.guardarSocio);
enrutadorSocio.route('/socio/:id_socio').delete(socioControllers.eliminarSocio);
enrutadorSocio.route('/socio/:id_socio').put(socioControllers.actualizarSocio);
enrutadorSocio.route('/socio/:id_socio').get(socioControllers.obtenerUnSocio);
exports.default = enrutadorSocio;
