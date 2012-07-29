var resourceful = require('resourceful');

// Event
module.exports = resourceful.define('event', function(){
  this.use('couchdb', {database: 'golf'});
  this.timestamps();
});