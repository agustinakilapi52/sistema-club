import { Response, Request } from "express";

export function mesajeBienvenida(re1:Request, res:Response)
{
    //responde un msj en formate json
    res.json("ruta principal");
}