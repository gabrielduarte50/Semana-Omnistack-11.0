const knex = require("knex");

//variavel de ambiente node para test
const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const configuration = require("../../knexfile");
//conexao a partir do tipo de banco e modo que usamos
const connection = knex(config);

module.exports = connection;
