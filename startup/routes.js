const express = require('express');
const users = require('../routes/users');
const worldObjects = require('../routes/worldObjects');
const error = require('../middleware/error');

module.exports = function(app){
  app.use('/users', users );    
  app.use('/worldobjects', worldObjects );  
  app.use(error);  
}
