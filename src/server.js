// referencia
// modulo
// top-level function
// other functions de um modulo


// require() é uma funcao do NodeJS
// ela recebe um nome de um modulo, que no nosso caso é "express"
// como retorno, ela retorna uma referencia pro modulo, que pode ser usada
// para chamar funcao top-level do modulo como outras funcoes tbm.
const express = require("express");

// tenho referencia do modulo "express" criada e assignada pra variavel constante
// chamada express_module.

// O modulo "express" tem um top-level function que quando chamada retorna
// um objecto "Express", que denota o servidor HTTP. Temos que configura-lo depois.

const server = express();
const staticHandler = express.static("public");

server
    .use(staticHandler)

    .get("/", (req, res) => {
        return res.sendFile(__dirname + "/views/index.html")
    })

    .get("/study", (req, res) => {
        return res.sendFile(__dirname + "/views/study.html")
    })

    .get("/give-classes", (req, res) => {
        return res.sendFile(__dirname + "/views/give-classes.html")
    })

    .listen(5500);
