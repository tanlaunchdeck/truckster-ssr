module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 223);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(3);

module.exports = routes().add('about').add('help').add('contact').add('privacy').add('user').add('edit').add('nearby').add('search').add('intro').add('city').add('trucks').add('food-truck-catering').add('success', '/order/:success').add('info-detail', '/info/:slug').add('info', '/info/page/:page').add('pairing', '/pairing/:state/:city').add('events', '/event/:state/:city').add('event', '/event/:slug').add('breweries', '/brewery/:state/:city').add('brewery', '/brewery/:slug').add('brewery-type', '/brewery-type/:value').add('truck-detail-redirect', '/truck/:state/:city').add('truck-redirect', '/truck/:state/:city').add('food-truck', '/food-truck/:state/:city/all').add('truck', '/food-truck/:slug', 'truck').add('cuisine-redirect', '/cuisine/:value').add('cuisines', '/food-truck/:state/:city/cuisines').add('cuisine', '/food-truck/:state/:city/:value').add('cities', '/co').add('city-detail', '/food-truck/:state/:city').add('city-detail-redirect', '/:state/:city');

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return googleApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return googleClientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return facebookAppID; });
//export const apiUrl = "http://52.14.177.231/"
var apiUrl = "http://test.gotruckster.com/";
var googleApi = "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A";
var googleClientID = "617001021912-4jd9lv4ut3nig7vrchouji9076rjs8pd.apps.googleusercontent.com";
var facebookAppID = "2077048179191099";

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var NextHead = function NextHead(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charset: "UTF-8"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, props.title || ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), props.children);
};

