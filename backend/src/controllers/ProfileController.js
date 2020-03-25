const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    //seleciona todos os campos de todos os registros
    // no caso, pega a tabela incidents, olha onde a ong bate com a ong e retorna todos dele
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");
    return res.json(incidents);
  }
};
