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
/******/ 	return __webpack_require__(__webpack_require__.s = 202);
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

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__(18);
var rate__default = /*#__PURE__*/__webpack_require__.n(rate_);

// EXTERNAL MODULE: external "antd/lib/switch"
var switch_ = __webpack_require__(204);
var switch__default = /*#__PURE__*/__webpack_require__.n(switch_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(21);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./src/components/common/renderContainer/RenderContainer.js
var RenderContainer = __webpack_require__(28);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(9);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "google-map-react"
var external__google_map_react_ = __webpack_require__(44);
var external__google_map_react__default = /*#__PURE__*/__webpack_require__.n(external__google_map_react_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(27);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// CONCATENATED MODULE: ./src/components/nearby/AnnounceNearbyModal.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var logo = "/static/images/logo-vertical.png";

var AnnounceNearbyModal_AnnounceModal =
/*#__PURE__*/
function (_Component) {
  _inherits(AnnounceModal, _Component);

  function AnnounceModal(props) {
    var _this;

    _classCallCheck(this, AnnounceModal);

    _this = _possibleConstructorReturn(this, (AnnounceModal.__proto__ || Object.getPrototypeOf(AnnounceModal)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(AnnounceModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          handleCancel = _props.handleCancel,
          visible = _props.visible,
          handleExploreInRightPosition = _props.handleExploreInRightPosition;
      return external__react__default.a.createElement(modal__default.a, {
        title: "",
        footer: null,
        visible: visible,
        onCancel: handleCancel
      }, external__react__default.a.createElement("div", {
        className: "announce-modal-container"
      }, external__react__default.a.createElement("div", {
        className: "logo-container"
      }, external__react__default.a.createElement("img", {
        alt: "logo",
        src: logo
      })), external__react__default.a.createElement("div", {
        className: "Regular-24px-Style message"
      }, "We detected that your current location is not in Colorado, and we are currently only serving in Colorado only, more cities are coming soon."), external__react__default.a.createElement("div", {
        className: "explore-button"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: function onClick() {
          return handleExploreInRightPosition();
        },
        type: "primary"
      }, " EXPLORE IN DENVER "))));
    }
  }]);

  return AnnounceModal;
}(external__react_["Component"]);

/* harmony default export */ var AnnounceNearbyModal = (AnnounceNearbyModal_AnnounceModal);
// EXTERNAL MODULE: ./src/components/common/titleLink.js
var titleLink = __webpack_require__(59);

// EXTERNAL MODULE: external "react-responsive"
var external__react_responsive_ = __webpack_require__(26);
var external__react_responsive__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_);

// CONCATENATED MODULE: ./src/components/nearby/Nearby.js







function Nearby__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Nearby__typeof = function _typeof(obj) { return typeof obj; }; } else { Nearby__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Nearby__typeof(obj); }

function Nearby__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Nearby__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Nearby__createClass(Constructor, protoProps, staticProps) { if (protoProps) Nearby__defineProperties(Constructor.prototype, protoProps); if (staticProps) Nearby__defineProperties(Constructor, staticProps); return Constructor; }

function Nearby__possibleConstructorReturn(self, call) { if (call && (Nearby__typeof(call) === "object" || typeof call === "function")) { return call; } return Nearby__assertThisInitialized(self); }

function Nearby__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Nearby__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var homeImage = "/static/images/home-image.jpg";
var mapMarker = '/static/images/map-marker-icon.svg';
var truckGreyIcon = '/static/images/truck-grey-icon.svg';
var websiteIcon = '/static/images/website-icon.svg';
var backIcon = "/static/images/back-icon.png";
var defaultImage = "/static/images/default-image.png";
var eventMarkerIcon = '/static/images/event-marker-icon.png';
var pairingMarkerIcon = '/static/images/pairing-marker-icon.png';
var truckMarkerIcon = '/static/images/truck-marker-icon.png';
var locationIcon = '/static/images/location-icon.png';
var timeIcon = '/static/images/time-icon.png';
var mailIcon = '/static/images/mail-icon.png';
var phoneIcon = '/static/images/phone-icon.png';
var facebookIconWhite = '/static/images/facebook-icon-white.svg';
var instagramIconWhite = '/static/images/instagram-icon-white.svg';
var twitterIconWhite = '/static/images/twitter-icon-white.svg';