__WEBPACK_IMPORTED_MODULE_1_next_head___default.a.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  url: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  ogImage: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"]
};
/* harmony default export */ __webpack_exports__["a"] = (NextHead);

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("antd/lib/rate");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_69", function() { return TOGGLE_SIGN_IN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_70", function() { return TOGGLE_SIGN_UP_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_67", function() { return TOGGLE_FORGOT_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_65", function() { return TOGGLE_ERROR_SIGN_IN_POP_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_66", function() { return TOGGLE_ERROR_SIGN_UP_POP_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_62", function() { return TOGGLE_ANNOUNCE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_68", function() { return TOGGLE_SHARE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_63", function() { return TOGGLE_CATERING_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return REQUEST_GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return GET_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return GET_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return REQUEST_SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_61", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_60", function() { return SIGN_UP_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return REQUEST_SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_59", function() { return SIGN_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_58", function() { return SIGN_IN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return REQUEST_LOGIN_SOCIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return LOGIN_SOCIAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return LOGIN_SOCIAL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return REQUEST_LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return LOG_OUT_ERROR; });
/* unused harmony export LOGOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return REQUEST_UPDATE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_76", function() { return UPDATE_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_75", function() { return UPDATE_PROFILE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return REQUEST_CHANGE_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_PASSWORD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return REQUEST_SEARCH_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_57", function() { return SEARCH_TRUCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_56", function() { return SEARCH_TRUCK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return REQUEST_GET_TRUCK_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return GET_TRUCK_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return GET_TRUCK_DETAIL_ERROR; });
/* unused harmony export CHECK_LOGIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return REQUEST_GET_TRUCK_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return GET_TRUCK_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return GET_TRUCK_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return REQUEST_GET_PAIRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GET_PAIRING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GET_PAIRING_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return REQUEST_GET_TRUCK_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_TRUCK_MENU_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return GET_TRUCK_MENU_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return REQUEST_POST_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return POST_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return POST_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return REQUEST_EDIT_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EDIT_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return EDIT_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return REQUEST_GET_USER_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return GET_USER_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return GET_USER_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return REQUEST_MARK_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return MARK_FAVORITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return MARK_FAVORITE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return REQUEST_UNMARK_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_74", function() { return UNMARK_FAVORITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_73", function() { return UNMARK_FAVORITE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return REQUEST_GET_USER_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return GET_USER_FAVORITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return GET_USER_FAVORITE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return REQUEST_SEARCH_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_51", function() { return SEARCH_ACTIVITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return SEARCH_ACTIVITY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return REQUEST_GET_ACTIVITY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_ACTIVITY_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_ACTIVITY_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return REQUEST_SEARCH_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_53", function() { return SEARCH_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_52", function() { return SEARCH_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return REQUEST_GET_BREWERY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_BREWERY_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_BREWERY_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return MOUNT_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return MOUNT_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return MOUNT_PAIRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return MOUNT_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return REQUEST_GET_PAIRING_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GET_PAIRING_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GET_PAIRING_DETAIL_ERROR; });
/* unused harmony export GET_SEARCH_RESULT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return REQUEST_GET_NEARBY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_NEARBY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_NEARBY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return MOUNT_NEARBY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return REQUEST_GET_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return REQUEST_EDIT_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EDIT_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EDIT_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return REQUEST_POST_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return POST_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return POST_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return REQUEST_GET_USER_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return GET_USER_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return GET_USER_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGE_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_64", function() { return TOGGLE_DEEP_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return REQUEST_GET_SUGGEST_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return GET_SUGGEST_TRUCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return GET_SUGGEST_TRUCK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return NEXT_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return PREVIOUS_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return REQUEST_GET_RECOMMEND_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GET_RECOMMEND_TRUCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GET_RECOMMEND_TRUCK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return REQUEST_CATERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CATERING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATERING_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return REQUEST_GET_SUGGEST_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return GET_SUGGEST_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GET_SUGGEST_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return REQUEST_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_55", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_54", function() { return SEARCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return ON_PARAM_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return REQUEST_MARK_FAVORITE_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return MARK_FAVORITE_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return MARK_FAVORITE_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return REQUEST_UNMARK_FAVORITE_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_72", function() { return UNMARK_FAVORITE_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_71", function() { return UNMARK_FAVORITE_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return REQUEST_GET_USER_FAVORITE_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return GET_USER_FAVORITE_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return GET_USER_FAVORITE_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return REQUEST_GET_CUISINE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_CUISINE_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_CUISINE_LIST_ERROR; });
// Toggle action
var TOGGLE_SIGN_IN_MODAL = 'TOGGLE_SIGN_IN_MODAL';
var TOGGLE_SIGN_UP_MODAL = 'TOGGLE_SIGN_UP_MODAL';
var TOGGLE_FORGOT_MODAL = 'TOGGLE_FORGOT_MODAL';
var TOGGLE_ERROR_SIGN_IN_POP_OVER = 'TOGGLE_ERROR_SIGN_IN_POP_OVER';
var TOGGLE_ERROR_SIGN_UP_POP_OVER = 'TOGGLE_ERROR_SIGN_UP_POP_OVER';
var TOGGLE_ANNOUNCE_MODAL = 'TOGGLE_ANNOUNCE_MODAL';
var TOGGLE_SHARE_MODAL = 'TOGGLE_SHARE_MODAL';
var TOGGLE_CATERING_MODAL = 'TOGGLE_CATERING_MODAL'; // Get user info

var REQUEST_GET_USER = 'REQUEST_GET_USER';
var GET_USER_SUCCESS = 'GET_USER_SUCCESS';
var GET_USER_ERROR = 'GET_USER_ERROR'; // Sign up action

var REQUEST_SIGN_UP = 'REQUEST_SIGN_UP';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_ERROR = 'SIGN_UP_ERROR'; // Sign in action

var REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
var SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
var SIGN_IN_ERROR = 'SIGN_IN_ERROR'; // Sign in social 

var REQUEST_LOGIN_SOCIAL = 'REQUEST_LOGIN_SOCIAL';
var LOGIN_SOCIAL_SUCCESS = 'LOGIN_SOCIAL_SUCCESS';
var LOGIN_SOCIAL_ERROR = 'LOGIN_SOCIAL_ERROR'; // Logout action

var REQUEST_LOG_OUT = 'REQUEST_LOG_OUT';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_ERROR = 'LOG_OUT_ERROR';
var LOGOUT = 'LOGOUT'; // Update user profile

var REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE';
var UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
var UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR'; //Change password action 

var REQUEST_CHANGE_PASSWORD = 'REQUEST_CHANGE_PASSWORD';
var CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
var CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR'; // Search truck action

var REQUEST_SEARCH_TRUCK = 'REQUEST_SEARCH_TRUCK';
var SEARCH_TRUCK_SUCCESS = 'SEARCH_TRUCK_SUCCESS';
var SEARCH_TRUCK_ERROR = 'SEARCH_TRUCK_ERROR'; // Get truck detail action

var REQUEST_GET_TRUCK_DETAIL = 'REQUEST_GET_TRUCK_DETAIL';
var GET_TRUCK_DETAIL_SUCCESS = 'GET_TRUCK_DETAIL_SUCCESS';
var GET_TRUCK_DETAIL_ERROR = 'GET_TRUCK_DETAIL_ERROR'; // Check login when refresh action

var CHECK_LOGIN = 'CHECK_LOGIN'; // Get truck review action

var REQUEST_GET_TRUCK_REVIEW = 'REQUEST_GET_TRUCK_REVIEW';
var GET_TRUCK_REVIEW_SUCCESS = 'GET_TRUCK_REVIEW_SUCCESS';
var GET_TRUCK_REVIEW_ERROR = 'GET_TRUCK_REVIEW_ERROR'; // Get pairing action

var REQUEST_GET_PAIRING = 'REQUEST_GET_PAIRING';
var GET_PAIRING_SUCCESS = 'GET_PAIRING_SUCCESS';
var GET_PAIRING_ERROR = 'GET_PAIRING__ERROR'; // Get truck menu action

var REQUEST_GET_TRUCK_MENU = 'REQUEST_GET_TRUCK_MENU';
var GET_TRUCK_MENU_SUCCESS = 'GET_TRUCK_MENU_SUCCESS';
var GET_TRUCK_MENU_ERROR = 'GET_TRUCK_MENU_ERROR'; // user post review action

var REQUEST_POST_REVIEW = 'REQUEST_POST_REVIEW';
var POST_REVIEW_SUCCESS = 'POST_REVIEW_SUCCESS';
var POST_REVIEW_ERROR = 'POST_REVIEW_ERROR'; // user post review action

var REQUEST_EDIT_REVIEW = 'REQUEST_EDIT_REVIEW';
var EDIT_REVIEW_SUCCESS = 'EDIT_REVIEW_SUCCESS';
var EDIT_REVIEW_ERROR = 'EDIT_REVIEW_ERROR'; // Get user review action

var REQUEST_GET_USER_REVIEW = 'REQUEST_GET_USER_REVIEW';
var GET_USER_REVIEW_SUCCESS = 'GET_USER_REVIEW_SUCCESS';
var GET_USER_REVIEW_ERROR = 'GET_USER_REVIEW_ERROR'; // Mark favorite 

var REQUEST_MARK_FAVORITE = 'REQUEST_MARK_FAVORITE';
var MARK_FAVORITE_SUCCESS = 'MARK_FAVORITE_SUCCESS';
var MARK_FAVORITE_ERROR = 'MARK_FAVORITE_ERROR'; // unmark favorite 

var REQUEST_UNMARK_FAVORITE = 'REQUEST_UNMARK_FAVORITE';
var UNMARK_FAVORITE_SUCCESS = 'UNMARK_FAVORITE_SUCCESS';
var UNMARK_FAVORITE_ERROR = 'UNMARK_FAVORITE_ERROR'; // Get user favorite 

var REQUEST_GET_USER_FAVORITE = 'REQUEST_GET_USER_FAVORITE';
var GET_USER_FAVORITE_SUCCESS = 'GET_USER_FAVORITE_SUCCESS';
var GET_USER_FAVORITE_ERROR = 'GET_USER_FAVORITE_ERROR'; //Search activity

var REQUEST_SEARCH_ACTIVITY = 'REQUEST_SEARCH_ACTIVITY';
var SEARCH_ACTIVITY_SUCCESS = 'SEARCH_ACTIVITY_SUCCESS';
var SEARCH_ACTIVITY_ERROR = 'SEARCH_ACTIVITY_ERROR'; // Get activity detail

var REQUEST_GET_ACTIVITY_DETAIL = 'REQUEST_GET_ACTIVITY_DETAIL';
var GET_ACTIVITY_DETAIL_SUCCESS = 'GET_ACTIVITY_DETAIL_SUCCESS';
var GET_ACTIVITY_DETAIL_ERROR = 'GET_ACTIVITY_DETAIL_ERROR'; // Search breweries

var REQUEST_SEARCH_BREWERY = 'REQUEST_SEARCH_BREWERY';
var SEARCH_BREWERY_SUCCESS = 'SEARCH_BREWERY_SUCCESS';
var SEARCH_BREWERY_ERROR = 'SEARCH_BREWERY_ERROR'; // Get brewery detail action

var REQUEST_GET_BREWERY_DETAIL = 'REQUEST_GET_BREWERY_DETAIL';
var GET_BREWERY_DETAIL_SUCCESS = 'GET_BREWERY_DETAIL_SUCCESS';
var GET_BREWERY_DETAIL_ERROR = 'GET_BREWERY_DETAIL_ERROR'; // Mount truck 

var MOUNT_TRUCK = 'MOUNT_TRUCK'; // Mount brewery

var MOUNT_BREWERY = 'MOUNT_BREWERY'; //Mount pairing

var MOUNT_PAIRING = 'MOUNT_PAIRING'; //Mount activity

var MOUNT_ACTIVITY = 'MOUNT_ACTIVITY'; // Get brewery detail action

var REQUEST_GET_PAIRING_DETAIL = 'REQUEST_GET_PAIRING_DETAIL';
var GET_PAIRING_DETAIL_SUCCESS = 'GET_PAIRING_DETAIL_SUCCESS';
var GET_PAIRING_DETAIL_ERROR = 'GET_PAIRING_DETAIL_ERROR'; //Get search result 

var GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
var REQUEST_GET_NEARBY = 'REQUEST_GET_NEARBY';
var GET_NEARBY_SUCCESS = 'GET_NEARBY_SUCCESS';
var GET_NEARBY_ERROR = 'GET_NEARBY_ERROR';
var MOUNT_NEARBY = 'MOUNT_NEARBY'; // brewery review action types

var REQUEST_GET_BREWERY_REVIEW = "REQUEST_GET_BREWERY_REVIEW";
var GET_BREWERY_REVIEW_SUCCESS = "GET_BREWERY_REVIEW_SUCCESS";
var GET_BREWERY_REVIEW_ERROR = "GET_BREWERY_REVIEW_ERROR";
var REQUEST_EDIT_BREWERY_REVIEW = "REQUEST_EDIT_BREWERY_REVIEW";
var EDIT_BREWERY_REVIEW_SUCCESS = "EDIT_BREWERY_REVIEW_SUCCESS";
var EDIT_BREWERY_REVIEW_ERROR = "EDIT_BREWERY_REVIEW_ERROR";
var REQUEST_POST_BREWERY_REVIEW = "REQUEST_POST_BREWERY_REVIEW";
var POST_BREWERY_REVIEW_SUCCESS = "POST_BREWERY_REVIEW_SUCCESS";
var POST_BREWERY_REVIEW_ERROR = "POST_BREWERY_REVIEW_ERROR";
var REQUEST_GET_USER_BREWERY_REVIEW = "REQUEST_GET_USER_BREWERY_REVIEW";
var GET_USER_BREWERY_REVIEW_SUCCESS = "GET_USER_BREWERY_REVIEW_SUCCESS";
var GET_USER_BREWERY_REVIEW_ERROR = "GET_USER_BREWERY_REVIEW_ERROR"; // Deeplink const action

var CHANGE_ROUTE = "CHANGE_ROUTE";
var TOGGLE_DEEP_LINK = "TOGGLE_DEEP_LINK"; // Get suggest truck

var REQUEST_GET_SUGGEST_TRUCK = "REQUEST_GET_SUGGEST_TRUCK";
var GET_SUGGEST_TRUCK_SUCCESS = "GET_SUGGEST_TRUCK_SUCCESS";
var GET_SUGGEST_TRUCK_ERROR = "GET_SUGGEST_TRUCK_ERROR"; //catering const

var NEXT_STEP = "NEXT_STEP";
var PREVIOUS_STEP = "PREVIOUS_STEP"; // Get caltering recommened truck

var REQUEST_GET_RECOMMEND_TRUCK = "REQUEST_GET_RECOMMEND_TRUCK";
var GET_RECOMMEND_TRUCK_SUCCESS = "GET_RECOMMEND_TRUCK_SUCCESS";
var GET_RECOMMEND_TRUCK_ERROR = "GET_RECOMMEND_TRUCK_ERROR"; // Send catering request to server

var REQUEST_CATERING = "REQUEST_CATERING";
var CATERING_SUCCESS = "CATERING_SUCCESS";
var CATERING_ERROR = "CATERING_ERROR"; // Get suggest truck

var REQUEST_GET_SUGGEST_BREWERY = "REQUEST_GET_SUGGEST_BREWERY";
var GET_SUGGEST_BREWERY_SUCCESS = "GET_SUGGEST_BREWERY_SUCCESS";
var GET_SUGGEST_BREWERY_ERROR = "GET_SUGGEST_BREWERY_ERROR"; // Search action

var REQUEST_SEARCH = "REQUEST_SEARCH";
var SEARCH_SUCCESS = "SEARCH_SUCCESS";
var SEARCH_ERROR = "SEARCH_ERROR";
var ON_PARAM_CHANGE = "ON_PARAM_CHANGE"; // Mark favorite brewery

var REQUEST_MARK_FAVORITE_BREWERY = 'REQUEST_MARK_FAVORITE_BREWERY';
var MARK_FAVORITE_BREWERY_SUCCESS = 'MARK_FAVORITE_BREWERY_SUCCESS';
var MARK_FAVORITE_BREWERY_ERROR = 'MARK_FAVORITE_BREWERY_ERROR'; // unmark favorite 

var REQUEST_UNMARK_FAVORITE_BREWERY = 'REQUEST_UNMARK_FAVORITE_BREWERY';
var UNMARK_FAVORITE_BREWERY_SUCCESS = 'UNMARK_FAVORITE_BREWERY_SUCCESS';
var UNMARK_FAVORITE_BREWERY_ERROR = 'UNMARK_FAVORITE_BREWERY_ERROR'; // Get user favorite 

var REQUEST_GET_USER_FAVORITE_BREWERY = 'REQUEST_GET_USER_FAVORITE_BREWERY';
var GET_USER_FAVORITE_BREWERY_SUCCESS = 'GET_USER_FAVORITE_BREWERY_SUCCESS';
var GET_USER_FAVORITE_BREWERY_ERROR = 'GET_USER_FAVORITE_BREWERY_ERROR'; // Get cuisine list

var REQUEST_GET_CUISINE_LIST = 'REQUEST_GET_CUISINE_LIST';
var GET_CUISINE_LIST_SUCCESS = 'GET_CUISINE_LIST_SUCCESS';
var GET_CUISINE_LIST_ERROR = 'GET_CUISINE_LIST_ERROR';

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_truck_TruckContainer__ = __webpack_require__(97);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_components_truck_TruckContainer__["a" /* default */]);

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var errorNoResult = '/static/images/error-no-result.svg';

var RenderContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(RenderContainer, _Component);

  function RenderContainer() {
    _classCallCheck(this, RenderContainer);

    return _possibleConstructorReturn(this, (RenderContainer.__proto__ || Object.getPrototypeOf(RenderContainer)).apply(this, arguments));
  }

  _createClass(RenderContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          error = _props.error,
          children = _props.children,
          message = _props.message,
          isEmpty = _props.isEmpty;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "render-container"
      }, error ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "error-holder"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: errorNoResult,
        alt: "error"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "opps DisplayBlackCenter"
      }, "Oops!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Body-2GreyCenter"
      }, message)) : isEmpty ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "message"
      }, message) : children);
    }
  }]);

  return RenderContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RenderContainer);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Placeholder =
