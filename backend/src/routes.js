const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const LoginController = require('./controller/LoginController');

const routes = express.Router();

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email(),
    whatsapp: Joi.number().required().min(10).max(11) ,
    city: Joi.string().required(),
    uf: Joi.string().required().length(2), 
  })
}), OngController.create);

routes.get('/ongs', OngController.list);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}),IncidentController.list);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.listId);
routes.post('/sessions', LoginController.create);

module.exports = routes;