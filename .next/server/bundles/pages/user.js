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
/******/ 	return __webpack_require__(__webpack_require__.s = 227);
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

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ }),

/***/ 228:
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

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__(18);
var rate__default = /*#__PURE__*/__webpack_require__.n(rate_);

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__(83);
var tabs__default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(9);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// CONCATENATED MODULE: ./src/components/userProfile/UserProfile.js






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var homeImage = '/static/images/home-image.jpg';
var unknownUserIcon = '/static/images/unknown-user-icon.png';
var TabPane = tabs__default.a.TabPane;
var locationIcon = '/static/images/location-icon.png';

var UserProfile_UserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile() {
    _classCallCheck(this, UserProfile);

    return _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).apply(this, arguments));
  }

  _createClass(UserProfile, [{
    key: "renderReviewBrewery",
    value: function renderReviewBrewery(userReview) {
      return userReview.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          md: 8,
          lg: 8,
          sm: 12,
          xs: 24
        }, external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          to: "/brewery/" + item.brewery.slug
        }, external__react__default.a.createElement("div", {
          className: "review-card"
        }, external__react__default.a.createElement("div", {
          className: "card-header"
        }, external__react__default.a.createElement(rate__default.a, {
          disabled: true,
          value: item.rating
        }), external__react__default.a.createElement("div", {
          className: "CaptionGreyRight"
        }, item.created_at)), external__react__default.a.createElement("div", {
          className: "card-body"
        }, external__react__default.a.createElement("div", {
          className: "truck-image"
        }, external__react__default.a.createElement("img", {
          alt: "truck",
          src: item.brewery.cover_photo ? item.brewery.cover_photo[0].url : homeImage
        })), external__react__default.a.createElement("div", {
          className: "review-info "
        }, external__react__default.a.createElement("div", {
          style: {
            paddingBottom: '4px'
          },
          className: "Body-1MediumBlackLeft review-title"
        }, item.brewery.name), external__react__default.a.createElement("div", {
          className: "CaptionGreyLeft"
        }, external__react__default.a.createElement("img", {
          alt: "locaion",
          src: locationIcon
        }), item.brewery.location))))));
      });
    }
  }, {
    key: "renderReview",
    value: function renderReview(userReview) {
      return userReview.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          md: 8,
          lg: 8,
          sm: 12,
          xs: 24
        }, external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          to: "/food-truck/" + item.food_trucks.slug
        }, external__react__default.a.createElement("div", {
          className: "review-card"
        }, external__react__default.a.createElement("div", {
          className: "card-header"
        }, external__react__default.a.createElement(rate__default.a, {
          disabled: true,
          value: item.rating || parseFloat((Math.round(item.food_trucks.avg_rating * 2) / 2).toFixed(1), 10)
        }), external__react__default.a.createElement("div", {
          className: "CaptionGreyRight"
        }, item.created_at)), external__react__default.a.createElement("div", {
          className: "card-body"
        }, external__react__default.a.createElement("div", {
          className: "truck-image"
        }, external__react__default.a.createElement("img", {
          alt: "truck",
          src: item.food_trucks.cover_photo ? item.food_trucks.cover_photo[0].url : homeImage
        })), external__react__default.a.createElement("div", {
          className: "review-info"
        }, external__react__default.a.createElement("div", {
          style: {
            paddingBottom: '4px'
          },
          className: "Body-1MediumBlackLeft review-title"
        }, item.food_trucks.name), external__react__default.a.createElement("div", {
          className: "CaptionGreyLeft"
        }, external__react__default.a.createElement("img", {
          alt: "locaion",
          src: locationIcon
        }), item.food_trucks.state, ", ", item.food_trucks.city, " "))))));
      });
    }
  }, {
    key: "renderFavoriteBrewery",
    value: function renderFavoriteBrewery(data) {
      return data.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          md: 8,
          lg: 8,
          sm: 12,
          xs: 24
        }, external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          to: "/brewery/" + item.brewery.slug
        }, external__react__default.a.createElement("div", {
          className: "review-card"
        }, external__react__default.a.createElement("div", {
          className: "card-header"
        }, external__react__default.a.createElement(rate__default.a, {
          disabled: true,
          value: item.brewery.rating || parseFloat((Math.round(item.brewery.rating * 2) / 2).toFixed(1), 10)
        }), external__react__default.a.createElement("div", {
          className: "CaptionGreyRight"
        }, item.created_at)), external__react__default.a.createElement("div", {
          className: "card-body"
        }, external__react__default.a.createElement("div", {
          className: "truck-image"
        }, external__react__default.a.createElement("img", {
          alt: "truck",
          src: item.brewery.cover_photo ? item.brewery.cover_photo[0].url : homeImage
        })), external__react__default.a.createElement("div", {
          className: "review-info"
        }, external__react__default.a.createElement("div", {
          style: {
            paddingBottom: '4px'
          },
          className: "Body-1MediumBlackLeft review-title"
        }, item.brewery.name), external__react__default.a.createElement("div", {
          className: "CaptionGreyLeft"
        }, external__react__default.a.createElement("img", {
          alt: "locaion",
          src: locationIcon
        }), item.brewery.state, ", ", item.brewery.city, " "))))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          userData = _props.userData,
          userReview = _props.userReview,
          userFavorite = _props.userFavorite,
          userBreweryReview = _props.userBreweryReview,
          userFavoriteBrewery = _props.userFavoriteBrewery;
      return external__react__default.a.createElement("div", {
        className: "profile-container"
      }, userData && external__react__default.a.createElement("div", {
        className: "profile-header"
      }, external__react__default.a.createElement("div", {
        className: "profile-picture"
      }, external__react__default.a.createElement("img", {
        alt: "avater",
        src: userData.avatar ? userData.avatar : unknownUserIcon
      })), external__react__default.a.createElement("div", {
        className: "info"
      }, external__react__default.a.createElement("div", {
        className: "user-name DisplayBlackLeft"
      }, userData.name), external__react__default.a.createElement("div", {
        className: "create-at Body-2GreyLeft"
      }, "Member Since: ", external__moment__default()(userData.created_at).format("MMMM DD, YYYY")), external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/edit"
      }, external__react__default.a.createElement("a", {
        className: "edit-button"
      }, external__react__default.a.createElement(button__default.a, {
        type: "danger"
      }, "EDIT PROFILE"))))), external__react__default.a.createElement("div", {
        className: "profile-body"
      }, external__react__default.a.createElement(tabs__default.a, {
        defaultActiveKey: "1"
      }, external__react__default.a.createElement(TabPane, {
        tab: "Truck Reviews",
        key: "1"
      }, external__react__default.a.createElement("div", {
        className: "user-review"
      }, userReview && external__react__default.a.createElement(row__default.a, {
        type: "flex",
        justify: "space-between",
        className: "max-width",
        gutter: 30
      }, this.renderReview(userReview)))), external__react__default.a.createElement(TabPane, {
        tab: "Brewery Reviews",
        key: "2"
      }, external__react__default.a.createElement("div", {
        className: "user-review"
      }, userBreweryReview && external__react__default.a.createElement(row__default.a, {
        type: "flex",
        className: "max-width",
        gutter: 30
      }, this.renderReviewBrewery(userBreweryReview)))), external__react__default.a.createElement(TabPane, {
        tab: "My Favorites",
        key: "3"
      }, external__react__default.a.createElement("div", {
        className: "user-review"
      }, userFavorite && external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "favorite-title"
      }, "Food trucks"), external__react__default.a.createElement(row__default.a, {
        type: "flex",
        className: "max-width",
        gutter: 30
      }, this.renderReview(userFavorite)))), external__react__default.a.createElement("div", {
        className: "user-review"
      }, userFavoriteBrewery && external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "favorite-title"
      }, "Brewery"), external__react__default.a.createElement(row__default.a, {
        type: "flex",
        className: "max-width",
        gutter: 30
      }, this.renderFavoriteBrewery(userFavoriteBrewery))))))));
    }
  }]);

  return UserProfile;
}(external__react_["Component"]);