/*#__PURE__*/
function (_Component) {
  _inherits(Placeholder, _Component);

  function Placeholder() {
    _classCallCheck(this, Placeholder);

    return _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).apply(this, arguments));
  }

  _createClass(Placeholder, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "timeline-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        hoverable: true
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "timeline-item"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "animated-background"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "animated-background"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-top"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-first-end"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-second-line"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-second-end"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-third-line"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-third-end"
      })))));
    }
  }]);

  return Placeholder;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Placeholder);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__placeholder_Placeholder__ = __webpack_require__(29);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LoadingPlaceholder =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingPlaceholder, _Component);

  function LoadingPlaceholder() {
    _classCallCheck(this, LoadingPlaceholder);

    return _possibleConstructorReturn(this, (LoadingPlaceholder.__proto__ || Object.getPrototypeOf(LoadingPlaceholder)).apply(this, arguments));
  }

  _createClass(LoadingPlaceholder, [{
    key: "renderPlaceHolder",
    value: function renderPlaceHolder(itemNum) {
      var indent = [],
          lg = 6,
          md = 8;

      switch (itemNum) {
        case 8:
          lg = 6;
          md = 8;
          break;

        case 6:
          lg = 8;
          md = 8;
          break;

        case 3:
          lg = 8;
          md = 12;
          break;

        case 2:
          lg = 12;
          md = 12;
          break;

        default:
          break;
      }

      for (var i = 0; i < itemNum; ++i) {
        indent.push(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          key: i,
          style: {
            marginBottom: "16px"
          },
          sm: 12,
          xs: 24,
          md: md,
          lg: lg
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__placeholder_Placeholder__["a" /* default */], null)));
      }

      return indent;
    }
  }, {
    key: "render",
    value: function render() {
      var itemNum = this.props.itemNum;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16
      }, this.renderPlaceHolder(itemNum || 6));
    }
  }]);

  return LoadingPlaceholder;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LoadingPlaceholder);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["q"] = requestSearchTruck;
