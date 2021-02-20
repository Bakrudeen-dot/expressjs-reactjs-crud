const bodyParser = require('body-parser');
const express=require('express');
 const app = express();
 const userController = require('./userService.js');
app.use(bodyParser.json());
app.use('/userService', userController);
var server = { port: 8085 };
app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));