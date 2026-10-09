// importo Apenas o createServer do modulo http do node
const {createServer} = require("node:http");

//define o endereco do servidor (localhost)
const hostname = '127.0.0.1';

//define a porta onde o servidor vai rodar.
const port = 3000;

//criar nosso servidor
//essa funcao sera executada toda vez que alguem acessar o servidor
const server = createServer((req, res) => {

//defina o sattus code da resposta (200 = OK/Sucesso)
res.statusCode = 200;

//defina  o tipo de conteudo da resposta
//aqui estamos referindo a um texto simples (texto/plain)
res.setHeader('Content-Type', 'text/plain');

//Envia a resposta ao "cliente /usuario " e finaliza a requisiçao
res.end("hello Node");
});

//faz o servidor "escutar" na porta e endereco que definimos anteriomente
//Assim que o servidor  for executado , ele 
server.listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`);
});