var Nearby_MarkerCustom = function MarkerCustom(_ref) {
  var info = _ref.info,
      icon = _ref.icon,
      visible = _ref.visible,
      handleClickMarker = _ref.handleClickMarker;
  var url = "";

  switch (info.type) {
    case "brewery":
      url = "/brewery/" + info.brewery.slug;
      break;

    case "activity":
      url = "/event/" + info.activity.name + "--" + info.activity.id;
      break;

    case "food_truck":
      url = "/food-truck/" + info.food_truck.slug;
      break;

    case "pairing-brewery":
      url = "/brewery/" + info.brewery.slug;
      break;

    case "pairing-activity":
      url = "/event/" + info.activity.name + "--" + info.activity.id;
      break;

    default:
      break;
  }

  return external__react__default.a.createElement("div", {
    onClick: function onClick() {
      return handleClickMarker(info);
    },
    className: "marker-container"
  }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
    width: 36,
    alt: "marker",
    src: icon
  })), external__react__default.a.createElement("div", {
    style: {
      opacity: visible ? 1 : 0,
      visibility: visible ? "visible" : "hidden",
      zIndex: visible && 10,
      transform: visible && 'translate(0, -20px)',
      transition: visible && " all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)"
    },
    className: "push popover__content"
  }, external__react__default.a.createElement("a", {
    className: " SubheadingBlackLeft"
  }, info.nameDisplay), external__react__default.a.createElement("div", {
    className: "popover-info"
  }, external__react__default.a.createElement("img", {
    src: info.image,
    alt: "popover-icon"
  }), external__react__default.a.createElement("div", {
    className: "popover-text"
  }, external__react__default.a.createElement("div", {
    className: "address Body-1RegularBlackLeft"
  }, info.addressDisplay), external__react__default.a.createElement("div", {
    className: "time CaptionGreyLeft"
  }, external__moment__default()(info.timeDisplay, "YYYY-MM-DD h:mm a").format("ddd, MMMM DD"), "   ", external__moment__default()(info.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ", external__moment__default()(info.end_time).format("h:mm a"))))));
};

var listFilterItem = ["Food truck", "Event", "Pairing"];

var Nearby_filterItem = function filterItem(title, key, _onChange, isLoadingGetNearby) {
  return external__react__default.a.createElement("div", {
    key: key,
    className: "filter-item"
  }, external__react__default.a.createElement("div", {
    className: "Body-1SemiBlackLeft"
  }, " ", external__react__default.a.createElement("img", {
    alt: "marker",
    src: key === 0 ? truckMarkerIcon : key === 1 ? eventMarkerIcon : pairingMarkerIcon
  }), title), external__react__default.a.createElement(switch__default.a, {
    loading: isLoadingGetNearby,
    onChange: function onChange(e) {
      return _onChange(e, key);
    },
    checkedChildren: external__react__default.a.createElement(icon__default.a, {
      type: "check"
    }),
    unCheckedChildren: external__react__default.a.createElement(icon__default.a, {
      type: "cross"
    }),
    defaultChecked: true
  }));
};

var Nearby_Nearby =
/*#__PURE__*/
function (_Component) {
  Nearby__inherits(Nearby, _Component);

  function Nearby() {
    Nearby__classCallCheck(this, Nearby);

    return Nearby__possibleConstructorReturn(this, (Nearby.__proto__ || Object.getPrototypeOf(Nearby)).apply(this, arguments));
  }

  Nearby__createClass(Nearby, [{
    key: "renderMarker",
    value: function renderMarker(data) {
      var _props = this.props,
          currentHoverItem = _props.currentHoverItem,
          _onVisibleChange = _props.onVisibleChange,
          handleClickMarker = _props.handleClickMarker;
      return data.map(function (event, idx) {
        if (event) {
          return event.map(function (item, index) {
            return external__react__default.a.createElement(Nearby_MarkerCustom, {
              key: index,
              onVisibleChange: function onVisibleChange() {
                return _onVisibleChange(item.id.toString());
              },
              visible: item.id.toString() === currentHoverItem ? true : false,
              info: item,
              handleClickMarker: handleClickMarker,
              icon: item.marker,
              lat: parseFloat(item.latitude),
              lng: parseFloat(item.longtitude)
            });
          });
        } else return null;
      });
    }
  }, {
    key: "renderEventResponsiveCard",
    value: function renderEventResponsiveCard(events) {
      var handleClickNearbyEventResponsive = this.props.handleClickNearbyEventResponsive;
      return events.map(function (event, index) {
        if (event) return event.map(function (item, idx) {
          return external__react__default.a.createElement("div", {
            onClick: function onClick(e) {
              return handleClickNearbyEventResponsive(item);
            },
            className: "nearby-events",
            id: item.id,
            key: idx
          }, external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-item-container"
          }, external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-image"
          }, external__react__default.a.createElement("img", {
            id: item.id,
            alt: "pairing-icon",
            src: item.image ? item.image : defaultImage
          })), external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-info"
          }, external__react__default.a.createElement("div", {
            id: item.id,
            className: " Body-1SemiBlackLeft pairing-icon"
          }, external__react__default.a.createElement("img", {
            id: item.id,
            src: item.marker,
            alt: "pairing-icon"
          }), item.nameDisplay), external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-item-bref CaptionGreyLeft"
          }, external__react__default.a.createElement("img", {
            id: item.id,
            src: item.type === "pairing-brewery" ? truckGreyIcon : locationIcon,
            alt: "icon"
          }), item.type === "pairing-brewery" ? item.food_truck.name : item.addressDisplay), external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-item-bref CaptionGreyLeft"
          }, external__react__default.a.createElement("img", {
            src: timeIcon,
            alt: "icon"
          }), item.timeDisplay && item.end_time && " ".concat(external__moment__default()(item.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(external__moment__default()(item.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(external__moment__default()(item.end_time).format("h:mm a"))))));
        });else return null;
      });
    }
  }, {
    key: "renderEventCard",
    value: function renderEventCard(events) {
      var _props2 = this.props,
          onEventEnter = _props2.onEventEnter,
          onEventLeave = _props2.onEventLeave,
          handleClickNearbyEvent = _props2.handleClickNearbyEvent;
      return events.map(function (event, index) {
        if (event) return event.map(function (item, idx) {
          return external__react__default.a.createElement("div", {
            onClick: function onClick(e) {
              return handleClickNearbyEvent(item);
            },
            className: "nearby-events",
            onMouseLeave: onEventLeave,
            onMouseEnter: onEventEnter,
            id: item.id,
            key: idx
          }, external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-item-container"
          }, external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-image"
          }, external__react__default.a.createElement("img", {
            id: item.id,
            alt: "pairing-icon",
            src: item.image ? item.image : defaultImage
          })), external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-info"
          }, external__react__default.a.createElement("div", {
            id: item.id,
            className: " Body-1SemiBlackLeft pairing-icon"
          }, external__react__default.a.createElement("img", {
            id: item.id,
            src: item.marker,
            alt: "pairing-icon"
          }), item.nameDisplay), external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-item-bref CaptionGreyLeft"
          }, external__react__default.a.createElement("img", {
            id: item.id,
            src: item.type === "pairing-brewery" ? truckGreyIcon : locationIcon,
            alt: "icon"
          }), item.type === "pairing-brewery" ? item.food_truck.name : item.addressDisplay), external__react__default.a.createElement("div", {
            id: item.id,
            className: "pairing-item-bref CaptionGreyLeft"
          }, external__react__default.a.createElement("img", {
            src: timeIcon,
            alt: "icon"
          }), item.timeDisplay && item.end_time && " ".concat(external__moment__default()(item.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(external__moment__default()(item.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(external__moment__default()(item.end_time).format("h:mm a"))))));
        });else return null;
      });
    }
  }, {
    key: "renderTruckCard",
    value: function renderTruckCard(data) {
      return external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/food-truck/" + data.slug,
        key: data.key
      }, external__react__default.a.createElement("div", {
        className: "truck-event-card-container"
      }, external__react__default.a.createElement("div", {
        className: "truck-image-container"
      }, external__react__default.a.createElement("img", {
        src: data.image,
        alt: "truck"
      })), external__react__default.a.createElement("div", {
        className: "truck-info-container"
      }, external__react__default.a.createElement("img", {
        className: "truck-logo",
        src: data.logo,
        alt: "logo-truck"
      }), external__react__default.a.createElement("div", {
        className: " Body-1SemiBlackLeft"
      }, data.name), external__react__default.a.createElement("div", {
        className: "cuisine-tag"
      }, data.cuisine.map(function (item, index) {
        if (index === 0) return external__react__default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft"
        }, item.name, " ");else return external__react__default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft"
        }, external__react__default.a.createElement("span", null, "\u2022"), "   ", item.name, " ");
      })), external__react__default.a.createElement(rate__default.a, {
        disabled: true,
        value: parseInt(data.rating, 10)
      }))));
    }
  }, {
    key: "renderFoodTruck",
    value: function renderFoodTruck(data) {
      var handleClickBack = this.props.handleClickBack;
      var rateNum = parseFloat((Math.round(parseFloat(data.food_truck.avg_rating) * 2) / 2).toFixed(1), 10);
      return external__react__default.a.createElement("div", {
        className: "nearby-event-detail-container"
      }, external__react__default.a.createElement("div", {
        className: "nearby-event-detail-food-truck"
      }, external__react__default.a.createElement("div", {
        className: "image-container"
      }, external__react__default.a.createElement("img", {
        src: data.image,
        alt: "event"
      })), external__react__default.a.createElement("div", {
        className: "mask-container"
      }, external__react__default.a.createElement("img", {
        onClick: function onClick() {
          return handleClickBack();
        },
        src: backIcon,
        alt: "back"
      }), external__react__default.a.createElement("div", {
        className: "nearby-bref"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/food-truck/" + data.food_truck.slug
      }, external__react__default.a.createElement("a", {
        className: "Display-2WhiteLeft"
      }, data.nameDisplay)), rateNum && external__react__default.a.createElement("div", {
        className: "detail-rate"
      }, external__react__default.a.createElement("div", {
        className: "rate-number Body-1SemiBlackCenter"
      }, isNaN(rateNum) ? 0 : rateNum), external__react__default.a.createElement("div", {
        className: "rate-star"
      }, external__react__default.a.createElement(rate__default.a, {
        disabled: true,
        value: isNaN(rateNum) ? 0 : rateNum
      }))), external__react__default.a.createElement("div", {
        className: "tag"
      }, data.food_truck.cuisine.map(function (item, index) {
        return external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          key: index,
          to: "/food-truck/co/denver/".concat(item.name.toLowerCase())
        }, external__react__default.a.createElement("a", {
          className: "tag-item Body-1MediumBlackCenter"
        }, item.name, " "));
      })))), external__react__default.a.createElement("div", {
        className: "nearby-event-body"
      }, external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "OPEN TIME"), external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: timeIcon
      }), data.timeDisplay && data.end_time && " ".concat(external__moment__default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(external__moment__default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(external__moment__default()(data.end_time).format("h:mm a"))), external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: locationIcon
      }), data.addressDisplay)), external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "CONTACTS"), data.food_truck.contact_email && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: mailIcon
      }), external__react__default.a.createElement("a", {
        href: "mailto:".concat(data.food_truck.contact_email),
        className: "Body-2GreyLeft"
      }, data.food_truck.contact_email)), data.food_truck.phone && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "phone",
        src: phoneIcon
      }), external__react__default.a.createElement("a", {
        href: "tel:".concat(data.food_truck.phone),
        className: "Body-2GreyLeft"
      }, data.food_truck.phone)), external__react__default.a.createElement("div", {
        className: "social"
      }, data.food_truck.facebook_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.food_truck.facebook_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "facebook",
        src: facebookIconWhite
      })), data.food_truck.instagram_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.food_truck.instagram_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "instagram",
        src: instagramIconWhite
      })), data.food_truck.twitter_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.food_truck.twitter_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "twitter",
        src: twitterIconWhite
      })))), external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "INTRODUCTION"), external__react__default.a.createElement("div", {
        className: "Body-1RegularGrayLeft intro"
      }, data.food_truck.company_description)))));
    }
  }, {
    key: "renderBrewery",
    value: function renderBrewery(data) {
      var handleClickBack = this.props.handleClickBack;
      var rateNum = parseFloat((Math.round(parseFloat(data.brewery.rating) * 2) / 2).toFixed(1), 10);
      return external__react__default.a.createElement("div", {
        className: "nearby-event-detail-container"
      }, external__react__default.a.createElement("div", {
        className: "nearby-event-detail-food-truck"
      }, external__react__default.a.createElement("div", {
        className: "image-container"
      }, external__react__default.a.createElement("img", {
        src: data.image,
        alt: "event"
      })), external__react__default.a.createElement("div", {
        className: "mask-container"
      }, external__react__default.a.createElement("img", {
        onClick: function onClick() {
          return handleClickBack();
        },
        src: backIcon,
        alt: "back"
      }), external__react__default.a.createElement("div", {
        className: "nearby-bref"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/brewery/" + data.brewery.slug
      }, external__react__default.a.createElement("a", {
        className: "Display-2WhiteLeft"
      }, data.nameDisplay)), rateNum && external__react__default.a.createElement("div", {
        className: "detail-rate"
      }, external__react__default.a.createElement("div", {
        className: "rate-number Body-1SemiBlackCenter"
      }, isNaN(rateNum) ? 0 : rateNum), external__react__default.a.createElement("div", {
        className: "rate-star"
      }, external__react__default.a.createElement(rate__default.a, {
        disabled: true,
        value: isNaN(rateNum) ? 0 : rateNum
      }))), external__react__default.a.createElement("div", {
        className: "tag"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/brewery-type/".concat(data.brewery.breweries_type && data.brewery.breweries_type.name)
      }, external__react__default.a.createElement("a", {
        className: "tag-item Body-1MediumBlackCenter"
      }, data.brewery.breweries_type && data.brewery.breweries_type.name, " "))))), external__react__default.a.createElement("div", {
        className: "nearby-event-body"
      }, external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "OPEN TIME"), external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: timeIcon
      }), data.timeDisplay && data.end_time && " ".concat(external__moment__default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(external__moment__default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(external__moment__default()(data.end_time).format("h:mm a"))), external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: locationIcon
      }), data.addressDisplay)), external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "CONTACTS"), data.brewery.contact_email && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: mailIcon
      }), external__react__default.a.createElement("a", {
        href: "mailto:".concat(data.brewery.contact_email),
        className: "Body-2GreyLeft"
      }, data.brewery.contact_email)), data.brewery.phone && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "phone",
        src: phoneIcon
      }), external__react__default.a.createElement("a", {
        href: "tel:".concat(data.brewery.phone),
        className: "Body-2GreyLeft"
      }, data.brewery.phone)), data.brewery.website_url && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "website",
        src: websiteIcon
      }), external__react__default.a.createElement("a", {
        onClick: function onClick() {
          window.open(data.brewery.website_url.includes("http") ? data.brewery.website_url : "http://" + data.brewery.website_url);
        },
        className: "Body-1RegularGrayLeft"
      }, data.brewery.website_url)), external__react__default.a.createElement("div", {
        className: "social"
      }, data.brewery.facebook_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.brewery.facebook_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "facebook",
        src: facebookIconWhite
      })), data.brewery.instagram_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.brewery.instagram_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "instagram",
        src: instagramIconWhite
      })), data.brewery.twitter_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.brewery.twitter_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "twitter",
        src: twitterIconWhite
      })))), external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "INTRODUCTION"), external__react__default.a.createElement("div", {
        className: "Body-1RegularGrayLeft intro"
      }, data.brewery.company_description)))));
    }
  }, {
    key: "renderPairingBrewery",
    value: function renderPairingBrewery(data, trucks) {
      var _this = this;

      var handleClickBack = this.props.handleClickBack;
      var rateNum = parseFloat((Math.round(parseFloat(data.brewery.rating) * 2) / 2).toFixed(1), 10);
      return external__react__default.a.createElement("div", {
        className: "nearby-event-detail-container"
      }, external__react__default.a.createElement("div", {
        className: "nearby-event-detail-food-truck"
      }, external__react__default.a.createElement("div", {
        className: "image-container"
      }, external__react__default.a.createElement("img", {
        src: data.image,
        alt: "event"
      })), external__react__default.a.createElement("div", {
        className: "mask-container"
      }, external__react__default.a.createElement("img", {
        onClick: function onClick() {
          return handleClickBack();
        },
        src: backIcon,
        alt: "back"
      }), external__react__default.a.createElement("div", {
        className: "nearby-bref"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/brewery/" + data.brewery.slug
      }, external__react__default.a.createElement("a", {
        className: "Display-2WhiteLeft"
      }, data.nameDisplay)), rateNum && external__react__default.a.createElement("div", {
        className: "detail-rate"
      }, external__react__default.a.createElement("div", {
        className: "rate-number Body-1SemiBlackCenter"
      }, isNaN(rateNum) ? 0 : rateNum), external__react__default.a.createElement("div", {
        className: "rate-star"
      }, external__react__default.a.createElement(rate__default.a, {
        disabled: true,
        value: isNaN(rateNum) ? 0 : rateNum
      }))), external__react__default.a.createElement("div", {
        className: "tag"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/brewery/type/".concat(data.brewery.breweries_type && data.brewery.breweries_type.name)
      }, external__react__default.a.createElement("div", {
        className: "tag-item Body-1MediumBlackCenter"
      }, data.brewery.breweries_type && data.brewery.breweries_type.name, " "))))), external__react__default.a.createElement("div", {
        className: "nearby-event-body"
      }, external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "OPEN TIME"), external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: timeIcon
      }), data.timeDisplay && data.end_time && " ".concat(external__moment__default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(external__moment__default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(external__moment__default()(data.end_time).format("h:mm a"))), external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: locationIcon
      }), data.addressDisplay)), external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "CONTACTS"), data.brewery.contact_email && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: mailIcon
      }), external__react__default.a.createElement("a", {
        href: "mailto:".concat(data.brewery.contact_email),
        className: "Body-2GreyLeft"
      }, data.brewery.contact_email)), data.brewery.phone && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "phone",
        src: phoneIcon
      }), external__react__default.a.createElement("a", {
        href: "tel:".concat(data.brewery.phone),
        className: "Body-2GreyLeft"
      }, data.brewery.phone)), data.brewery.website_url && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "website",
        src: websiteIcon
      }), external__react__default.a.createElement("a", {
        onClick: function onClick() {
          window.open(data.brewery.website_url.includes("http") ? data.brewery.website_url : "http://" + data.brewery.website_url);
        },
        className: "Body-1RegularGrayLeft"
      }, data.brewery.website_url)), external__react__default.a.createElement("div", {
        className: "social"
      }, data.brewery.facebook_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.brewery.facebook_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "facebook",
        src: facebookIconWhite
      })), data.brewery.instagram_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.brewery.instagram_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "instagram",
        src: instagramIconWhite
      })), data.brewery.twitter_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: data.brewery.twitter_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "twitter",
        src: twitterIconWhite
      })))), external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "INTRODUCTION"), external__react__default.a.createElement("div", {
        className: "Body-1RegularGrayLeft intro"
      }, data.brewery.company_description)), external__react__default.a.createElement("div", null, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "FOODTRUCK"), trucks.map(function (item, index) {
        return _this.renderTruckCard({
          key: index,
          id: item.food_truck.id,
          image: item.food_truck.cover_photo ? item.food_truck.cover_photo[0].url : defaultImage,
          logo: item.food_truck.logo ? item.food_truck.logo[0].url : truckMarkerIcon,
          name: item.food_truck.name,
          rating: item.food_truck.avg_rating,
          cuisine: item.food_truck.cuisine,
          slug: item.food_truck.slug
        });
      })))));
    }
  }, {
    key: "renderPairingActivity",
    value: function renderPairingActivity(data, trucks) {
      var _this2 = this;

      var handleClickBack = this.props.handleClickBack;
      return external__react__default.a.createElement("div", {
        className: "nearby-event-detail-container"
      }, external__react__default.a.createElement("div", {
        className: "nearby-event-detail-activity"
      }, external__react__default.a.createElement("div", {
        className: "image-activity-container"
      }, external__react__default.a.createElement("img", {
        src: data.image,
        alt: "event"
      })), external__react__default.a.createElement("div", {
        className: "mask-activity-container"
      }, external__react__default.a.createElement("div", {
        className: "activity-info-container"
      }, external__react__default.a.createElement("img", {
        className: "back-button",
        onClick: function onClick() {
          return handleClickBack();
        },
        src: backIcon,
        alt: "back"
      }), external__react__default.a.createElement("div", {
        className: "activity-info"
      }, external__react__default.a.createElement("div", {
        className: "info-item Body-1RegularWhiteLeft"
      }, external__react__default.a.createElement("img", {
        src: timeIcon,
        alt: "icon"
      }), "".concat(external__moment__default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(external__moment__default()(data.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(external__moment__default()(data.end_time).format("h:mm a"))), external__react__default.a.createElement("div", {
        className: "info-item Body-1RegularWhiteLeft"
      }, external__react__default.a.createElement("img", {
        src: locationIcon,
        alt: "icon"
      }), data.addressDisplay))), external__react__default.a.createElement("div", {
        className: "nearby-bref"
      }, external__react__default.a.createElement(titleLink["a" /* default */], {
        id: data.activity.id,
        url: "/event/",
        title: data.nameDisplay
      }, external__react__default.a.createElement("div", {
        className: "Display-2WhiteLeft"
      }, data.nameDisplay)))), external__react__default.a.createElement("div", {
        className: "nearby-event-body"
      }, external__react__default.a.createElement("div", {
        className: "contact "
      }, external__react__default.a.createElement("div", {
        className: "Body-1RegularGrayLeft intro"
      }, data.activity.information)), external__react__default.a.createElement("div", null, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "FOOD TRUCKS AT THIS EVENT"), trucks.map(function (item, index) {
        return _this2.renderTruckCard({
          key: index,
          id: item.food_truck.id,
          image: item.food_truck.cover_photo ? item.food_truck.cover_photo[0].url : defaultImage,
          logo: item.food_truck.logo ? item.food_truck.logo[0].url : truckMarkerIcon,
          name: item.food_truck.name,
          rating: item.food_truck.avg_rating,
          cuisine: item.food_truck.cuisine,
          slug: item.food_truck.slug
        });
      })))));
    }
  }, {
    key: "renderNearbyEventDetail",
    value: function renderNearbyEventDetail() {
      var nearbyEventDetail = this.props.nearbyEventDetail;
      if (nearbyEventDetail && nearbyEventDetail[0]) switch (nearbyEventDetail[0].type) {
        case "food_truck":
          return this.renderFoodTruck(nearbyEventDetail[0]);

        case "pairing-brewery":
          return this.renderPairingBrewery(nearbyEventDetail[0], nearbyEventDetail);

        case "pairing-activity":
          return this.renderPairingActivity(nearbyEventDetail[0], nearbyEventDetail);

        case "brewery":
          return this.renderBrewery(nearbyEventDetail[0]);

        default:
          break;
      }
    }
  }, {
    key: "renderNearbyEventListMobile",
    value: function renderNearbyEventListMobile() {
      var _props3 = this.props,
          error = _props3.error,
          tempNearbyState = _props3.tempNearbyState,
          nearbyList = _props3.nearbyList;
      return external__react__default.a.createElement("div", {
        className: "nearby-event-list-container-mobile"
      }, external__react__default.a.createElement("div", {
        className: "event-section"
      }, external__react__default.a.createElement(RenderContainer["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: error
      }, external__react__default.a.createElement("div", {
        className: "nearby-events-list-mobile"
      }, nearbyList && nearbyList.length === 0 ? external__react__default.a.createElement("div", {
        className: "Body-1SemiBlackLeft"
      }, "No truck, pairing or event in the next 15 hours was found near your chosen location") : this.renderEventResponsiveCard(tempNearbyState)))));
    }
  }, {
    key: "renderNearbyEventList",
    value: function renderNearbyEventList() {
      var _props4 = this.props,
          error = _props4.error,
          onChangeFilterItem = _props4.onChangeFilterItem,
          tempNearbyState = _props4.tempNearbyState,
          isLoadingGetNearby = _props4.isLoadingGetNearby,
          nearbyList = _props4.nearbyList;
      return external__react__default.a.createElement("div", {
        className: "nearby-event-list-detail"
      }, external__react__default.a.createElement("h1", {
        className: "name DisplayBlackLeft"
      }, "  Discover in ", external__react__default.a.createElement("a", null, "Denver"), " "), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("div", {
        className: "nearby-filter"
      }, external__react__default.a.createElement("div", {
        className: "filter-content"
      }, listFilterItem.map(function (item, index) {
        return Nearby_filterItem(item, index, onChangeFilterItem, isLoadingGetNearby);
      })), external__react__default.a.createElement("hr", null)), external__react__default.a.createElement("div", {
        className: "event-section"
      }, external__react__default.a.createElement(RenderContainer["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: error
      }, external__react__default.a.createElement("div", {
        style: {
          paddingTop: "30px"
        }
      }, nearbyList && nearbyList.length === 0 ? external__react__default.a.createElement("div", {
        className: "Body-1SemiBlackLeft"
      }, "No truck, pairing or event in the next 15 hours was found near your chosen location") : this.renderEventCard(tempNearbyState)))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props5 = this.props,
          center = _props5.center,
          onChangeMapPosition = _props5.onChangeMapPosition,
          zoom = _props5.zoom,
          handleGoogleMapApi = _props5.handleGoogleMapApi,
          tempNearbyState = _props5.tempNearbyState,
          visibleNearbyEventDetail = _props5.visibleNearbyEventDetail,
          isLoadingGetNearby = _props5.isLoadingGetNearby,
          isInRightPosition = _props5.isInRightPosition,
          handleCloseModal = _props5.handleCloseModal,
          handleExploreInRightPosition = _props5.handleExploreInRightPosition,
          toggleListResponsive = _props5.toggleListResponsive,
          visibleListResponsive = _props5.visibleListResponsive,
          nearbyEventDetail = _props5.nearbyEventDetail;
      return external__react__default.a.createElement("div", {
        className: "nearby-container"
      }, external__react__default.a.createElement(AnnounceNearbyModal, {
        handleExploreInRightPosition: handleExploreInRightPosition,
        handleCancel: handleCloseModal,
        visible: !isInRightPosition
      }), external__react__default.a.createElement(row__default.a, null, external__react__default.a.createElement(external__react_responsive__default.a, {
        maxWidth: 768
      }, function (matches) {
        if (matches) {
          return external__react__default.a.createElement("div", {
            id: "content"
          }, external__react__default.a.createElement("div", {
            className: "responsive-list-button"
          }, external__react__default.a.createElement(button__default.a, {
            onClick: toggleListResponsive
          }, !visibleListResponsive ? "LIST" : "MAP")), visibleListResponsive && _this3.renderNearbyEventListMobile(), nearbyEventDetail && external__react__default.a.createElement("div", {
            style: {
              display: visibleListResponsive ? "none" : ""
            },
            className: "detail-responsive"
          }, external__react__default.a.createElement("div", {
            className: "cover-photo",
            style: {
              backgroundImage: "url(".concat(nearbyEventDetail[0].image ? nearbyEventDetail[0].image : homeImage, ")")
            }
          }), external__react__default.a.createElement("div", {
            className: "detail-body-responsive"
          }, external__react__default.a.createElement("div", {
            className: "Body-1SemiBlackLeft"
          }, nearbyEventDetail[0].nameDisplay), external__react__default.a.createElement("div", {
            className: "popover-info"
          }, external__react__default.a.createElement("img", {
            src: nearbyEventDetail[0].image,
            alt: "popover-icon"
          }), external__react__default.a.createElement("div", {
            className: "popover-text"
          }, external__react__default.a.createElement("div", {
            className: "address Body-1RegularBlackLeft"
          }, nearbyEventDetail[0].addressDisplay), external__react__default.a.createElement("div", {
            className: "time CaptionGreyLeft"
          }, external__moment__default()(nearbyEventDetail[0].timeDisplay, "YYYY-MM-DD h:mm a").format("dddd, MMMM DD"), "   ", external__moment__default()(nearbyEventDetail[0].start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ", external__moment__default()(nearbyEventDetail[0].end_time).format("h:mm a")))))));
        } else return external__react__default.a.createElement(col__default.a, {
          id: "content",
          style: {
            overflow: isLoadingGetNearby && "hidden"
          },
          className: "nearby-event-list-container",
          lg: 8,
          md: 8
        }, visibleNearbyEventDetail ? _this3.renderNearbyEventDetail() : _this3.renderNearbyEventList());
      }), external__react__default.a.createElement(col__default.a, {
        className: "map",
        style: {
          display: visibleListResponsive ? "none" : ""
        },
        lg: 16,
        md: 16
      }, external__react__default.a.createElement("div", {
        className: "lottie-container"
      }, external__react__default.a.createElement("img", {
        src: mapMarker,
        alt: "marker"
      })), external__react__default.a.createElement(external__google_map_react__default.a, {
        onChange: onChangeMapPosition,
        bootstrapURLKeys: {
          key: "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A"
        },
        center: center,
        defaultZoom: 14,
        zoom: zoom,
        yesIWantToUseGoogleMapApiInternals: true,
        onGoogleApiLoaded: handleGoogleMapApi
      }, tempNearbyState.length > 0 && tempNearbyState[0] && this.renderMarker(tempNearbyState)))));
    }
  }]);

  return Nearby;
}(external__react_["Component"]);

/* harmony default export */ var nearby_Nearby = (Nearby_Nearby);
// EXTERNAL MODULE: ./src/actions/types.js
var types = __webpack_require__(2);

// CONCATENATED MODULE: ./src/actions/nearbyAction.js
 // Get truck nearby action 

function mountNearby() {
  return function (dispatch) {
    dispatch({
      type: types["_3" /* MOUNT_NEARBY */]
    });
  };
}
function requestGetNearby(isLoadingGetNearby) {
  return {
    type: types["_21" /* REQUEST_GET_NEARBY */],
    isLoadingGetNearby: isLoadingGetNearby
  };
}
function getNearbySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["s" /* GET_NEARBY_SUCCESS */],
      response: response
    });
  };
}
function getNearbyError(response) {
  return function (dispatch) {
    dispatch({
      type: types["r" /* GET_NEARBY_ERROR */],
      response: response
    });
  };
}
// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(13);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(12);

// CONCATENATED MODULE: ./src/api/nearbyApi.js
 // import { notification, Icon } from 'antd'


 // Get nearby truck

var nearbyApi_getNearby = function getNearby(data, page) {
  return function (dispatch) {
    dispatch(requestGetNearby(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + "api/consumer/v1/nearme?latitude=".concat(data.lat, "&longtitude=").concat(data.lng, "&radius=8046.72&page=").concat(page),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(getNearbySuccess(response));

        if (response.current_page < response.last_page) {
          dispatch(getNearby(data, response.current_page + 1));
        }
      },
      error: function error(_error) {
        dispatch(getNearbyError(_error));
      }
    });
  };
};
// EXTERNAL MODULE: ./global.js
var global = __webpack_require__(23);

// EXTERNAL MODULE: ./src/actions/deepLinkAction.js
var deepLinkAction = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/nearby/_nearby.less
var _nearby = __webpack_require__(205);
var _nearby_default = /*#__PURE__*/__webpack_require__.n(_nearby);

// CONCATENATED MODULE: ./src/components/nearby/NearbyContainer.js
function NearbyContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NearbyContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { NearbyContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NearbyContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NearbyContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NearbyContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NearbyContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) NearbyContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) NearbyContainer__defineProperties(Constructor, staticProps); return Constructor; }

function NearbyContainer__possibleConstructorReturn(self, call) { if (call && (NearbyContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return NearbyContainer__assertThisInitialized(self); }

function NearbyContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NearbyContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var NearbyContainer_eventMarkerIcon = '/static/images/event-marker-icon.png';
var NearbyContainer_pairingMarkerIcon = '/static/images/pairing-marker-icon.png';
var breweryMarkerIcon = '/static/images/brewery-marker-icon.png';
var NearbyContainer_truckMarkerIcon = '/static/images/truck-marker-icon.png';
var cityCircle = null;
var googleGlobal = null;

var NearbyContainer_NearbyContainer =
/*#__PURE__*/
function (_Component) {
  NearbyContainer__inherits(NearbyContainer, _Component);

  function NearbyContainer(props) {
    var _this;

    NearbyContainer__classCallCheck(this, NearbyContainer);

    _this = NearbyContainer__possibleConstructorReturn(this, (NearbyContainer.__proto__ || Object.getPrototypeOf(NearbyContainer)).call(this, props));
    _this.state = {
      center: {
        lat: 39.742043,
        lng: -104.991531
      },
      zoom: 12,
      currentHoverItem: null,
      visible: false,
      nearbyState: [],
      tempNearbyState: [],
      visibleNearbyEventDetail: false,
      nearbyEventDetail: null,
      isInRightPosition: true,
      currentLocation: null,
      visibleListResponsive: false
    };
    return _this;
  }

  NearbyContainer__createClass(NearbyContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.nearby) {
        if (nextProps.nearby.length > 0) {
          var nearby = [],
              nearbyList = [];
          var keys = ["1"];

          for (var i = 0; i < nextProps.nearby.length; ++i) {
            var tempItem = {};
            var tempTime = "",
                tempTempStart = "";
            var events = Object(global["b" /* getEventTime */])(nextProps.nearby[i]);

            for (var j = 0; j < events.length; ++j) {
              if (nextProps.nearby[i] && nextProps.nearby[i].end_time && external__moment__default()(events[j], "YYYY-MM-DD h:mm a").unix() > external__moment__default()().unix()) {
                tempTempStart = external__moment__default()(events[j], "YYYY-MM-DD h:mm a").format("YYYY-MM-DD") + " " + external__moment__default()(nextProps.nearby[i].start_time, "YYYY-MM-DD h:mm a").format("h:mm a");
                tempTime = external__moment__default()(events[j], "YYYY-MM-DD h:mm a").format("YYYY-MM-DD h:mm a");
                break;
              }
            }

            if (external__moment__default()(tempTempStart, "YYYY-MM-DD h:mm a").isBefore(external__moment__default()().add(15, 'hours'))) {
              //Check if item is brewery
              if (nextProps.nearby[i].brewery && !nextProps.nearby[i].food_truck) {
                tempItem = _objectSpread({}, nextProps.nearby[i], {
                  type: "brewery",
                  nameDisplay: nextProps.nearby[i].brewery.name,
                  image: nextProps.nearby[i].brewery.cover_photo && nextProps.nearby[i].brewery.cover_photo[0].url,
                  marker: breweryMarkerIcon,
                  addressDisplay: nextProps.nearby[i].location_name
                });
              } //Check if item is activity
              else if (nextProps.nearby[i].activity && !nextProps.nearby[i].food_truck && !nextProps.nearby[i].brewery) {
                  tempItem = _objectSpread({}, nextProps.nearby[i], {
                    type: "activity",
                    nameDisplay: nextProps.nearby[i].activity.name,
                    image: nextProps.nearby[i].activity.pictures && nextProps.nearby[i].activity.pictures[0].url,
                    marker: NearbyContainer_eventMarkerIcon,
                    addressDisplay: nextProps.nearby[i].activity.address
                  });
                } //Check if item is food truck
                else if (nextProps.nearby[i].food_truck && !nextProps.nearby[i].activity && !nextProps.nearby[i].brewery) {
                    tempItem = _objectSpread({}, nextProps.nearby[i], {
                      type: "food_truck",
                      image: nextProps.nearby[i].food_truck.cover_photo && nextProps.nearby[i].food_truck.cover_photo[0].url,
                      marker: NearbyContainer_truckMarkerIcon,
                      addressDisplay: nextProps.nearby[i].location_name,
                      nameDisplay: nextProps.nearby[i].food_truck.name
                    });
                  } //Check if item is paring (activity & food truck)
                  else if (nextProps.nearby[i].activity && nextProps.nearby[i].food_truck) {
                      tempItem = _objectSpread({}, nextProps.nearby[i], {
                        type: "pairing-activity",
                        nameDisplay: nextProps.nearby[i].activity.name,
                        image: nextProps.nearby[i].activity.pictures && nextProps.nearby[i].activity.pictures[0].url,
                        marker: NearbyContainer_eventMarkerIcon,
                        addressDisplay: nextProps.nearby[i].activity.address
                      });
                    } //Check if item is paring (brewery & food truck)
                    else if (nextProps.nearby[i].brewery && nextProps.nearby[i].food_truck) {
                        tempItem = _objectSpread({}, nextProps.nearby[i], {
                          type: "pairing-brewery",
                          nameDisplay: nextProps.nearby[i].brewery.name,
                          image: nextProps.nearby[i].brewery.cover_photo && nextProps.nearby[i].brewery.cover_photo[0].url,
                          marker: NearbyContainer_pairingMarkerIcon,
                          addressDisplay: nextProps.nearby[i].location_name
                        });
                      } // nearby.push({ ...nextProps.nearby[i], ...tempItem })


              nearbyList.push(_objectSpread({}, nextProps.nearby[i], tempItem, {
                timeDisplay: tempTime
              }));

              if (!keys.includes(nextProps.nearby[i].latitude + tempTime)) {
                nearby.push(_objectSpread({}, nextProps.nearby[i], tempItem, {
                  timeDisplay: tempTime
                }));
                keys.push(nextProps.nearby[i].latitude + tempTime);
              }
            }
          }

          var breweryArray = [],
              activityArray = [],
              foodTruckArray = [],
              pairingBreweryArray = [],
              pairingActivityArray = [];
          var sortedItem = [breweryArray, activityArray, foodTruckArray, pairingBreweryArray, pairingActivityArray];
          nearby.forEach(function (item) {
            switch (item.type) {
              case "brewery":
                sortedItem[0].push(item);
                break;

              case "activity":
                sortedItem[1].push(item);
                break;

              case "food_truck":
                sortedItem[2].push(item);
                break;

              case "pairing-brewery":
                sortedItem[3].push(item);
                break;

              case "pairing-activity":
                sortedItem[4].push(item);
                break;

              default:
                break;
            }
          });
          this.setState({
            nearbyState: sortedItem,
            tempNearbyState: sortedItem,
            nearbyList: nearbyList
          });
          if (nextProps.currentPage > this.props.currentPage) document.getElementById("content").scrollTop = document.getElementById("content").scrollHeight;
        } else this.setState({
          nearbyState: [],
          tempNearbyState: [],
          nearbyList: []
        });
      }
    }
  }, {
    key: "handleClickMarker",
    value: function handleClickMarker(e) {
      var arr = [];
      this.state.nearbyList.forEach(function (item) {
        if (e.latitude === item.latitude) arr.push(item);
      });
      this.setState({
        nearbyEventDetail: arr,
        currentHoverItem: e.id.toString(),
        center: {
          lat: parseFloat(e.latitude),
          lng: parseFloat(e.longtitude)
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var changeRoute = this.props.changeRoute;
      changeRoute("gotrucksterconsumer://app/nearby");

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (e) {
          _this2.setState({
            currentLocation: {
              lat: e.coords.latitude,
              lng: e.coords.longitude
            }
          });

          _this2.detectCurrentLocation({
            lat: e.coords.latitude,
            lng: e.coords.longitude
          });
        });
      }
    }
  }, {
    key: "toggleListResponsive",
    value: function toggleListResponsive() {
      this.setState({
        visibleListResponsive: !this.state.visibleListResponsive
      });
    }
  }, {
    key: "onVisibleChange",
    value: function onVisibleChange(e) {
      if (e === this.state.currentHoverItem) {
        this.setState({
          visible: true
        });
      }
    }
  }, {
    key: "onEventEnter",
    value: function onEventEnter(e) {
      this.setState({
        currentHoverItem: e.target.getAttribute("id")
      });
    }
  }, {
    key: "onEventLeave",
    value: function onEventLeave(e) {
      this.setState({
        currentHoverItem: null
      });
    }
  }, {
    key: "detectCurrentLocation",
    value: function detectCurrentLocation(currentLocation) {
      var self = this;

      if (googleGlobal && currentLocation) {
        var geocoder = new googleGlobal.maps.Geocoder();
        geocoder.geocode({
          'latLng': new googleGlobal.maps.LatLng(currentLocation.lat, currentLocation.lng)
        }, function (results, status) {
          if (status === googleGlobal.maps.GeocoderStatus.OK) {
            if (results[1]) {
              if (results[1].formatted_address.includes("CO") && results[1].formatted_address.includes("USA")) self.setState({
                isInRightPosition: true,
                center: currentLocation
              });else self.setState({
                isInRightPosition: false
              });
            }
          } else {
            alert("Geocoder failed due to: " + status);
          }
        });
      }
    }
  }, {
    key: "handleGoogleMapApi",
    value: function handleGoogleMapApi(google) {
      var _state = this.state,
          center = _state.center,
          currentLocation = _state.currentLocation;
      var map = google.map;
      googleGlobal = google;
      this.detectCurrentLocation(currentLocation);
      cityCircle = new google.maps.Circle({
        strokeColor: '#5289ff',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: 'transparent',
        fillOpacity: 0.1,
        map: map,
        center: center,
        radius: 8046.72
      });
    }
  }, {
    key: "onChangeMapPosition",
    value: function onChangeMapPosition(e) {
      this.props.mountNearby();
      this.props.getNearby(e.center, 1);

      if (cityCircle) {
        cityCircle.setOptions(_objectSpread({}, cityCircle, {
          center: e.center
        }));
      }

      this.setState({
        zoom: e.zoom,
        center: e.center
      });
    }
  }, {
    key: "onChangeFilterItem",
    value: function onChangeFilterItem(e, key) {
      var nearbyState = this.state.nearbyState;

      var tempNearbyState = _toConsumableArray(this.state.tempNearbyState);

      switch (key) {
        case 0:
          tempNearbyState[2] = e === false ? [] : nearbyState[2];
          this.setState({
            tempNearbyState: tempNearbyState
          });
          break;

        case 1:
          tempNearbyState[4] = e === false ? [] : nearbyState[4];
          this.setState({
            tempNearbyState: tempNearbyState
          });
          break;

        case 2:
          tempNearbyState[3] = e === false ? [] : nearbyState[3];
          this.setState({
            tempNearbyState: tempNearbyState
          });
          break;

        default:
          break;
      }
    }
  }, {
    key: "loadMoreNearby",
    value: function loadMoreNearby() {
      document.getElementById("content").scrollTop = 0;
      var _props = this.props,
          getNearby = _props.getNearby,
          currentPage = _props.currentPage;
      getNearby(this.state.center, currentPage + 1);
    }
  }, {
    key: "handleClickNearbyEvent",
    value: function handleClickNearbyEvent(e) {
      document.getElementById("content").scrollTop = 0;
      var arr = [];
      this.state.nearbyList.forEach(function (item) {
        if (e.latitude === item.latitude) arr.push(item);
      });
      this.setState({
        visibleNearbyEventDetail: true,
        nearbyEventDetail: arr,
        currentHoverItem: e.id.toString()
      });
    }
  }, {
    key: "handleClickNearbyEventResponsive",
    value: function handleClickNearbyEventResponsive(e) {
      this.toggleListResponsive();
      var arr = [];
      this.state.nearbyList.forEach(function (item) {
        if (e.latitude === item.latitude) arr.push(item);
      });
      this.setState({
        nearbyEventDetail: arr,
        currentHoverItem: e.id.toString(),
        center: {
          lat: parseFloat(e.latitude),
          lng: parseFloat(e.longtitude)
        }
      });
    }
  }, {
    key: "handleClickBack",
    value: function handleClickBack(e) {
      var elmnt = document.getElementById("content");
      elmnt.scrollTop = 0;
      this.setState({
        visibleNearbyEventDetail: false
      });
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.setState({
        isInRightPosition: !this.state.isInRightPosition
      });
    }
  }, {
    key: "handleExploreInRightPosition",
    value: function handleExploreInRightPosition() {
      this.setState({
        isInRightPosition: true,
        center: {
          lat: 39.742043,
          lng: -104.991531
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _nearby_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: "https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png",
        url: "https://gotruckster.com/nearby",
        title: "Food Trucks Nearby \u2013 View Schedules & Details - Truckster",
        description: "Find food trucks, breweries and pairings in real time. Search by location, name or cuisine type! Satisfy your hunger now. Download the Truckster App for faster access!"
      }), external__react__default.a.createElement(nearby_Nearby, _extends({}, this.state, this.props, {
        handleExploreInRightPosition: function handleExploreInRightPosition(e) {
          return _this3.handleExploreInRightPosition(e);
        },
        handleCloseModal: function handleCloseModal(e) {
          return _this3.handleCloseModal(e);
        },
        handleClickBack: function handleClickBack(e) {
          return _this3.handleClickBack(e);
        },
        handleClickNearbyEvent: function handleClickNearbyEvent(e) {
          return _this3.handleClickNearbyEvent(e);
        },
        loadMoreNearby: function loadMoreNearby(e) {
          return _this3.loadMoreNearby(e);
        },
        onChangeFilterItem: function onChangeFilterItem(e, key) {
          return _this3.onChangeFilterItem(e, key);
        },
        handleGoogleMapApi: function handleGoogleMapApi(e) {
          return _this3.handleGoogleMapApi(e);
        },
        onChangeMapPosition: function onChangeMapPosition(e) {
          return _this3.onChangeMapPosition(e);
        },
        onVisibleChange: function onVisibleChange(e) {
          return _this3.onVisibleChange(e);
        },
        onEventLeave: function onEventLeave(e) {
          return _this3.onEventLeave(e);
        },
        onEventEnter: function onEventEnter(e) {
          return _this3.onEventEnter(e);
        },
        loadMore: function loadMore() {
          return _this3.loadMore();
        },
        toggleListResponsive: function toggleListResponsive() {
          return _this3.toggleListResponsive();
        },
        handleClickMarker: function handleClickMarker(e) {
          return _this3.handleClickMarker(e);
        },
        handleClickNearbyEventResponsive: function handleClickNearbyEventResponsive(e) {
          return _this3.handleClickNearbyEventResponsive(e);
        }
      })));
    }
  }]);

  return NearbyContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    isLoadingGetNearby: state.nearbyReducer.isLoadingGetNearby,
    error: state.nearbyReducer.error,
    nearby: state.nearbyReducer.nearby,
    currentPage: state.nearbyReducer.currentPage,
    lastPage: state.nearbyReducer.lastPage
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    changeRoute: deepLinkAction["a" /* changeRoute */],
    mountNearby: mountNearby,
    getNearby: nearbyApi_getNearby
  }, dispatch);
}
/* harmony default export */ var nearby_NearbyContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(NearbyContainer_NearbyContainer));
// CONCATENATED MODULE: ./pages/nearby.js

