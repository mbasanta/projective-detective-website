var Model = require('ampersand-model');

module.exports = Model.extend({

  props: {
    unknownX: 'number',
    unknwonY: 'number',
    knownLat: 'number',
    knownLng: 'number',
    numOfMatches: 'number'
  }

});

