var Collection = require('ampersand-collection');
var SongModel = require('./song.js');

module.exports = Collection.extend({
  model: SongModel
});

