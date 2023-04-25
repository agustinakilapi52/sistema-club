"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoController = void 0;
const dabase_1 = require("../dabase");
class PagoController {
    //listado de pago 
    listarPagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dabase = yield (0, dabase_1.conexion)();
            let pagos = yield dabase.query('select * from pagos');
            return res.json(pagos);
        });
    }
    //guardado de pagos
    guardarpagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecion con la base de datos 
            const db = yield (0, dabase_1.conexion)();
            let pagos = req.body;
            yield db.query('insert into pagos set ?', [pagos]);
            return res.json('el pago fue guardada exitosamente');
        });
    }
    eliminarPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield (0, dabase_1.conexion)();
            let id = req.params.id_pago;
            yield db.query('delete from pagos where id_pago = ?', [id]);
            return res.json('El pago se elimino correctamente');
        });
    }
    actualizarPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dabase_1.conexion)();
            let codigo = req.params.id_pago;
            let actualizar = req.body;
            yield db.query("update pagos set ? where id_pago = ?", [actualizar, codigo]);
            return res.json('Se actualizo el pago exitosamente');
        });
    }
    obtenerUnPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dabase_1.conexion)();
            let id = req.params.id_pago;
            let unPago = yield db.query("select * from pagos where id_pago = ?", [id]);
            return res.json(unPago[0]);
        });
    }
}
exports.PagoController = PagoController;
