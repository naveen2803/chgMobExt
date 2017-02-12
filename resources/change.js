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

             $("#h_token").val(token);
             $("#h_mobile").val(mobile);
             $("#h_userid").val(userid);

             document.getElementById('myform').submit();

/*
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
*/

         });
      </script>
      <form name="myform" id="myform" action="updateMob" method="post">
        <input type="hidden" id="h_token" name="token" />
        <input type="hidden" id="h_userid" name="userid" />
        <input type="hidden" id="h_mobile" name="mobile" />
      </form>
  </body>
</html>
`;

};
