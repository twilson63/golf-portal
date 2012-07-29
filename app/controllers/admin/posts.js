var Post = require(__dirname + '/../../models/post');
// posts controller
module.exports = function(app) {
  var route = '/admin/posts', 
    path = 'admin/posts/';
  app.router.get(route, function(){
    var self = this;
    Post.all(function(err, posts){
      app.render(self.res, path + 'index', { posts: posts });
    });    
  });

  // GET /posts/new
  app.router.get(route + '/new', function(){
    app.render(this.res, path + 'new');
  });

  // POST /posts
  app.router.post(route, function(){
    var self = this;
    // post new post
    Post.create(this.req.body, function(err, post){
      post.save(function(err){
        app.redirect(self.res, '/admin/posts');
      });
    });
  });

  // GET /posts/:id/edit
  app.router.get(route + '/:id/edit', function(id){
    var self = this;
    // post edit post
    Post.get(id, function(err, post){
      app.render(self.res, path + 'edit', {post: post});
    });
  });

  // PUT /posts/:id
  app.router.post(route + '/:id', function(id){
    var self = this;
    console.log(this.req.body);
    // post update post
    Post.update(id, this.req.body, function(err, post){
      post.save(function(err){
        app.redirect(self.res, '/admin/posts');
      });
    });
  });


}