/* harmony default export */ var pages_nearby = __webpack_exports__["default"] = (nearby_NearbyContainer);

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = ".nearby-container {\n  background: #fff;\n}\n.nearby-container .nearby-event-list-container {\n  padding-top: 68px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  overflow-y: scroll;\n  position: fixed;\n  height: 100%;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.nearby-container .nearby-event-list-container .nearby-event-list-detail {\n  padding: 30px;\n  padding-top: 0;\n}\n.nearby-container .nearby-event-list-container .nearby-event-list-detail .name {\n  padding-top: 24px;\n  color: #212121;\n}\n.nearby-container .nearby-event-list-container .nearby-event-list-detail hr {\n  background: #efefef;\n  height: 1px;\n  border: 0;\n}\n.nearby-container .nearby-event-list-container .nearby-event-list-detail .event-section .nearby-loadmore {\n  text-align: center;\n}\n.nearby-container .nearby-event-list-container::-webkit-scrollbar {\n  width: 5px;\n}\n.nearby-container .nearby-event-list-container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.nearby-container .nearby-event-list-container::-webkit-scrollbar-thumb {\n  background: #888;\n}\n.nearby-container .nearby-event-list-container::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.nearby-container .nearby-event-list-container-mobile {\n  width: 100%;\n  bottom: 0;\n  padding-top: 126px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.nearby-container .nearby-event-list-container-mobile .nearby-events {\n  margin-right: 16px;\n  margin-bottom: 0;\n}\n.nearby-container .nearby-event-list-container-mobile .nearby-events .pairing-info {\n  width: 250px !important;\n  background: #fff;\n}\n.nearby-container .nearby-event-list-container-mobile::-webkit-scrollbar {\n  width: 2px;\n  height: 5px;\n}\n.nearby-container .nearby-event-list-container-mobile::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.nearby-container .nearby-event-list-container-mobile::-webkit-scrollbar-thumb {\n  background: #888;\n}\n.nearby-container .nearby-event-list-container-mobile::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .image-container img {\n  position: absolute;\n  width: 100%;\n  height: 250px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  height: 250px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container img {\n  width: 24px;\n  margin: 8px;\n  cursor: pointer;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container .nearby-bref {\n  padding: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container .nearby-bref .detail-rate {\n  padding-top: 8px;\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container .nearby-bref .detail-rate .rate-number {\n  border-radius: 4px;\n  background-color: #ffd35e;\n  padding: 2px 5px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container .nearby-bref .detail-rate .rate-star {\n  padding: 0 8px;\n  line-height: 15px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container .nearby-bref .detail-rate .rate-star i::before {\n  font-size: 16px !important;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .mask-container .nearby-bref .tag {\n  justify-content: flex-start !important;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body {\n  padding: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact {\n  padding-bottom: 16px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact .location {\n  display: flex;\n  align-items: center;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact .location img {\n  width: 24px;\n  padding-right: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact .location span {\n  color: #757575;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact .social {\n  display: flex;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact .social .image-holder {\n  margin-top: 16px;\n  background: #bdbdbd;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 16px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact .social .image-holder img {\n  width: 16px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-food-truck .nearby-event-body .contact .intro {\n  white-space: pre-line;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .image-activity-container img {\n  position: absolute;\n  width: 100%;\n  height: 250px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .mask-activity-container {\n  height: 250px;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .mask-activity-container .activity-info-container {\n  display: flex;\n  padding: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .mask-activity-container .activity-info-container .back-button {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  cursor: pointer;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .mask-activity-container .activity-info-container .activity-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .mask-activity-container .activity-info-container .activity-info .info-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .mask-activity-container .activity-info-container .activity-info .info-item img {\n  width: 16px;\n  height: 16px;\n  margin-right: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .mask-activity-container .nearby-bref {\n  padding-bottom: 16px;\n  padding-left: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .nearby-event-body {\n  padding: 8px;\n}\n.nearby-container .nearby-event-detail-container .nearby-event-detail-activity .nearby-event-body .contact {\n  padding-bottom: 24px;\n}\n.nearby-container .nearby-filter .filter-content .filter-item {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 8px;\n  align-items: center;\n}\n.nearby-container .nearby-filter .filter-content .filter-item img {\n  width: 36px;\n  margin-right: 8px;\n}\n.nearby-container .nearby-events {\n  margin-bottom: 16px;\n}\n.nearby-container .nearby-events .pairing-item-container {\n  border-radius: 6px;\n  cursor: pointer;\n  margin-bottom: 16px;\n  display: flex;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n.nearby-container .nearby-events .pairing-item-container:hover,\n.nearby-container .nearby-events .pairing-item-container:focus,\n.nearby-container .nearby-events .pairing-item-container:active {\n  transform: translateX(8px);\n}\n.nearby-container .nearby-events .pairing-item-container .pairing-image img {\n  height: 100px;\n  width: 100px;\n  border-radius: 6px;\n}\n.nearby-container .nearby-events .pairing-item-container .pairing-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-left: 8px;\n}\n.nearby-container .nearby-events .pairing-item-container .pairing-info .pairing-icon {\n  display: flex;\n}\n.nearby-container .nearby-events .pairing-item-container .pairing-info .pairing-icon img {\n  height: 40px;\n  width: 32px;\n  margin-right: 8px;\n}\n.nearby-container .nearby-events .pairing-item-container .pairing-info img {\n  width: 16px;\n  height: 16px;\n}\n.nearby-container .nearby-events .pairing-item-container .pairing-info .pairing-item-bref {\n  display: flex;\n  align-items: center;\n}\n.nearby-container .nearby-events .pairing-item-container .pairing-info .pairing-item-bref img {\n  margin-right: 4px;\n}\n.nearby-container .marker-container .popover__content {\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  top: -64px;\n  transform: translate(0, 10px);\n  background-color: #fff;\n  padding: 8px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  width: auto;\n}\n.nearby-container .marker-container .popover__content .popover-info {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n}\n.nearby-container .marker-container .popover__content .popover-info img {\n  margin-right: 8px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.nearby-container .marker-container .popover__content .popover-info .popover-text {\n  display: flex;\n  flex-direction: column;\n}\n.nearby-container .marker-container:hover .popover__content {\n  z-index: 10;\n  opacity: 1 !important;\n  visibility: visible !important;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n.nearby-container .map {\n  top: 0;\n  position: fixed;\n  right: 0;\n  height: 100vh;\n}\n@media only screen and (max-width: 768px) {\n  .nearby-container .map {\n    position: relative;\n  }\n}\n.nearby-container .map .lottie-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n.nearby-container .map .lottie-container img {\n  z-index: 2;\n  width: 32px;\n}\n.nearby-container .img-hover {\n  transform: scale(1.5);\n  animation: 0.5s ease-in-out;\n}\n.nearby-container .img-leave {\n  transform: scale(1);\n  animation: 0.5s ease-in-out;\n}\n@keyframes leaves {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.5);\n  }\n}\n.spin-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 10;\n  left: 0px;\n  background: rgba(255, 255, 255, 0.5);\n  top: 0;\n}\n.truck-event-card-container {\n  cursor: pointer;\n  display: flex;\n  padding: 8px 0;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n.truck-event-card-container:hover,\n.truck-event-card-container:focus,\n.truck-event-card-container:active {\n  transform: translateX(8px);\n}\n.truck-event-card-container .truck-image-container img {\n  height: 100px;\n  width: 100px;\n  border-radius: 6px;\n}\n.truck-event-card-container .truck-info-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-left: 16px;\n}\n.truck-event-card-container .truck-info-container .truck-logo {\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n}\n.truck-event-card-container .truck-info-container .cuisine-tag {\n  padding: 2px 8px 8px 0;\n  display: flex;\n}\n.truck-event-card-container .truck-info-container .cuisine-tag .cuisine-tag-item {\n  padding-right: 3px;\n  text-transform: uppercase;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.truck-event-card-container .truck-info-container .ant-rate {\n  line-height: 0;\n}\n.truck-event-card-container .truck-info-container .ant-rate li {\n  margin: 0 2px;\n}\n.truck-event-card-container .truck-info-container .ant-rate li i::before {\n  font-size: 16px;\n}\n.responsive-list-button {\n  width: 100%;\n  text-align: center;\n  position: fixed;\n  top: 74px;\n  z-index: 20;\n}\n.responsive-list-button button,\n.responsive-list-button button:hover,\n.responsive-list-button button:active,\n.responsive-list-button button:focus {\n  width: 345px;\n  text-align: center;\n  color: #fff;\n  height: 40px;\n  border-radius: 6px;\n  background-color: #5289ff;\n}\n.detail-responsive {\n  background: #fff;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  z-index: 20;\n}\n.detail-responsive .cover-photo {\n  background-size: cover;\n  height: 125px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n.detail-responsive .popover-info {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n}\n.detail-responsive .popover-info img {\n  margin-right: 8px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.detail-responsive .popover-info .popover-text {\n  display: flex;\n  flex-direction: column;\n}\n.detail-responsive .detail-body-responsive {\n  padding: 8px;\n}\n";

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = getSchedule;
/* harmony export (immutable) */ __webpack_exports__["b"] = getEventTime;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataInitial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPageDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_circular_json__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var cookies = new __WEBPACK_IMPORTED_MODULE_2_react_cookie__["Cookies"]();

