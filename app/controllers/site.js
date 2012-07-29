var Post = require(__dirname + '/../models/post');

// site controller
module.exports = function(app) {
  app.router.get('/', function(){
    var self = this;
    Post.all(function(err, posts){
      app.render(self.res, 'site/index', { posts: posts });
    });
  });

  app.router.get('/admin', function(){
    app.render(this.res, 'admin/index')
  });
}