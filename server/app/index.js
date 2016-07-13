'use strict';

var app = require('express')();
var path = require('path');
var User = require('../api/users/user.model');
var session = require('express-session');
app.use(session({
  secret: 'tongiscool'
}));


app.use(require('./logging.middleware'));

app.use(require('./request-state.middleware'));


// app.use(require('./session.middleware'));

// place right after the session setup middleware
app.use(function (req, res, next) {
  //console.log('session', req.session);
  next();
});


app.use('/api', function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  //console.log('\n\ncounter', ++req.session.counter);
  next();
});

app.use('/api', require('../api/api.router'));

app.post('/login', function (req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      console.log('did not find user');
      res.sendStatus(401);
    } else {
      console.log('found user');
      req.session.userId = user.id;
      res.sendStatus(200);
    }
  })
  .catch(next);
});

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    console.log('in a state route')
    res.sendFile(indexPath);
  });
});

app.use(require('./statics.middleware'));

app.use(require('./error.middleware'));

module.exports = app;