var https = __webpack_require__(22);

function getSchedule(data) {
  var schudeles = [];
  data.forEach(function (calendarItem) {
    switch (calendarItem.frequency && calendarItem.frequency.name) {
      case "ONCE":
        {
          schudeles.push(_objectSpread({}, calendarItem, {
            timeDisplay: calendarItem.end_time,
            start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).toDate(),
            end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).toDate()
          }));
          break;
        }

      case "DAILY":
        {
          //Get day of pairing of the week
          var interval = calendarItem.interval ? calendarItem.interval : 1;
          var repeated = calendarItem.times_repeated ? calendarItem.times_repeated : 100;

          for (var i = 0; i < repeated; ++i) {
            var tempDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).add(i * interval, 'day'),
                tempDate1 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).add(i * interval, 'w');
            schudeles.push(_objectSpread({}, calendarItem, {
              timeDisplay: tempDate.format("YYYY-MM-DD h:mm a"),
              start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(tempDate1.format("YYYY-MM-DD h:mm a"), "YYYY-MM-DD h:mm a").toDate(),
              end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(tempDate1.format("YYYY-MM-DD") + ' ' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).format("h:mm a"), "YYYY-MM-DD h:mm a").toDate()
            }));
          }

          break;
        }

      case "WEEKLY":
        {
          //Get day of pairing of the week
          var _interval = calendarItem.interval ? calendarItem.interval : 1;

          var _repeated = calendarItem.times_repeated ? calendarItem.times_repeated : 100;

          for (var _i = 0; _i < _repeated; ++_i) {
            var _tempDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).add(_i * _interval, 'w'),
                _tempDate2 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).add(_i * _interval, 'w');

            schudeles.push(_objectSpread({}, calendarItem, {
              timeDisplay: _tempDate.format("YYYY-MM-DD h:mm a"),
              start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate2.format("YYYY-MM-DD h:mm a"), "YYYY-MM-DD h:mm a").toDate(),
              end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate2.format("YYYY-MM-DD") + ' ' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).format("h:mm a"), "YYYY-MM-DD h:mm a").toDate()
            }));
          }

          break;
        }

      case "MONTHLY":
        {
          var _interval2 = calendarItem.interval ? calendarItem.interval : 1;

          var _repeated2 = calendarItem.times_repeated ? calendarItem.times_repeated : 2000;

          for (var j = 0; j < _repeated2; ++j) {
            var _tempDate3 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).add(j * _interval2, 'M'),
                _tempDate4 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).add(j * _interval2, 'w');

            schudeles.push(_objectSpread({}, calendarItem, {
              timeDisplay: _tempDate3.format("YYYY-MM-DD h:mm a"),
              start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate4.format("YYYY-MM-DD h:mm a"), "YYYY-MM-DD h:mm a").toDate(),
              end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate4.format("YYYY-MM-DD") + ' ' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).format("h:mm a"), "YYYY-MM-DD h:mm a").toDate()
            }));
          }

          break;
        }

      default:
        break;
    }
  });
  return schudeles;
}
function getEventTime(data) {
  var schudeles = [];

  switch (data.frequency.name) {
    case "ONCE":
      {
        schudeles.push(data.end_time);
        break;
      }

    case "DAILY":
      {
        var interval = data.interval ? data.interval : 1;
        var repeated = data.times_repeated ? data.times_repeated : 100; //Get day of pairing of the week

        for (var _i2 = 0; _i2 < repeated; ++_i2) {
          var tempDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.end_time).add(_i2 * interval, 'day');
          schudeles.push(tempDate.format("YYYY-MM-DD h:mm a"));
        }

        break;
      }

    case "WEEKLY":
      {
        var _interval3 = data.interval ? data.interval : 1;

        var _repeated3 = data.times_repeated ? data.times_repeated : 100; //Get day of pairing of the week


        for (var i = 0; i < _repeated3; ++i) {
          var _tempDate5 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.end_time).add(i * _interval3, 'w');

          schudeles.push(_tempDate5.format("YYYY-MM-DD h:mm a"));
        }

        break;
      }

    case "MONTHLY":
      {
        var _interval4 = data.interval ? data.interval : 1;

        var _repeated4 = data.times_repeated ? data.times_repeated : 100;

        for (var j = 0; j < _repeated4; ++j) {
          var _tempDate6 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.end_time).add(j * _interval4, 'M');

          schudeles.push(_tempDate6.format("YYYY-MM-DD h:mm a"));
        }

        break;
      }

    default:
      break;
  }

  return schudeles;
}
var getDataInitial = function getDataInitial(url, token) {
  var header = {
    "Accept": "application/json"
  };

  if (token) {
    header = {
      'Authorization': "Bearer " + token,
      "Accept": "application/json"
    };
  }

  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'get',
    url: "https://dev.gotruckster.com/api/" + url,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: header
  }).then(function (response) {
    return response.data;
  }).catch(function (response) {
    return null;
  });
};
var getPageData = function getPageData(page) {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'get',
    url: "https://cms.gotruckster.com/wp-json/wp/v2/posts?page=" + page,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: {
      "Accept": "application/json"
    }
  }).then(function (response) {
    return __WEBPACK_IMPORTED_MODULE_3_circular_json___default.a.stringify(response);
  }).catch(function (error) {});
};
var getPageDetail = function getPageDetail(slug) {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'get',
    url: "https://cms.gotruckster.com/wp-json/wp/v2/posts?slug=" + slug,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: {
      "Accept": "application/json"
    }
  }).then(function (response) {
    return __WEBPACK_IMPORTED_MODULE_3_circular_json___default.a.stringify(response);
  }).catch(function (error) {});
};

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("circular-json");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = changeRoute;
/* harmony export (immutable) */ __webpack_exports__["b"] = toggleDeepLink;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(2);
 // Deep link action

