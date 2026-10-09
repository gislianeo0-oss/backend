//importamos o modulo http do Node
const http = require("http");

//criamos nosso servidor usando o creteServer
const servidor = http.createServer((req, res) => {

    //Para administarmos as rotas basta mudar a informaçoes da url apso a "/"
    if(req.url === "/") { // se , a url requirida for identic a "/"
        res.end("Pagina Principal");
    }else if(req.url ==="/sobre") { 
        res.end("Pagina sobre o sistema");
    }else if (req.url ==="/noticias") {
        res.end("Pagina de noticias");
    }else if (req.url ==="/contato") {
        res.end("Pagina de contato");
    } else { //se o usuario buscar uma rota que nao trabalhamos
        res.end("Pagina nao encontrada");
    }

});

//Porta onde o servidor estara rodando.
servidor.listen(3000);
