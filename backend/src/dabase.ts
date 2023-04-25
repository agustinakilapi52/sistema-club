import { createPool } from "promise-mysql";

export async function conexion()
{
    const conexion = await createPool({
        host:'localhost',
        user:'root',
        password:'',
        database:'futgol'
        //host: 'localhost',
        //user: 'agustin2_agus1',
       // password: 'basededatos1',
       // database: 'agustin2_futgol'
    });

    return conexion;
}

