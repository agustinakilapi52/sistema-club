import { Router } from "express";
import { SocioController } from "../controllers/socio.controllers";

const enrutadorSocio = Router();
let socioControllers = new SocioController();

enrutadorSocio.route('/socio').get(socioControllers.listarSocio);
enrutadorSocio.route('/socio').post(socioControllers.guardarSocio);
enrutadorSocio.route('/socio/:id_socio').delete(socioControllers.eliminarSocio);
enrutadorSocio.route('/socio/:id_socio').put(socioControllers.actualizarSocio);
enrutadorSocio.route('/socio/:id_socio').get(socioControllers.obtenerUnSocio);

export default enrutadorSocio;