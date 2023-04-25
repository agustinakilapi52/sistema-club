import { Router } from "express";
import { CategoriaController } from "../controllers/categoria.controller";
const enrutadorCategoria = Router();
let categoriaControllers = new CategoriaController();

enrutadorCategoria.route('/categoria').get(categoriaControllers.listarCategoria);
enrutadorCategoria.route('/categoria').post(categoriaControllers.guardarCategoria);
enrutadorCategoria.route('/categoria/:id_categoria_socio').delete(categoriaControllers.eliminarCategoria);
enrutadorCategoria.route('/categoria/:id_categoria_socio').put(categoriaControllers.actualizarCategoria);
enrutadorCategoria.route('/categoria/:id_categoria_socio').get(categoriaControllers.obtenerUnCategoria);

export default enrutadorCategoria;