function changeRoute(params) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["e" /* CHANGE_ROUTE */],
      params: params
    });
  };
}
function toggleDeepLink() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_64" /* TOGGLE_DEEP_LINK */]
    });
  };
}

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function changeTitleAddress(title) {
  title = title.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  title = title.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  title = title.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  title = title.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  title = title.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  title = title.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  title = title.replace(/đ/g, "d");
  title = title.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  title = title.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  title = title.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  title = title.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  title = title.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  title = title.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  title = title.replace(/'/g, "");
  title = title.replace(/Đ/g, "D");
  title = title.replace(/-/g, "");
  title = title.replace(/ {2}/g, "");
  return title.toLowerCase().replace(/ /g, "-");
}

var TitleLink =
/*#__PURE__*/
function (_Component) {
  _inherits(TitleLink, _Component);

  function TitleLink() {
    _classCallCheck(this, TitleLink);

    return _possibleConstructorReturn(this, (TitleLink.__proto__ || Object.getPrototypeOf(TitleLink)).apply(this, arguments));
  }

  _createClass(TitleLink, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          url = _props.url,
          id = _props.id,
          children = _props.children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
        prefetch: true,
        to: url + changeTitleAddress(title) + "--" + id
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", null, children)));
    }
  }]);

  return TitleLink;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TitleLink);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });