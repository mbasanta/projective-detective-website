var app = require('ampersand-app');
var Router = require('ampersand-router');
var PublicPage = require('./pages/public.js');

module.exports = Router.extend({

  routes: {
    '': 'public'
  },

  public: function() {
    app.trigger('page', new PublicPage());
  }

});

