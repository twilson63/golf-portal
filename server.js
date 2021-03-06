var flatiron = require('flatiron'),
  jade = require('jade.plugin'),
  ecstatic = require('ecstatic'),
  app = flatiron.app;

app.use(flatiron.plugins.http);
app.use(jade.plugin, { dir: 'app/views'});
app.http.before = [
  ecstatic(__dirname + '/public', { autoIndex: false })];
// Possible better api
//app.controllers(['app', 'site', 'posts']);
['site', 'posts', 'players', 'photos', 'events',
'admin/posts','admin/players', 'admin/photos', 'admin/events'].forEach(function(controller) {
  require('./app/controllers/' + controller)(app);
});

app.start(3000);
