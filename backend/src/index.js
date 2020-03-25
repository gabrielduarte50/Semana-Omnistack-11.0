//index-- principal
//definindo constantes que importaremos funcionalidades dos modulos
const express = require("express");

//constante que armazena a aplicaçao --rotas, funçoes...
const app = express();
const cors = require("cors");
//importando o arquivo de rotas
const routes = require("./routes");

app.use(cors());
//transforamr JSON em JS
app.use(express.json());
app.use(routes);
//a arrow function rescebe a req e a resp

/*
 **** METODOS HTTP *****
 *
 *GET: busca uma informação do back-end
 *POST: crio uma informação no back-end
 *PUT: atualizo/modifico uma informação no back-end
 *DELETE: deletar uma informação no back-end
 *
 **** TIPOS DE PARAMETROS ****
 *
 * Acesso: const X = req.query ou params ou body
 *Query: parametros(nomeados) enviados na rota depois do ? e servem para filtros,paginas...
 *Params: identificar recursos (coisas do banco, ex: lista users do banco usamos uma ID)
 *Body: corpo da requisição -criar ou alterar os recursos
 *
 * **** BANCO DE DADOS ****
 *
 * Usaremos SQL()
 * SQL: MySql,SQLite, PostgreSQL, oracle --- formato q comunica com a appp
 * NoSQL:MongoDB,CouchDB ...
 *
 * SQL é linguagem universal e é usado como parte do codigo
 * SQL é o mais utilizado no mercado,e permite manter estrutura muito melhor
 *
 * ***ESTRUTURA DO BANCO****
 *
 * Driver é para comunicação e é o pacote oficial do banco para node
 * Driver: SELECT + FROM users
 *
 * Query Builder usa Java Script e assim é mais universal
 * Query Builder: table('users').select('*').where()
 *
 * useremos o knex que um query builder e sqlite3
 * executamos npx tb para executar um pacote
 */

//lendo a porta -- Métodos HTTP...
app.listen(3333);

/*
 *Trabalhando com REQUISIÇOES e RESPOSTA em formato JSON
 * JSON é o meio correto para criar um API
 *Com testes sendo feitos com o Insominia
 */
