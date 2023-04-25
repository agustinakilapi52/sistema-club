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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionController = void 0;
const dabase_1 = require("../dabase");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AutenticacionController {
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // un salt genera un fragmento unico y no repetitivo
            const salt = yield bcryptjs_1.default.genSalt(10);
            //bcrypt genera un cifrado utilizando un hash junto con la contraseña ingresada
            const password_cifrada = yield bcryptjs_1.default.hash(req.body.password, salt);
            const unUsuario = {
                username: req.body.username,
                password: password_cifrada,
                email: req.body.email
            };
            const base = yield (0, dabase_1.conexion)();
            //guardar los datos del usuario en la constante resultado
            const resultado = yield base.query('insert into usuario set ?', [unUsuario]);
            //guardar el token generado en la constante token 
            const token = jsonwebtoken_1.default.sign({ _id: resultado.insertId }, process.env.TOKEN_SECRET || '12qwaszx');
            res.json(token);
        });
    }
    ingresar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield (0, dabase_1.conexion)();
            const usuario = yield base.query('select * from usuario where username = ?', [req.body.username]);
            if (!usuario[0]) {
                res.json('usuario o contraseña incorrecta');
            }
            else {
                //comparar la contraseña ingresada con las guardadas en la base
                const correctPassword = yield bcryptjs_1.default.compare(req.body.password, usuario[0].password);
                if (!correctPassword) {
                    res.json('contraseña incorrecta');
                }
                else {
                    const token = jsonwebtoken_1.default.sign({ _id: usuario[0].id_usuario }, process.env.TOKEN_SECRET || '12qwaszx', {
                        expiresIn: 60 * 60 * 24
                    });
                    res.json(token);
                }
            }
        });
    }
}
exports.AutenticacionController = AutenticacionController;
