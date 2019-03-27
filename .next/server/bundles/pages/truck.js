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
/******/ 	return __webpack_require__(__webpack_require__.s = 219);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(3);

module.exports = routes().add('about').add('help').add('contact').add('privacy').add('user').add('edit').add('nearby').add('search').add('intro').add('city').add('trucks').add('food-truck-catering').add('success', '/order/:success').add('info-detail', '/info/:slug').add('info', '/info/page/:page').add('pairing', '/pairing/:state/:city').add('events', '/event/:state/:city').add('event', '/event/:slug').add('breweries', '/brewery/:state/:city').add('brewery', '/brewery/:slug').add('brewery-type', '/brewery-type/:value').add('truck-detail-redirect', '/truck/:state/:city').add('truck-redirect', '/truck/:state/:city').add('food-truck', '/food-truck/:state/:city/all').add('truck', '/food-truck/:slug', 'truck').add('cuisine-redirect', '/cuisine/:value').add('cuisines', '/food-truck/:state/:city/cuisines').add('cuisine', '/food-truck/:state/:city/:value').add('cities', '/co').add('city-detail', '/food-truck/:state/:city').add('city-detail-redirect', '/:state/:city');

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return googleApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return googleClientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return facebookAppID; });
//export const apiUrl = "http://52.14.177.231/"
var apiUrl = "https://test.gotruckster.com/";
var googleApi = "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A";
var googleClientID = "617001021912-4jd9lv4ut3nig7vrchouji9076rjs8pd.apps.googleusercontent.com";
var facebookAppID = "2077048179191099";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/rate");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("circular-json");

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = toggleSignInModal;
/* harmony export (immutable) */ __webpack_exports__["h"] = toggleSignUpModal;
/* harmony export (immutable) */ __webpack_exports__["e"] = toggleForgotModal;
/* harmony export (immutable) */ __webpack_exports__["c"] = toggleErrorSignInPopOver;
/* harmony export (immutable) */ __webpack_exports__["d"] = toggleErrorSignUpPopOver;
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleAnnounceModal;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleShareModal;
/* harmony export (immutable) */ __webpack_exports__["b"] = toggleCateringModal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(2);

function toggleSignInModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_69" /* TOGGLE_SIGN_IN_MODAL */]
  };
}
function toggleSignUpModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_70" /* TOGGLE_SIGN_UP_MODAL */]
  };
}
function toggleForgotModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_67" /* TOGGLE_FORGOT_MODAL */]
  };
}
function toggleErrorSignInPopOver() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_65" /* TOGGLE_ERROR_SIGN_IN_POP_OVER */]
  };
}
function toggleErrorSignUpPopOver() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_66" /* TOGGLE_ERROR_SIGN_UP_POP_OVER */]
  };
}
function toggleAnnounceModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_62" /* TOGGLE_ANNOUNCE_MODAL */]
  };
}
function toggleShareModal() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_68" /* TOGGLE_SHARE_MODAL */]
    });
  };
}
function toggleCateringModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_63" /* TOGGLE_CATERING_MODAL */]
  };
}

