var Photo = require(__dirname + '/../../models/photo');
// photos controller
module.exports = function(app) {
  var route = '/admin/photos', 
    path = 'admin/photos/';
  app.router.get(route, function(){
    var self = this;
    Photo.all(function(err, photos){
      app.render(self.res, path + 'index', { photos: photos });
    });    
  });

  // GET /photos/new
  app.router.get(route + '/new', function(){
    app.render(this.res, path + 'new');
  });

  // POST /photos
  app.router.post(route, function(){
    var self = this;
    // post new photos
    Photo.create(this.req.body, function(err, photos){
      photos.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });

  // GET /photos/:id/edit
  app.router.get(route + '/:id/edit', function(id){
    var self = this;
    // photos edit photos
    Photo.get(id, function(err, photo){
      app.render(self.res, path + 'edit', {photo: photo});
    });
  });

  // PUT /photos/:id
  app.router.post(route + '/:id', function(id){
    var self = this;
    // post update photos
    Photo.update(id, this.req.body, function(err, photo){
      photo.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });
}