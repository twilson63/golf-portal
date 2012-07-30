var resourceful = require('resourceful');

// App
module.exports = resourceful.define('user', function(){
  this.use('couchdb', {database: 'golf'});
  this.timestamps();
});