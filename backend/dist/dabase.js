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
exports.conexion = void 0;
const promise_mysql_1 = require("promise-mysql");
function conexion() {
    return __awaiter(this, void 0, void 0, function* () {
        const conexion = yield (0, promise_mysql_1.createPool)({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'futgol'
            //host: 'localhost',
            //user: 'agustin2_agus1',
            // password: 'basededatos1',
            // database: 'agustin2_futgol'
        });
        return conexion;
    });
}
exports.conexion = conexion;
