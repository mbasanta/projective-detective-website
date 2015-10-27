var app = require('ampersand-app');
var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var localLinks = require('local-links');
var template = require('./templates/body.jade');

module.exports = View.extend({
  template: template,

  autoRender: true,

  events: {
    'click a[href]': 'onLinkClick'
  },

  initialize: function() {
    this.listenTo(app, 'page', this.onPage);
  },

  render: function() {
    this.renderWithTemplate();
    this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'));
  },

  onPage: function(page) {
    this.pageSwitcher.set(page);
  },

  onLinkClick: function(event) {
    var pathname = localLinks.getLocalPathname(event);
    console.log(pathname);

    if (pathname) {
      event.preventDefault();
      app.router.history.navigate(pathname);
    }
  }

});

