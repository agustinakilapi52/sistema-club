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
exports.ActividadController = void 0;
const dabase_1 = require("../dabase");
class ActividadController {
    listarActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dabase = yield (0, dabase_1.conexion)();
            let actividad = yield dabase.query('select * from actividad');
            return res.json(actividad);
        });
    }
    guardarActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dabase_1.conexion)();
            let actividad = req.body;
            yield db.query('insert into actividad set ?', [actividad]);
            return res.json('la actividad fue guardada exitosamente');
        });
    }
    eliminarActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield (0, dabase_1.conexion)();
            let id = req.params.id_actividad;
            yield db.query('delete from actividad where id_actividad = ?', [id]);
            return res.json('la actividad se elimino correctamente');
        });
    }
    actualizarActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dabase_1.conexion)();
            let codigo = req.params.id_actividad;
            let actualizar = req.body;
            yield db.query("update actividad set ? where id_actividad = ?", [actualizar, codigo]);
            return res.json('la actividad se actualizo exitosamente');
        });
    }
    obtenerUnActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dabase_1.conexion)();
            let id = req.params.id_actividad;
            let unaactividad = yield db.query("select * from actividad where id_actividad = ?", [id]);
            return res.json(unaactividad[0]);
        });
    }
}
exports.ActividadController = ActividadController;
