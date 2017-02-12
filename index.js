var express  = require('express');
var auth0    = require('auth0-oauth2-express');
var Webtask  = require('webtask-tools');
var app      = express();
var metadata = require('./webtask.json');
var changePage = require('./resources/change');

app.use(auth0({
  scopes: 'read:connections read:users update:users update:current_user_metadata update:users_app_metadata'
}));

app.patch('/updateMob', function(req, res) {
    var token = req.body.token;
    var mobile = req.body.mobile;
    var userid = req.body.userid;

    var apiURL = "https://naveen2803.au.auth0.com/api/v2/users/" + userid;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": apiURL,
        "method": "PATCH",
        "headers": {
            "content-type": "application/json",
            "authorization": "Bearer " + token
        },
        json: true,
        "data": {
            "user_metadata": { "phone": mobile }
        }
    }
    $.ajax(settings).done(function(response) {
        alert("Mobile number changed")
    });
});

app.get('/', function (req, res) {
  res.header("Content-Type", 'text/html');
  res.status(200).send(changePage());
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
