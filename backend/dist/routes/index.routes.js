"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//crear las rutas con express
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
let enrutadorIndex = (0, express_1.Router)();
enrutadorIndex.route('/msbm/').get(index_controller_1.mesajeBienvenida);
exports.default = enrutadorIndex;
