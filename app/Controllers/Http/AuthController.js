"use strict";
const Env = use("Env");
const Usuario = use("App/Models/User");
class AuthController {
  async login({ request, response, auth }) {
    const { email, nome, foto } = request.all();

    let usuario_exist = await Usuario.query().where("email", email).first();

    if (!usuario_exist) {
      usuario_exist = await Usuario.create({
        nome: nome,
        email: email,
        foto: foto,
      });
    }

    let rs = { usuario: usuario_exist.toJSON() };
    try {
      rs.login = await auth.withRefreshToken().attempt(email);
    } catch (e) {
      console.log("e", e);
      return response.status(400).send({
        error: {
          message: "Não foi possível efetuar o login, dados incorretos!",
        },
      });
    }
    return response.status(200).send(rs);
  }
}

module.exports = AuthController;
