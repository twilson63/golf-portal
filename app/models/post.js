var resourceful = require('resourceful');

// Post
module.exports = resourceful.define('post', function(){
  this.use('couchdb', {database: 'golf'});
  this.timestamps();
});