"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("nome", 80).notNullable().unique();
      table.string("email", 254).notNullable().unique();
      table.string("foto", 254);
      table.string("password", 60).notNullable();
      table.boolean("termos").default(false);
      table.boolean("privacidade").default(false);
      table.timestamp("data_termo");
      table.timestamp("data_privacidade");
      table.string("password", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
