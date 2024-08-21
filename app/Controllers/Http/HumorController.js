"use strict";
const Env = use("Env");
const Usuario = use("App/Models/User");
const Database = use("Database");
const UsuarioHumor = use("App/Models/UsuarioHumor");
class HumorController {
  async criarHumor({ request, auth }) {
    try {
      const dados = request.all();
      const humor = await UsuarioHumor.create({
        user_id: dados.user_id,
        nota: dados.nota,
      });
      return humor
        ? humor
        : response.status(400).send({
            error: {
              message: "Falha ao criar o humor informado!",
              e: error.toString(),
            },
          });
    } catch (error) {
      return response.status(400).send({
        error: {
          message: "Erro ao criar o humor informado!",
          e: error.toString(),
        },
      });
    }
  }
}

module.exports = HumorController;
