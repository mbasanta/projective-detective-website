var View = require('ampersand-view');
var template = require('../templates/pages/home.jade');
var ProjectionRequestView = require('../views/projection-request.js');
var ProjectionRequestModel = require('../models/projection-request.js');

module.exports = View.extend({

  template: template,

  render: function() {
    this.renderWithTemplate();

    this.renderSubview(new ProjectionRequestView({
      model: new ProjectionRequestModel()
    }), '.container');
  }

});

