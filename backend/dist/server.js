"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const pagos_routes_1 = __importDefault(require("./routes/pagos.routes"));
const socio_routes_1 = __importDefault(require("./routes/socio.routes"));
const categoria_routes_1 = __importDefault(require("./routes/categoria.routes"));
const actividad_routes_1 = __importDefault(require("./routes/actividad.routes"));
const autenticacion_routes_1 = __importDefault(require("./routes/autenticacion.routes"));
// import  enrutadorPagos  from "./routes/pagos.routes";
class server {
    //lo primero q se ejecuta
    constructor() {
        this.app = (0, express_1.default)();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    configuracion() {
        this.app.set('*', process.env.port || 3030);
    }
    //hacer uso de las rutas creadas en index.routes
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use(pagos_routes_1.default);
        this.app.use(socio_routes_1.default);
        this.app.use(categoria_routes_1.default);
        this.app.use(actividad_routes_1.default);
        this.app.use(autenticacion_routes_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json());
        //mustra de las peticiones
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
    }
    // metodo encargado de correr el servidor bajo un puerto determinado 
    listen() {
        ;
        this.app.listen(this.app.get('*'));
        console.log('servidor corriendo');
    }
}
exports.server = server;
