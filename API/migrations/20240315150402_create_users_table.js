/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", function(table) {
      table.increments("id").primary();
      table.string("nom");
      table.string("prenom");
      table.integer("age");
      table.string("sexe");
      table.string("localisation");
      table.string("mobilité");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("users");
  };