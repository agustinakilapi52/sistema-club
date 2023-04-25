//crear las rutas con express
import { Router } from "express";
import { mesajeBienvenida } from "../controllers/index.controller";

let enrutadorIndex = Router();

enrutadorIndex.route('/msbm/').get(mesajeBienvenida);

export default enrutadorIndex;