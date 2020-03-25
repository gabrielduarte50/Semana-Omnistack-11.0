//crypto é inato ao node e serve para criptografar e gerar testos aleatorios, logo uma ID
const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*"); //seleciona todos os camposd e todos os registros

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    //criar ID para gerar valores unicos na abela do banco
    const id = crypto.randomBytes(4).toString("HEX");
    //conexão com o banco

    await connection("ongs").insert({
      // inserir os dados
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id }); //retornamos o id pq ele será o login
  }
};