/* harmony default export */ var userProfile_UserProfile = (UserProfile_UserProfile);
// EXTERNAL MODULE: ./src/api/reviewApi.js + 1 modules
var reviewApi = __webpack_require__(56);

// EXTERNAL MODULE: ./src/components/userProfile/_userProfile.less
var _userProfile = __webpack_require__(229);
var _userProfile_default = /*#__PURE__*/__webpack_require__.n(_userProfile);

// CONCATENATED MODULE: ./src/components/userProfile/UserProfileContainer.js
function UserProfileContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UserProfileContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { UserProfileContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UserProfileContainer__typeof(obj); }

function UserProfileContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UserProfileContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UserProfileContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) UserProfileContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) UserProfileContainer__defineProperties(Constructor, staticProps); return Constructor; }

function UserProfileContainer__possibleConstructorReturn(self, call) { if (call && (UserProfileContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return UserProfileContainer__assertThisInitialized(self); }

function UserProfileContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UserProfileContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var UserProfileContainer_UserProfileContainer =
/*#__PURE__*/
function (_Component) {
  UserProfileContainer__inherits(UserProfileContainer, _Component);

  function UserProfileContainer(props) {
    var _this;

    UserProfileContainer__classCallCheck(this, UserProfileContainer);

    _this = UserProfileContainer__possibleConstructorReturn(this, (UserProfileContainer.__proto__ || Object.getPrototypeOf(UserProfileContainer)).call(this, props));
    _this.state = {};
    return _this;
  }

  UserProfileContainer__createClass(UserProfileContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          getUserReview = _props.getUserReview,
          getUserFavorite = _props.getUserFavorite,
          getUserFavoriteBrewery = _props.getUserFavoriteBrewery,
          getUserBreweryReview = _props.getUserBreweryReview;
      getUserReview();
      getUserFavorite();
      getUserBreweryReview();
      getUserFavoriteBrewery();
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _userProfile_default.a
        }
      }), external__react__default.a.createElement(userProfile_UserProfile, this.props));
    }
  }]);

  return UserProfileContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    userData: state.profileReducer.userData,
    userReview: state.reviewReducer.userReview,
    userFavorite: state.reviewReducer.userFavorite,
    userBreweryReview: state.reviewReducer.userBreweryReview,
    userFavoriteBrewery: state.reviewReducer.userFavoriteBrewery
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    getUserFavoriteBrewery: reviewApi["g" /* getUserFavoriteBrewery */],
    getUserBreweryReview: reviewApi["e" /* getUserBreweryReview */],
    getUserReview: reviewApi["h" /* getUserReview */],
    getUserFavorite: reviewApi["f" /* getUserFavorite */]
  }, dispatch);
}
/* harmony default export */ var userProfile_UserProfileContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(UserProfileContainer_UserProfileContainer));
// CONCATENATED MODULE: ./pages/user.js