/***/ }),
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return residences; });
var categories = [{
  name: 'Multi-Cuisine',
  image: '/static/images/cuisines/multi-cuisine.jpeg',
  type: 'cuisine',
  link: 'multi-cuisine'
}, {
  name: 'American',
  image: '/static/images/cuisines/american.jpg',
  type: 'cuisine',
  link: 'american'
}, {
  name: 'Asian',
  image: '/static/images/cuisines/asian.jpg',
  type: 'cuisine',
  link: 'asian'
}, {
  name: 'BBQ',
  image: '/static/images/cuisines/bbq.jpg',
  type: 'cuisine',
  link: 'bbq',
  id: 2
}, {
  name: 'Brazilian',
  image: '/static/images/cuisines/brazilian.jpg',
  type: 'cuisine',
  link: 'brazilian'
}, {
  name: 'Breakfast',
  image: '/static/images/cuisines/breakfast.jpg',
  type: 'cuisine',
  link: 'breakfast'
}, {
  name: 'Burgers',
  image: '/static/images/cuisines/burgers.jpg',
  type: 'cuisine',
  link: 'burgers'
}, {
  name: 'Cajun Creole',
  image: '/static/images/cuisines/cajun-creole.jpg',
  type: 'cuisine',
  link: 'cajun'
}, {
  name: 'Caribbean',
  image: '/static/images/cuisines/carribian.jpeg',
  type: 'cuisine',
  link: 'Caribbean'
}, {
  name: 'Chicago',
  image: '/static/images/cuisines/chicago.jpg',
  type: 'cuisine',
  link: 'chicago-style'
}, {
  name: 'Chinese',
  image: '/static/images/cuisines/chinese.jpg',
  type: 'cuisine',
  link: 'chinese'
}, {
  name: 'Coffee',
  image: '/static/images/cuisines/coffee.jpg',
  type: 'cuisine',
  link: 'coffee'
}, {
  name: 'Columbian',
  image: '/static/images/cuisines/columbian.jpg',
  type: 'cuisine',
  link: 'columbian'
}, {
  name: 'Crepes',
  image: '/static/images/cuisines/crepes.jpg',
  type: 'cuisine',
  link: 'crepes'
}, {
  name: 'Cuban',
  image: '/static/images/cuisines/cuban.jpg',
  type: 'cuisine',
  link: 'cuban'
}, {
  name: 'Dessert',
  image: '/static/images/cuisines/dessert.jpg',
  type: 'cuisine',
  link: 'dessert'
}, {
  name: 'Ethiopian',
  image: '/static/images/cuisines/ethiopian.jpg',
  type: 'cuisine',
  link: 'ethiopian'
}, {
  name: 'Farm Fresh',
  image: '/static/images/cuisines/farm-fresh.jpg',
  type: 'cuisine',
  link: 'farm-fresh'
}, {
  name: 'Filipino',
  image: '/static/images/cuisines/filipino.jpg',
  type: 'cuisine',
  link: 'filipino'
}, {
  name: 'French',
  image: '/static/images/cuisines/french.jpg',
  type: 'cuisine',
  link: 'french'
}, {
  name: 'German',
  image: '/static/images/cuisines/german.jpg',
  type: 'cuisine',
  link: 'german'
}, {
  name: 'Greek',
  image: '/static/images/cuisines/greek.jpg',
  type: 'cuisine',
  link: 'greek'
}, {
  name: 'Hawaiian',
  image: '/static/images/cuisines/hawaiian.jpg',
  type: 'cuisine',
  link: 'hawaiian-style'
}, {
  name: 'Indian',
  image: '/static/images/cuisines/indian.jpg',
  type: 'cuisine',
  link: 'indian'
}, {
  name: 'Italian',
  image: '/static/images/cuisines/italian.jpg',
  type: 'cuisine',
  link: 'italian'
}, {
  name: 'Jamaican',
  image: '/static/images/cuisines/jamaican.jpg',
  type: 'cuisine',
  link: 'jamaican'
}, {
  name: 'Japanese',
  image: '/static/images/cuisines/japanese.jpg',
  type: 'cuisine',
  link: 'japanese'
}, {
  name: 'Juice',
  image: '/static/images/cuisines/juice.jpg',
  type: 'cuisine',
  link: 'juice'
}, {
  name: 'Latin American',
  image: '/static/images/cuisines/latin-american.jpg',
  type: 'cuisine',
  link: 'latin-american'
}, {
  name: 'Latin Asian Fusion',
  image: '/static/images/cuisines/latin-asian-fusion.jpg',
  type: 'cuisine',
  link: 'latin-asian-fusion',
  id: 4
}, {
  name: 'Mediterranean',
  image: '/static/images/cuisines/mediterranean.jpg',
  type: 'cuisine',
  link: 'mediterranean',
  id: 1
}, {
  name: 'Mexican',
  image: '/static/images/cuisines/mexican.jpg',
  type: 'cuisine',
  link: 'mexican'
}, {
  name: 'Middle Eastern',
  image: '/static/images/cuisines/middle-eastern.jpg',
  type: 'cuisine',
  link: 'middle-eastern'
}, {
  name: 'Native American',
  image: '/static/images/cuisines/native-american.jpg',
  type: 'cuisine',
  link: 'native-american'
}, {
  name: 'New England',
  image: '/static/images/cuisines/new-england.jpg',
  type: 'cuisine',
  link: 'new-england'
}, {
  name: 'Peruvian',
  image: '/static/images/cuisines/peruvian.jpg',
  type: 'cuisine',
  link: 'peruvian',
  id: 3
}, {
  name: 'Pizza',
  image: '/static/images/cuisines/pizza.jpg',
  type: 'cuisine',
  link: 'pizza'
}, {
  name: 'Polish',
  image: '/static/images/cuisines/polish.jpg',
  type: 'cuisine',
  link: 'polish'
}, {
  name: 'Polynesian',
  image: '/static/images/cuisines/polynesian.jpg',
  type: 'cuisine',
  link: 'polynesian'
}, {
  name: 'Puertorican',
  image: '/static/images/cuisines/puertorican.jpg',
  type: 'cuisine',
  link: 'puertorican',
  id: 5
}, {
  name: 'Senegalese',
  image: '/static/images/cuisines/senegalese.jpg',
  type: 'cuisine',
  link: 'senegalese'
}, {
  name: 'Southern',
  image: '/static/images/cuisines/southern.jpg',
  type: 'cuisine',
  link: 'southern'
}, {
  name: 'Spanish',
  image: '/static/images/cuisines/spanish.jpg',
  type: 'cuisine',
  link: 'spanish'
}, {
  name: 'Thai',
  image: '/static/images/cuisines/thai.jpg',
  type: 'cuisine',
  link: 'thai'
}, {
  name: 'Turkish',
  image: '/static/images/cuisines/turkish.jpg',
  type: 'cuisine',
  link: 'turkish'
}, {
  name: 'Vegan',
  image: '/static/images/cuisines/vegan.jpg',
  type: 'cuisine',
  link: 'vegan'
}, {
  name: 'Vegetarian',
  image: '/static/images/cuisines/vegetarian.jpg',
  type: 'cuisine',
  link: 'vegetarian'
}, {
  name: 'Venezuelan',
  image: '/static/images/cuisines/venezuelan.jpg',
  type: 'cuisine',
  link: 'venezuelan'
}, {
  name: 'Wings',
  image: '/static/images/cuisines/wings.jpg',
  type: 'cuisine',
  link: 'wings'
}];
var residences = [{
  value: 'colorado',
  label: 'Colorado',
  children: [{
    value: 'acresgreen',
    label: 'Acres Green'
  }, {
    value: 'aguilar',
    label: 'Aguilar'
  }, {
    value: 'airforceacademy',
    label: 'Air Force Academy'
  }, {
    value: 'akron',
    label: 'Akron'
  }, {
    value: 'alamosa',
    label: 'Alamosa'
  }, {
    value: 'alamosaeast',
    label: 'Alamosa East'
  }, {
    value: 'allenspark',
    label: 'Allenspark'
  }, {
    value: 'alma',
    label: 'Alma'
  }, {
    value: 'antonito',
    label: 'Antonito'
  }, {
    value: 'applewood',
    label: 'Applewood'
  }, {
    value: 'arboles',
    label: 'Arboles'
  }, {
    value: 'aristocratranchettes',
    label: 'Aristocrat Ranchettes'
  }, {
    value: 'arriba',
    label: 'Arriba'
  }, {
    value: 'arvada',
    label: 'Arvada'
  }, {
    value: 'aspen',
    label: 'Aspen'
  }, {
    value: 'aspenpark',
    label: 'Aspen Park'
  }, {
    value: 'atwood',
    label: 'Atwood'
  }, {
    value: 'ault',
    label: 'Ault'
  }, {
    value: 'aurora',
    label: 'Aurora'
  }, {
    value: 'avon',
    label: 'Avon'
  }, {
    value: 'avondale',
    label: 'Avondale'
  }, {
    value: 'basalt',
    label: 'Basalt'
  }, {
    value: 'battlementmesa',
    label: 'Battlement Mesa'
  }, {
    value: 'bayfield',
    label: 'Bayfield'
  }, {
    value: 'bennett',
    label: 'Bennett'
  }, {
    value: 'berkley',
    label: 'Berkley'
  }, {
    value: 'berthoud',
    label: 'Berthoud'
  }, {
    value: 'bethune',
    label: 'Bethune'
  }, {
    value: 'beulahvalley',
    label: 'Beulah Valley'
  }, {
    value: 'blackforest',
    label: 'Black Forest'
  }, {
    value: 'blackhawk',
    label: 'Black Hawk'
  }, {
    value: 'blanca',
    label: 'Blanca'
  }, {
    value: 'blueriver',
    label: 'Blue River'
  }, {
    value: 'bonanza',
    label: 'Bonanza'
  }, {
    value: 'boone',
    label: 'Boone'
  }, {
    value: 'boulder',
    label: 'Boulder'
  }, {
    value: 'bowmar',
    label: 'Bow Mar'
  }, {
    value: 'branson',
    label: 'Branson'
  }, {
    value: 'breckenridge',
    label: 'Breckenridge'
  }, {
    value: 'brighton',
    label: 'Brighton'
  }, {
    value: 'brookside',
    label: 'Brookside'
  }, {
    value: 'broomfield',
    label: 'Broomfield'
  }, {
    value: 'brush',
    label: 'Brush'
  }, {
    value: 'buenavista',
    label: 'Buena Vista'
  }, {
    value: 'burlington',
    label: 'Burlington'
  }, {
    value: 'byers',
    label: 'Byers'
  }, {
    value: 'calhan',
    label: 'Calhan'
  }, {
    value: 'campion',
    label: 'Campion'
  }, {
    value: 'campo',
    label: 'Campo'
  }, {
    value: 'canoncity',
    label: 'Canon City'
  }, {
    value: 'carbondale',
    label: 'Carbondale'
  }, {
    value: 'carriageclub',
    label: 'Carriage Club'
  }, {
    value: 'cascade-chipitapark',
    label: 'Cascade-Chipita Park'
  }, {
    value: 'castlepines',
    label: 'Castle Pines'
  }, {
    value: 'castlerock',
    label: 'Castle Rock'
  }, {
    value: 'castlewood',
    label: 'Castlewood'
  }, {
    value: 'cedaredge',
    label: 'Cedaredge'
  }, {
    value: 'center',
    label: 'Center'
  }, {
    value: 'centralcity',
    label: 'Central City'
  }, {
    value: 'cheraw',
    label: 'Cheraw'
  }, {
    value: 'cherryhillsvillage',
    label: 'Cherry Hills Village'
  }, {
    value: 'cheyennewells',
    label: 'Cheyenne Wells'
  }, {
    value: 'cimarronhills',
    label: 'Cimarron Hills'
  }, {
    value: 'clifton',
    label: 'Clifton'
  }, {
    value: 'coalcreek',
    label: 'Coal Creek'
  }, {
    value: 'cokedale',
    label: 'Cokedale'
  }, {
    value: 'collbran',
    label: 'Collbran'
  }, {
    value: 'coloradocity',
    label: 'Colorado City'
  }, {
    value: 'coloradosprings',
    label: 'Colorado Springs'
  }, {
    value: 'columbine',
    label: 'Columbine'
  }, {
    value: 'columbinevalley',
    label: 'Columbine Valley'
  }, {
    value: 'commercecity',
    label: 'Commerce City'
  }, {
    value: 'cortez',
    label: 'Cortez'
  }, {
    value: 'cottonwood',
    label: 'Cottonwood'
  }, {
    value: 'craig',
    label: 'Craig'
  }, {
    value: 'crawford',
    label: 'Crawford'
  }, {
    value: 'creede',
    label: 'Creede'
  }, {
    value: 'crestedbutte',
    label: 'Crested Butte'
  }, {
    value: 'crestone',
    label: 'Crestone'
  }, {
    value: 'cripplecreek',
    label: 'Cripple Creek'
  }, {
    value: 'crook',
    label: 'Crook'
  }, {
    value: 'crowley',
    label: 'Crowley'
  }, {
    value: 'dacono',
    label: 'Dacono'
  }, {
    value: 'debeque',
    label: 'De Beque'
  }, {
    value: 'deertrail',
    label: 'Deer Trail'
  }, {
    value: 'delnorte',
    label: 'Del Norte'
  }, {
    value: 'delta',
    label: 'Delta'
  }, {
    value: 'denver',
    label: 'Denver'
  }, {
    value: 'derby',
    label: 'Derby'
  }, {
    value: 'dillon',
    label: 'Dillon'
  }, {
    value: 'dinosaur',
    label: 'Dinosaur'
  }, {
    value: 'dolores',
    label: 'Dolores'
  }, {
    value: 'dovecreek',
    label: 'Dove Creek'
  }, {
    value: 'downieville-lawson-dumont',
    label: 'Downieville-Lawson-Dumont'
  }, {
    value: 'durango',
    label: 'Durango'
  }, {
    value: 'eads',
    label: 'Eads'
  }, {
    value: 'eagle',
    label: 'Eagle'
  }, {
    value: 'eagle-vail',
    label: 'Eagle-Vail'
  }, {
    value: 'eastpleasantview',
    label: 'East Pleasant View'
  }, {
    value: 'eaton',
    label: 'Eaton'
  }, {
    value: 'eckley',
    label: 'Eckley'
  }, {
    value: 'edgewater',
    label: 'Edgewater'
  }, {
    value: 'edwards',
    label: 'Edwards'
  }, {
    value: 'eldora',
    label: 'Eldora'
  }, {
    value: 'eldoradosprings',
    label: 'Eldorado Springs'
  }, {
    value: 'elizabeth',
    label: 'Elizabeth'
  }, {
    value: 'eljebel',
    label: 'El Jebel'
  }, {
    value: 'empire',
    label: 'Empire'
  }, {
    value: 'englewood',
    label: 'Englewood'
  }, {
    value: 'erie',
    label: 'Erie'
  }, {
    value: 'estespark',
    label: 'Estes Park'
  }, {
    value: 'evans',
    label: 'Evans'
  }, {
    value: 'evergreen',
    label: 'Evergreen'
  }, {
    value: 'fairplay',
    label: 'Fairplay'
  }, {
    value: 'federalheights',
    label: 'Federal Heights'
  }, {
    value: 'firestone',
    label: 'Firestone'
  }, {
    value: 'flagler',
    label: 'Flagler'
  }, {
    value: 'fleming',
    label: 'Fleming'
  }, {
    value: 'florence',
    label: 'Florence'
  }, {
    value: 'fortcarson',
    label: 'Fort Carson'
  }, {
    value: 'fortcollins',
    label: 'Fort Collins'
  }, {
    value: 'fortgarland',
    label: 'Fort Garland'
  }, {
    value: 'fortlupton',
    label: 'Fort Lupton'
  }, {
    value: 'fortmorgan',
    label: 'Fort Morgan'
  }, {
    value: 'fountain',
    label: 'Fountain'
  }, {
    value: 'fowler',
    label: 'Fowler'
  }, {
    value: 'foxfield',
    label: 'Foxfield'
  }, {
    value: 'franktown',
    label: 'Franktown'
  }, {
    value: 'fraser',
    label: 'Fraser'
  }, {
    value: 'frederick',
    label: 'Frederick'
  }, {
    value: 'frisco',
    label: 'Frisco'
  }, {
    value: 'fruita',
    label: 'Fruita'
  }, {
    value: 'fruitvale',
    label: 'Fruitvale'
  }, {
    value: 'gardencity',
    label: 'Garden City'
  }, {
    value: 'genesee',
    label: 'Genesee'
  }, {
    value: 'genoa',
    label: 'Genoa'
  }, {
    value: 'georgetown',
    label: 'Georgetown'
  }, {
    value: 'gilcrest',
    label: 'Gilcrest'
  }, {
    value: 'glendale',
    label: 'Glendale'
  }, {
    value: 'gleneagle',
    label: 'Gleneagle'
  }, {
    value: 'glenwoodsprings',
    label: 'Glenwood Springs'
  }, {
    value: 'golden',
    label: 'Golden'
  }, {
    value: 'goldhill',
    label: 'Gold Hill'
  }, {
    value: 'granada',
    label: 'Granada'
  }, {
    value: 'granby',
    label: 'Granby'
  }, {
    value: 'grandjunction',
    label: 'Grand Junction'
  }, {
    value: 'grandlake',
    label: 'Grand Lake'
  }, {
    value: 'grandviewestates',
    label: 'Grand View Estates'
  }, {
    value: 'greeley',
    label: 'Greeley'
  }, {
    value: 'greenmountainfalls',
    label: 'Green Mountain Falls'
  }, {
    value: 'greenwoodvillage',
    label: 'Greenwood Village'
  }, {
    value: 'grover',
    label: 'Grover'
  }, {
    value: 'gunbarrel',
    label: 'Gunbarrel'
  }, {
    value: 'gunnison',
    label: 'Gunnison'
  }, {
    value: 'gypsum',
    label: 'Gypsum'
  }, {
    value: 'hartman',
    label: 'Hartman'
  }, {
    value: 'haswell',
    label: 'Haswell'
  }, {
    value: 'haxtun',
    label: 'Haxtun'
  }, {
    value: 'hayden',
    label: 'Hayden'
  }, {
    value: 'heritagehills',
    label: 'Heritage Hills'
  }, {
    value: 'highlandsranch',
    label: 'Highlands Ranch'
  }, {
    value: 'hillrose',
    label: 'Hillrose'
  }, {
    value: 'holly',
    label: 'Holly'
  }, {
    value: 'holyoke',
    label: 'Holyoke'
  }, {
    value: 'hooper',
    label: 'Hooper'
  }, {
    value: 'hotchkiss',
    label: 'Hotchkiss'
  }, {
    value: 'hotsulphursprings',
    label: 'Hot Sulphur Springs'
  }, {
    value: 'hudson',
    label: 'Hudson'
  }, {
    value: 'hugo',
    label: 'Hugo'
  }, {
    value: 'idahosprings',
    label: 'Idaho Springs'
  }, {
    value: 'ignacio',
    label: 'Ignacio'
  }, {
    value: 'iliff',
    label: 'Iliff'
  }, {
    value: 'indianhills',
    label: 'Indian Hills'
  }, {
    value: 'jamestown',
    label: 'Jamestown'
  }, {
    value: 'johnstown',
    label: 'Johnstown'
  }, {
    value: 'julesburg',
    label: 'Julesburg'
  }, {
    value: 'keenesburg',
    label: 'Keenesburg'
  }, {
    value: 'kencaryl',
    label: 'Ken Caryl'
  }, {
    value: 'kersey',
    label: 'Kersey'
  }, {
    value: 'keystone',
    label: 'Keystone'
  }, {
    value: 'kim',
    label: 'Kim'
  }, {
    value: 'kiowa',
    label: 'Kiowa'
  }, {
    value: 'kitcarson',
    label: 'Kit Carson'
  }, {
    value: 'kittredge',
    label: 'Kittredge'
  }, {
    value: 'kremmling',
    label: 'Kremmling'
  }, {
    value: 'lafayette',
    label: 'Lafayette'
  }, {
    value: 'lajara',
    label: 'La Jara'
  }, {
    value: 'lajunta',
    label: 'La Junta'
  }, {
    value: 'lakecity',
    label: 'Lake City'
  }, {
    value: 'lakeside',
    label: 'Lakeside'
  }, {
    value: 'lakewood',
    label: 'Lakewood'
  }, {
    value: 'lamar',
    label: 'Lamar'
  }, {
    value: 'laporte',
    label: 'Laporte'
  }, {
    value: 'larkspur',
    label: 'Larkspur'
  }, {
    value: 'lasalle',
    label: 'La Salle'
  }, {
    value: 'lasanimas',
    label: 'Las Animas'
  }, {
    value: 'laveta',
    label: 'La Veta'
  }, {
    value: 'leadville',
    label: 'Leadville'
  }, {
    value: 'leadvillenorth',
    label: 'Leadville North'
  }, {
    value: 'limon',
    label: 'Limon'
  }, {
    value: 'lincolnpark',
    label: 'Lincoln Park'
  }, {
    value: 'littleton',
    label: 'Littleton'
  }, {
    value: 'lochbuie',
    label: 'Lochbuie'
  }, {
    value: 'loghillvillage',
    label: 'Loghill Village'
  }, {
    value: 'loglanevillage',
    label: 'Log Lane Village'
  }, {
    value: 'lonetree',
    label: 'Lone Tree'
  }, {
    value: 'longmont',
    label: 'Longmont'
  }, {
    value: 'louisville',
    label: 'Louisville'
  }, {
    value: 'louviers',
    label: 'Louviers'
  }, {
    value: 'loveland',
    label: 'Loveland'
  }, {
    value: 'lyons',
    label: 'Lyons'
  }, {
    value: 'manassa',
    label: 'Manassa'
  }, {
    value: 'mancos',
    label: 'Mancos'
  }, {
    value: 'manitousprings',
    label: 'Manitou Springs'
  }, {
    value: 'manzanola',
    label: 'Manzanola'
  }, {
    value: 'marble',
    label: 'Marble'
  }, {
    value: 'mead',
    label: 'Mead'
  }, {
    value: 'meeker',
    label: 'Meeker'
  }, {
    value: 'meridian',
    label: 'Meridian'
  }, {
    value: 'merino',
    label: 'Merino'
  }, {
    value: 'milliken',
    label: 'Milliken'
  }, {
    value: 'minturn',
    label: 'Minturn'
  }, {
    value: 'moffat',
    label: 'Moffat'
  }, {
    value: 'montevista',
    label: 'Monte Vista'
  }, {
    value: 'montezuma',
    label: 'Montezuma'
  }, {
    value: 'montrose',
    label: 'Montrose'
  }, {
    value: 'monument',
    label: 'Monument'
  }, {
    value: 'morrison',
    label: 'Morrison'
  }, {
    value: 'mountainview',
    label: 'Mountain View'
  }, {
    value: 'mountainvillage',
    label: 'Mountain Village'
  }, {
    value: 'mountcrestedbutte',
    label: 'Mount Crested Butte'
  }, {
    value: 'naturita',
    label: 'Naturita'
  }, {
    value: 'nederland',
    label: 'Nederland'
  }, {
    value: 'newcastle',
    label: 'New Castle'
  }, {
    value: 'niwot',
    label: 'Niwot'
  }, {
    value: 'northglenn',
    label: 'Northglenn'
  }, {
    value: 'northwashington',
    label: 'North Washington'
  }, {
    value: 'norwood',
    label: 'Norwood'
  }, {
    value: 'nucla',
    label: 'Nucla'
  }, {
    value: 'nunn',
    label: 'Nunn'
  }, {
    value: 'oakcreek',
    label: 'Oak Creek'
  }, {
    value: 'olathe',
    label: 'Olathe'
  }, {
    value: 'olneysprings',
    label: 'Olney Springs'
  }, {
    value: 'ophir',
    label: 'Ophir'
  }, {
    value: 'orchardcity',
    label: 'Orchard City'
  }, {
    value: 'orchardmesa',
    label: 'Orchard Mesa'
  }, {
    value: 'ordway',
    label: 'Ordway'
  }, {
    value: 'otis',
    label: 'Otis'
  }, {
    value: 'ouray',
    label: 'Ouray'
  }, {
    value: 'ovid',
    label: 'Ovid'
  }, {
    value: 'padroni',
    label: 'Padroni'
  }, {
    value: 'pagosasprings',
    label: 'Pagosa Springs'
  }, {
    value: 'palisade',
    label: 'Palisade'
  }, {
    value: 'palmerlake',
    label: 'Palmer Lake'
  }, {
    value: 'paoli',
    label: 'Paoli'
  }, {
    value: 'paonia',
    label: 'Paonia'
  }, {
    value: 'parachute',
    label: 'Parachute'
  }, {
    value: 'parker',
    label: 'Parker'
  }, {
    value: 'peetz',
    label: 'Peetz'
  }, {
    value: 'penrose',
    label: 'Penrose'
  }, {
    value: 'perrypark',
    label: 'Perry Park'
  }, {
    value: 'pierce',
    label: 'Pierce'
  }, {
    value: 'pitkin',
    label: 'Pitkin'
  }, {
    value: 'platteville',
    label: 'Platteville'
  }, {
    value: 'ponchasprings',
    label: 'Poncha Springs'
  }, {
    value: 'ponderosapark',
    label: 'Ponderosa Park'
  }, {
    value: 'pritchett',
    label: 'Pritchett'
  }, {
    value: 'pueblo',
    label: 'Pueblo'
  }, {
    value: 'pueblowest',
    label: 'Pueblo West'
  }, {
    value: 'ramah',
    label: 'Ramah'
  }, {
    value: 'rangely',
    label: 'Rangely'
  }, {
    value: 'raymer',
    label: 'Raymer'
  }, {
    value: 'redcliff',
    label: 'Red Cliff'
  }, {
    value: 'redfeatherlakes',
    label: 'Red Feather Lakes'
  }, {
    value: 'redlands',
    label: 'Redlands'
  }, {
    value: 'rico',
    label: 'Rico'
  }, {
    value: 'ridgway',
    label: 'Ridgway'
  }, {
    value: 'rifle',
    label: 'Rifle'
  }, {
    value: 'rockvale',
    label: 'Rockvale'
  }, {
    value: 'rockyford',
    label: 'Rocky Ford'
  }, {
    value: 'romeo',
    label: 'Romeo'
  }, {
    value: 'roxboroughpark',
    label: 'Roxborough Park'
  }, {
    value: 'rye',
    label: 'Rye'
  }, {
    value: 'saguache',
    label: 'Saguache'
  }, {
    value: 'stmary',
    label: "St. Mary's"
  }, {
    value: 'salida',
    label: 'Salida'
  }, {
    value: 'saltcreek',
    label: 'Salt Creek'
  }, {
    value: 'sanford',
    label: 'Sanford'
  }, {
    value: 'sanluis',
    label: 'San Luis'
  }, {
    value: 'sawpit',
    label: 'Sawpit'
  }, {
    value: 'security-widefield',
    label: 'Security-Widefield'
  }, {
    value: 'sedalia',
    label: 'Sedalia'
  }, {
    value: 'sedgwick',
    label: 'Sedgwick'
  }, {
    value: 'seibert',
    label: 'Seibert'
  }, {
    value: 'severance',
    label: 'Severance'
  }, {
    value: 'sheridan',
    label: 'Sheridan'
  }, {
    value: 'sheridanlake',
    label: 'Sheridan Lake'
  }, {
    value: 'sherrelwood',
    label: 'Sherrelwood'
  }, {
    value: 'silt',
    label: 'Silt'
  }, {
    value: 'silvercliff',
    label: 'Silver Cliff'
  }, {
    value: 'silverplume',
    label: 'Silver Plume'
  }, {
    value: 'silverthorne',
    label: 'Silverthorne'
  }, {
    value: 'silverton',
    label: 'Silverton'
  }, {
    value: 'simla',
    label: 'Simla'
  }, {
    value: 'snowmassvillage',
    label: 'Snowmass Village'
  }, {
    value: 'southfork',
    label: 'South Fork'
  }, {
    value: 'southglenn',
    label: 'Southglenn'
  }, {
    value: 'springfield',
    label: 'Springfield'
  }, {
    value: 'starkville',
    label: 'Starkville'
  }, {
    value: 'steamboatsprings',
    label: 'Steamboat Springs'
  }, {
    value: 'sterling',
    label: 'Sterling'
  }, {
    value: 'stonegate',
    label: 'Stonegate'
  }, {
    value: 'strasburg',
    label: 'Strasburg'
  }, {
    value: 'stratmoor',
    label: 'Stratmoor'
  }, {
    value: 'stratton',
    label: 'Stratton'
  }, {
    value: 'sugarcity',
    label: 'Sugar City'
  }, {
    value: 'superior',
    label: 'Superior'
  }, {
    value: 'swink',
    label: 'Swink'
  }, {
    value: 'tabernash',
    label: 'Tabernash'
  }, {
    value: 'telluride',
    label: 'Telluride'
  }, {
    value: 'thepinery',
    label: 'The Pinery'
  }, {
    value: 'thornton',
    label: 'Thornton'
  }, {
    value: 'timnath',
    label: 'Timnath'
  }, {
    value: 'toddcreek',
    label: 'Todd Creek'
  }, {
    value: 'towaoc',
    label: 'Towaoc'
  }, {
    value: 'trinidad',
    label: 'Trinidad'
  }, {
    value: 'twinlakes',
    label: 'Twin Lakes'
  }, {
    value: 'twobuttes',
    label: 'Two Buttes'
  }, {
    value: 'vail',
    label: 'Vail'
  }, {
    value: 'victor',
    label: 'Victor'
  }, {
    value: 'vilas',
    label: 'Vilas'
  }, {
    value: 'vona',
    label: 'Vona'
  }, {
    value: 'walden',
    label: 'Walden'
  }, {
    value: 'walsenburg',
    label: 'Walsenburg'
  }, {
    value: 'walsh',
    label: 'Walsh'
  }, {
    value: 'ward',
    label: 'Ward'
  }, {
    value: 'welby',
    label: 'Welby'
  }, {
    value: 'wellington',
    label: 'Wellington'
  }, {
    value: 'westcliffe',
    label: 'Westcliffe'
  }, {
    value: 'westcreek',
    label: 'Westcreek'
  }, {
    value: 'westminster',
    label: 'Westminster'
  }, {
    value: 'westpleasantview',
    label: 'West Pleasant View'
  }, {
    value: 'wheatridge',
    label: 'Wheat Ridge'
  }, {
    value: 'wiggins',
    label: 'Wiggins'
  }, {
    value: 'wiley',
    label: 'Wiley'
  }, {
    value: 'williamsburg',
    label: 'Williamsburg'
  }, {
    value: 'windsor',
    label: 'Windsor'
  }, {
    value: 'winterpark',
    label: 'Winter Park'
  }, {
    value: 'woodlandpark',
    label: 'Woodland Park'
  }, {
    value: 'woodmoor',
    label: 'Woodmoor'
  }, {
    value: 'wray',
    label: 'Wray'
  }, {
    value: 'yampa',
    label: 'Yampa'
  }, {
    value: 'yuma',
    label: 'Yuma'
  }]
}];

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),
/* 37 */
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
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 40 */,
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorPage_less__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorPage_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__errorPage_less__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var error404 = '/static/images/error-404.svg';
var error403 = '/static/images/error-403.svg';
var error500 = '/static/images/error-500.svg';
var errorNoResult = '/static/images/error-no-result.svg';

var ErrorPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorPage, _Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      var status = this.props.status;
      var message = "",
          image = null;

      switch (status) {
        case 500:
          {
            message = "Sorry, the server has gone wrong";
            image = error500;
            break;
          }

        case 404:
          {
            message = "Sorry, the page you visited does not exist";
            image = error404;
            break;
          }

        case 403:
          {
            message = "Sorry, you do not have permission to access this page";
            image = error403;
            break;
          }

        default:
          {
            image = errorNoResult;
            message = "Something went wrong!";
          }
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_3__errorPage_less___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-image"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "error",
        src: image
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-detail"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-status"
      }, status), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-message"
      }, message), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "return-button"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        prefetch: true,
        to: "/"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", null, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary ButtonWhiteCenter"
      }, "Return Home "))))));
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = ".error-container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-container .error-detail {\n  padding-left: 60px;\n}\n.error-container .error-detail .error-status {\n  font-size: 60px;\n  font-weight: 600;\n}\n.error-container .error-detail .error-message {\n  font-size: 20px;\n  padding-bottom: 20px;\n}\n.error-container .error-detail .return-button button {\n  height: 48px;\n  width: 200px;\n}\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_popover__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_map_react__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_map_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_google_map_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_less__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__map_less__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var truckMarkerIcon = '/static/images/truck-marker-icon.png';
var eventMarkerIcon = '/static/images/event-marker-icon.png';
var breweryMarkerIcon = '/static/images/brewery-marker-icon.png';
var pairingMarkerIcon = '/static/images/pairing-marker-icon.png';

var Content = function Content(_ref) {
  var info = _ref.info;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "address Body-1RegularBlackLeft"
  }, info.address || info.name), info.timeDisplay && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "time CaptionGreyLeft"
  }, __WEBPACK_IMPORTED_MODULE_3_moment___default()(info.timeDisplay, "YYYY-MM-DD h:mm a").format("ddd, MMMM DD"), " ", __WEBPACK_IMPORTED_MODULE_3_moment___default()(info.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ", __WEBPACK_IMPORTED_MODULE_3_moment___default()(info.end_time).format("h:mm a")));
};

var AnyReactComponent = function AnyReactComponent(_ref2) {
  var info = _ref2.info,
      icon = _ref2.icon;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_popover___default.a, {
    className: "marker-container",
    content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Content, {
      info: info
    }),
    title: info.location_name || info.name
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    width: 36,
    alt: "marker",
    src: renderIcon(icon)
  })));
};

var renderIcon = function renderIcon(icon) {
  switch (icon) {
    case "truck":
      return truckMarkerIcon;

    case "event":
      return eventMarkerIcon;

    case "brewery":
      return breweryMarkerIcon;

    case "pairing":
      return pairingMarkerIcon;

    default:
      return null;
  }
};

var Map =
/*#__PURE__*/
function (_Component) {
  _inherits(Map, _Component);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));
    _this.state = {
      center: {
        lat: 39.7384953,
        lng: -104.9964992
      },
      zoom: 15
    };
    return _this;
  }

  _createClass(Map, [{
    key: "renderMarker",
    value: function renderMarker(location, icon) {
      return location.map(function (item, index) {
        if (item.latitude) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AnyReactComponent, {
          info: item,
          key: index,
          icon: icon,
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longtitude)
        });
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          location = _props.location,
          zoom = _props.zoom;
      if (location.length > 0 && location[0]) if (location[0].latitude) this.setState({
        center: {
          lat: parseFloat(location[0].latitude),
          lng: parseFloat(location[0].longtitude)
        }
      });

      if (zoom) {
        this.setState({
          zoom: zoom
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var location = nextProps.location;
      if (location.length > 0 && location[0]) if (location[0].latitude) this.setState({
        center: {
          lat: parseFloat(location[0].latitude),
          lng: parseFloat(location[0].longtitude)
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          icon = _props2.icon,
          location = _props2.location;
      var _state = this.state,
          center = _state.center,
          zoom = _state.zoom;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "map-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_4__map_less___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_google_map_react___default.a, {
        bootstrapURLKeys: {
          key: "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A"
        },
        center: center,
        defaultZoom: zoom,
        defaultOptions: {
          styles: [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
              "visibility": "on"
            }, {
              "lightness": 33
            }]
          }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
              "color": "#f7f7f7"
            }]
          }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#deecdb"
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
              "visibility": "on"
            }, {
              "lightness": "25"
            }]
          }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
              "lightness": "25"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{
              "saturation": "-90"
            }, {
              "lightness": "25"
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [{
              "visibility": "on"
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }]
          }, {
            "featureType": "transit.line",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "transit.station",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#e0f1f9"
            }]
          }]
        }
      }, location.length > 0 && location[0] && this.renderMarker(location, icon)));
    }
  }]);

  return Map;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = ".map-container {\n  height: 100%;\n}\n.map-container .marker-container {\n  cursor: pointer !important;\n}\n";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
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
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = nextStep;
/* harmony export (immutable) */ __webpack_exports__["d"] = previousStep;
/* harmony export (immutable) */ __webpack_exports__["e"] = requestCatering;
/* harmony export (immutable) */ __webpack_exports__["b"] = cateringSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = cateringError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(2);

function nextStep(payload) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_6" /* NEXT_STEP */],
      payload: payload
    });
  };
}
function previousStep() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_12" /* PREVIOUS_STEP */]
    });
  };
}
function requestCatering(isLoadingCatering) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_13" /* REQUEST_CATERING */],
    isLoadingCatering: isLoadingCatering
  };
}
function cateringSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["b" /* CATERING_SUCCESS */],
      response: response
    });
  };
}
function cateringError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* CATERING_ERROR */],
      response: response
    });
  };
}

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var logo = "/static/images/logo-vertical.png";

var AnnounceModal =
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
          visible = _props.visible;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        title: "",
        footer: null,
        visible: visible,
        onCancel: handleCancel
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "announce-modal-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "logo-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "logo",
        src: logo
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "Regular-24px-Style message"
      }, "Thanks for your interest! \n                    This will be available soon!")));
    }
  }]);

  return AnnounceModal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AnnounceModal);

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/anchor");

/***/ }),
/* 75 */
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

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(27);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__(18);
var rate__default = /*#__PURE__*/__webpack_require__.n(rate_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(49);
var tooltip__default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(24);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./src/components/common/reviewModify/ReviewModify.js








function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var unknownUserIcon = "/static/images/unknown-user-icon.png";
var homeImage = "/static/images/home-image.jpg";
var TextArea = input__default.a.TextArea;

var ReviewModify_ReviewModify =
/*#__PURE__*/
function (_Component) {
  _inherits(ReviewModify, _Component);

  function ReviewModify() {
    _classCallCheck(this, ReviewModify);

    return _possibleConstructorReturn(this, (ReviewModify.__proto__ || Object.getPrototypeOf(ReviewModify)).apply(this, arguments));
  }

  _createClass(ReviewModify, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          detail = _props.detail,
          userData = _props.userData,
          isLoggedIn = _props.isLoggedIn,
          handleOpenReviewModal = _props.handleOpenReviewModal,
          visibleReview = _props.visibleReview,
          handleCancelReview = _props.handleCancelReview,
          onRateChange = _props.onRateChange,
          review = _props.review,
          onContentChange = _props.onContentChange,
          isLoadingPostReview = _props.isLoadingPostReview,
          handleUploadReview = _props.handleUploadReview,
          yourReview = _props.yourReview,
          visibleEditReview = _props.visibleEditReview,
          handleOpenEditReviewModal = _props.handleOpenEditReviewModal,
          onEditContentChange = _props.onEditContentChange,
          onEditRateChange = _props.onEditRateChange,
          handleModifyReview = _props.handleModifyReview,
          isLoadingEditReview = _props.isLoadingEditReview;
      return external__react__default.a.createElement("div", {
        className: "review-modify-container"
      }, external__react__default.a.createElement("hr", null), !detail.has_review ? external__react__default.a.createElement("div", {
        className: "review-button"
      }, userData ? external__react__default.a.createElement("img", {
        alt: "avatar",
        src: userData.avatar ? userData.avatar : unknownUserIcon
      }) : external__react__default.a.createElement("img", {
        alt: "avatar",
        src: unknownUserIcon
      }), !isLoggedIn ? external__react__default.a.createElement(tooltip__default.a, {
        title: "Login required"
      }, external__react__default.a.createElement("span", {
        disabled: true,
        className: "Body-2GreyLeft"
      }, "Write a Review")) : external__react__default.a.createElement("a", {
        onClick: handleOpenReviewModal,
        className: "Body-2GreyLeft"
      }, "Write a Review"), external__react__default.a.createElement(modal__default.a, {
        width: 700,
        closable: false,
        visible: visibleReview,
        title: "",
        footer: null,
        onCancel: handleCancelReview,
        className: "review-modal"
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 20,
        className: "review-modal"
      }, external__react__default.a.createElement(col__default.a, {
        className: "left",
        lg: 8,
        md: 8
      }, external__react__default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(detail.cover_photo ? detail.cover_photo[0].url : homeImage, ")")
        },
        className: "image"
      }), external__react__default.a.createElement("div", {
        className: "name Display-2BlackLeft"
      }, detail.name)), external__react__default.a.createElement(col__default.a, {
        className: "right",
        lg: 16,
        md: 16
      }, external__react__default.a.createElement("div", {
        className: "review-rate"
      }, external__react__default.a.createElement(TextArea, {
        value: review.content,
        onChange: onContentChange,
        placeholder: " Tell others what you think about this truck."
      })), external__react__default.a.createElement("div", {
        className: "content"
      }, external__react__default.a.createElement("div", {
        className: "how Body-1RegularGrayLeft"
      }, "How would you rate the truck?"), external__react__default.a.createElement(rate__default.a, {
        onChange: onRateChange,
        value: review.rate
      })), external__react__default.a.createElement("div", {
        className: "button-modal-review"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: handleCancelReview
      }, "Cancel  "), external__react__default.a.createElement(button__default.a, {
        loading: isLoadingPostReview,
        onClick: handleUploadReview,
        type: "primary"
      }, "SUBMIT      ")))))) : external__react__default.a.createElement("div", {
        className: "review-button"
      }, userData ? external__react__default.a.createElement("img", {
        alt: "avatar",
        src: userData.avatar ? userData.avatar : unknownUserIcon
      }) : external__react__default.a.createElement("img", {
        alt: "avatar",
        src: unknownUserIcon
      }), external__react__default.a.createElement("a", {
        onClick: handleOpenEditReviewModal,
        className: "Body-2GreyLeft"
      }, "Edit your review "), external__react__default.a.createElement(modal__default.a, {
        width: 700,
        closable: false,
        visible: visibleEditReview,
        title: "",
        footer: null,
        onCancel: handleCancelReview,
        className: "review-modal"
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 20,
        className: "review-modal"
      }, external__react__default.a.createElement(col__default.a, {
        className: "left",
        lg: 8,
        md: 8
      }, external__react__default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(detail.cover_photo ? detail.cover_photo[0].url : homeImage, ")")
        },
        className: "image"
      }), external__react__default.a.createElement("div", {
        className: "name Display-2BlackLeft"
      }, detail.name)), external__react__default.a.createElement(col__default.a, {
        className: "right",
        lg: 16,
        md: 16
      }, external__react__default.a.createElement("div", {
        className: "review-rate"
      }, external__react__default.a.createElement(TextArea, {
        value: yourReview.content,
        onChange: onEditContentChange,
        placeholder: " Tell others what you think about this truck."
      })), external__react__default.a.createElement("div", {
        className: "content"
      }, external__react__default.a.createElement("div", {
        className: "how Body-1RegularGrayLeft"
      }, "How would you rate the truck?"), external__react__default.a.createElement(rate__default.a, {
        onChange: onEditRateChange,
        value: yourReview.rate
      })), external__react__default.a.createElement("div", {
        className: "button-modal-review"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: handleCancelReview
      }, "Cancel  "), external__react__default.a.createElement(button__default.a, {
        loading: isLoadingEditReview,
        onClick: handleModifyReview,
        type: "primary"
      }, "SUBMIT      ")))))), external__react__default.a.createElement("hr", null));
    }
  }]);

  return ReviewModify;
}(external__react_["Component"]);

/* harmony default export */ var reviewModify_ReviewModify = (ReviewModify_ReviewModify);
// CONCATENATED MODULE: ./src/components/common/reviewModify/ReviewModifyContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
function ReviewModifyContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ReviewModifyContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { ReviewModifyContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ReviewModifyContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ReviewModifyContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ReviewModifyContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ReviewModifyContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) ReviewModifyContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) ReviewModifyContainer__defineProperties(Constructor, staticProps); return Constructor; }

