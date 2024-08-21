"use strict";

const Usuario = use("App/Models/User");
/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UsuarioSeeder {
  async run() {
    let usuario = await Usuario.findBy("email", "admin@admin.com");
    if (usuario === null) {
      usuario = new Usuario();
      usuario.nome = "Admin";
      usuario.email = "admin@admin.com";
      usuario.password = "admin";
      await usuario.save();
    }
  }
}

module.exports = UsuarioSeeder;
