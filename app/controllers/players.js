var Player = require(__dirname + '/../models/player');
// player controller
module.exports = function(app) {
  app.router.get('/players', function(){
    var self = this;
    Player.all(function(err, players){
      app.render(self.res, 'players/index', { players: players });
    });    
  });

  app.router.get('/players/:id', function(id){
    var self = this;
    Player.get(id, function(err, player){
      app.render(self.res, 'players/show', { player: player });
    });
  });
}