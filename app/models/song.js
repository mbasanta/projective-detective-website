var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({

  initialize: function() {
  },

  props: {
    title: 'string'
  },

  comparator: function(a, b) {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    else if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    else {
      return 0;
    }
  }

});

