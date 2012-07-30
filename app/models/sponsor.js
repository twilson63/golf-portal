var resourceful = require('resourceful');

// Sponsor
module.exports = resourceful.define('sponsor', function(){
  this.use('couchdb', {database: 'golf'});
  this.timestamps();
});