/* harmony default export */ var user = __webpack_exports__["default"] = (userProfile_UserProfileContainer);

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = ".profile-container {\n  background: #fff;\n  padding-top: 68px;\n}\n.profile-container .profile-header {\n  display: flex;\n  padding: 40px 0;\n  background: #fff;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n.profile-container .profile-header .profile-picture img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n}\n.profile-container .profile-header .info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 24px;\n}\n.profile-container .profile-header .info .edit-button button {\n  color: #212121;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: 0.5px;\n  border: 0;\n}\n.profile-container .profile-header .info .edit-button button:hover {\n  color: #fff;\n}\n.profile-container .profile-body {\n  background-color: #ffffff;\n}\n.profile-container .profile-body .max-width {\n  margin: 0 auto;\n  max-width: 1175px;\n}\n.profile-container .profile-body .ant-tabs-tabpane {\n  background: #fafafa;\n}\n.profile-container .profile-body .user-review {\n  margin: 0 auto;\n  max-width: 1140px;\n  background-color: #fafafa;\n  padding-top: 40px;\n  display: flex;\n  align-items: center;\n}\n.profile-container .profile-body .user-review .review-card {\n  min-width: 280px;\n  margin-bottom: 30px;\n  border-radius: 6px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n.profile-container .profile-body .user-review .review-card .card-header {\n  background-color: #efefef;\n  border-top-right-radius: 6px;\n  border-top-left-radius: 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 12px;\n  height: 40px;\n}\n.profile-container .profile-body .user-review .review-card .card-header li {\n  margin-right: 4px;\n}\n.profile-container .profile-body .user-review .review-card .card-header li i {\n  font-size: 16px;\n}\n.profile-container .profile-body .user-review .review-card .card-body {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n}\n.profile-container .profile-body .user-review .review-card .card-body .truck-image img {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n.profile-container .profile-body .user-review .review-card .card-body .review-info {\n  padding-left: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.profile-container .profile-body .user-review .review-card .card-body .review-info .review-title {\n  min-height: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.profile-container .profile-body .user-review .review-card .card-body .review-info img {\n  margin-right: 6px;\n  width: 16px;\n}\n.profile-container .profile-body .user-review .favorite-title {\n  color: #212121;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: 0.5px;\n  padding-bottom: 8px;\n}\n.profile-container .profile-body .ant-tabs-bar {\n  max-width: 1140px;\n  margin: 0 auto;\n}\n.profile-container .profile-body .ant-tabs-bar .ant-tabs-tab {\n  font-size: 16px;\n  font-weight: 600;\n}\n";

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(21);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/notification"
var notification_ = __webpack_require__(36);
var notification__default = /*#__PURE__*/__webpack_require__.n(notification_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/actions/types.js
var types = __webpack_require__(2);

// CONCATENATED MODULE: ./src/actions/reviewAction.js

function requestGetTruckReview(isLoadingGetTruckReview) {
  return {
    type: types["_29" /* REQUEST_GET_TRUCK_REVIEW */],
    isLoadingGetTruckReview: isLoadingGetTruckReview
  };
}
function getTruckReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["I" /* GET_TRUCK_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function getTruckReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["H" /* GET_TRUCK_REVIEW_ERROR */],
      response: response
    });
  };
} // User post review action

