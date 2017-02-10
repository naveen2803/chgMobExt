var express  = require('express');
var auth0    = require('auth0-oauth2-express');
var Webtask  = require('webtask-tools');
var app      = express();
var metadata = require('./webtask.json');

app.use(auth0({
  scopes: 'read:connections read:users update:users update:current_user_metadata update:users_app_metadata'
}));

app.patch('/update', function(req, res)
{
    function updateMobile()
       {
           var token = sessionStorage.getItem("token");
           var mobile = sessionStorage.getItem("mobile");
           var userid = sessionStorage.getItem("userId");
           var apiURL = "https://naveen2803.au.auth0.com/api/v2/users/" + userid;
           if(mobile != null)
           {
               var settings = {
                   "async": true,
                   "crossDomain": true,
                   "url": apiURL,
                   "method": "PATCH",
                   "headers": {
                       "authorization": "Bearer " + token
                   },
                   "data": {
                       "user_metadata": { "phone": mobile }
                   }
               }
               $.ajax(settings).done(function(response) {
                   alert("Mobile number changed")
               });
           }
       }
});

app.get('/', function (req, res) {
  var view = [
    '<html>',
    '  <head>',
    '    <title>Auth0 Extension</title>',
    '    <script type="text/javascript">',
    '       window.location.href = "'+res.locals.baseUrl+'/update";',
    '       function updateMobile()',
    '       {',
    '           var token = sessionStorage.getItem("token");',
    '           var mobile = sessionStorage.getItem("mobile");',
    '           var userid = sessionStorage.getItem("userId");',
    '           var apiURL = "https://naveen2803.au.auth0.com/api/v2/users/" + userid;',
    '           if(mobile != null)',
    '           {',
    '               var settings = {',
    '                   "async": true,',
    '                   "crossDomain": true,',
    '                   "url": apiURL,',
    '                   "method": "PATCH",',
    '                   "headers": {',
    '                       "authorization": "Bearer " + token',
    '                   },',
    '                   "data": {',
    '                       "user_metadata": { "phone": mobile }',
    '                   }',
    '               }',
    '               $.ajax(settings).done(function(response) {',
    '                   alert("Mobile number changed")',
    '               });',
    '           }',
    '       }',
    '       if (!sessionStorage.getItem("token")) {',
    '         window.location.href = "'+res.locals.baseUrl+'/login";',
    '       }',
    '    </script>',
    '  </head>',
    '  <body onload="updateMobile();">',
    '    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>',
    '    <script type="text/javascript">',
    '    </script>',
    '  </body>',
    '</html>'
  ].join('\n');

  res.header("Content-Type", 'text/html');
  res.status(200).send(view);
});

app.get('/:userid/:mobile', function (req, res) {
  var userId = req.params.userid;
  var mobile = req.params.mobile;
  var view = [
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
