var Event = require(__dirname + '/../../models/event');
// events controller
module.exports = function(app) {
  var route = '/admin/events', 
    path = 'admin/events/';
  app.router.get(route, function(){
    var self = this;
    Event.all(function(err, posts){
      app.render(self.res, path + 'index', { events: events });
    });    
  });

  // GET /events/new
  app.router.get(route + '/new', function(){
    app.render(this.res, path + 'new');
  });

  // POST /events
  app.router.post(route, function(){
    var self = this;
    // new event
    Event.create(this.req.body, function(err, event){
      event.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });

  // GET /events/:id/edit
  app.router.get(route + '/:id/edit', function(id){
    var self = this;
    // post edit event
    Event.get(id, function(err, event){
      app.render(self.res, path + 'edit', {event: event});
    });
  });

  // PUT /events/:id
  app.router.post(route + '/:id', function(id){
    var self = this;
    Event.update(id, this.req.body, function(err, event){
      event.save(function(err){
        app.redirect(self.res, route);
      });
    });
  });


}