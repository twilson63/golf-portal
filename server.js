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

//['site', 'news','players','events','photos', 'sponsors'].foreach(function(controller) {
['site', 'posts', 'players', 'photos',
'admin/posts','admin/players', 'admin/photos'].forEach(function(controller) {
  require('./app/controllers/' + controller)(app);
});

app.start(3000);
