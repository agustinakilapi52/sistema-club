import { conexion } from "../dabase";
import { Request, Response } from "express";
import { Icategoria } from "../models/categoria";

export class CategoriaController{

     //listado de pago 
     public async listarCategoria(req:Request, res:Response)
     {
        const dabase = await conexion();

        let categoria = await dabase.query('select * from categoria');
        return res.json(categoria);
  
     }

     public async guardarCategoria(req:Request, res:Response)
     {
         //conecion con la base de datos 
         const db = await conexion();
 
         let categoria:Icategoria= req.body;
 
         await db.query('insert into categoria set ?',[categoria]);
 
         return res.json('la categoria fue guardada exitosamente');

     }

     public async eliminarCategoria(req:Request, res:Response)
     {
         //conexion con la base de datos 
         const db = await conexion();
         let id = req.params.id_categoria_socio;
         await db.query('delete from categoria where id_categoria_socio = ?',[id]);
         return res.json('la categoria se elimino correctamente');

     }
     public async actualizarCategoria(req:Request, res:Response)
     {
        const db = await conexion();
        let codigo = req.params.id_categoria_socio; 

        let actualizar = req.body;

        await db.query("update categoria set ? where id_categoria_socio = ?",[actualizar,codigo]);
  
        return res.json('la categoria se actualizo exitosamente');

     }

     public async obtenerUnCategoria(req:Request,res:Response)
    {
        const db = await conexion();

        let id = req.params.id_categoria_socio;

        let unacategoria = await db.query("select * from categoria where id_categoria_socio = ?",[id]);

        return res.json(unacategoria[0]);
    }
}