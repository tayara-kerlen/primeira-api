
// Importa o módulo HTTP
// const http = require('http');

// import { log } from 'console';

import http from 'http';

const hostname = '127.0.0.1'; // 'localhost'
const porta = '3000';

const server = http.createServer((request, response) => {
    response.status = 200;
    response.setHeader('Contentet-Type', 'text/plain');
    response.end("\nHello world, Node.js\n");
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${porta}`);
});

