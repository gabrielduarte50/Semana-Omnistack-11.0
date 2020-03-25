const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    //limitar o numero de incidante num pagina.
    //page=1 é se n existir nenhuma pagina
    const { page = 1 } = req.query;
    //para saber o total usamos count depois o Headers para receber esse dado
    const [count] = await connection("incidents").count();
    console.log(count);
    //limit e ofset é apra isso, manter semrpe 5
    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "*", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);
    console.log(count);
    //seleciona todos os camposd e todos os registros
    //join é para relacionar incidentes com dados de ongs

    res.header("X-total-count", count["count(*)"]);
    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    //o ID do incidente é incremental, como definido no banco de dados
    //mas precisamos de ter o da ONG, para relacioná-los
    //como vai ser um login/user ela vira no cabeçalho da requisiçao
    //usaremos o req.headers -- tem localizaçao.idioma, ou seja, contexto
    const ong_id = req.headers.authorization;
    //o id retorna desestruturado,apenas o 1 valordo array = id
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    }); //seleciona todos os camposd e todos os registros
    return res.json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    //verficifamos se o delete ta na ong dela e nao de outra
    //entrmos no banco incidents, comparamos o id com o id selecionado dentro da ong e pegamos o 1º
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id != ong_id) {
      //se diferente volta o status de erro ou n autorizado
      return res.status(401).json({ error: "Operation not permitted." });
    }
    await connection("incidents")
      .where("id", id)
      .delete();
    return res.status(204).send();
  }
};
