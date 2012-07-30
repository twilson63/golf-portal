var User = require(__dirname + '/../../models/user');
// users controller
module.exports = function(app) {
  var route = '/admin/users', 
    path = 'admin/users/';
  app.router.get(route, function(){
    var self = this;
    User.all(function(err, users){
      app.render(self.res, path + 'index', { users: users });
    });    
  });

  // GET /users/new
  app.router.get(route + '/new', function(){
    app.render(this.res, path + 'new');
  });

  // POST /users
  app.router.post(route, function(){
    var self = this;
    // user new user
    User.create(this.req.body, function(err, user){
      user.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });

  // GET /users/:id/edit
  app.router.get(route + '/:id/edit', function(id){
    var self = this;
    // user edit user
    User.get(id, function(err, user){
      app.render(self.res, path + 'edit', {user: user});
    });
  });

  // PUT /users/:id
  app.router.post(route + '/:id', function(id){
    var self = this;
    console.log(this.req.body);
    // user update user
    User.update(id, this.req.body, function(err, user){
      user.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });


}