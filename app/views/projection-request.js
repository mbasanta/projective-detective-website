var AmpersandView = require('ampersand-view');
var template = require('../templates/views/projection-request.jade');

module.exports = AmpersandView.extend({

  template: template,

  bindings: {
    'model.unknownX': {
      type: 'value',
      hook: 'unknownX'
    },
    'model.unknownY': {
      type: 'value',
      hook: 'unknwonY'
    },
    'model.knownLat': {
      type: 'value',
      hook: 'knwonLat'
    },
    'model.knownLng': {
      type: 'value',
      hook: 'knwonLng'
    },
    'model.numOfMatches': {
      type: 'value',
      hook: 'numOfMatches'
    }
  },

  events: {
    'submit [data-hook=projection-request-form]': 'onFormSubmit'
  },

  render: function() {
    this.renderWithTemplate();
  },

  onFormSubmit: function(event) {
    event.preventDefault();
    console.log(this.model.numOfMatches);
  }

});

