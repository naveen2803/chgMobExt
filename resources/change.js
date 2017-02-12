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

             var updateMobileURL = "https://dev-qld-gov.au.webtask.io/updateMobile/" + token +"/"+mobile +"/"+userid;
             if(mobile != null)
             {
                 var settings = {
                     "async": true,
                     "crossDomain": true,
                     "url": updateMobileURL,
                     "method": "GET"
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