function requestPostReview(isLoadingPostReview) {
  return {
    type: types["_40" /* REQUEST_POST_REVIEW */],
    isLoadingPostReview: isLoadingPostReview
  };
}
function postReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["_11" /* POST_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function postReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["_10" /* POST_REVIEW_ERROR */],
      response: response
    });
  };
} // User edit review action

function requestEditReview(isLoadingEditReview) {
  return {
    type: types["_16" /* REQUEST_EDIT_REVIEW */],
    isLoadingEditReview: isLoadingEditReview
  };
}
function editReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["i" /* EDIT_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function editReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["h" /* EDIT_REVIEW_ERROR */],
      response: response
    });
  };
} // Get user review

function requestGetUserReview(isLoadingGetUserReview) {
  return {
    type: types["_34" /* REQUEST_GET_USER_REVIEW */],
    isLoadingGetUserReview: isLoadingGetUserReview
  };
}
function getUserReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["R" /* GET_USER_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function getUserReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["Q" /* GET_USER_REVIEW_ERROR */],
      response: response
    });
  };
} // Mark favorite action

function requestMarkFavorite(isLoadingMarkFavorite) {
  return {
    type: types["_37" /* REQUEST_MARK_FAVORITE */],
    isLoadingMarkFavorite: isLoadingMarkFavorite
  };
}
function markFavoriteSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["_0" /* MARK_FAVORITE_SUCCESS */],
      response: response
    });
  };
}
function markFavoriteError(response) {
  return function (dispatch) {
    dispatch({
      type: types["Z" /* MARK_FAVORITE_ERROR */],
      response: response
    });
  };
} // Unmark favorite 

function requestUnmarkFavorite(isLoadingUnmarkFavorite) {
  return {
    type: types["_47" /* REQUEST_UNMARK_FAVORITE */],
    isLoadingUnmarkFavorite: isLoadingUnmarkFavorite
  };
}
function unmarkFavoriteSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["_74" /* UNMARK_FAVORITE_SUCCESS */],
      response: response
    });
  };
}
function unmarkFavoriteError(response) {
  return function (dispatch) {
    dispatch({
      type: types["_73" /* UNMARK_FAVORITE_ERROR */],
      response: response
    });
  };
} // Get user favorite 

function requestGetUserFavorite(isLoadingGetUserFavorite) {
  return {
    type: types["_32" /* REQUEST_GET_USER_FAVORITE */],
    isLoadingGetUserFavorite: isLoadingGetUserFavorite
  };
}
function getUserFavoriteSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["P" /* GET_USER_FAVORITE_SUCCESS */],
      response: response
    });
  };
}
function getUserFavoriteError(response) {
  return function (dispatch) {
    dispatch({
      type: types["O" /* GET_USER_FAVORITE_ERROR */],
      response: response
    });
  };
} // Brewery review action

function requestGetBreweryReview(isLoadingGetBreweryReview) {
  return {
    type: types["_19" /* REQUEST_GET_BREWERY_REVIEW */],
    isLoadingGetBreweryReview: isLoadingGetBreweryReview
  };
}
function getBreweryReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["o" /* GET_BREWERY_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function getBreweryReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["n" /* GET_BREWERY_REVIEW_ERROR */],
      response: response
    });
  };
} // User post brewery review 

