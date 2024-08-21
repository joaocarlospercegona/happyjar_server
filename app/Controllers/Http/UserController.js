"use strict";
const Env = use("Env");
const Usuario = use("App/Models/User");
const Token = use("App/Models/Token");

class UserController {
  async verificandoTermosPrivacidade({ request, pagination, params, auth }) {
    try {
      let user = await Usuario.query().where("id", params.id).first();
      return user
        ? user
        : response.status(400).send({
            error: {
              message: "Falha ao alterar escolha do usuário!",
              e: error.toString(),
            },
          });
    } catch (error) {
      return response.status(400).send({
        error: {
          message: "Erro ao encontrar o Usuario!",
          e: error.toString(),
        },
      });
    }
  }

  async aceitarTermosePrivacidade({ params, request }) {
    try {
      let dados = request.all();
      let usuario = await Usuario.query().where("id", params.id).first();
      if (usuario) {
        usuario.termos = dados.termos;
        usuario.privacidade = dados.privacidade;
        await usuario.save();
      }
      return usuario
        ? usuario
        : response.status(400).send({
            error: {
              message: "Falha ao alterar escolha do usuário!",
              e: error.toString(),
            },
          });
    } catch (error) {
      return response.status(400).send({
        error: {
          message: "Erro ao realizar a solicitação desejada!",
          e: error.toString(),
        },
      });
    }
  }

  async deletarConta({ params, request, auth }) {
    try {
      const usuario = await Usuario.query().where("id", params.id).first();
      if (usuario) {
        await Token.query().where("user_id", params.id).delete();
        await usuario.delete();
      }
      return usuario
        ? usuario
        : response
            .status(400)
            .send({ error: { message: "Erro ao deletar o item solicitado!" } });
    } catch (error) {
      return response.status(400).send({
        error: {
          message: "Erro ao deletar o item solicitado!",
          e: error.toString(),
        },
      });
    }
  }
}

module.exports = UserController;