/* harmony export (immutable) */ __webpack_exports__["s"] = searchTruckSuccess;
/* harmony export (immutable) */ __webpack_exports__["r"] = searchTruckError;
/* harmony export (immutable) */ __webpack_exports__["o"] = requestGetTruckDetail;
/* harmony export (immutable) */ __webpack_exports__["h"] = getTruckDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["g"] = getTruckDetailError;
/* harmony export (immutable) */ __webpack_exports__["p"] = requestGetTruckMenu;
/* harmony export (immutable) */ __webpack_exports__["j"] = getTruckMenuSuccess;
/* harmony export (immutable) */ __webpack_exports__["i"] = getTruckMenuError;
/* harmony export (immutable) */ __webpack_exports__["k"] = mountTruck;
/* harmony export (immutable) */ __webpack_exports__["n"] = requestGetSuggestTruck;
/* harmony export (immutable) */ __webpack_exports__["f"] = getSuggestTruckSuccess;
/* harmony export (immutable) */ __webpack_exports__["e"] = getSuggestTruckError;
/* harmony export (immutable) */ __webpack_exports__["m"] = requestGetRecommendTruck;
/* harmony export (immutable) */ __webpack_exports__["d"] = getRecommendTruckSuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = getRecommendTruckError;
/* harmony export (immutable) */ __webpack_exports__["l"] = requestGetCuisineList;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCuisineListSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCuisineListError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(2);
 //Search truck action

