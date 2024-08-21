"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioHumoresSchema extends Schema {
  up() {
    this.create("usuario_humores", (table) => {
      table.increments();
      table.integer("user_id").notNullable().unsigned().index();
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("cascade");
      table.integer("nota");
      table.timestamps();
    });
  }

  down() {
    this.drop("usuario_humores");
  }
}

module.exports = UsuarioHumoresSchema;
