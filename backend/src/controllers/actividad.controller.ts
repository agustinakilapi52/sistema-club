import { conexion } from "../dabase";
import { Request, Response } from "express";
import { Iactividad } from "../models/actividad";

export class ActividadController{

     
     public async listarActividad(req:Request, res:Response)
     {
        const dabase = await conexion();

        let actividad = await dabase.query('select * from actividad');
        return res.json(actividad);
  
     }

     public async guardarActividad(req:Request, res:Response)
     {
        
         const db = await conexion();
 
         let actividad: Iactividad = req.body;
 
         await db.query('insert into actividad set ?',[actividad]);
 
         return res.json('la actividad fue guardada exitosamente');

     }

     public async eliminarActividad(req:Request, res:Response)
     {
         //conexion con la base de datos 
         const db = await conexion();
         let id = req.params.id_actividad;
         await db.query('delete from actividad where id_actividad = ?',[id]);
         return res.json('la actividad se elimino correctamente');

     }
     public async actualizarActividad(req:Request, res:Response)
     {
        const db = await conexion();
        let codigo = req.params.id_actividad; 

        let actualizar = req.body;

        await db.query("update actividad set ? where id_actividad = ?",[actualizar,codigo]);
  
        return res.json('la actividad se actualizo exitosamente');

     }

     public async obtenerUnActividad(req:Request,res:Response)
    {
        const db = await conexion();

        let id = req.params.id_actividad;

        let unaactividad = await db.query("select * from actividad where id_actividad = ?",[id]);

        return res.json(unaactividad[0]);
    }
}