import { conexion } from "../dabase";
import { Request, Response } from "express";
import { Ipagos } from "../models/pagos";

export class PagoController{

     //listado de pago 
     public async listarPagos(req:Request, res:Response)
     {
        const dabase = await conexion();

        let pagos = await dabase.query('select * from pagos');
        return res.json(pagos);
  
     }

       //guardado de pagos
    public async guardarpagos(req:Request, res:Response)
    {
        //conecion con la base de datos 
        const db = await conexion();

        let pagos:Ipagos = req.body;

        await db.query('insert into pagos set ?',[pagos]);

        return res.json('el pago fue guardada exitosamente');



    }
    public async eliminarPago(req:Request, res:Response)
    {
        //conexion con la base de datos 
        const db = await conexion();
        let id = req.params.id_pago;
        await db.query('delete from pagos where id_pago = ?',[id]);
        return res.json('El pago se elimino correctamente');

    }
    public async actualizarPago(req:Request, res:Response)
    {
       const db = await conexion();
       let codigo = req.params.id_pago; 

       let actualizar = req.body;

       await db.query("update pagos set ? where id_pago = ?",[actualizar,codigo]);
 
       return res.json('Se actualizo el pago exitosamente');

    }

    public async obtenerUnPago(req:Request,res:Response)
   {
       const db = await conexion();

       let id = req.params.id_pago;

       let unPago = await db.query("select * from pagos where id_pago = ?",[id]);

       return res.json(unPago[0]);
   }

    
}