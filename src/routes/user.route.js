const route = require('express').Router();
const userController = require('../controllers/user.controller');

route.get('/', () => { }); // GET /api/users

exports.module = route;