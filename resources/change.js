var stylesheet = require('./stylesheet');
var levelUpLogic = require('./forgotLogic');

module.exports = function(title,message,email) {
console.log("levelUpPage(title="+title+",message="+message+",email="+email+")");
return `
<!DOCTYPE html>
<html>
  <head>
    <title>`+title+`</title>
    ` + stylesheet + levelUpLogic + `
  </head>

  <body>
    <div class="table">
      <div class="cell">
        <div class="content">

          <div id="change-password-widget-container">
            <div class="auth0-lock auth0-lock-opened-in-frame"  >
              <div class="auth0-lock-center" >
                <form class="auth0-lock-widget"  name="request-code" method="post" action="requestCode">
                  <div class="auth0-lock-widget-container" >
                    <div class="auth0-lock-cred-pane" >
                      <div class="auth0-lock-header" >
                        <div class="auth0-lock-header-bg auth0-lock-blur-support" >
                          <div class="auth0-lock-header-bg-blur" style="background-image:url('//cdn.auth0.com/styleguide/1.0.0/img/badge.png');" >
                          </div>
                          <div class="auth0-lock-header-bg-solid" style="background-color:#005375;" >
                          </div>
                        </div>
                        <div class="auth0-lock-header-welcome" >
                          <img class="auth0-lock-header-logo" src="https://cidm-neo.sandpit.test-services.qld.gov.au/qld-crest-on-top-2linestacked-b-w.png"></img>


                          <div class="auth0-lock-name" >`+title+`</div>
                        </div>
                      </div>
                      <span >
                      </span>
                      <div style="position:relative;" >
                        <span >
                          <div >
                            <div style="visibility:inherit;" >
                              <div >
                                <div style="position:relative;" >
                                  <span >
                                    <div >
                                      <div style="visibility:inherit;" >
                                        <div class="auth0-lock-body-content" >
                                          <div class="auth0-lock-content" >
                                            <div class="auth0-lock-form" >
                                              <p >
                                                <span >`+message+`</span>
                                              </p>

                                              <div >
                                                <div class="auth0-lock-input-block auth0-lock-input-password" >
                                                  <div class="auth0-lock-input-wrap custom-authentication-upperdiv" >
                                                    <span>
                                                      <i class="fa fa-envelope-o auth0-lock-icon custom-icon-mail" aria-hidden="true"></i>
                                                    </span>
                                                    <input  class="auth0-lock-input" id="chosen_field" autocomplete="off" autocapitalize="off" type="text" name="email" placeholder="email" value="`+email+`"></input>
                                                  </div>
                                                </div>
                                              </div>

                                              <div class="auth0-lock-input-wrap auth0-lock-input-wrap-with-icon custom-authentication-lowerdiv">
                                                <span>
                                                  <i class="fa fa-check-circle-o chosen_icon auth0-lock-icon custom-icon-options" aria-hidden="true"></i>
                                                </span>
                                                <span>
                                                    <label class="custom-authentication-label">
                                                      <input id='email_chosen' type="radio" name="delivery" value="email" checked="">
                                                      Email
                                                    </label>
                                                    <br/>
                                                    <label class="custom-authentication-label">
                                                      <input id='mobile_chosen' type="radio" name="delivery" value="mobile">
                                                      Mobile
                                                    </label>
                                                </span>
                                              </div>


                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                      <span >
                        <button id="chosen_submit" class="auth0-lock-submit" style="background-color:#005375;" type="submit" >
                          <div class="auth0-loading-container" >
                            <div class="auth0-loading" >
                            </div>
                          </div>
                          <span >
                            <svg width="43px" height="42px" viewBox="0 0 43 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="Lock" sketch:type="MSArtboardGroup" transform="translate(-280.000000, -3592.000000)">
                                  <g id="SMS" sketch:type="MSLayerGroup" transform="translate(153.000000, 3207.000000)">
                                    <g id="Group" sketch:type="MSShapeGroup">
                                      <g id="Login" transform="translate(0.000000, 369.000000)">
                                        <g id="Btn">
                                          <g id="Oval-302-+-Shape" transform="translate(128.000000, 17.000000)">
                                            <circle id="Oval-302" stroke="#FFFFFF" stroke-width="2" cx="20.5" cy="20" r="20">
                                            </circle>
                                            <path d="M17.8,15.4 L19.2,14 L25.2,20 L19.2,26 L17.8,24.6 L22.4,20 L17.8,15.4 Z" id="Shape" fill="#FFFFFF">
                                            </path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </button>
                      </span>
                      <span >
                      </span>
                    </div>
                  </div>
                </form>

                <span class="auth0-lock-badge-bottom" >
                  <a href="https://auth0.com/" target="_blank" class="auth0-lock-badge" >
                    <span >
                      <svg width="18px" height="21px" viewBox="0 0 18 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                          <g id="Lock" sketch:type="MSArtboardGroup" transform="translate(-276.000000, -3229.000000)" fill-opacity="0.4" fill="#FFFFFF">
                            <g id="SMS" sketch:type="MSLayerGroup" transform="translate(153.000000, 3207.000000)">
                              <g id="Group" sketch:type="MSShapeGroup">
                                <g id="Header" transform="translate(-0.500000, 0.000000)">
                                  <path d="M137.790429,38.4848167 L135.770249,32.1883757 L141.058325,28.2980192 L134.521693,28.2980192 L132.501273,22.001821 L132.500673,22.0001214 L139.038385,22.0001214 L141.059165,28.2974122 L141.059165,28.2972908 L141.060843,28.2963196 C142.234586,31.9495762 141.025835,36.1047125 137.790429,38.4848167 L137.790429,38.4848167 L137.790429,38.4848167 Z M127.211877,38.4848167 L127.210199,38.4860307 L132.499714,42.3773585 L137.790429,38.4849381 L132.501393,34.593489 L127.211877,38.4848167 L127.211877,38.4848167 Z M123.942542,28.296441 L123.942542,28.296441 C122.707175,32.147463 124.141203,36.2280579 127.210798,38.4855451 L127.211278,38.4836027 L129.231698,32.1875259 L123.9447,28.2978978 L130.479774,28.2978978 L132.500314,22.0016996 L132.500793,22 L125.962722,22 L123.942542,28.296441 L123.942542,28.296441 Z" id="Shape">
                                  </path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                </span>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </body>
</html>
`;

};
