module.exports = function() {

return `
<!DOCTYPE html>
<html>
  <head>
    <title>Change Mobile</title>
  </head>

  <body>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
      <script type="text/javascript">
         $(document).ready(function()
         {
             var token = sessionStorage.getItem('token');
             var mobile = sessionStorage.getItem('mobile');
             var userid = sessionStorage.getItem('userId');

             console.log(token);
             var apiURL = "https://naveen2803.au.auth0.com/api/v2/users/" + userid;
             if(mobile != null)
             {
                 var settings = {
                     "async": true,
                     "crossDomain": true,
                     "url": apiURL,
                     "method": "POST",
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
             }
         });
      </script>
  </body>
</html>
`;

};
