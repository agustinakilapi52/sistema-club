import { conexion } from "../dabase";
import { Request, Response } from "express";
import { Isocio } from "../models/socio";

export class SocioController{

     //listado de socio
     public async listarSocio(req:Request, res:Response)
     {
        const dabase = await conexion();

        let socio = await dabase.query('select * from socio');
        return res.json(socio);
  
     }
     public async guardarSocio(req:Request, res:Response)
     {
         //conecion con la base de datos 
         const db = await conexion();
 
         let socio:Isocio = req.body;
 
         await db.query('insert into socio set ?',[socio]);
 
         return res.json('el socio fue guardada exitosamente');

     }
     public async eliminarSocio(req:Request, res:Response)
     {
         //conexion con la base de datos 
         const db = await conexion();
         let id = req.params.id_socio;
         await db.query('delete from socio where id_socio = ?',[id]);
         return res.json('El socio se elimino correctamente');

     }
     public async actualizarSocio(req:Request, res:Response)
     {
        const db = await conexion();
        let codigo = req.params.id_socio; 

        let actualizar = req.body;

        await db.query("update socio set ? where id_socio = ?",[actualizar,codigo]);
  
        return res.json('Se actualizo exitosamente');

     }

     public async obtenerUnSocio(req:Request,res:Response)
    {
        const db = await conexion();

        let id = req.params.id_socio;

        let unSocio = await db.query("select * from socio where id_socio = ?",[id]);

        return res.json(unSocio[0]);
    }
}