var Player = require(__dirname + '/../models/player');
// player controller
module.exports = function(app) {
  app.router.get('/players', function(){
    var self = this;
    Player.all(function(err, posts){
      app.render(self.res, 'players/index', { players: players });
    });    
  });

  app.router.get('/players/:id', function(id){
    var self = this;
    Player.get(id, function(err, post){
      app.render(self.res, 'players/show', { post: post });
    });
  });
}