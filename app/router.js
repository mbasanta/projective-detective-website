var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home.js');

module.exports = Router.extend({

  routes: {
    '': 'home'
  },

  home: function() {
    app.trigger('page', new HomePage());
  }

});