function requestSearchTruck(isLoadingSearchTruck) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_44" /* REQUEST_SEARCH_TRUCK */],
    isLoadingSearchTruck: isLoadingSearchTruck
  };
}
function searchTruckSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_57" /* SEARCH_TRUCK_SUCCESS */],
      response: response
    });
  };
}
function searchTruckError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_56" /* SEARCH_TRUCK_ERROR */],
      response: response
    });
  };
} // Get truck detail action 

function requestGetTruckDetail(isLoadingGetTruckDetail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_27" /* REQUEST_GET_TRUCK_DETAIL */],
    isLoadingGetTruckDetail: isLoadingGetTruckDetail
  };
}
function getTruckDetailSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["E" /* GET_TRUCK_DETAIL_SUCCESS */],
      response: response
    });
  };
}
function getTruckDetailError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["D" /* GET_TRUCK_DETAIL_ERROR */],
      response: response
    });
  };
} // Get truck menu

function requestGetTruckMenu(isLoadingGetTruckMenu) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_28" /* REQUEST_GET_TRUCK_MENU */],
    isLoadingGetTruckMenu: isLoadingGetTruckMenu
  };
}
function getTruckMenuSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["G" /* GET_TRUCK_MENU_SUCCESS */],
      response: response
    });
  };
}
function getTruckMenuError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["F" /* GET_TRUCK_MENU_ERROR */],
      response: response
    });
  };
}
function mountTruck() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_5" /* MOUNT_TRUCK */]
    });
  };
}
function requestGetSuggestTruck(isLoadingGetSuggestTruck) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_26" /* REQUEST_GET_SUGGEST_TRUCK */],
      isLoadingGetSuggestTruck: isLoadingGetSuggestTruck
    });
  };
}
function getSuggestTruckSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["C" /* GET_SUGGEST_TRUCK_SUCCESS */],
      response: response
    });
  };
}
function getSuggestTruckError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["B" /* GET_SUGGEST_TRUCK_ERROR */]
    });
  };
}
function requestGetRecommendTruck(isLoadingGetRecommendTruck) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_24" /* REQUEST_GET_RECOMMEND_TRUCK */],
      isLoadingGetRecommendTruck: isLoadingGetRecommendTruck
    });
  };
}
function getRecommendTruckSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["y" /* GET_RECOMMEND_TRUCK_SUCCESS */],
      response: response
    });
  };
}
function getRecommendTruckError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["x" /* GET_RECOMMEND_TRUCK_ERROR */]
    });
  };
}
function requestGetCuisineList(isLoadingGetCuisineList) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_20" /* REQUEST_GET_CUISINE_LIST */],
      isLoadingGetCuisineList: isLoadingGetCuisineList
    });
  };
}
function getCuisineListSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["q" /* GET_CUISINE_LIST_SUCCESS */],
      response: response
    });
  };
}
function getCuisineListError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["p" /* GET_CUISINE_LIST_ERROR */]
    });
  };
}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_rate__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_rate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_rate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var truckIcon = '/static/images/truck-marker-icon.png';

