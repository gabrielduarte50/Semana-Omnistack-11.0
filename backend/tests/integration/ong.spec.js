const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); //zera o banoc de teste
    await connection.migrate.latest(); //executar as migrations do sistema no proprio teste
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "apada2",
      email: "cont@trst.com",
      whatsapp: "4515114521",
      city: "Rio",
      uf: "SC",
    });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