function ReviewModifyContainer__possibleConstructorReturn(self, call) { if (call && (ReviewModifyContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return ReviewModifyContainer__assertThisInitialized(self); }

function ReviewModifyContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ReviewModifyContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ReviewModifyContainer_ReviewModifyContainer =
/*#__PURE__*/
function (_Component) {
  ReviewModifyContainer__inherits(ReviewModifyContainer, _Component);

  function ReviewModifyContainer(props) {
    var _this;

    ReviewModifyContainer__classCallCheck(this, ReviewModifyContainer);

    _this = ReviewModifyContainer__possibleConstructorReturn(this, (ReviewModifyContainer.__proto__ || Object.getPrototypeOf(ReviewModifyContainer)).call(this, props));
    _this.state = {
      visibleReview: false,
      visibleEditReview: false,
      review: {},
      yourReview: {}
    };
    return _this;
  }

  ReviewModifyContainer__createClass(ReviewModifyContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.detail && this.props.detail.has_review) {
        this.setState({
          yourReview: {
            content: this.props.detail.has_review.comment,
            rate: this.props.detail.has_review.rating
          }
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.statusReview === 201 || nextProps.statusReview === 422) {
        this.setState({
          visibleReview: false,
          visibleEditReview: false
        });
      }

      if (nextProps.detail && nextProps.detail.has_review) {
        this.setState({
          yourReview: {
            content: nextProps.detail.has_review.comment,
            rate: nextProps.detail.has_review.rating
          }
        });
      }
    }
  }, {
    key: "handleCancelReview",
    value: function handleCancelReview(e) {
      this.setState({
        visibleReview: false,
        visibleEditReview: false
      });
    }
  }, {
    key: "handleOpenReviewModal",
    value: function handleOpenReviewModal() {
      this.setState({
        visibleReview: true
      });
    }
  }, {
    key: "handleOpenEditReviewModal",
    value: function handleOpenEditReviewModal() {
      this.setState({
        visibleEditReview: true
      });
    }
  }, {
    key: "onEditContentChange",
    value: function onEditContentChange(e) {
      this.setState({
        yourReview: _objectSpread({}, this.state.yourReview, {
          content: e.target.value
        })
      });
    }
  }, {
    key: "onEditRateChange",
    value: function onEditRateChange(e) {
      this.setState({
        yourReview: _objectSpread({}, this.state.yourReview, {
          rate: e
        })
      });
    }
  }, {
    key: "onContentChange",
    value: function onContentChange(e) {
      this.setState({
        review: _objectSpread({}, this.state.review, {
          content: e.target.value
        })
      });
    }
  }, {
    key: "onRateChange",
    value: function onRateChange(e) {
      this.setState({
        review: _objectSpread({}, this.state.review, {
          rate: e
        })
      });
    }
  }, {
    key: "handleModifyReview",
    value: function handleModifyReview() {
      this.props.handleEditReview({
        rating: this.state.yourReview.rate,
        comment: this.state.yourReview.content
      });
    }
  }, {
    key: "handleUploadReview",
    value: function handleUploadReview() {
      this.props.handlePostReview({
        rating: this.state.review.rate,
        comment: this.state.review.content
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(reviewModify_ReviewModify, _extends({}, this.state, this.props, {
        onContentChange: function onContentChange(e) {
          return _this2.onContentChange(e);
        },
        onRateChange: function onRateChange(e) {
          return _this2.onRateChange(e);
        },
        handleCancelReview: function handleCancelReview(e) {
          return _this2.handleCancelReview(e);
        },
        handleOpenReviewModal: function handleOpenReviewModal(e) {
          return _this2.handleOpenReviewModal(e);
        },
        handleOpenEditReviewModal: function handleOpenEditReviewModal(e) {
          return _this2.handleOpenEditReviewModal(e);
        },
        onEditContentChange: function onEditContentChange(e) {
          return _this2.onEditContentChange(e);
        },
        onEditRateChange: function onEditRateChange(e) {
          return _this2.onEditRateChange(e);
        },
        handleModifyReview: function handleModifyReview(e) {
          return _this2.handleModifyReview(e);
        },
        handleUploadReview: function handleUploadReview(e) {
          return _this2.handleUploadReview(e);
        }
      }));
    }
  }]);

  return ReviewModifyContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    statusReview: state.reviewReducer.status,
    userData: state.profileReducer.userData,
    isLoggedIn: state.authReducer.isLoggedIn
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var reviewModify_ReviewModifyContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ReviewModifyContainer_ReviewModifyContainer));

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_progress__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ReviewSummary =
/*#__PURE__*/
function (_Component) {
  _inherits(ReviewSummary, _Component);

  function ReviewSummary() {
    _classCallCheck(this, ReviewSummary);

    return _possibleConstructorReturn(this, (ReviewSummary.__proto__ || Object.getPrototypeOf(ReviewSummary)).apply(this, arguments));
  }

  _createClass(ReviewSummary, [{
    key: "render",
    value: function render() {
      var summary = this.props.summary;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 30,
        type: "flex",
        justify: "center",
        className: "row-review"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
        md: 4,
        lg: 4
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "feedback-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "avarage-rating"
      }, summary.avg_rating || 5), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "average-bref"
      }, "out of 5"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("hr", null), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "average-bref"
      }, summary.total_reviews, " Reviews"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
        className: "progress-row",
        md: 20,
        lg: 20
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "rating-bar-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "star-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_progress___default.a, {
        className: "progress-container",
        percent: summary['5stars'] / summary.total_reviews * 100,
        strokeWidth: 8,
        showInfo: false
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "vote-container Body-1RegularGrayLeft"
      }, summary['5stars'])), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "rating-bar-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "star-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_progress___default.a, {
        className: "progress-container",
        percent: summary['4stars'] / summary.total_reviews * 100,
        strokeWidth: 8,
        showInfo: false
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "vote-container Body-1RegularGrayLeft"
      }, summary['4stars'])), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "rating-bar-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "star-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_progress___default.a, {
        className: "progress-container",
        percent: summary['3stars'] / summary.total_reviews * 100,
        strokeWidth: 8,
        showInfo: false
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "vote-container Body-1RegularGrayLeft"
      }, summary['3stars'])), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "rating-bar-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "star-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_progress___default.a, {
        className: "progress-container",
        percent: summary['2stars'] / summary.total_reviews * 100,
        strokeWidth: 8,
        showInfo: false
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "vote-container Body-1RegularGrayLeft"
      }, summary['2stars'])), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "rating-bar-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "star-container"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "star"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_progress___default.a, {
        className: "progress-container",
        percent: summary['1stars'] / summary.total_reviews * 100,
        strokeWidth: 8,
        showInfo: false
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "vote-container Body-1RegularGrayLeft"
      }, summary['1stars']))));
    }
  }]);

  return ReviewSummary;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ReviewSummary);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_rate__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_rate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_rate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var unknownUserIcon = "/static/images/unknown-user-icon.png";

var UserReview =
/*#__PURE__*/
function (_Component) {
  _inherits(UserReview, _Component);

  function UserReview(props) {
    var _this;

    _classCallCheck(this, UserReview);

    _this = _possibleConstructorReturn(this, (UserReview.__proto__ || Object.getPrototypeOf(UserReview)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(UserReview, [{
    key: "renderReview",
    value: function renderReview(reviews) {
      if (reviews.length > 0) return reviews.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          className: "review"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "review-header"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "header-left"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          alt: "avatar",
          src: item.user.avatar ? item.user.avatar : unknownUserIcon
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "info"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "user-name Body-1MediumBlackLeft"
        }, item.user.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "date CaptionGreyLeft"
        }, __WEBPACK_IMPORTED_MODULE_2_moment___default()(item.created_at, "YYYY-MM-DD h:mm a").format("MM/DD/YYYY h:mm a")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "header-right"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_rate___default.a, {
          disabled: true,
          value: item.rating
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "review-content Body-1RegularGrayLeft"
        }, item.comment));
      });else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, "Be the first to leave a review on Truckster");
    }
  }, {
    key: "render",
    value: function render() {
      var reviews = this.props.reviews;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "review-user-container"
      }, reviews && this.renderReview(reviews));
    }
  }]);

  return UserReview;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (UserReview);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_popover__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_big_calendar__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_big_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_big_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var truckIcon = "/static/images/truck.svg";
var breweryIcon = "/static/images/brewery.svg";
__WEBPACK_IMPORTED_MODULE_4_react_big_calendar___default.a.momentLocalizer(__WEBPACK_IMPORTED_MODULE_5_moment___default.a);

var Content = function Content(_ref) {
  var info = _ref.info;
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: "address Body-1RegularBlackLeft"
  }, info.address || info.name), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: "time CaptionGreyLeft"
  }, __WEBPACK_IMPORTED_MODULE_5_moment___default()(info.timeDisplay, "YYYY-MM-DD h:mm a").format("ddd, MMMM DD"), " ", __WEBPACK_IMPORTED_MODULE_5_moment___default()(info.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ", __WEBPACK_IMPORTED_MODULE_5_moment___default()(info.end_time).format("h:mm a")));
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "getCalendarEvents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(date) {
        var currentMonth = __WEBPACK_IMPORTED_MODULE_5_moment___default()(date).endOf('month').format('MMMM YYYY');
        var monthToday = __WEBPACK_IMPORTED_MODULE_5_moment___default()(date).endOf('month').format('MMM');
        var nextCurrentMonth = __WEBPACK_IMPORTED_MODULE_5_moment___default()(date).add(1, 'month').format('MMM');

        _this.setState({
          monthLabel: currentMonth,
          currentMonth: monthToday,
          nextMonth: nextCurrentMonth
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getCustomEvent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default.a, {
          className: "marker-container",
          content: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content, {
            info: event.event
          }),
          title: event.event.food_truck ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: "custom-event"
          }, event.event.food_truck.logo ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
            className: "truck-icon",
            alt: "truck-icon",
            src: event.event.food_truck.logo[0].url
          }) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
            className: "truck-icon-holder",
            alt: "truck-icon-holder",
            src: truckIcon
          }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__routes__["Link"], {
            prefetch: true,
            to: "/food-truck/" + event.event.food_truck.slug
          }, event.event.food_truck.name)) : event.event.location_name
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          style: {
            background: __WEBPACK_IMPORTED_MODULE_5_moment___default()(event.event.timeDisplay, "YYYY-MM-DD h:mm a") > __WEBPACK_IMPORTED_MODULE_5_moment___default()() ? event.event.brewery ? '#ffd35e' : '#f32126' : "rgba(0,0,0,0.1)"
          },
          className: "event-schedule-icon"
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
          alt: "icon",
          src: event.event.brewery ? breweryIcon : truckIcon
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "calendar-time"
        }, __WEBPACK_IMPORTED_MODULE_5_moment___default()(event.event.start_time, "YYYY-MM-DD h:mm a").format("h:mma"), "-", __WEBPACK_IMPORTED_MODULE_5_moment___default()(event.event.end_time).format("h:mma"))));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getCustomToolbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(toolbar) {
        _this.toolbarDate = toolbar.date;

        var goToMonthView = function goToMonthView() {
          toolbar.onViewChange('month');
        };

        var goToBack = function goToBack() {
          var mDate = toolbar.date;
          var newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
          toolbar.onNavigate('prev', newDate);

          _this.getCalendarEvents(newDate);
        };

        var goToNext = function goToNext() {
          var mDate = toolbar.date;
          var newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
          toolbar.onNavigate('next', newDate);

          _this.getCalendarEvents(newDate);
        };

        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "toolbar-container SubheadingBlackLeft"
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "navigation-buttons"
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
          className: "label-date"
        }, _this.state.monthLabel)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "filter-container"
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
          shape: "circle",
          onClick: goToBack,
          icon: "left"
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
          shape: "circle",
          onClick: goToNext,
          icon: "right"
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip___default.a, {
          title: "Month View"
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
          shape: "circle",
          onClick: goToMonthView,
          icon: "table"
        }))));
      }
    });
    _this.state = {
      monthLabel: __WEBPACK_IMPORTED_MODULE_5_moment___default()(new Date()).endOf('month').format('MMMM YYYY'),
      currentMonth: __WEBPACK_IMPORTED_MODULE_5_moment___default()(new Date()).endOf('month').format('MMMM YYYY'),
      nextMonth: __WEBPACK_IMPORTED_MODULE_5_moment___default()(new Date()).endOf('month').format('MMMM YYYY')
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          events = _props.events,
          handleClickEvent = _props.handleClickEvent;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_big_calendar___default.a, {
        selectable: true,
        events: events,
        defaultView: "month",
        scrollToTime: new Date(1970, 1, 1, 6),
        defaultDate: new Date(),
        onSelectEvent: handleClickEvent,
        startAccessor: "start",
        endAccessor: "end",
        components: {
          toolbar: this.getCustomToolbar,
          event: this.getCustomEvent
        }
      }));
    }
  }]);

  return Calendar;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Calendar);

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_radio__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RadioGroup = __WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default.a.Group;
var FormItem = __WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default.a.Item;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          cateringData = _props.cateringData,
          occasion = _props.occasion;
      form.setFieldsValue({
        occasion: cateringData.occasion
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          form = _props2.form,
          occasion = _props2.occasion,
          onOccasionChange = _props2.onOccasionChange;
      var getFieldDecorator = form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering4-container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "What\u2019s the Occasion?"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, {
        className: "marginBottom16"
      }, getFieldDecorator('occasion', {
        initialValue: "Birthday",
        rules: [{
          required: true,
          message: "Please select event's type!"
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(RadioGroup, null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default.a, {
        value: "Birthday"
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default.a, {
        value: "Wedding"
      }, "Wedding"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default.a, {
        value: "Corporate"
      }, "Corporate"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default.a, {
        value: occasion
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default.a, {
        value: occasion,
        onChange: onOccasionChange,
        style: {
          width: "100%",
          maxWidth: 400
        }
      })))))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_time_picker__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_time_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_time_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_date_picker__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FormItem = __WEBPACK_IMPORTED_MODULE_2_antd_lib_form___default.a.Item;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          cateringData = _props.cateringData;
      form.setFieldsValue({
        eventDate: cateringData.eventDate,
        start_time: cateringData.start_time,
        end_time: cateringData.end_time
      });
    }
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering2-container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "Date of event"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, {
        className: "form-login"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "paddingBottom8 LabelGreyLeft"
      }, "Date of event"), getFieldDecorator('eventDate', {
        rules: [{
          type: 'object',
          required: true,
          message: 'Please select time!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_date_picker___default.a, {
        format: "MM-DD-YYYY"
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering-time"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "paddingBottom8 LabelGreyLeft"
      }, "Start Time"), getFieldDecorator('start_time', {
        rules: [{
          type: 'object',
          required: true,
          message: 'Please select time!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_time_picker___default.a, {
        minuteStep: 15,
        use12Hours: true,
        format: "h:mm a"
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "paddingBottom8 LabelGreyLeft"
      }, "End Time"), getFieldDecorator('end_time', {
        rules: [{
          type: 'object',
          required: true,
          message: 'Please select time!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_time_picker___default.a, {
        minuteStep: 15,
        use12Hours: true,
        format: "h:mm a"
      })))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);



/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/time-picker");

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_cascader__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_cascader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_cascader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FormItem = __WEBPACK_IMPORTED_MODULE_2_antd_lib_form___default.a.Item;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          cateringData = _props.cateringData;
      form.setFieldsValue({
        address: cateringData.address,
        residence: cateringData.residence ? cateringData.residence : ['colorado', 'denver'],
        zip_code: cateringData.zip_code
      });
    }
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering3-container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "Event Address"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, {
        className: "marginBottom16"
      }, getFieldDecorator('address', {
        rules: [{
          required: true,
          message: "Please enter address!"
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a, {
        placeholder: "Enter address"
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering3-address"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, {
        className: "catering3-residence marginBottom40"
      }, getFieldDecorator('city', {
        initialValue: ['colorado', 'denver'],
        rules: [{
          type: 'array',
          required: true,
          message: 'Please select your habitual residence!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_cascader___default.a, {
        options: __WEBPACK_IMPORTED_MODULE_4__data__["b" /* residences */]
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, {
        className: "marginBottom40"
      }, getFieldDecorator('zip_code', {
        initialValue: 0,
        rules: [{
          message: "Please enter zipcode!",
          pattern: "[0-9]",
          required: true
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a, {
        placeholder: "Zip code"
      }))))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);



/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/cascader");

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input_number__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FormItem = __WEBPACK_IMPORTED_MODULE_2_antd_lib_form___default.a.Item;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          cateringData = _props.cateringData;
      form.setFieldsValue({
        budget: cateringData.budget
      });
    }
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering5-container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "What\u2019s your budget?"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "paddingLeftRight56"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem, {
        className: "marginBottom40"
      }, getFieldDecorator('budget', {
        rules: [{
          required: true,
          message: "Please enter budget!"
        }]
      })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input_number___default.a, {
        formatter: function formatter(value) {
          return "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        parser: function parser(value) {
          return value.replace(/\$\s?|(,*)/g, '');
        },
        type: "text",
        min: 0,
        prefix: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
          type: "dollar",
          theme: "outlined"
        })
      })))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);



/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var FormItem = __WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default.a.Item;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          cateringData = _props.cateringData;
      form.setFieldsValue({
        participants: cateringData.participants
      });
    }
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering5-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "How many estimated participants?"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "paddingLeftRight56"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FormItem, {
        className: "marginBottom40"
      }, getFieldDecorator('participants', {
        rules: [{
          message: "Please enter number!",
          pattern: '[0-9]',
          required: true
        }]
      })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default.a, {
        type: "number"
      })))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_radio__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var RadioGroup = __WEBPACK_IMPORTED_MODULE_1_antd_lib_radio___default.a.Group;
