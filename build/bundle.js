module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Webtask = __webpack_require__(1);

	// This is the entry-point for the Webpack build. We need to convert our module
	// (which is a simple Express server) into a Webtask-compatible function.
	module.exports = Webtask.fromExpress(__webpack_require__(2));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("webtask-tools");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(3);
	var auth0 = __webpack_require__(4);
	var Webtask = __webpack_require__(1);
	var app = express();
	var metadata = __webpack_require__(5);
	var changePage = __webpack_require__(6);

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
	  var view = ['<!DOCTYPE html>', '<html>', '  <head>', '    <title>Auth0 Extension</title>', '    <script type="text/javascript">', '       sessionStorage.setItem("userId", "' + userId + '")', '       sessionStorage.setItem("mobile", "' + mobile + '")', '       if (!sessionStorage.getItem("token")) {', '         window.location.href = "' + res.locals.baseUrl + '/login";', '       }', '    </script>', '  </head>', '  <body>', '  </body>', '</html>'].join('\n');

	  res.header("Content-Type", 'text/html');
	  res.status(200).send(view);
	});

	// This endpoint would be called by webtask-gallery to dicover your metadata
	app.get('/meta', function (req, res) {
	  res.status(200).send(metadata);
	});

	module.exports = app;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("auth0-oauth2-express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"title": "Extension for Change Mobile 8",
		"name": "change-mobile-extension-8",
		"version": "8.0",
		"author": "Naveen",
		"description": "Change mobile extension 8",
		"type": "application",
		"repository": "https://github.com/naveen2803/chgMobExt/",
		"keywords": [
			"auth0",
			"extension"
		]
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {

	    return "\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Change Mobile</title>\n  </head>\n\n  <body>\n      <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\"></script>\n      <script type=\"text/javascript\">\n         $(document).ready(function()\n         {\n             var token = sessionStorage.getItem('token');\n             var mobile = sessionStorage.getItem('mobile');\n             var userid = sessionStorage.getItem('userId');\n\n             var updateMobileURL = \"https://wt-naveen-malhotra28-gmail-com-0.run.webtask.io/updateMobile/\" + tokem +\"/\"+mobile +\"/\"+userid;\n             if(mobile != null)\n             {\n                 var settings = {\n                     \"async\": true,\n                     \"crossDomain\": true,\n                     \"url\": updateMobileURL,\n                     \"method\": \"GET\"\n                 }\n\n                 $.ajax(settings).done(function(response) {\n                     alert(\"Mobile number changed\")\n                 });\n             }\n\n         });\n      </script>\n  </body>\n</html>\n";
	};

/***/ }
/******/ ]);