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
exports.CategoriaController = void 0;
const dabase_1 = require("../dabase");
class CategoriaController {
    //listado de pago 
    listarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dabase = yield (0, dabase_1.conexion)();
            let categoria = yield dabase.query('select * from categoria');
            return res.json(categoria);
        });
    }
    guardarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecion con la base de datos 
            const db = yield (0, dabase_1.conexion)();
            let categoria = req.body;
            yield db.query('insert into categoria set ?', [categoria]);
            return res.json('la categoria fue guardada exitosamente');
        });
    }
    eliminarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield (0, dabase_1.conexion)();
            let id = req.params.id_categoria_socio;
            yield db.query('delete from categoria where id_categoria_socio = ?', [id]);
            return res.json('la categoria se elimino correctamente');
        });
    }
    actualizarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dabase_1.conexion)();
            let codigo = req.params.id_categoria_socio;
            let actualizar = req.body;
            yield db.query("update categoria set ? where id_categoria_socio = ?", [actualizar, codigo]);
            return res.json('la categoria se actualizo exitosamente');
        });
    }
    obtenerUnCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dabase_1.conexion)();
            let id = req.params.id_categoria_socio;
            let unacategoria = yield db.query("select * from categoria where id_categoria_socio = ?", [id]);
            return res.json(unacategoria[0]);
        });
    }
}
exports.CategoriaController = CategoriaController;
