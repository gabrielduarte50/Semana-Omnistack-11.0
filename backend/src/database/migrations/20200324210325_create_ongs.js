//usamos a API do Knex para criar as tabelas-- encontramos no git

//metodo UP --- Criação da tabela --- o que ocroore qunado execeuta
exports.up = function(knex) {
  //definimos um schema que cria a tabela para ongs, passando o parametro
  //ongs e ela possui os campos com os nomes e o tipo
  //ela tem chaves(primary)
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};
// dow é para voltar atras, isto é deletar
exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
