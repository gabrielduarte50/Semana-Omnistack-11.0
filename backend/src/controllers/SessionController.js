const connection = require("../database/connection");

//sessao é feita quando estou entrando no sistema, ideia de olha minha vez
module.exports = {
  //o obj é verificar a pessoa, nao necessariamente criar
  async create(req, res) {
    const { id } = req.body;
    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first(); //first retorna a 1 posi, nao um vetor

    if (!ong) {
      return res.status(400).json({ error: "No ONG found with this ID" });
    }
    return res.json(ong);
  }
};
