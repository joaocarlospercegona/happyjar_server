"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ConfigEmpresa extends Model {
  static get table() {
    return "config_empresas";
  }
}

module.exports = ConfigEmpresa;
