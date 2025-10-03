import http from "http"

const PORT = 300;

const server = http.createServer((request, Response) => {
    const url = request.url;
    const method = request.method;
}

Response.setHeader("content-type", "text/html; charsetutf-8");

if (url === "/") {
    Response.statusCode = 200; // OK=
    Response.end("<h1>Página Inicial</h1>");
}
else if (url === "/sobre" && method === "get") {
    response.statusCode = 200; //OK
    response.end (
        "<h1>Sobre Nós</h1> <p> Esta é uma aplicação de exemplo com Node.js puro. <p>"

    );
}
else if (url === "/contato") {
    response.statusCode= 200; //OK
    respose.end ("<h1>Fale conosco </h1>");
}
else if (url === "/fotos") {
    response.statusCode= 200; //OK
    respose.end ("<h1>Fotos </h1>");
}

else if (url === "/imagens") {
    response.statusCode= 200; //OK
    respose.end ("<h1>oiii aqui é imagens </h1>");
}
else {
    //se nenhuma rota corresponder
    response.statusCode = 404; //not found D:

}
});
//Inicia o servidor na porta definida
server.listen(PORT, () => {
    console.log ('servidor rodandoso em http://localhost:$(POER)');

});