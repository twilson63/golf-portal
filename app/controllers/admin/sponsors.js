var Sponsor = require(__dirname + '/../../models/sponsor');
// sponsors controller
module.exports = function(app) {
  var route = '/admin/sponsors', 
    path = 'admin/sponsors/';
  app.router.get(route, function(){
    var self = this;
    Sponsor.all(function(err, posts){
      app.render(self.res, path + 'index', { sponsors: sponsors });
    });    
  });

  // GET /sponsors/new
  app.router.get(route + '/new', function(){
    app.render(this.res, path + 'new');
  });

  // POST /sponsors
  app.router.post(route, function(){
    var self = this;
    // post new sponsor
    Sponsor.create(this.req.body, function(err, sponsor){
      sponsor.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });

  // GET /sponsors/:id/edit
  app.router.get(route + '/:id/edit', function(id){
    var self = this;
    // post edit post
    Sponsor.get(id, function(err, sponsor){
      app.render(self.res, path + 'edit', {sponsor: sponsor});
    });
  });

  // PUT /sponsors/:id
  app.router.post(route + '/:id', function(id){
    var self = this;
    console.log(this.req.body);
    // post update post
    Sponsor.update(id, this.req.body, function(err, sponsor){
      sponsor.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });


}