var Post = require(__dirname + '/../models/post');
// posts controller
module.exports = function(app) {
  app.router.get('/posts', function(){
    var self = this;
    Post.all(function(err, posts){
      app.render(self.res, 'posts/index', { posts: posts });
    });    
  });

  app.router.get('/posts/:id', function(id){
    var self = this;
    Post.get(id, function(err, post){
      app.render(self.res, 'posts/show', { post: post });
    });
  });
}