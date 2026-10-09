// Importa o modulo HTTP do Node.js (nativo)
const http = require('http');
//Cria o servidor
//o createServer recebe uma funcao que sera executasa toda vez em que alguem acessar o servidor
const  servidor = http.createServer((req, res) => {
    //req ->informacoes da requisiçao(request)
    //rest -> resposta que vamo senviar ao cliente (resposte)
res.end("MEU PRIMEIRO SERVIDOR NODE!");
//rest.end envia a mensagem final para o navegador e finaliza a requisiçao

//o req.url mostra qual caminho a pessoa digitou no navegador
//res.end ("Acessansdo o caminho: " + req.url);
});
//Fara o servidor "escutar" na porta 3000 (ESCOLHA POR NOS)
servidor.listen(3000);

//pORTAS COMUNS:
// 80 -> HTTP Padrao
// 443 -> HTTPSl
// 3000 -> desenvolvimento 
//5000 -
//8080 -> desenvolvimento
 