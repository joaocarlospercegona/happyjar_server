"use strict";

const Model = use("Model");

class UsuarioMemoria extends Model {
  static get table() {
    return "usuario_memorias";
  }

  usuario() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = UsuarioMemoria;
