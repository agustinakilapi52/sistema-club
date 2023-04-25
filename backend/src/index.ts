import { server } from "./server";

function principal(){
    const servidor = new server();
    servidor.listen();
}
principal();