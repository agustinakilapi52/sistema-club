import { Router } from "express";
import {ActividadController } from "../controllers/actividad.controller";
const enrutadorActividad = Router();
let actividadControllers = new ActividadController();

enrutadorActividad.route('/actividad').get(actividadControllers.listarActividad);
enrutadorActividad.route('/actividad').post(actividadControllers.guardarActividad);
enrutadorActividad.route('/actividad/:id_actividad').delete(actividadControllers.eliminarActividad);
enrutadorActividad.route('/actividad/:id_actividad').put(actividadControllers.actualizarActividad);
enrutadorActividad.route('/actividad/:id_actividad').get(actividadControllers.obtenerUnActividad);

export default enrutadorActividad;