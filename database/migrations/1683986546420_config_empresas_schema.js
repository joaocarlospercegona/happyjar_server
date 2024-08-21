"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ConfigEmpresasSchema extends Schema {
  up() {
    this.create("config_empresas", (table) => {
      table.increments();
      table.text("termos");
      table.text("privacidade");
      table.timestamp("data_termo");
      table.timestamp("data_privacidade");
      table.string("versao");
      table.timestamps();
    });
  }

  down() {
    this.drop("config_empresas");
  }
}

module.exports = ConfigEmpresasSchema;
