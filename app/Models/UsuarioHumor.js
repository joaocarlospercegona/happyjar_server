"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class UsuarioHumor extends Model {
  static get table() {
    return "usuario_humores";
  }
}

module.exports = UsuarioHumor;