var FormItem = __WEBPACK_IMPORTED_MODULE_0_antd_lib_form___default.a.Item;
var groupIcon = '/static/images/group-icon.svg';
var userIcon = '/static/images/user-icon-black.svg';

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          cateringData = _props.cateringData;
      form.setFieldsValue({
        paying: cateringData.paying
      });
    }
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering7-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "Who will be paying?"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FormItem, null, getFieldDecorator('paying', {
        rules: [{
          required: true,
          message: "Please select who will be paying!"
        }]
      })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(RadioGroup, {
        className: "catering5-button-paying"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_radio___default.a, {
        value: 1
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "paying-button"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: userIcon,
        alt: "user"
      }), "Host")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_radio___default.a, {
        value: 0
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "paying-button"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: groupIcon,
        alt: "group"
      }), " Attendees"))))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FormItem = __WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default.a.Item;
var userIcon = '/static/images/user-icon.png';
var mailIcon = '/static/images/mail-icon.png';
var phoneIcon = '/static/images/phone-icon.png';

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          nextStep = _props.nextStep,
          cateringData = _props.cateringData;
      form.setFieldsValue({
        email: cateringData.email,
        name: cateringData.name,
        phone: cateringData.phone
      });
    }
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering1-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "How we can reach you?"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FormItem, {
        className: "marginBottom16"
      }, getFieldDecorator('name', {
        rules: [{
          required: true,
          message: "Please enter your name"
        }]
      })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default.a, {
        suffix: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "email",
          src: userIcon
        }),
        placeholder: "Your Name"
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FormItem, {
        className: "marginBottom16"
      }, getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: "It not a valid email address"
        }, {
          required: true,
          message: "Please enter your email"
        }]
      })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default.a, {
        format: "(###) ###-####",
        suffix: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "email",
          src: mailIcon
        }),
        placeholder: "Email Address"
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FormItem, {
        className: "marginBottom40"
      }, getFieldDecorator('phone', {
        rules: [{
          required: true,
          message: "Please enter your phone number"
        }, {
          pattern: "[0-9]{10}",
          message: 'The phone must be at least 10 characters.!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default.a, {
        suffix: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "phone",
          src: phoneIcon
        }),
        placeholder: "Phone number"
      })))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var TextArea = __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a.TextArea;
var FormItem = __WEBPACK_IMPORTED_MODULE_0_antd_lib_form___default.a.Item;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          cateringData = _props.cateringData;
      form.setFieldsValue({
        comment: cateringData.comment
      });
    }
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering5-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "catering-section-title"
      }, "Additional Comments"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FormItem, {
        className: "marginBottom40"
      }, getFieldDecorator('comment', {})(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, {
        placeholder: "Dietary restrictions, etc."
      })))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = ".catering-modal-container .ant-modal-body {\n  padding: 24px;\n  padding-top: 16px;\n}\n.catering-modal-container .catering-section-title {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 4px;\n  padding-bottom: 32px;\n}\n.catering-container .catering-book {\n  padding: 24px;\n  border-radius: 6px;\n  background-color: #ffffff;\n  box-shadow: 0 8px 16px 0 rgba(33, 33, 33, 0.15);\n}\n.catering-container .catering-book .catering-title {\n  font-size: 24px;\n  font-weight: 800;\n  line-height: 1.33;\n  letter-spacing: -0.1px;\n  color: #212121;\n  display: flex;\n  justify-content: space-between;\n}\n.catering-container .catering-book .catering-desc {\n  padding-top: 8px;\n  padding-bottom: 24px;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.3px;\n  color: #757575;\n}\n.catering-container .catering-book button {\n  width: 100%;\n  height: 48px;\n  background-color: #fa393d;\n  font-weight: bold;\n}\n.catering-modal input,\n.catering-modal textarea {\n  font-weight: bold;\n  height: 48px;\n  border-radius: 6px;\n  background-color: #fafafa;\n  border: solid 1px #dadada;\n}\n.catering-modal textarea {\n  min-height: 96px !important;\n}\n.catering-modal .progress-container {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.catering-modal .catering-header {\n  display: flex;\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: 0.2px;\n  text-align: center;\n  color: #fa393d;\n}\n.catering-modal .catering-header .step-container {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.catering-modal .catering-header .catering-step-bar {\n  flex: 1;\n}\n.catering-modal .catering-header .catering-step-bar .step-bar {\n  margin: 0 auto;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.catering-modal .catering-header .catering-step-bar .active-step {\n  background-color: #fff;\n  position: relative;\n}\n.catering-modal .catering-header .catering-step-bar .active-step .step-stage {\n  position: absolute;\n  top: 8px;\n  right: -17px;\n}\n.catering-modal .catering-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.catering-modal .catering-footer button {\n  font-weight: bold;\n  width: 120px;\n  height: 48px;\n}\n.ant-modal-close {\n  display: none !important;\n}\n.catering1-container .img-icon {\n  width: 24px;\n}\n.catering2-container .ant-calendar-picker {\n  width: 100%;\n  height: 48px;\n}\n.catering2-container .ant-calendar-picker input {\n  height: 48px;\n  border-radius: 6px;\n  background-color: #fafafa;\n  border: solid 1px #dadada;\n}\n.catering2-container .catering-time {\n  display: flex;\n}\n.catering2-container .catering-time .ant-form-item {\n  padding-right: 8px;\n}\n.catering2-container .catering-time .ant-time-picker input {\n  height: 48px;\n  background-color: #fafafa;\n  border-radius: 6px;\n}\n.catering3-container .catering3-address {\n  display: flex;\n  justify-content: space-between;\n}\n.catering3-container .catering3-address .catering3-residence {\n  width: 100%;\n  margin-right: 24px;\n}\n.catering4-container .ant-radio-group {\n  display: flex;\n  flex-direction: column;\n}\n.catering4-container .ant-radio-group .ant-radio-wrapper {\n  height: 64px;\n}\n.catering5-container .ant-input-number {\n  width: 100%;\n  border: none;\n}\n.catering5-container .ant-input-number:hover {\n  border: none;\n}\n.catering5-container .ant-input-number-focused {\n  box-shadow: none;\n  border: none;\n}\n.catering7-container .catering5-button-paying {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 40px;\n}\n.catering7-container .catering5-button-paying img {\n  fill: #fa393d;\n}\n.catering7-container .catering5-button-paying .paying-button {\n  margin-right: 8px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.catering7-container .catering5-button-paying .ant-radio-wrapper-checked {\n  border: solid 1px #5289ff !important;\n}\n.catering7-container .catering5-button-paying .ant-radio-wrapper {\n  border-radius: 3px;\n  border: solid 1px #bdbdbd;\n  width: 160px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.catering7-container .catering5-button-paying .ant-radio-inner {\n  visibility: hidden;\n}\n.catering7-container .catering5-button-paying span {\n  position: absolute;\n}\n.catering9-container .cuisine__button-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 40px;\n}\n.catering9-container .cuisine__button-container button {\n  border-radius: 16px;\n  margin-top: 8px;\n  margin-right: 8px;\n}\n";

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return catering; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_cateringAction__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_toggleAction__ = __webpack_require__(31);






 // catering

var catering = function catering(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_cateringAction__["e" /* requestCatering */])(true));
    __WEBPACK_IMPORTED_MODULE_4_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* apiUrl */] + "api/consumer/v1/catering",
      data: JSON.stringify(data),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_cateringAction__["b" /* cateringSuccess */])(response));

        __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
          message: 'Yay! We have your catering request',
          description: "We will reach out to you soon",
          icon: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
            width: 46,
            style: {
              paddingRight: "8px"
            },
            height: 25,
            src: "/static/images/logo.png",
            alt: "truck-logo"
          })
        });

        dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions_toggleAction__["b" /* toggleCateringModal */])());
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_cateringAction__["a" /* cateringError */])(_error));

        __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
          message: 'Opps!',
          description: "Something went wrong!",
          icon: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
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

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(11);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(8);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(62);
var spin__default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: external "antd/lib/affix"
var affix_ = __webpack_require__(221);
var affix__default = /*#__PURE__*/__webpack_require__.n(affix_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(49);
var tooltip__default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__(18);
var rate__default = /*#__PURE__*/__webpack_require__.n(rate_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(21);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(67);
var menu__default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__(48);
var radio__default = /*#__PURE__*/__webpack_require__.n(radio_);

// EXTERNAL MODULE: external "antd/lib/anchor"
var anchor_ = __webpack_require__(74);
var anchor__default = /*#__PURE__*/__webpack_require__.n(anchor_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/common/map/Map.js
var Map = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/common/reviewModify/ReviewModifyContainer.js + 1 modules
var ReviewModifyContainer = __webpack_require__(75);

// EXTERNAL MODULE: ./src/components/common/reviewSummary/ReviewSummary.js
var ReviewSummary = __webpack_require__(76);

// EXTERNAL MODULE: ./src/components/common/userReview/UserReview.js
var UserReview = __webpack_require__(77);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(9);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: ./src/components/common/calendar/Calendar.js
var Calendar = __webpack_require__(78);

// EXTERNAL MODULE: ./src/components/common/truckCard/TruckCard.js
var TruckCard = __webpack_require__(33);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(39);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// EXTERNAL MODULE: external "react-device-detect"
var external__react_device_detect_ = __webpack_require__(73);
var external__react_device_detect__default = /*#__PURE__*/__webpack_require__.n(external__react_device_detect_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(20);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(27);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/progress"
var progress_ = __webpack_require__(52);
var progress__default = /*#__PURE__*/__webpack_require__.n(progress_);

// EXTERNAL MODULE: ./src/components/catering/Catering1.js
var Catering1 = __webpack_require__(84);

// EXTERNAL MODULE: ./src/components/catering/Catering2.js
var Catering2 = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/catering/Catering3.js
var Catering3 = __webpack_require__(87);

// EXTERNAL MODULE: ./src/components/catering/Catering4.js
var Catering4 = __webpack_require__(89);

// EXTERNAL MODULE: ./src/components/catering/Catering5.js
var Catering5 = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/catering/Catering6.js
var Catering6 = __webpack_require__(92);

// EXTERNAL MODULE: ./src/components/catering/Catering7.js
var Catering7 = __webpack_require__(93);

// EXTERNAL MODULE: ./src/components/catering/Catering8.js
var Catering8 = __webpack_require__(94);

// CONCATENATED MODULE: ./src/components/catering/Catering.js





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Catering__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "renderCateringStep",
    value: function renderCateringStep(step) {
      switch (step) {
        case 1:
          return external__react__default.a.createElement(Catering1["a" /* default */], this.props);

        case 2:
          return external__react__default.a.createElement(Catering2["a" /* default */], this.props);

        case 3:
          return external__react__default.a.createElement(Catering3["a" /* default */], this.props);

        case 4:
          return external__react__default.a.createElement(Catering4["a" /* default */], this.props);

        case 5:
          return external__react__default.a.createElement(Catering5["a" /* default */], this.props);

        case 6:
          return external__react__default.a.createElement(Catering6["a" /* default */], this.props);

        case 7:
          return external__react__default.a.createElement(Catering7["a" /* default */], this.props);

        case 8:
          return external__react__default.a.createElement(Catering8["a" /* default */], this.props);

        default:
          return external__react__default.a.createElement(Catering1["a" /* default */], this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          step = _props.step,
          visibleCatering = _props.visibleCatering,
          toggleCateringModal = _props.toggleCateringModal,
          previousStep = _props.previousStep,
          handleSubmit = _props.handleSubmit,
          handleSubmitForm = _props.handleSubmitForm;
      return external__react__default.a.createElement("div", {
        className: "catering-container"
      }, external__react__default.a.createElement("div", {
        className: "catering-book"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "catering-title"
      }, external__react__default.a.createElement("div", null, "Book This Truck")), external__react__default.a.createElement("div", {
        className: "catering-desc"
      }, "Want a food truck to cater your next event? Truckster makes it easy, just click below to get started."), external__react__default.a.createElement(button__default.a, {
        onClick: toggleCateringModal,
        type: "primary"
      }, "SUBMIT CATERING REQUEST"))), external__react__default.a.createElement(modal__default.a, {
        wrapClassName: "catering-modal-container",
        width: 480,
        onCancel: toggleCateringModal,
        footer: null,
        visible: visibleCatering
      }, external__react__default.a.createElement(form__default.a, {
        onSubmit: handleSubmit,
        className: "catering-modal"
      }, external__react__default.a.createElement("div", {
        className: "progress-container"
      }, external__react__default.a.createElement(progress__default.a, {
        strokeColor: "#fa393d",
        percent: step / 8 * 100,
        showInfo: false
      })), external__react__default.a.createElement("div", {
        className: "catering-header"
      }, external__react__default.a.createElement("div", {
        style: {
          paddingLeft: (step * 50).toString() + "px"
        },
        className: "LabelBlackCenter step-stage"
      }, step, "/8")), external__react__default.a.createElement("div", {
        className: "catering-body"
      }, this.renderCateringStep(step)), external__react__default.a.createElement("div", {
        style: {
          justifyContent: step === 1 && "flex-end"
        },
        className: "catering-footer"
      }, step !== 1 && external__react__default.a.createElement(button__default.a, {
        onClick: previousStep
      }, "BACK"), step < 8 ? external__react__default.a.createElement(button__default.a, {
        htmlType: "submit",
        type: "primary"
      }, "NEXT") : external__react__default.a.createElement(button__default.a, {
        onClick: handleSubmitForm,
        style: {
          width: 200
        },
        type: "primary"
      }, "SUBMIT")))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/catering/_catering.less
var _catering = __webpack_require__(95);
var _catering_default = /*#__PURE__*/__webpack_require__.n(_catering);

// EXTERNAL MODULE: ./src/actions/toggleAction.js
var toggleAction = __webpack_require__(31);

// EXTERNAL MODULE: ./src/actions/cateringAction.js
var cateringAction = __webpack_require__(64);

// EXTERNAL MODULE: ./src/api/cateringApi.js
var cateringApi = __webpack_require__(96);

// CONCATENATED MODULE: ./src/components/catering/CateringContainer.js


function CateringContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CateringContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { CateringContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CateringContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CateringContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CateringContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CateringContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) CateringContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) CateringContainer__defineProperties(Constructor, staticProps); return Constructor; }

function CateringContainer__possibleConstructorReturn(self, call) { if (call && (CateringContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return CateringContainer__assertThisInitialized(self); }

function CateringContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CateringContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var CateringContainer_CateringContainer =
/*#__PURE__*/
function (_Component) {
  CateringContainer__inherits(CateringContainer, _Component);

  function CateringContainer(props) {
    var _this;

    CateringContainer__classCallCheck(this, CateringContainer);

    _this = CateringContainer__possibleConstructorReturn(this, (CateringContainer.__proto__ || Object.getPrototypeOf(CateringContainer)).call(this, props));
    Object.defineProperty(CateringContainer__assertThisInitialized(_this), "handleSubmitForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            cateringData = _this$props.cateringData,
            catering = _this$props.catering,
            food_truck_id = _this$props.food_truck_id,
            form = _this$props.form;
        form.validateFieldsAndScroll(function (err, values) {
          catering(_objectSpread({}, cateringData, {
            city: cateringData.city[0] + "-" + cateringData.city[1],
            start_time: external__moment__default()(cateringData.eventDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + " " + external__moment__default()(cateringData.start_time, 'HH:mm:s').format('HH:mm'),
            end_time: external__moment__default()(cateringData.eventDate).format('YYYY-MM-DD') + " " + external__moment__default()(cateringData.end_time, 'HH:mm:s').format('HH:mm'),
            food_truck_id: food_truck_id,
            comment: values.comment
          }));
        });
      }
    });
    Object.defineProperty(CateringContainer__assertThisInitialized(_this), "onOccasionChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var setFieldsValue = _this.props.form.setFieldsValue;
        setFieldsValue({
          occasion: e.target.value
        });

        _this.setState({
          occasion: e.target.value
        });
      }
    });
    Object.defineProperty(CateringContainer__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props2 = _this.props,
            form = _this$props2.form,
            nextStep = _this$props2.nextStep,
            cateringData = _this$props2.cateringData;
        e.preventDefault();
        form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            nextStep(values);
          }
        });
      }
    });
    _this.state = {
      occasion: ""
    };
    return _this;
  }

  CateringContainer__createClass(CateringContainer, [{
    key: "onPreviousStep",
    value: function onPreviousStep() {
      this.props.previousStep();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _catering_default.a
        }
      }), external__react__default.a.createElement(Catering__default, _extends({
        handleSubmit: this.handleSubmit,
        handleSubmitForm: this.handleSubmitForm,
        onOccasionChange: this.onOccasionChange,
        onPreviousStep: function onPreviousStep() {
          _this2.onPreviousStep();
        }
      }, this.state, this.props)));
    }
  }]);

  return CateringContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    step: state.cateringReducer.step,
    visibleCatering: state.toggleReducer.visibleCatering,
    cateringData: state.cateringReducer.cateringData
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    nextStep: cateringAction["c" /* nextStep */],
    previousStep: cateringAction["d" /* previousStep */],
    toggleCateringModal: toggleAction["b" /* toggleCateringModal */],
    catering: cateringApi["a" /* catering */]
  }, dispatch);
}
/* harmony default export */ var catering_CateringContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(CateringContainer_CateringContainer)));
// CONCATENATED MODULE: ./src/components/truckDetail/TruckDetail.js












