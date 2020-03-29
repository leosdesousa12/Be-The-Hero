const express = require('express');
const routes = require('./routes');
const cors = require('cors');
//creat application
const app = express();

//Convert json to object js

app.use(cors());
app.use(express.json());
app.use(routes);



//set port application
app.listen(3333);

