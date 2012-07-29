var Player = require(__dirname + '/../../models/player');
// players controller
module.exports = function(app) {
  var route = '/admin/players', 
    path = 'admin/players/';
  app.router.get(route, function(){
    var self = this;
    Player.all(function(err, players){
      app.render(self.res, path + 'index', { players: players });
    });    
  });

  // GET /players/new
  app.router.get(route + '/new', function(){
    app.render(this.res, path + 'new');
  });

  // POST /players
  app.router.post(route, function(){
    var self = this;
    // post new players
    Player.create(this.req.body, function(err, player){
      player.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });

  // GET /players/:id/edit
  app.router.get(route + '/:id/edit', function(id){
    var self = this;
    // players edit players
    Player.get(id, function(err, player){
      app.render(self.res, path + 'edit', {player: player});
    });
  });

  // PUT /players/:id
  app.router.post(route + '/:id', function(id){
    var self = this;
    // post update player
    Player.update(id, this.req.body, function(err, player){
      player.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });
}