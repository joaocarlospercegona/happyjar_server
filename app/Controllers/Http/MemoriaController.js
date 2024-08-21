"use strict";
const Env = use("Env");
const Usuario = use("App/Models/User");
const Database = use("Database");
const UsuarioMemoria = use("App/Models/UsuarioMemoria");
class MemoriaController {
  async criarMemoria({ request, auth }) {
    try {
      const dados = request.all();
      const memoria = await UsuarioMemoria.create({
        user_id: dados.user_id,
        memoria: dados.memoria,
      });
      return memoria
        ? memoria
        : response.status(400).send({
            error: {
              message: "Falha ao criar a memória desejada!",
              e: error.toString(),
            },
          });
    } catch (error) {
      return response.status(400).send({
        error: {
          message: "Erro ao criar a Memória!",
          e: error.toString(),
        },
      });
    }
  }

  async buscarFelicidadeAleatorioa({ request, auth, params }) {
    try {
      let user = await Usuario.query().where("id", params.id).first();
      let memoria_aleatoria = (
        await Database.raw(
          "select id from usuario_memorias where user_id = " +
            user.id +
            "order by RANDOM() LIMIT 1"
        )
      ).rows;
      memoria_aleatoria =
        memoria_aleatoria && memoria_aleatoria.length > 0
          ? memoria_aleatoria[0]
          : memoria_aleatoria;

      return memoria_aleatoria
        ? memoria_aleatoria
        : response.status(400).send({
            error: {
              message: "Falha ao criar a memória desejada!",
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
}

module.exports = MemoriaController;