function requestPostBreweryReview(isLoadingPostBreweryReview) {
  return {
    type: types["_39" /* REQUEST_POST_BREWERY_REVIEW */],
    isLoadingPostBreweryReview: isLoadingPostBreweryReview
  };
}
function postBreweryReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["_9" /* POST_BREWERY_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function postBreweryReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["_8" /* POST_BREWERY_REVIEW_ERROR */],
      response: response
    });
  };
} // User edit review action

function requestEditBreweryReview(isLoadingEditBreweryReview) {
  return {
    type: types["_15" /* REQUEST_EDIT_BREWERY_REVIEW */],
    isLoadingEditBreweryReview: isLoadingEditBreweryReview
  };
}
function editBreweryReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["g" /* EDIT_BREWERY_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function editBreweryReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["f" /* EDIT_BREWERY_REVIEW_ERROR */],
      response: response
    });
  };
} // Get brewery user review

function requestGetUserBreweryReview(isLoadingGetUserBreweryReview) {
  return {
    type: types["_34" /* REQUEST_GET_USER_REVIEW */],
    isLoadingGetUserBreweryReview: isLoadingGetUserBreweryReview
  };
}
function getUserBreweryReviewSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["K" /* GET_USER_BREWERY_REVIEW_SUCCESS */],
      response: response
    });
  };
}
function getUserBreweryReviewError(response) {
  return function (dispatch) {
    dispatch({
      type: types["J" /* GET_USER_BREWERY_REVIEW_ERROR */],
      response: response
    });
  };
} //Mark favorite brewry action

function requestMarkFavoriteBrewery(isLoadingMarkFavoriteBrewery) {
  return {
    type: types["_38" /* REQUEST_MARK_FAVORITE_BREWERY */],
    isLoadingMarkFavoriteBrewery: isLoadingMarkFavoriteBrewery
  };
}
function markFavoriteBrewerySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["Y" /* MARK_FAVORITE_BREWERY_SUCCESS */],
      response: response
    });
  };
}
function markFavoriteBreweryError(response) {
  return function (dispatch) {
    dispatch({
      type: types["X" /* MARK_FAVORITE_BREWERY_ERROR */],
      response: response
    });
  };
} // Unmark favorite 

function requestUnmarkFavoriteBrewery(isLoadingUnmarkFavoriteBrewery) {
  return {
    type: types["_48" /* REQUEST_UNMARK_FAVORITE_BREWERY */],
    isLoadingUnmarkFavoriteBrewery: isLoadingUnmarkFavoriteBrewery
  };
}
function unmarkFavoriteBrewerySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["_72" /* UNMARK_FAVORITE_BREWERY_SUCCESS */],
      response: response
    });
  };
}
function unmarkFavoriteBreweryError(response) {
  return function (dispatch) {
    dispatch({
      type: types["_71" /* UNMARK_FAVORITE_BREWERY_ERROR */],
      response: response
    });
  };
} // Get user favorite 

function requestGetUserFavoriteBrewery(isLoadingGetUserFavoriteBrewery) {
  return {
    type: types["_33" /* REQUEST_GET_USER_FAVORITE_BREWERY */],
    isLoadingGetUserFavoriteBrewery: isLoadingGetUserFavoriteBrewery
  };
}
function getUserFavoriteBrewerySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["N" /* GET_USER_FAVORITE_BREWERY_SUCCESS */],
      response: response
    });
  };
}
function getUserFavoriteBreweryError(response) {
  return function (dispatch) {
    dispatch({
      type: types["M" /* GET_USER_FAVORITE_BREWERY_ERROR */],
      response: response
    });
  };
}
// EXTERNAL MODULE: external "react-cookie"
var external__react_cookie_ = __webpack_require__(10);
var external__react_cookie__default = /*#__PURE__*/__webpack_require__.n(external__react_cookie_);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(13);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(12);

// CONCATENATED MODULE: ./src/api/reviewApi.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reviewApi_getTruckReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reviewApi_editReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return reviewApi_postReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return reviewApi_getUserReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return reviewApi_markFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return reviewApi_unmarkFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reviewApi_getUserFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reviewApi_getBreweryReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reviewApi_editBreweryReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return reviewApi_postBreweryReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reviewApi_getUserBreweryReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reviewApi_markFavoriteBrewery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return reviewApi_unmarkFavoriteBrewery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return reviewApi_getUserFavoriteBrewery; });







