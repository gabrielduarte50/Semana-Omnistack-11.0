//index-- principal
//definindo constantes que importaremos funcionalidades dos modulos
const express = require("express");

//constante que armazena a aplicaçao --rotas, funçoes...
const app = express();

//a arrow function rescebe a req e a resp
app.get("/", (req, res) => {
  return res.json({
    evento: "SemanaOmni",
    aluno: "Duarte"
  });
});

//lendo a porta -- Métodos HTTP...
app.listen(3333);