function TruckDetail__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TruckDetail__typeof = function _typeof(obj) { return typeof obj; }; } else { TruckDetail__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TruckDetail__typeof(obj); }

function TruckDetail__extends() { TruckDetail__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TruckDetail__extends.apply(this, arguments); }

function TruckDetail__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TruckDetail__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TruckDetail__createClass(Constructor, protoProps, staticProps) { if (protoProps) TruckDetail__defineProperties(Constructor.prototype, protoProps); if (staticProps) TruckDetail__defineProperties(Constructor, staticProps); return Constructor; }

function TruckDetail__possibleConstructorReturn(self, call) { if (call && (TruckDetail__typeof(call) === "object" || typeof call === "function")) { return call; } return TruckDetail__assertThisInitialized(self); }

function TruckDetail__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TruckDetail__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var cateringIcon = '/static/images/catering-icon.svg';
var LinkAnchor = anchor__default.a.Link;
var closeIcon = "/static/images/close-icon.svg";
var homeImage = "/static/images/home-image.jpg";
var shareIcon = '/static/images/share-icon.png';
var timeIcon = '/static/images/time-icon.png';
var mailIcon = '/static/images/mail-icon.png';
var phoneIcon = '/static/images/phone-icon.png';
var facebookIconWhite = '/static/images/facebook-icon-white.svg';
var instagramIconWhite = '/static/images/instagram-icon-white.svg';
var twitterIconWhite = '/static/images/twitter-icon-white.svg';
var websiteIcon = '/static/images/website-icon.svg';

var formatPhoneNumber = function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString.match(/\d/g).join("")).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return ['(', match[2], ') ', match[3], '-', match[4]].join('');
  }

  return phoneNumberString;
};



var TruckDetail_TruckDetail =
/*#__PURE__*/
function (_Component) {
  TruckDetail__inherits(TruckDetail, _Component);

  function TruckDetail() {
    TruckDetail__classCallCheck(this, TruckDetail);

    return TruckDetail__possibleConstructorReturn(this, (TruckDetail.__proto__ || Object.getPrototypeOf(TruckDetail)).apply(this, arguments));
  }

  TruckDetail__createClass(TruckDetail, [{
    key: "renderSchedule",
    value: function renderSchedule() {
      var _props = this.props,
          handleClickSchedule = _props.handleClickSchedule,
          iconMarker = _props.iconMarker,
          locationArr = _props.locationArr,
          locations = _props.locations,
          handleModeChange = _props.handleModeChange,
          mode = _props.mode,
          events = _props.events,
          handleClickEvent = _props.handleClickEvent,
          selectedKey = _props.selectedKey;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "detail-time"
      }, external__react__default.a.createElement("div", {
        className: "detail-time-left"
      }, external__react__default.a.createElement("div", {
        className: "time"
      }, external__react__default.a.createElement("img", {
        alt: "back",
        src: timeIcon
      })), external__react__default.a.createElement("div", {
        className: "Body-1MediumBlackLeft"
      }, "Open time  ")), external__react__default.a.createElement("div", {
        className: "detail-time-right"
      }, external__react__default.a.createElement(radio__default.a.Group, {
        onChange: handleModeChange,
        value: mode
      }, external__react__default.a.createElement(radio__default.a.Button, {
        className: "Body-1MediumBlackLeft radio-button",
        value: "upcoming"
      }, "UPCOMING"), external__react__default.a.createElement(radio__default.a.Button, {
        className: "Body-1MediumBlackLeft radio-button",
        value: "month"
      }, "MONTH")))), mode === "upcoming" ? external__react__default.a.createElement("div", null, locations.length > 0 ? external__react__default.a.createElement(row__default.a, {
        className: "detail-schedule"
      }, external__react__default.a.createElement(col__default.a, {
        className: "schedule",
        xs: 24,
        sm: 24,
        lg: 6,
        md: 6
      }, external__react__default.a.createElement(menu__default.a, {
        selectedKeys: [selectedKey],
        defaultSelectedKeys: [locations[0].index],
        onClick: function onClick(e) {
          return handleClickSchedule(e);
        }
      }, locations.map(function (item, index) {
        return external__react__default.a.createElement(menu__default.a.Item, {
          key: item.index
        }, external__react__default.a.createElement("div", {
          className: "schedule-item"
        }, external__react__default.a.createElement("div", {
          className: "weekday CaptionGreyLeft"
        }, external__moment__default()(item.timeDisplay, "YYYY-MM-DD h:mm a").format("dddd, MMM DD, YYYY")), external__react__default.a.createElement("div", {
          className: "time CaptionBlackLeft"
        }, external__moment__default()(item.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " -", external__moment__default()(item.end_time).format("h:mm a"))));
      }))), external__react__default.a.createElement(col__default.a, {
        className: "schedule",
        xs: 24,
        sm: 24,
        lg: 18,
        md: 18
      }, external__react__default.a.createElement("div", {
        className: "map"
      }, external__react__default.a.createElement(Map["a" /* default */], {
        icon: iconMarker,
        location: locationArr
      })))) : external__react__default.a.createElement("div", {
        className: "no-schedule"
      }, "There are no upcoming schedules for this truck ")) : external__react__default.a.createElement("div", {
        className: "detail-schedule"
      }, external__react__default.a.createElement(Calendar["a" /* default */], {
        handleClickEvent: handleClickEvent,
        events: events
      })));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(truckDetail) {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "contact highlight"
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "CONTACTS"), truckDetail.contact_email && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "mail",
        src: mailIcon
      }), external__react__default.a.createElement("a", {
        href: "mailto:".concat(truckDetail.contact_email),
        className: "Body-2GreyLeft"
      }, truckDetail.contact_email)), truckDetail.phone && truckDetail.phone !== " " && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "phone",
        src: phoneIcon
      }), external__react__default.a.createElement("a", {
        href: "tel:".concat(truckDetail.phone),
        className: "Body-2GreyLeft"
      }, formatPhoneNumber(truckDetail.phone.toString()))), truckDetail.website_url && external__react__default.a.createElement("div", {
        className: "location"
      }, external__react__default.a.createElement("img", {
        alt: "back",
        src: websiteIcon
      }), external__react__default.a.createElement("a", {
        onClick: function onClick() {
          window.open(truckDetail.website_url.includes("http") ? truckDetail.website_url : "http://" + truckDetail.website_url);
        },
        className: "Body-1RegularGrayLeft"
      }, truckDetail.website_url)), external__react__default.a.createElement("div", {
        className: "social"
      }, truckDetail.facebook_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: truckDetail.facebook_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "facebook",
        src: facebookIconWhite
      })), truckDetail.instagram_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: truckDetail.instagram_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "instagram",
        src: instagramIconWhite
      })), truckDetail.twitter_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: truckDetail.twitter_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "twitter",
        src: twitterIconWhite
      })))), external__react__default.a.createElement("div", {
        className: "contact highlight"
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "INTRODUCTION"), external__react__default.a.createElement("div", {
        className: "Body-1RegularGrayLeft intro"
      }, truckDetail.company_description)));
    }
  }, {
    key: "renderOrderDetail",
    value: function renderOrderDetail() {
      var _props2 = this.props,
          order = _props2.order,
          handleRemoveMenuItem = _props2.handleRemoveMenuItem,
          handleRemoveOne = _props2.handleRemoveOne,
          handleAddOne = _props2.handleAddOne;
      return order.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: item.id,
          className: "order-item-container"
        }, external__react__default.a.createElement("div", {
          className: "order-item-header"
        }, external__react__default.a.createElement("div", {
          className: "Body-1RegularGrayLeft"
        }, item.name), external__react__default.a.createElement("img", {
          onClick: function onClick() {
            return handleRemoveMenuItem(item);
          },
          alt: "close",
          src: closeIcon
        })), external__react__default.a.createElement("div", {
          className: "order-item-header"
        }, external__react__default.a.createElement(button__default.a.Group, {
          className: "order-item-count",
          size: "small"
        }, external__react__default.a.createElement(button__default.a, {
          disabled: item.count === 1,
          onClick: function onClick() {
            return handleRemoveOne(item);
          }
        }, external__react__default.a.createElement(icon__default.a, {
          type: "minus"
        }), "    "), external__react__default.a.createElement(button__default.a, null, item.count), external__react__default.a.createElement(button__default.a, {
          onClick: function onClick() {
            return handleAddOne(item);
          }
        }, external__react__default.a.createElement(icon__default.a, {
          type: "plus"
        }))), external__react__default.a.createElement("div", {
          className: "Body-1RegularBlackLeft"
        }, "$", item.price)), external__react__default.a.createElement("hr", null));
      });
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(truckMenu) {
      var handleClickMenuItem = this.props.handleClickMenuItem;
      if (truckMenu.category) return Object.entries(truckMenu.category).map(function (category, categoryidx) {
        return external__react__default.a.createElement("div", {
          key: categoryidx,
          className: "menu-container"
        }, external__react__default.a.createElement("div", {
          className: "category-menu "
        }, category[0]), category[1].map(function (item, index) {
          return external__react__default.a.createElement("div", {
            key: index,
            className: "food"
          }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
            className: "name "
          }, item.name), external__react__default.a.createElement("div", {
            className: "bref CaptionGreyLeft"
          }, item.description)), external__react__default.a.createElement("div", {
            className: "price Body-1MediumBlackLeft"
          }, item.price && "$".concat(item.price)));
        }));
      });
    }
  }, {
    key: "renderSuggestTruck",
    value: function renderSuggestTruck(suggestTruck) {
      return suggestTruck.map(function (item, index) {
        if (item && index < 3) return external__react__default.a.createElement(col__default.a, {
          key: index,
          style: {
            marginBottom: "16px"
          },
          sm: 12,
          xs: 24,
          md: 8,
          lg: 8
        }, external__react__default.a.createElement(TruckCard["a" /* default */], {
          data: item
        }));
      });
    }
  }, {
    key: "renderTruckDetail",
    value: function renderTruckDetail(truckDetail) {
      var rateNum = parseFloat((Math.round(truckDetail.avg_rating * 2) / 2).toFixed(1), 10);
      var _props3 = this.props,
          isLoggedIn = _props3.isLoggedIn,
          onFavoriteChange = _props3.onFavoriteChange,
          isPairing = _props3.isPairing,
          toggleShareModal = _props3.toggleShareModal,
          favorite = _props3.favorite,
          suggestTruck = _props3.suggestTruck;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "detail-main-header",
        style: {
          backgroundImage: "url(".concat(truckDetail.cover_photo ? truckDetail.cover_photo[0].url : homeImage, ")")
        }
      }, external__react__default.a.createElement("div", {
        className: "content-detail"
      }, external__react__default.a.createElement("div", {
        className: "detail-wrapper"
      }, external__react__default.a.createElement("h1", {
        className: "DisplayWhiteLeft name"
      }, "  ", truckDetail.name), external__react__default.a.createElement("div", {
        className: "detail-rate"
      }, external__react__default.a.createElement("div", {
        className: "rate-number Body-1SemiBlackCenter"
      }, isNaN(rateNum) ? 0 : rateNum), external__react__default.a.createElement("div", {
        className: "rate-star"
      }, external__react__default.a.createElement(rate__default.a, {
        disabled: true,
        value: isNaN(rateNum) ? 0 : rateNum
      }))), external__react__default.a.createElement("div", {
        className: "flex-row"
      }, external__react__default.a.createElement("div", {
        className: "tag"
      }, truckDetail.cuisine.map(function (item, index) {
        return external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          key: index,
          to: "/food-truck/co/denver/".concat(item.name.toLowerCase())
        }, external__react__default.a.createElement("a", {
          className: "tag-item Body-1MediumBlackCenter"
        }, item.name, " "));
      }))))), external__react__default.a.createElement("div", {
        className: "cover"
      }, external__react__default.a.createElement("div", {
        className: "cover-mask"
      }))), external__react__default.a.createElement("div", {
        className: "body-wrapper"
      }, external__react__default.a.createElement("div", {
        className: "detail-body"
      }, external__react__default.a.createElement("div", {
        className: "menu-anchor"
      }, external__react__default.a.createElement(anchor__default.a, {
        offsetTop: isPairing ? 0 : 68
      }, external__react__default.a.createElement(LinkAnchor, {
        href: "#info",
        title: "Info"
      }), external__react__default.a.createElement(LinkAnchor, {
        href: "#menu",
        title: "Menu"
      }), external__react__default.a.createElement(LinkAnchor, {
        href: "#reviews",
        title: "Reviews"
      }), external__react__default.a.createElement("span", {
        className: "left-row"
      }, !isLoggedIn ? external__react__default.a.createElement(tooltip__default.a, {
        title: "Login required"
      }, external__react__default.a.createElement("span", null, external__react__default.a.createElement(rate__default.a, {
        disabled: true,
        count: 1,
        character: external__react__default.a.createElement(icon__default.a, {
          type: "heart"
        })
      }))) : external__react__default.a.createElement(rate__default.a, {
        value: favorite ? 1 : 0,
        onChange: onFavoriteChange,
        count: 1,
        character: external__react__default.a.createElement(icon__default.a, {
          style: {
            color: favorite ? '#f32126' : "#dadada"
          },
          type: "heart"
        })
      }), external__react__default.a.createElement("img", {
        onClick: function onClick(e) {
          return toggleShareModal(window.location.href);
        },
        alt: "back",
        src: shareIcon
      })))), external__react__default.a.createElement("div", {
        className: "menu-content"
      }, this.renderSchedule(truckDetail.calendar_detail), this.renderInfo(truckDetail), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("div", {
        style: {
          paddingBottom: 0
        },
        id: "menu",
        className: "menu-title Display-2BlackLeft"
      }, "Menu"), external__react__default.a.createElement("div", {
        className: "menu-truck"
      }, truckDetail.menus[0] && this.renderMenu(truckDetail.menus[0])), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("div", {
        className: "menu-title Display-2BlackLeft"
      }, "Reviews "), external__react__default.a.createElement("div", {
        id: "reviews",
        className: "review-truck"
      }, external__react__default.a.createElement(ReviewSummary["a" /* default */], {
        summary: truckDetail.reviews_summary
      }), external__react__default.a.createElement(ReviewModifyContainer["a" /* default */], TruckDetail__extends({
        detail: truckDetail
      }, this.props)), external__react__default.a.createElement(UserReview["a" /* default */], {
        reviews: truckDetail.reviews_detail
      })), external__react__default.a.createElement("hr", null), suggestTruck && suggestTruck.length > 0 && external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "menu-title Display-2BlackLeft"
      }, "You Might Also Like"), external__react__default.a.createElement(row__default.a, {
        gutter: 16,
        className: "suggest-truck"
      }, this.renderSuggestTruck(suggestTruck))))), external__react__default.a.createElement(affix__default.a, {
        style: {
          position: 'relative',
          flex: 1
        },
        offsetTop: 130
      }, external__react__default.a.createElement("div", {
        className: "catering-section"
      }, external__react__default.a.createElement(catering_CateringContainer, {
        food_truck_id: truckDetail.id,
        toggleShareModal: toggleShareModal
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var _props4 = this.props,
          truckDetail = _props4.truckDetail,
          isPairing = _props4.isPairing,
          toggleCateringModal = _props4.toggleCateringModal,
          visibleDeepLink = _props4.visibleDeepLink;
      return external__react__default.a.createElement("div", {
        style: {
          padding: isPairing && 0
        },
        className: "truck-detail"
      }, truckDetail ? external__react__default.a.createElement("div", {
        id: "info",
        className: "detail-container"
      }, this.renderTruckDetail(truckDetail), external__react__default.a.createElement("div", {
        onClick: toggleCateringModal,
        style: {
          bottom: external__react_device_detect_["isMobile"] && visibleDeepLink ? 64 : 0
        },
        className: "catering-responsive"
      }, external__react__default.a.createElement("div", {
        className: "catering-inner "
      }, external__react__default.a.createElement("div", {
        className: "ButtonWhiteRight"
      }, "BOOK THIS TRUCK")))) : external__react__default.a.createElement("div", {
        className: "loading-container"
      }, external__react__default.a.createElement(spin__default.a, {
        indicator: external__react__default.a.createElement(icon__default.a, {
          type: "loading",
          style: {
            fontSize: 24
          }
        })
      })));
    }
  }]);

  return TruckDetail;
}(external__react_["Component"]);