var TruckCard =
/*#__PURE__*/
function (_Component) {
  _inherits(TruckCard, _Component);

  function TruckCard() {
    _classCallCheck(this, TruckCard);

    return _possibleConstructorReturn(this, (TruckCard.__proto__ || Object.getPrototypeOf(TruckCard)).apply(this, arguments));
  }

  _createClass(TruckCard, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var coverURL = "",
          logoURL = "";

      if (typeof data.cover_photo !== 'string') {
        coverURL = data.cover_photo;
        logoURL = data.logo;
      } else {
        coverURL = JSON.parse(data.cover_photo);
        logoURL = JSON.parse(data.logo);
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        prefetch: true,
        to: "/food-truck/".concat(data.slug)
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        bordered: false,
        className: "truck-card-container",
        cover: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "truck-cover"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "truck-image",
          style: {
            backgroundImage: "url(".concat(coverURL && coverURL[0].thumbnails && coverURL[0].thumbnails.large ? coverURL[0].thumbnails.large.url : coverURL[0].url, ")"),
            backgroundSize: coverURL ? "cover" : "50px"
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "overlay-logo"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          alt: "logo",
          src: logoURL ? logoURL[0].url : truckIcon
        })))
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "meta-header"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "meta-header-title  Body-2SemiBlackLeft "
      }, data.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "cuisine-tag"
      }, data.cuisine.map(function (item, index) {
        if (index === 0) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft"
        }, item.name, " ");else return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", null, "\u2022"), "   ", item.name, " ");
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_rate___default.a, {
        disabled: true,
        value: parseInt(data.avg_rating, 10)
      })))));
    }
  }]);

  return TruckCard;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TruckCard);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return searchTruck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTruckDetail; });
/* unused harmony export getTruckMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSuggestTruck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRecommenedTruck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCuisineList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var https = __webpack_require__(22); // import { notification, Icon } from 'antd'





var cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie__["Cookies"](); // Search truck api

var searchTruck = function searchTruck(params, value, page) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["q" /* requestSearchTruck */])(true));
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()({
                  method: 'GET',
                  url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks?".concat(params, "=").concat(value, "&sort_by=avg_rating&sort_type=desc&per_page=12&page=").concat(page),
                  headers: {
                    "Accept": "application/json"
                  }
                }).then(function (response) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["s" /* searchTruckSuccess */])(_objectSpread({}, response.data, {
                    params: params
                  })));
                }).catch(function (error) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["r" /* searchTruckError */])(error));
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}; // Get truck detail api

var getTruckDetail = function getTruckDetail(truckId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["o" /* requestGetTruckDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_2_axios___default()({
      method: 'get',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/" + truckId,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      headers: {
        "Accept": "application/json"
      }
    }).then(function (response) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["h" /* getTruckDetailSuccess */])(response.data));
    }).catch(function (error) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["g" /* getTruckDetailError */])(error));
    });
  };
}; // Get truck menu api 

