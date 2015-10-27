var app = require('ampersand-app');
var _ = require('lodash');
var domReady = require('domready');
var User = require('./models/user.js');
var MainView = require('./mainView.js');
var Router = require('./router.js');
require('./styles/main.styl');

app.extend({

  user: new User(),

  init: function() {

    this.user.firstName = 'Matthew';
    this.user.lastName = 'Basanta';
    this.user.email = 'matthew@basantamail.com';

    this.user.songs.add({title: 'Cheeseburger in Paradise'});
    this.user.songs.add([
      {title: 'Don\'t Stop Believing'},
      {title: 'Run to You'}
    ]);

    // console.log(this.user.songs.models);

    // this.userView = new UserView({
    //   model: this.user,
    //   el: document.body
    // });

    // this.userView.render();

    this.view = new MainView({
      el: document.body
    });
    this.router = new Router();
    this.router.history.start();

  }
});

domReady(_.bind(app.init, app));

