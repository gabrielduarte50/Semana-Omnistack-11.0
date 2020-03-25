exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments(); //chave auto incremental

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable(); //numero float

    table.string("ong_id").notNullable(); //relacinal com outro schema
    //chave estrangeira-- pega a refernecia(id) da tabela (ongs)
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
