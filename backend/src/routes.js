const express = require("express");

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
routes.post("/ongs", OngController.create);

//----GET----  List all Incident
routes.get("/incidents", IncidentController.index);

//----POST----  Create a Incident
routes.post("/incidents", IncidentController.create);

//----DELETE---  Delete a especific Incident
routes.delete("/incidents/:id", IncidentController.delete);

//----GET----  List all Incidents of ONG
routes.get("/profile", ProfileController.index);

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
 * **/
