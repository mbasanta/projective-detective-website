var AmpersandView = require('ampersand-view');

module.exports = AmpersandView.extend({

  template: '<div><span data-hook="name"></span> <span data-hook="email" class="email"></span> <a data-hook="edit">Edit</a></div>',

  events: {
    'mousedown .edit': 'edit'
  },

  bindings: {
    'model.fullName': {
      type: 'innerHTML',
      hook: 'name'
    },
    'model.email': {
      type: 'innerHTML',
      hook: 'email'
    }
  },

  render: function() {
    this.renderWithTemplate(this);
    return this;
  },

  edit: function(e) {
    console.log(e);
    //this.model.edit();
  }

});

