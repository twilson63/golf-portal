var resourceful = require('resourceful');

// Player
module.exports = resourceful.define('player', function(){
  this.use('couchdb', {database: 'golf'});
  this.timestamps();
});