/* harmony default export */ var truckDetail_TruckDetail = (TruckDetail_TruckDetail);
// EXTERNAL MODULE: ./src/api/truckApi.js
var truckApi = __webpack_require__(37);

// EXTERNAL MODULE: ./src/api/reviewApi.js + 1 modules
var reviewApi = __webpack_require__(56);

// EXTERNAL MODULE: ./global.js
var global = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/common/announceModal/AnnounceModal.js
var AnnounceModal = __webpack_require__(70);

// EXTERNAL MODULE: ./src/components/common/errorPage/ErrorPage.js
var ErrorPage = __webpack_require__(42);

// EXTERNAL MODULE: ./src/actions/deepLinkAction.js
var deepLinkAction = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: external "react-cookie"
var external__react_cookie_ = __webpack_require__(10);
var external__react_cookie__default = /*#__PURE__*/__webpack_require__.n(external__react_cookie_);

// EXTERNAL MODULE: ./src/components/truckDetail/_truckDetail.less
var _truckDetail = __webpack_require__(222);
var _truckDetail_default = /*#__PURE__*/__webpack_require__.n(_truckDetail);

// CONCATENATED MODULE: ./src/components/truckDetail/TruckDetailContainer.js


function TruckDetailContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TruckDetailContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { TruckDetailContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TruckDetailContainer__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function TruckDetailContainer__extends() { TruckDetailContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TruckDetailContainer__extends.apply(this, arguments); }

function TruckDetailContainer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { TruckDetailContainer__defineProperty(target, key, source[key]); }); } return target; }

function TruckDetailContainer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TruckDetailContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TruckDetailContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TruckDetailContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) TruckDetailContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) TruckDetailContainer__defineProperties(Constructor, staticProps); return Constructor; }

