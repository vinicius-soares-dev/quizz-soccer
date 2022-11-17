const express = require('express');
const route = express();
const HomeController = require('./src/controllers/HomeController');
const QuizzController = require('./src/controllers/QuizzController');

route.get('/', HomeController.Home);
route.post('/quizz', QuizzController.Quizz);

module.exports = route;