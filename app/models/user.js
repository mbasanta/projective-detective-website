var AmpersandState = require('ampersand-state');
var SongCollection = require('./song-collection.js');

module.exports = AmpersandState.extend({

  initialize: function() {
  },

  props: {
    firstName: 'string',
    lastName: 'string',
    email: 'string'
  },

  collections: {
    songs: SongCollection
  },

  session: {
    signedIn: ['boolean', true, false]
  },

  derived: {
    fullName: {
      deps: ['firstName', 'lastName'],
      fn: function() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  }

});

