var Event = require(__dirname + '/../models/event');
// events controller
module.exports = function(app) {
  app.router.get('/events', function(){
    var self = this;
    Event.all(function(err, events){
      app.render(self.res, 'events/index', { events: events });
    });
  });

}