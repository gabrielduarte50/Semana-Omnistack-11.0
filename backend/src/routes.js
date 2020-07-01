const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router(); //desacoplamanos as rotas do express

//----POST--- Route from "create" a Login
routes.post("/sessions", SessionController.create);
//----GET----  List all ONG's
routes.get("/ongs", OngController.index);

//----POST----  Create a ONG
routes.post(
  "/ongs",
  celebrate({
    //validaremos todos os tipos de parametros
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required.length(2),
    }),
  }),
  OngController.create
); //vem antes do create, pois a ordem faz a validaçao primeiro

//----GET----  List all Incident
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);

//----POST----  Create a Incident
routes.post("/incidents", IncidentController.create);

//----DELETE---  Delete a especific Incident
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
);

//----GET----  List all Incidents of ONG
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Join.string.required(),
    }).unknown(),
  }),
  ProfileController.index
);

//exportar uma variavel de um arquivo
module.exports = routes;

/******
 * ASYNC antes da arrow funtion é para indicar que ela
 * executara, mas esperará a AWAIT que está com outra funçao
 *
 * EX: async (req,res)
 * ....
 * await connection()
 *
 *
 * Validação se da pelo celebrate, que integra o JOI com o Express
 * -- deve vim junto com a parte de rotas
 * **/
