import { Router } from "express";
import { PagoController } from "../controllers/pagos.controllers";
const enrutadorPagos = Router();
let pagosControllers = new PagoController();

enrutadorPagos.route('/pagos').get(pagosControllers.listarPagos);
enrutadorPagos.route('/pagos').post(pagosControllers.guardarpagos);
enrutadorPagos.route('/pagos/:id_pago').delete(pagosControllers.eliminarPago);
enrutadorPagos.route('/pagos/:id_pago').put(pagosControllers.actualizarPago);
enrutadorPagos.route('/pagos/:id_pago').get(pagosControllers.obtenerUnPago);

export default enrutadorPagos;