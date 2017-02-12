var express  = require('express');
var auth0    = require('auth0-oauth2-express');
var Webtask  = require('webtask-tools');
var app      = express();
var metadata = require('./webtask.json');
var changePage = require('./resources/change');

app.use(auth0({
  scopes: 'read:connections read:users update:users update:current_user_metadata update:users_app_metadata'
}));

app.get('/', function (req, res) {
  res.header("Content-Type", 'text/html');
  res.send(changePage());
});

app.get('/:userid/:mobile', function (req, res) {
  var userId = req.params.userid;
  var mobile = req.params.mobile;
  var view = [
    '<!DOCTYPE html>',
    '<html>',
    '  <head>',
    '    <title>Auth0 Extension</title>',
    '    <script type="text/javascript">',
    '       sessionStorage.setItem("userId", "'+ userId +'")',
    '       sessionStorage.setItem("mobile", "'+ mobile +'")',
    '       if (!sessionStorage.getItem("token")) {',
    '         window.location.href = "'+res.locals.baseUrl+'/login";',
    '       }',
    '    </script>',
    '  </head>',
    '  <body>',
    '  </body>',
    '</html>'
  ].join('\n');

  res.header("Content-Type", 'text/html');
  res.status(200).send(view);
});

// This endpoint would be called by webtask-gallery to dicover your metadata
app.get('/meta', function (req, res) {
  res.status(200).send(metadata);
});

module.exports = app;
