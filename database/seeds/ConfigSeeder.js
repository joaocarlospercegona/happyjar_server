"use strict";

const ConfigEmpresa = use("App/Models/ConfigEmpresa");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class ConfigSeeder {
  async run() {
    let config = await ConfigEmpresa.query().first();
    if (config === null) {
      config.data_termo = new Date();
      config.data_privacidade = new Date();
      config.versao = "v.1.0.0";
    }
  }
}

module.exports = ConfigSeeder;