var getTruckMenu = function getTruckMenu(truckId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["p" /* requestGetTruckMenu */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/foodtrucks/".concat(truckId, "/menus"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["j" /* getTruckMenuSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["i" /* getTruckMenuError */])(_error));
      }
    });
  };
}; // get suggest truck api

var getSuggestTruck = function getSuggestTruck(params) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["n" /* requestGetSuggestTruck */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/".concat(params, "/suggests"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["f" /* getSuggestTruckSuccess */])(response));
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["e" /* getSuggestTruckError */])(_error2));
      }
    });
  };
}; // get caltering recommended truck api

var getRecommenedTruck = function getRecommenedTruck() {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["m" /* requestGetRecommendTruck */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/recommendation-catering",
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["d" /* getRecommendTruckSuccess */])(response));
      },
      error: function error(_error3) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["c" /* getRecommendTruckError */])(_error3));
      }
    });
  };
};
var getCuisineList = function getCuisineList(page) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["l" /* requestGetCuisineList */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/cuisine",
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["b" /* getCuisineListSuccess */])(response));
      },
      error: function error(_error4) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["a" /* getCuisineListError */])(_error4));
      }
    });
  };
};

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CategoryCard =
/*#__PURE__*/
function (_Component) {
  _inherits(CategoryCard, _Component);

  function CategoryCard(props) {
    var _this;

    _classCallCheck(this, CategoryCard);

    _this = _possibleConstructorReturn(this, (CategoryCard.__proto__ || Object.getPrototypeOf(CategoryCard)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(CategoryCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          name = _props.name,
          image = _props.image;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(image, ")")
        },
        className: "cuisine-card-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content-cuisine"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title"
      }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cover"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cover-mask"
      })));
    }
  }]);

  return CategoryCard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CategoryCard);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(11);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(8);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/common/categoryCard/CategoryCard.js
var CategoryCard = __webpack_require__(46);

// EXTERNAL MODULE: ./src/components/common/truckCard/TruckCard.js
var TruckCard = __webpack_require__(33);

// EXTERNAL MODULE: ./src/components/common/renderContainer/RenderContainer.js
var RenderContainer = __webpack_require__(28);

// EXTERNAL MODULE: external "react-infinite-scroller"
var external__react_infinite_scroller_ = __webpack_require__(38);
var external__react_infinite_scroller__default = /*#__PURE__*/__webpack_require__.n(external__react_infinite_scroller_);

// EXTERNAL MODULE: ./src/components/common/placeholder/LoadingPlaceHolder.js
var LoadingPlaceHolder = __webpack_require__(30);

// EXTERNAL MODULE: external "react-responsive"
var external__react_responsive_ = __webpack_require__(26);
var external__react_responsive__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_);

// CONCATENATED MODULE: ./src/components/truck/Truck.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Truck_categories = [{
  name: 'American',
  image: '/static/images/cuisines/american.jpg',
  url: "american"
}, {
  name: 'Asian',
  image: '/static/images/cuisines/asian.jpg',
  url: "asian"
}, {
  name: 'BBQ',
  image: '/static/images/cuisines/bbq.jpg',
  url: "bbq"
}, {
  name: 'Burgers',
  image: '/static/images/cuisines/burgers.jpg',
  url: "burgers"
}, {
  name: 'Cajun Creole',
  image: '/static/images/cuisines/cajun-creole.jpg',
  url: "cajun"
}, {
  name: 'Coffee',
  image: '/static/images/cuisines/coffee.jpg',
  url: "coffee"
}, {
  name: 'Columbian',
  image: '/static/images/cuisines/columbian.jpg',
  url: "columbian"
}];

