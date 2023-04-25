"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
function principal() {
    const servidor = new server_1.server();
    servidor.listen();
}
principal();