var cookies = new external__react_cookie_["Cookies"]();
var reviewApi_getTruckReview = function getTruckReview(truckId) {
  return function (dispatch) {
    dispatch(requestGetTruckReview(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + "api/foodtrucks/".concat(truckId, "/reviews"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(getTruckReviewSuccess(response));
      },
      error: function error(_error) {
        dispatch(getTruckReviewError(_error));
      }
    });
  };
};
var reviewApi_editReview = function editReview(data) {
  var payload = "rating=" + data.rating + "&comment=" + data.comment;
  return function (dispatch) {
    dispatch(requestEditReview(true));
    external__jquery__default.a.ajax({
      type: 'PUT',
      url: config["a" /* apiUrl */] + "api/foodtrucks/".concat(data.truckId, "/reviews"),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: payload,
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(editReviewSuccess(response));
        dispatch(reviewApi_getTruckReview(data.truckId));

        notification__default.a.open({
          message: '',
          description: "Successfully Edited",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            }
          })
        });
      },
      error: function error(_error2) {
        dispatch(editReviewError(_error2));

        notification__default.a.open({
          message: 'Opps!',
          description: "Something went wrong! Please try again later",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "close-circle",
            style: {
              color: '#f32126'
            }
          })
        });
      }
    });
  };
};
var reviewApi_postReview = function postReview(data) {
  var payload = "rating=" + data.rating + "&comment=" + data.comment;
  return function (dispatch) {
    dispatch(requestPostReview(true));
    external__jquery__default.a.ajax({
      type: 'POST',
      url: config["a" /* apiUrl */] + "api/foodtrucks/".concat(data.truckId, "/reviews"),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: payload,
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(postReviewSuccess(response));
        dispatch(reviewApi_getTruckReview(data.truckId));

        notification__default.a.open({
          message: 'Successfully',
          description: "Thanks for your review",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            }
          })
        });
      },
      error: function error(_error3) {
        dispatch(postReviewError(_error3));

        notification__default.a.open({
          message: 'Opps!',
          description: "Something went wrong! Please try again later",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "close-circle",
            style: {
              color: '#f32126'
            }
          })
        });
      }
    });
  };
};
var reviewApi_getUserReview = function getUserReview() {
  return function (dispatch) {
    dispatch(requestGetUserReview(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + 'api/user/reviews',
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(getUserReviewSuccess(response));
      },
      error: function error(_error4) {
        dispatch(getUserReviewError(_error4));
      }
    });
  };
};
var reviewApi_markFavorite = function markFavorite(truckId) {
  return function (dispatch) {
    dispatch(requestMarkFavorite(true));
    external__jquery__default.a.ajax({
      type: 'POST',
      url: config["a" /* apiUrl */] + "api/foodtrucks/".concat(truckId, "/favourites"),
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(markFavoriteSuccess(response));

        notification__default.a.open({
          message: 'Successfully',
          description: "Added to your favorite list",
          icon: external__react__default.a.createElement("img", {
            width: 46,
            style: {
              paddingRight: "8px"
            },
            height: 25,
            src: "/static/images/logo.png",
            alt: "truck-logo"
          })
        });
      },
      error: function error(_error5) {
        dispatch(markFavoriteError(_error5));
      }
    });
  };
};
var reviewApi_unmarkFavorite = function unmarkFavorite(truckId) {
  return function (dispatch) {
    dispatch(requestUnmarkFavorite(true));
    external__jquery__default.a.ajax({
      type: 'DELETE',
      url: config["a" /* apiUrl */] + "api/foodtrucks/".concat(truckId, "/favourites"),
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(unmarkFavoriteSuccess(response));

        notification__default.a.open({
          message: 'Successfully',
          description: "Removed to your favorite list",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            }
          })
        });
      },
      error: function error(_error6) {
        dispatch(unmarkFavoriteError(_error6));
      }
    });
  };
};
var reviewApi_getUserFavorite = function getUserFavorite() {
  return function (dispatch) {
    dispatch(requestGetUserFavorite(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + 'api/user/favourites',
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(getUserFavoriteSuccess(response));
      },
      error: function error(_error7) {
        dispatch(getUserFavoriteError(_error7));
      }
    });
  };
}; // Brewery review 