var Truck_Truck =
/*#__PURE__*/
function (_Component) {
  _inherits(Truck, _Component);

  function Truck() {
    _classCallCheck(this, Truck);

    return _possibleConstructorReturn(this, (Truck.__proto__ || Object.getPrototypeOf(Truck)).apply(this, arguments));
  }

  _createClass(Truck, [{
    key: "renderCategoryCard",
    // render category card 
    value: function renderCategoryCard(categories) {
      return categories.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          style: {
            marginBottom: "16px"
          },
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12
        }, external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          to: "/food-truck/co/denver/".concat(item.url)
        }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(CategoryCard["a" /* default */], {
          image: item.image,
          name: item.name
        }))));
      });
    } // render truck card 

  }, {
    key: "renderTruckCard",
    value: function renderTruckCard(trucks) {
      return trucks.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 6,
          lg: 6
        }, external__react__default.a.createElement(TruckCard["a" /* default */], {
          data: item
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          trucks = _props.trucks,
          error = _props.error,
          loadMoreTruck = _props.loadMoreTruck,
          hasMore = _props.hasMore;
      return external__react__default.a.createElement("div", {
        className: "truck main-wrapper body-content"
      }, external__react__default.a.createElement("h1", {
        className: "body-title DisplayBlackLeft"
      }, "Search by Cuisine"), external__react__default.a.createElement("div", {
        className: "divider"
      }, " "), external__react__default.a.createElement(row__default.a, {
        style: {
          paddingTop: "30px"
        },
        gutter: 16
      }, this.renderCategoryCard(Truck_categories), external__react__default.a.createElement(col__default.a, {
        style: {
          marginBottom: "16px"
        },
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/cuisine"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(CategoryCard["a" /* default */], {
        image: '/static/images/cuisines/Farm_Fresh.jpg',
        name: "SEE ALL"
      }))))), external__react__default.a.createElement("h1", {
        className: "body-title DisplayBlackLeft"
      }, "View All Denver Food Trucks"), external__react__default.a.createElement("div", {
        className: "divider"
      }, " "), external__react__default.a.createElement(RenderContainer["a" /* default */], {
        message: "Something went wrong, please try another time!",
        isLoading: trucks ? false : true,
        error: error
      }, trucks && external__react__default.a.createElement(external__react_infinite_scroller__default.a, {
        pageStart: 0,
        loadMore: loadMoreTruck,
        hasMore: hasMore,
        loader: external__react__default.a.createElement(external__react_responsive__default.a, {
          key: "loader",
          maxWidth: 768
        }, function (matches) {
          if (matches) {
            return external__react__default.a.createElement(LoadingPlaceHolder["a" /* default */], {
              itemNum: 1,
              key: "loader"
            });
          } else return external__react__default.a.createElement(LoadingPlaceHolder["a" /* default */], {
            key: "loader"
          });
        })
      }, external__react__default.a.createElement(row__default.a, {
        style: {
          paddingTop: "30px"
        },
        gutter: 16
      }, this.renderTruckCard(trucks)))));
    }
  }]);

  return Truck;
}(external__react_["Component"]);

/* harmony default export */ var truck_Truck = (Truck_Truck);
// EXTERNAL MODULE: ./src/actions/truckAction.js
var truckAction = __webpack_require__(32);

// EXTERNAL MODULE: ./src/api/truckApi.js
var truckApi = __webpack_require__(37);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/truck/_truck.less
var _truck = __webpack_require__(98);
var _truck_default = /*#__PURE__*/__webpack_require__.n(_truck);

// CONCATENATED MODULE: ./src/components/truck/TruckContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
function TruckContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TruckContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { TruckContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TruckContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function TruckContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TruckContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TruckContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) TruckContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) TruckContainer__defineProperties(Constructor, staticProps); return Constructor; }

function TruckContainer__possibleConstructorReturn(self, call) { if (call && (TruckContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return TruckContainer__assertThisInitialized(self); }

function TruckContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TruckContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TruckContainer_TruckContainer =
/*#__PURE__*/
function (_Component) {
  TruckContainer__inherits(TruckContainer, _Component);

  function TruckContainer(props) {
    var _this;

    TruckContainer__classCallCheck(this, TruckContainer);

    _this = TruckContainer__possibleConstructorReturn(this, (TruckContainer.__proto__ || Object.getPrototypeOf(TruckContainer)).call(this, props));
    _this.state = {
      hasMore: true
    };
    return _this;
  }

  TruckContainer__createClass(TruckContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          mountTruck = _props.mountTruck,
          searchTruck = _props.searchTruck;
      mountTruck();
      searchTruck("", "", 1);
      window.scrollTo(0, 0);
    }
  }, {
    key: "loadMoreTruck",
    value: function loadMoreTruck() {
      var _props2 = this.props,
          currentPage = _props2.currentPage,
          lastPage = _props2.lastPage,
          searchTruck = _props2.searchTruck;

      if (currentPage && lastPage) {
        if (currentPage < lastPage) searchTruck("", "", currentPage + 1);else if (currentPage === lastPage && currentPage) {
          this.setState({
            hasMore: false
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("div", {
        className: "gray-background"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _truck_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: "https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png",
        url: "https://gotruckster.com/food-truck/co/denver/all",
        title: "View All Food Trucks in Denver, Colorado",
        description: "Updated list of Denver food trucks. Find gourmet street food near you."
      }), external__react__default.a.createElement(truck_Truck, _extends({}, this.state, this.props, {
        loadMoreTruck: function loadMoreTruck() {
          return _this2.loadMoreTruck();
        }
      })));
    }
  }]);

  return TruckContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    error: state.truckReducer.error,
    trucks: state.truckReducer.trucks,
    currentPage: state.truckReducer.currentPage,
    lastPage: state.truckReducer.lastPage
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    mountTruck: truckAction["k" /* mountTruck */],
    searchTruck: truckApi["e" /* searchTruck */]
  }, dispatch);
}
/* harmony default export */ var truck_TruckContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(TruckContainer_TruckContainer));

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = ".truck {\n  padding-top: 70px !important;\n}\n";

/***/ })

/******/ });