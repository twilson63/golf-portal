var connect = require('connect'),
  ecstatic = require('ecstatic');

module.exports = function(app) {
  app.http.before = [
    // patch for connect session
    function(req, res, next){
      req.originalUrl = req.url;
      next();
    },
    ecstatic(__dirname + '../../public', { autoIndex: false })
    //,
    // connect.cookieParser(),
    // connect.session({secret: 'foo bar'})
    // ,
    // function(req, res, next){
    //   if(req.method === 'POST' && req.url !== '/users/new' && req.url !== '/session/new' && req.session.user == null) {
    //     res.writeHead(302, { 'Location': '/login'});
    //     res.end();
    //   } else {
    //     next();
    //   }
    // } 
  ];
}