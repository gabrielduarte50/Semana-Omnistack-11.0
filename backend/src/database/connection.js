const knex = require("knex");

const configuration = require("../../knexfile");
//conexao a partir do tipo de banco e modo que usamos
const connection = knex(configuration.development);

module.exports = connection;
