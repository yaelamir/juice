var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersCtrl = require('../controllers/users');
var ingredientsCtrl = require('../controllers/ingredients');

// Require token authentication.
var token = require('../config/token_auth');

// users resource paths:
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);
router.put( '/users/me', token.authenticate, usersCtrl.update);

router.post('/token', token.create);
router.post('/users/me/token', token.authenticate, token.refresh);

router.post('/ingredients', ingredientsCtrl.create);
router.get('/ingredients',  ingredientsCtrl.index);

module.exports = router;
