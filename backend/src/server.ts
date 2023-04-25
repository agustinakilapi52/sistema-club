import express, { Application } from "express";

import morgan  from "morgan";

import cors  from "cors";
import enrutadorIndex from "./routes/index.routes";
import enrutadorPagos from "./routes/pagos.routes";
import enrutadorSocio from "./routes/socio.routes";
import enrutadorCategoria from "./routes/categoria.routes";
import enrutadorActividad from "./routes/actividad.routes";
import enrutadorAut from "./routes/autenticacion.routes";



// import  enrutadorPagos  from "./routes/pagos.routes";

export class server {
// atributo de la clase 
// application es un atributo que pertenece a express
    app:Application;
    //lo primero q se ejecuta
    constructor()
    {
        this.app = express();
        this.configuracion();
        this.middleware();
        this.routes();
        
    }
  

    configuracion()
    {
        this.app.set('*', process.env.port || 3030);
    }
    //hacer uso de las rutas creadas en index.routes
    routes()
    {
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorPagos);
        this.app.use(enrutadorSocio);
        this.app.use(enrutadorCategoria);
        this.app.use(enrutadorActividad);
        this.app.use(enrutadorAut);
    }

    middleware()
    {
        this.app.use(express.json());

        //mustra de las peticiones
        this.app.use(morgan('dev'));

        this.app.use(cors());
       

    }
 
    // metodo encargado de correr el servidor bajo un puerto determinado 
    listen()
    {
       ;
        this.app.listen(this.app.get('*'));
        console.log('servidor corriendo');
    }
    
}