var resourceful = require('resourceful');

// Post
module.exports = resourceful.define('photo', function(){
  this.use('couchdb', {database: 'golf'});
  this.timestamps();
});