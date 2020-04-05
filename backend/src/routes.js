const express = require('express');
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const LoginController = require('./controller/LoginController');

const routes = express.Router();

routes.post('/ongs', OngController.create);

routes.get('/ongs', OngController.list);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.list);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.listId);
routes.post('/sessions', LoginController.create);

module.exports = routes;