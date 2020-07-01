const crypto = require("crypto");
module.exports = function generateUniqueId() {
  //criar ID para gerar valores unicos na abela do banco
  return crypto.randomBytes(4).toString("HEX");
  //conexão com o banco
};
