const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

//creat application
const app = express();

//Convert json to object js

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors()); 



//set port application
app.listen(3333);

