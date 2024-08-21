"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioMemoriasSchema extends Schema {
  up() {
    this.create("usuario_memorias", (table) => {
      table.increments();
      table.integer("user_id").notNullable().unsigned().index();
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("cascade");
      table.text("memoria");
      table.timestamps();
    });
  }

  down() {
    this.drop("usuario_memorias");
  }
}

module.exports = UsuarioMemoriasSchema;