function TruckDetailContainer__possibleConstructorReturn(self, call) { if (call && (TruckDetailContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return TruckDetailContainer__assertThisInitialized(self); }

function TruckDetailContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TruckDetailContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var cookies = new external__react_cookie_["Cookies"]();

var TruckDetailContainer_TruckDetailContainer =
/*#__PURE__*/
function (_Component) {
  TruckDetailContainer__inherits(TruckDetailContainer, _Component);

  function TruckDetailContainer(props) {
    var _this;

    TruckDetailContainer__classCallCheck(this, TruckDetailContainer);

    _this = TruckDetailContainer__possibleConstructorReturn(this, (TruckDetailContainer.__proto__ || Object.getPrototypeOf(TruckDetailContainer)).call(this, props));
    _this.state = {
      current: "introduction",
      favorite: false,
      locationArr: [{
        latitude: 39.7384953,
        longtitude: -104.9964992
      }],
      order: [],
      subTotal: 0,
      total: 0,
      visibleAnnounce: false,
      iconMarker: "truck",
      locations: [],
      mode: 'upcoming',
      events: [],
      selectedKey: "0",
      suggestTruck: null
    };
    return _this;
  }

  TruckDetailContainer__createClass(TruckDetailContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var truckDetail = nextProps.truckDetail;

      if (this.props.truckDetail !== truckDetail) {
        this.props.getSuggestTruck(truckDetail.id);
      }

      if (truckDetail) {
        // Set location
        var locations = [],
            icon = "",
            events = [];
        Object(global["e" /* getSchedule */])(truckDetail.calendar).forEach(function (item, index) {
          if (item && item.brewery === null) {
            icon = "truck";
          } else {
            icon = "pairing";
          }

          events.push(TruckDetailContainer__objectSpread({}, item, {
            key: index,
            icon: icon
          }));
          if (external__moment__default()(item.timeDisplay, "YYYY-MM-DD h:mm a") > external__moment__default()()) locations.push(item);
        }); //Sort upcoming schedule

        locations.sort(function (a, b) {
          if (external__moment__default()(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() < external__moment__default()(b.timeDisplay, "YYYY-MM-DD h:mm a").unix()) return -1;
          if (external__moment__default()(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() > external__moment__default()(b.timeDisplay, "YYYY-MM-DD h:mm a").unix()) return 1;
          return 0;
        });
        var sortedLocations = [];
        locations.forEach(function (item, index) {
          sortedLocations.push(TruckDetailContainer__objectSpread({}, item, {
            index: String(index)
          }));
        }); //render first icon

        if (sortedLocations[0] && sortedLocations[0].brewery === null) {
          icon = "truck";
        } else {
          icon = "pairing";
        }

        this.setState({
          favorite: truckDetail.is_favourite,
          locationArr: [sortedLocations[0]],
          locations: sortedLocations,
          iconMarker: icon,
          events: events,
          selectedKey: sortedLocations[0] && sortedLocations[0].index
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var truckDetail = this.props.truckDetail;

      if (truckDetail) {
        // get suggest truck
        var cuisineStringArray = [];
        this.props.getSuggestTruck(truckDetail.id); // change deep link route

        this.props.changeRoute("gotrucksterconsumer://app/truck/".concat(truckDetail.id)); // Set location

        var locations = [],
            icon = "",
            events = [];
        Object(global["e" /* getSchedule */])(truckDetail.calendar).forEach(function (item, index) {
          if (item && item.brewery === null) {
            icon = "truck";
          } else {
            icon = "pairing";
          }

          events.push(TruckDetailContainer__objectSpread({}, item, {
            key: index,
            icon: icon
          }));
          if (external__moment__default()(item.timeDisplay, "YYYY-MM-DD h:mm a") > external__moment__default()()) locations.push(item);
        }); //Sort upcoming schedule

        locations.sort(function (a, b) {
          if (external__moment__default()(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() < external__moment__default()(b.timeDisplay, "YYYY-MM-DD h:mm a").unix()) return -1;
          if (external__moment__default()(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() > external__moment__default()(b.timeDisplay, "YYYY-MM-DD h:mm a").unix()) return 1;
          return 0;
        });
        var sortedLocations = [];
        locations.forEach(function (item, index) {
          sortedLocations.push(TruckDetailContainer__objectSpread({}, item, {
            index: String(index)
          }));
        }); //render first icon

        if (sortedLocations[0] && sortedLocations[0].brewery === null) {
          icon = "truck";
        } else {
          icon = "pairing";
        }

        this.setState({
          locationArr: [sortedLocations[0]],
          locations: sortedLocations,
          iconMarker: icon,
          events: events,
          selectedKey: sortedLocations[0] && sortedLocations[0].index
        });
      }
    }
  }, {
    key: "handleModeChange",
    value: function handleModeChange(e) {
      var mode = e.target.value;
      this.setState({
        mode: mode
      });
    }
  }, {
    key: "handleCheckOut",
    value: function handleCheckOut() {
      this.setState({
        visibleAnnounce: true
      });
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      this.setState({
        visibleAnnounce: false
      });
    }
  }, {
    key: "checkExistOrder",
    value: function checkExistOrder(value, arr) {
      for (var i = 0; i < arr.length; ++i) {
        if (arr[i].id === value) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "handleAddOne",
    value: function handleAddOne(e) {
      var newOrder = [];
      this.state.order.forEach(function (item, index) {
        if (item.id === e.id) item = TruckDetailContainer__objectSpread({}, item, {
          count: item.count + 1
        });
        newOrder.push(item);
      });
      this.setState({
        order: newOrder,
        subTotal: this.calculateSubTotal(newOrder)
      });
    }
  }, {
    key: "handleRemoveOne",
    value: function handleRemoveOne(e) {
      var newOrder = [];
      this.state.order.forEach(function (item, index) {
        if (item.id === e.id) item = TruckDetailContainer__objectSpread({}, item, {
          count: item.count - 1
        });
        newOrder.push(item);
      });
      this.setState({
        order: newOrder,
        subTotal: this.calculateSubTotal(newOrder)
      });
    }
  }, {
    key: "handleRemoveMenuItem",
    value: function handleRemoveMenuItem(e) {
      var newOrder = this.state.order;
      this.state.order.forEach(function (item, index) {
        if (item.id === e.id) newOrder.splice(index, 1);
      });
      this.setState({
        order: newOrder,
        subTotal: this.calculateSubTotal(newOrder)
      });
    }
  }, {
    key: "handleClickMenuItem",
    value: function handleClickMenuItem(e) {
      var newOrder = [];
      var checkExist = this.checkExistOrder(e.id, this.state.order);

      if (checkExist) {
        this.state.order.forEach(function (item, index) {
          if (item.id === e.id) item = TruckDetailContainer__objectSpread({}, item, {
            count: item.count + 1
          });
          newOrder.push(item);
        });
        this.setState({
          order: newOrder,
          subTotal: this.calculateSubTotal(newOrder)
        });
      } else {
        newOrder = this.state.order.concat(TruckDetailContainer__objectSpread({}, e, {
          count: 1
        }));
        this.setState({
          order: newOrder,
          subTotal: this.calculateSubTotal(newOrder)
        });
      }
    }
  }, {
    key: "calculateSubTotal",
    value: function calculateSubTotal(order) {
      var subTotal = 0;
      order.map(function (item, index) {
        return subTotal = subTotal + item.count * item.price;
      });
      return subTotal;
    }
  }, {
    key: "handleClickMenu",
    value: function handleClickMenu(e) {
      this.setState({
        current: e.key
      });
    }
  }, {
    key: "handleEditReview",
    value: function handleEditReview(e) {
      this.props.editReview(TruckDetailContainer__objectSpread({
        truckId: this.props.id
      }, e));
    }
  }, {
    key: "handlePostReview",
    value: function handlePostReview(e) {
      this.props.postReview(TruckDetailContainer__objectSpread({
        truckId: this.props.truckDetail.id
      }, e));
    }
  }, {
    key: "onFavoriteChange",
    value: function onFavoriteChange(e) {
      if (e === 1) {
        this.props.markFavorite(this.props.truckDetail.id);
      } else {
        this.props.unmarkFavorite(this.props.truckDetail.id);
      }

      this.setState({
        favorite: e
      });
    }
  }, {
    key: "handleClickEvent",
    value: function handleClickEvent(e) {
      if (external__moment__default()(e.timeDisplay, "YYYY-MM-DD h:mm a") > external__moment__default()()) {
        var icon = "";

        if (e && e.brewery === null) {
          icon = "truck";
        } else {
          icon = "pairing";
        }

        this.setState({
          mode: "upcoming",
          selectedKey: String(e.key),
          locationArr: [e],
          iconMarker: icon
        });
      }
    }
  }, {
    key: "handleClickSchedule",
    value: function handleClickSchedule(e) {
      var icon = "",
          item = this.state.locations[e.key];

      if (item && item.brewery === null) {
        icon = "truck";
      } else {
        icon = "pairing";
      }

      this.setState({
        selectedKey: String(e.key),
        locationArr: [item],
        iconMarker: icon
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          truckDetail = _props.truckDetail,
          slug = _props.slug;
      return external__react__default.a.createElement("div", null, truckDetail ? external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _truckDetail_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        url: "https://gotruckster.com/food-truck/" + "".concat(slug),
        title: truckDetail.name + " - Food Truck Denver, CO - Truckster",
        description: truckDetail.company_description.length > 160 ? truckDetail.company_description.substring(0, 160) : truckDetail.company_description,
        ogImage: truckDetail.cover_photo && truckDetail.cover_photo.length > 0 && truckDetail.cover_photo[0].url
      }, external__react__default.a.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: "{\n                                \"@context\": \"http://schema.org\",\n                                \"@type\": \"LocalBusiness\",\n                                \"name\": ".concat(truckDetail.name, ",\n                                \"telePhone\": ").concat(truckDetail.phone, ",                               \n                                \"geo\": {\n                                    \"@type\": \"GeoCoordinates\",\n                                    \"latitude\": ").concat(truckDetail.calendar && truckDetail.calendar.length > 0 && truckDetail.calendar[0].latitude, ",\n                                    \"longitude\":  ").concat(truckDetail.calendar && truckDetail.calendar.length > 0 && truckDetail.calendar[0].longtitude, "\n                                },\n                                \"url\": https://gotruckster.com/food-truck/").concat(slug, ",\n                                \"logo\":").concat(truckDetail.logo && truckDetail.logo.length > 0 && truckDetail.logo[0].url, ",\n                                \"image\":").concat(truckDetail.cover_photo && truckDetail.cover_photo.length > 0 && truckDetail.cover_photo[0].url, ",\n                                \"aggregateRating\": {\n                                    \"@type\": \"AggregateRating\",\n                                    \"ratingValue\":").concat(truckDetail.avg_rating || 0, ",\n                                    \"ratingCount\": ").concat(truckDetail.reviews_summary.total_reviews, "\n                                }}")
        }
      })), external__react__default.a.createElement(truckDetail_TruckDetail, TruckDetailContainer__extends({}, this.state, this.props, {
        handleCancel: function handleCancel(e) {
          return _this2.handleCancel(e);
        },
        handleCheckOut: function handleCheckOut(e) {
          return _this2.handleCheckOut(e);
        },
        handleAddOne: function handleAddOne(e) {
          return _this2.handleAddOne(e);
        },
        handleRemoveOne: function handleRemoveOne(e) {
          return _this2.handleRemoveOne(e);
        },
        handleRemoveMenuItem: function handleRemoveMenuItem(e) {
          return _this2.handleRemoveMenuItem(e);
        },
        calculateSubTotal: function calculateSubTotal(e) {
          return _this2.calculateSubTotal(e);
        },
        handleClickMenuItem: function handleClickMenuItem(e) {
          return _this2.handleClickMenuItem(e);
        },
        handleClickSchedule: function handleClickSchedule(e) {
          return _this2.handleClickSchedule(e);
        },
        onFavoriteChange: function onFavoriteChange(e) {
          return _this2.onFavoriteChange(e);
        },
        handlePostReview: function handlePostReview(e) {
          return _this2.handlePostReview(e);
        },
        handleClickMenu: function handleClickMenu(e) {
          return _this2.handleClickMenu(e);
        },
        handleEditReview: function handleEditReview(e) {
          return _this2.handleEditReview(e);
        },
        handleModeChange: function handleModeChange(e) {
          return _this2.handleModeChange(e);
        },
        handleClickEvent: function handleClickEvent(e) {
          return _this2.handleClickEvent(e);
        }
      })), external__react__default.a.createElement(AnnounceModal["a" /* default */], {
        message: "This feature will be available soon.                               \n                        We are currently hard at work on selected feature. It will be available as soon as possible.",
        visible: this.state.visibleAnnounce,
        handleCancel: function handleCancel(e) {
          return _this2.handleCancel(e);
        }
      })) : external__react__default.a.createElement(ErrorPage["a" /* default */], {
        status: 404
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var req, query, res, token, truckDetail;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query, res = _ref.res;
                token = cookies.get('token');
                truckDetail = null;

                if (req && req.cookies) {
                  token = req.cookies.token;
                }

                _context.next = 6;
                return Object(global["a" /* getDataInitial */])("consumer/v1/foodtrucks/slug/".concat(query.slug), token);

              case 6:
                truckDetail = _context.sent;

                if (!query.slug) {
                  res.writeHead(301, {
                    Location: "/food-truck/co/denver"
                  });
                  res.end();
                }

                return _context.abrupt("return", {
                  truckDetail: truckDetail,
                  slug: query.slug
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return TruckDetailContainer;
}(external__react_["Component"]);

function TruckDetailContainer_mapStateToProps(state) {
  return {
    isLoadingTruckDetail: state.truckReducer.isLoadingTruckDetail,
    visibleDeepLink: state.deepLinkReducer.visibleDeepLink,
    error: state.truckReducer.error,
    status: state.truckReducer.status,
    truckMenu: state.truckReducer.truckMenu,
    isLoadingPostReview: state.reviewReducer.isLoadingPostReview,
    isLoadingEditReview: state.reviewReducer.isLoadingEditReview,
    isLoggedIn: state.authReducer.isLoggedIn,
    reviews: state.reviewReducer.reviews,
    suggestTruck: state.truckReducer.suggestTruck
  };
}
function TruckDetailContainer_mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    getSuggestTruck: truckApi["c" /* getSuggestTruck */],
    toggleShareModal: toggleAction["f" /* toggleShareModal */],
    markFavorite: reviewApi["i" /* markFavorite */],
    unmarkFavorite: reviewApi["m" /* unmarkFavorite */],
    getTruckDetail: truckApi["d" /* getTruckDetail */],
    getTruckReview: reviewApi["d" /* getTruckReview */],
    postReview: reviewApi["l" /* postReview */],
    editReview: reviewApi["b" /* editReview */],
    changeRoute: deepLinkAction["a" /* changeRoute */],
    toggleCateringModal: toggleAction["b" /* toggleCateringModal */]
  }, dispatch);
}
/* harmony default export */ var truckDetail_TruckDetailContainer = (Object(external__react_redux_["connect"])(TruckDetailContainer_mapStateToProps, TruckDetailContainer_mapDispatchToProps)(TruckDetailContainer_TruckDetailContainer));
// CONCATENATED MODULE: ./pages/truck.js

/* harmony default export */ var truck = __webpack_exports__["default"] = (truckDetail_TruckDetailContainer);

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = ".truck-detail {\n  padding-top: 68px;\n  background: #fff;\n}\n.truck-detail hr {\n  background: #efefef;\n  height: 1px;\n  margin: 1px;\n  border: 0;\n}\n.truck-detail .detail-container .detail-main-header {\n  height: 480px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  background-position: 50%;\n}\n.truck-detail .detail-container .detail-main-header .content-detail {\n  top: 330px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1140px;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  position: absolute;\n  height: 150px;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .detail-wrapper {\n  padding: 0 15px;\n  width: 100%;\n}\n@media only screen and (max-width: 768px) {\n  .truck-detail .detail-container .detail-main-header .content-detail .detail-wrapper .name {\n    font-size: 30px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .truck-detail .detail-container .detail-main-header .content-detail .detail-wrapper .name {\n    font-size: 24px;\n  }\n}\n.truck-detail .detail-container .detail-main-header .content-detail .media-order-container {\n  visibility: hidden;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n@media only screen and (max-width: 768px) {\n  .truck-detail .detail-container .detail-main-header .content-detail .media-order-container {\n    visibility: visible;\n  }\n}\n.truck-detail .detail-container .detail-main-header .content-detail .media-order-container .media-order {\n  background: #fa393d;\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n@media only screen and (max-width: 768px) {\n  .truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper {\n    display: none;\n  }\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .hire-button button {\n  width: 353px;\n  height: 48px;\n  background-color: #ffd35e;\n  border-color: #ffd35e;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .hire-button button:hover,\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .hire-button button:focus {\n  border-color: #ffd35e;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section {\n  background: #fff;\n  width: 350px;\n  border-radius: 6px;\n  box-shadow: 0 8px 16px 0 rgba(33, 33, 33, 0.15);\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-header {\n  padding: 16px 23px;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body {\n  padding: 16px 23px;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail {\n  display: flex;\n  min-height: 20vh;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 20px;\n  max-height: 40vh;\n  overflow-y: scroll;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail::-webkit-scrollbar {\n  width: 0;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail::-webkit-scrollbar-thumb {\n  background: #f32126;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail::-webkit-scrollbar-thumb:hover {\n  background: #f32126;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail .order-item-container {\n  padding-bottom: 16px;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail .order-item-container span {\n  margin: 0 !important;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail .order-item-container .order-item-header {\n  padding-bottom: 12px;\n  display: flex;\n  justify-content: space-between;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail .order-item-container .order-item-header img {\n  cursor: pointer;\n  width: 20px;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-detail .no-order {\n  white-space: pre-line;\n  text-align: center;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-sub-total {\n  padding-top: 8px;\n  display: flex;\n  justify-content: space-between;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-total {\n  padding-top: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .checkout-button {\n  padding-top: 30px;\n}\n.truck-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .checkout-button button {\n  width: 100%;\n  height: 48px;\n}\n.truck-detail .detail-container .detail-main-header .cover {\n  height: 480px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n}\n.truck-detail .detail-container .detail-main-header .cover .cover-mask {\n  height: 480px;\n  position: absolute;\n  width: 100%;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);\n}\n.truck-detail .detail-container .body-wrapper {\n  padding-bottom: 50px;\n  max-width: 1140px;\n  margin: 0 auto;\n  display: flex;\n}\n.truck-detail .detail-container .body-wrapper .detail-body {\n  max-width: 730px !important;\n  margin-right: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .truck-detail .detail-container .body-wrapper .detail-body {\n    margin: 0 auto;\n    width: 100% !important;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .truck-detail .detail-container .body-wrapper .detail-body {\n    width: 500px;\n    max-width: initial;\n  }\n}\n.truck-detail .detail-container .body-wrapper .catering-section {\n  z-index: 10;\n  top: -50px;\n  position: absolute;\n}\n@media only screen and (max-width: 768px) {\n  .truck-detail .detail-container .body-wrapper .catering-section {\n    visibility: hidden;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .truck-detail .detail-container .body-wrapper .catering-section {\n    width: 100%;\n  }\n}\n.truck-detail .detail-container .detail-rate {\n  padding-top: 8px;\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.truck-detail .detail-container .detail-rate .rate-number {\n  border-radius: 4px;\n  background-color: #ffd35e;\n  padding: 2px 5px;\n}\n.truck-detail .detail-container .detail-rate .rate-star {\n  padding: 0 8px;\n  line-height: 15px;\n}\n.truck-detail .detail-container .detail-rate .rate-star i {\n  font-size: 16px !important;\n}\n.truck-detail .detail-container .flex-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.truck-detail .detail-container .flex-row .tag {\n  padding-bottom: 20px;\n  justify-content: flex-start !important;\n}\n.truck-detail .detail-container .flex-row .left-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.truck-detail .detail-container .flex-row .left-row img {\n  width: 24px;\n}\n.truck-detail .detail-container .detail-time {\n  display: flex;\n  justify-content: space-between;\n}\n.truck-detail .detail-container .detail-time .detail-time-left {\n  align-items: center;\n  display: flex;\n}\n.truck-detail .detail-container .detail-time .detail-time-left .time img {\n  width: 24px;\n  padding-right: 8px;\n}\n.truck-detail .detail-container .detail-time .detail-time-left span {\n  padding-left: 4px;\n  color: #3ec7a2;\n}\n.truck-detail .detail-container .detail-time .ant-radio-group {\n  display: flex;\n}\n.truck-detail .detail-container .detail-time .detail-time-right .radio-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.truck-detail .detail-container .detail-schedule {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  background-color: #ffffff;\n  border: solid 1px #dadada;\n}\n.truck-detail .detail-container .detail-schedule .schedule {\n  color: #212121;\n}\n.truck-detail .detail-container .detail-schedule .schedule ul {\n  max-height: 330px;\n  overflow-y: scroll;\n  /* optional: show position indicator in red */\n}\n.truck-detail .detail-container .detail-schedule .schedule ul::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */\n}\n.truck-detail .detail-container .detail-schedule .schedule ul::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n.truck-detail .detail-container .detail-schedule .schedule .ant-menu-item {\n  display: flex;\n  height: 48px;\n  margin: 0;\n  border-left: solid 1px #dadada;\n  border-bottom: solid 1px #dadada;\n  flex-direction: column;\n  justify-content: center;\n}\n.truck-detail .detail-container .detail-schedule .schedule .weekday {\n  color: #bdbdbd;\n}\n.truck-detail .detail-container .menu-anchor .ant-anchor-wrapper {\n  margin-left: 0px;\n  background-color: #fff;\n  padding: 0;\n  border-bottom: solid 1px #efefef;\n}\n.truck-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor {\n  display: flex;\n}\n.truck-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-ink {\n  position: relative;\n}\n.truck-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-ink span {\n  display: none;\n}\n.truck-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-link {\n  padding: 20px;\n  font-size: 16px;\n  font-weight: 600;\n  border-bottom: 0;\n}\n.truck-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-link-active > .ant-anchor-link {\n  border-bottom: solid 1px #f32126;\n}\n.truck-detail .detail-container .menu-anchor .left-row {\n  flex: 1;\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n}\n.truck-detail .detail-container .menu-anchor .left-row img,\n.truck-detail .detail-container .menu-anchor .left-row i {\n  cursor: pointer;\n  width: 24px;\n}\n.truck-detail .detail-container .menu-content {\n  padding-top: 24px;\n}\n@media only screen and (max-width: 768px) {\n  .truck-detail .detail-container .menu-content {\n    margin: 0 15px;\n  }\n}\n.truck-detail .detail-container .menu-content .menu-title {\n  display: flex;\n  justify-content: space-between;\n  padding: 32px 0;\n  padding-top: 12px;\n}\n.truck-detail .detail-container .menu-content .contact {\n  padding-bottom: 30px;\n}\n.truck-detail .detail-container .menu-content .contact .location {\n  display: flex;\n  align-items: center;\n}\n.truck-detail .detail-container .menu-content .contact .location img {\n  width: 24px;\n  padding-right: 8px;\n}\n.truck-detail .detail-container .menu-content .contact .location span {\n  color: #757575;\n}\n.truck-detail .detail-container .menu-content .contact .social {\n  display: flex;\n}\n.truck-detail .detail-container .menu-content .contact .social .image-holder {\n  margin-top: 16px;\n  background: #bdbdbd;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 16px;\n}\n.truck-detail .detail-container .menu-content .contact .social .image-holder img {\n  width: 16px;\n}\n.truck-detail .detail-container .menu-content .contact .intro {\n  white-space: pre-line;\n}\n.truck-detail .detail-container .menu-content .menu-truck .menu-container .category-menu {\n  padding-bottom: 16px;\n  padding-top: 24px;\n  color: #212121;\n  font-size: 20px;\n  font-weight: 800;\n}\n.truck-detail .detail-container .menu-content .menu-truck .food {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: inset 0 -1px 0 0 #dadada;\n  align-items: center;\n}\n.truck-detail .detail-container .menu-content .menu-truck .food .name {\n  padding-top: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n}\n.truck-detail .detail-container .menu-content .menu-truck .food .bref {\n  color: #bdbdbd;\n  padding-top: 4px;\n  padding-bottom: 8px;\n}\n.truck-detail .detail-container .menu-content .menu-truck .food .price {\n  font-size: 14px;\n  padding-left: 24px;\n  line-height: 1.43;\n}\n.truck-detail .detail-container .menu-content .review-truck {\n  padding-bottom: 20px;\n}\n.truck-detail .detail-container .menu-content .no-schedule {\n  text-align: center;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.truck-detail .catering-responsive {\n  visibility: hidden;\n  width: 100%;\n  position: fixed;\n  background: #f32126;\n  z-index: 12;\n  padding: 16px;\n}\n@media only screen and (max-width: 768px) {\n  .truck-detail .catering-responsive {\n    visibility: visible;\n  }\n}\n.truck-detail .map {\n  position: relative;\n  height: 336px;\n  width: 100%;\n}\n";

/***/ })
/******/ ]);