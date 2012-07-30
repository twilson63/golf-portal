var resourceful = require('resourceful');

// App
module.exports = resourceful.define('app', function(){
  this.use('couchdb', {database: 'golf'});
  this.timestamps();
});