var Photo = require(__dirname + '/../models/photo');
// photos controller
module.exports = function(app) {
  app.router.get('/photos', function(){
    var self = this;
    Photo.all(function(err, photos){
      app.render(self.res, 'photos/index', { photos: photos });
    });    
  });

}