var reviewApi_getBreweryReview = function getBreweryReview(breweryId) {
  return function (dispatch) {
    dispatch(requestGetBreweryReview(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + "api/consumer/v1/breweries/".concat(breweryId, "/reviews"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(getBreweryReviewSuccess(response));
      },
      error: function error(_error8) {
        dispatch(getBreweryReviewError(_error8));
      }
    });
  };
};
var reviewApi_editBreweryReview = function editBreweryReview(data) {
  var payload = "rating=" + data.rating + "&comment=" + data.comment;
  return function (dispatch) {
    dispatch(requestEditBreweryReview(true));
    external__jquery__default.a.ajax({
      type: 'PUT',
      url: config["a" /* apiUrl */] + "api/consumer/v1/breweries/".concat(data.breweryId, "/reviews"),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: payload,
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(editBreweryReviewSuccess(response));
        dispatch(reviewApi_getBreweryReview(data.breweryId));

        notification__default.a.open({
          message: '',
          description: "Successfully Edited",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            }
          })
        });
      },
      error: function error(_error9) {
        dispatch(editBreweryReviewError(_error9));

        notification__default.a.open({
          message: 'Opps!',
          description: "Something went wrong! Please try again later",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "close-circle",
            style: {
              color: '#f32126'
            }
          })
        });
      }
    });
  };
};
var reviewApi_postBreweryReview = function postBreweryReview(data) {
  var payload = "rating=" + data.rating + "&comment=" + data.comment;
  return function (dispatch) {
    dispatch(requestPostBreweryReview(true));
    external__jquery__default.a.ajax({
      type: 'POST',
      url: config["a" /* apiUrl */] + "api/consumer/v1/breweries/".concat(data.breweryId, "/reviews "),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: payload,
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(postBreweryReviewSuccess(response));
        dispatch(reviewApi_getBreweryReview(data.breweryId));

        notification__default.a.open({
          message: 'Successfully',
          description: "Thanks for your review",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            }
          })
        });
      },
      error: function error(_error10) {
        dispatch(postBreweryReviewError(_error10));

        notification__default.a.open({
          message: 'Opps!',
          description: "Something went wrong! Please try again later",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "close-circle",
            style: {
              color: '#f32126'
            }
          })
        });
      }
    });
  };
};
var reviewApi_getUserBreweryReview = function getUserBreweryReview() {
  return function (dispatch) {
    dispatch(requestGetUserBreweryReview(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + 'api/user/brewery-reviews',
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(getUserBreweryReviewSuccess(response));
      },
      error: function error(_error11) {
        dispatch(getUserBreweryReviewError(_error11));
      }
    });
  };
}; // favorite brewery

var reviewApi_markFavoriteBrewery = function markFavoriteBrewery(breweryId) {
  return function (dispatch) {
    dispatch(requestMarkFavoriteBrewery(true));
    external__jquery__default.a.ajax({
      type: 'POST',
      url: config["a" /* apiUrl */] + "api/consumer/v1/breweries/".concat(breweryId, "/favourites"),
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(markFavoriteBrewerySuccess(response));

        notification__default.a.open({
          message: 'Successfully',
          description: "Added to your favorite list",
          icon: external__react__default.a.createElement("img", {
            width: 46,
            style: {
              paddingRight: "8px"
            },
            height: 25,
            src: "/static/images/logo.png",
            alt: "brewery-logo"
          })
        });
      },
      error: function error(_error12) {
        dispatch(markFavoriteBreweryError(_error12));
      }
    });
  };
};
var reviewApi_unmarkFavoriteBrewery = function unmarkFavoriteBrewery(breweryId) {
  return function (dispatch) {
    dispatch(requestUnmarkFavoriteBrewery(true));
    external__jquery__default.a.ajax({
      type: 'DELETE',
      url: config["a" /* apiUrl */] + "api/consumer/v1/breweries/".concat(breweryId, "/favourites"),
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(unmarkFavoriteBrewerySuccess(response));

        notification__default.a.open({
          message: 'Successfully',
          description: "Removed from your favorite list",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            }
          })
        });
      },
      error: function error(_error13) {
        dispatch(unmarkFavoriteBreweryError(_error13));
      }
    });
  };
};
var reviewApi_getUserFavoriteBrewery = function getUserFavoriteBrewery() {
  return function (dispatch) {
    dispatch(requestGetUserFavoriteBrewery(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + 'api/user/brewery-favourites',
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(getUserFavoriteBrewerySuccess(response));
      },
      error: function error(_error14) {
        dispatch(getUserFavoriteBreweryError(_error14));
      }
    });
  };
};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });