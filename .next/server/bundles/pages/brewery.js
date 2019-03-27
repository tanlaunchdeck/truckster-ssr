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
/******/ 	return __webpack_require__(__webpack_require__.s = 146);
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
var apiUrl = "http://test.gotruckster.com/";
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
/* 20 */,
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
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["h"] = requestSearchBrewery;
/* harmony export (immutable) */ __webpack_exports__["j"] = searchBrewerySuccess;
/* harmony export (immutable) */ __webpack_exports__["i"] = searchBreweryError;
/* harmony export (immutable) */ __webpack_exports__["f"] = requestGetBreweryDetail;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBreweryDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = getBreweryDetailError;
/* harmony export (immutable) */ __webpack_exports__["e"] = mountBrewery;
/* harmony export (immutable) */ __webpack_exports__["g"] = requestGetSuggestBrewery;
/* harmony export (immutable) */ __webpack_exports__["d"] = getSuggestBrewerySuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = getSuggestBreweryError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(2);

function requestSearchBrewery(isLoadingSearchBrewery) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_43" /* REQUEST_SEARCH_BREWERY */],
    isLoadingSearchBrewery: isLoadingSearchBrewery
  };
}
function searchBrewerySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_53" /* SEARCH_BREWERY_SUCCESS */],
      response: response
    });
  };
}
function searchBreweryError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_52" /* SEARCH_BREWERY_ERROR */],
      response: response
    });
  };
} // Get brewery detail action 

function requestGetBreweryDetail(isLoadingGetBreweryDetail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_18" /* REQUEST_GET_BREWERY_DETAIL */],
    isLoadingGetBreweryDetail: isLoadingGetBreweryDetail
  };
}
function getBreweryDetailSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["m" /* GET_BREWERY_DETAIL_SUCCESS */],
      response: response
    });
  };
}
function getBreweryDetailError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["l" /* GET_BREWERY_DETAIL_ERROR */],
      response: response
    });
  };
}
function mountBrewery() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_2" /* MOUNT_BREWERY */]
    });
  };
}
function requestGetSuggestBrewery(isLoadingGetSuggestBrewery) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_25" /* REQUEST_GET_SUGGEST_BREWERY */],
      isLoadingGetSuggestBrewery: isLoadingGetSuggestBrewery
    });
  };
}
function getSuggestBrewerySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["A" /* GET_SUGGEST_BREWERY_SUCCESS */],
      response: response
    });
  };
}
function getSuggestBreweryError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["z" /* GET_SUGGEST_BREWERY_ERROR */]
    });
  };
}

/***/ }),
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchBrewery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBreweryDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSuggestBrewery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__ = __webpack_require__(40);
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

 // import { notification, Icon } from 'antd'





var cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie__["Cookies"]();
var searchBrewery = function searchBrewery(params, value, page) {
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
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["h" /* requestSearchBrewery */])(true));
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()({
                  method: 'GET',
                  url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/breweries?".concat(params, "=").concat(value, "&per_page=12&page=").concat(page),
                  headers: {
                    "Accept": "application/json"
                  }
                }).then(function (response) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["j" /* searchBrewerySuccess */])(_objectSpread({}, response.data, {
                    params: params
                  })));
                }).catch(function (error) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["i" /* searchBreweryError */])(error));
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
}; // Get brewery detail api

var getBreweryDetail = function getBreweryDetail(breweryId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["f" /* requestGetBreweryDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/breweries/" + breweryId,
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["b" /* getBreweryDetailSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["a" /* getBreweryDetailError */])(_error));
      }
    });
  };
}; // get suggest truck api

var getSuggestBrewery = function getSuggestBrewery(type) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["g" /* requestGetSuggestBrewery */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/breweries/".concat(type, "/suggests"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["d" /* getSuggestBrewerySuccess */])(response));
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["c" /* getSuggestBreweryError */])(_error2));
      }
    });
  };
};

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_rate__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_rate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_rate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TruckCard =
/*#__PURE__*/
function (_Component) {
  _inherits(TruckCard, _Component);

  function TruckCard(props) {
    var _this;

    _classCallCheck(this, TruckCard);

    _this = _possibleConstructorReturn(this, (TruckCard.__proto__ || Object.getPrototypeOf(TruckCard)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(TruckCard, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        prefetch: true,
        to: data.url
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-new-card-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: data.image,
        alt: "truck"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-info-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "truck-logo",
        src: data.logo,
        alt: "logo-truck"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-name Body-1SemiBlackLeft"
      }, data.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "cuisine-tag"
      }, data.cuisine && data.cuisine.map(function (item, index) {
        if (index === 0) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft"
        }, item.name, " ");else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u2022"), "   ", item.name, " ");
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_rate___default.a, {
        disabled: true,
        value: parseInt(data.rating, 10)
      })))));
    }
  }]);

  return TruckCard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TruckCard);

/***/ }),
/* 48 */,
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
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
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
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),
/* 147 */
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

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(49);
var tooltip__default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(21);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__(18);
var rate__default = /*#__PURE__*/__webpack_require__.n(rate_);

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(19);
var card__default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

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

// EXTERNAL MODULE: ./src/components/common/calendar/Calendar.js
var Calendar = __webpack_require__(78);

// EXTERNAL MODULE: ./src/components/common/truckNewCard/TruckNewCard.js
var TruckNewCard = __webpack_require__(47);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(39);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// EXTERNAL MODULE: ./global.js
var global = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/breweryDetail/BreweryDetail.js








function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var imageBreweryPlaceholder = "/static/images/image_brewery_placeholder.png";
var LinkAnchor = anchor__default.a.Link;
var shareIcon = '/static/images/share-icon.png';
var websiteIcon = '/static/images/website-icon.svg';
var locationIcon = '/static/images/location-icon.png';
var homeImage = "/static/images/home-image.jpg";
var mailIcon = '/static/images/mail-icon.png';
var phoneIcon = '/static/images/phone-icon.png';
var facebookIconWhite = '/static/images/facebook-icon-white.svg';
var instagramIconWhite = '/static/images/instagram-icon-white.svg';
var twitterIconWhite = '/static/images/twitter-icon-white.svg';
var breweryIcon = '/static/images/brewery-marker-icon.png';

var BreweryDetail_BreweryDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(BreweryDetail, _Component);

  function BreweryDetail() {
    _classCallCheck(this, BreweryDetail);

    return _possibleConstructorReturn(this, (BreweryDetail.__proto__ || Object.getPrototypeOf(BreweryDetail)).apply(this, arguments));
  }

  _createClass(BreweryDetail, [{
    key: "renderInfo",
    value: function renderInfo(breweryDetail) {
      var _props = this.props,
          isPairing = _props.isPairing,
          coordinate = _props.coordinate,
          latitude = _props.latitude,
          longtitude = _props.longtitude;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(row__default.a, {
        gutter: 30
      }, external__react__default.a.createElement(col__default.a, {
        lg: 14,
        md: 14
      }, breweryDetail.location && external__react__default.a.createElement("div", {
        className: "detail-time"
      }, external__react__default.a.createElement("div", {
        className: "time"
      }, external__react__default.a.createElement("img", {
        alt: "back",
        src: locationIcon
      }), external__react__default.a.createElement("div", null, breweryDetail.location))), breweryDetail.phone && external__react__default.a.createElement("div", {
        className: "detail-time"
      }, external__react__default.a.createElement("div", {
        className: "time"
      }, external__react__default.a.createElement("img", {
        alt: "back",
        src: phoneIcon
      }), external__react__default.a.createElement("a", {
        className: "Body-1RegularGrayLeft",
        href: "tel:".concat(breweryDetail.phone)
      }, breweryDetail.phone))), breweryDetail.email && external__react__default.a.createElement("div", {
        className: "detail-time"
      }, external__react__default.a.createElement("div", {
        className: "time"
      }, external__react__default.a.createElement("img", {
        alt: "back",
        src: mailIcon
      }), external__react__default.a.createElement("a", {
        className: "Body-1RegularGrayLeft",
        href: "mailto:".concat(breweryDetail.email)
      }, breweryDetail.email))), breweryDetail.website_url && external__react__default.a.createElement("div", {
        className: "detail-time"
      }, external__react__default.a.createElement("div", {
        className: "time"
      }, external__react__default.a.createElement("img", {
        alt: "back",
        src: websiteIcon
      }), external__react__default.a.createElement("a", {
        onClick: function onClick() {
          window.open(breweryDetail.website_url.includes("http") ? breweryDetail.website_url : "http://" + breweryDetail.website_url);
        },
        className: "Body-1RegularGrayLeft"
      }, breweryDetail.website_url))), external__react__default.a.createElement("div", {
        className: "contact"
      }, external__react__default.a.createElement("div", {
        className: "social"
      }, breweryDetail.facebook_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: breweryDetail.facebook_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "facebook",
        src: facebookIconWhite
      })), breweryDetail.instagram_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: breweryDetail.instagram_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "instagram",
        src: instagramIconWhite
      })), breweryDetail.twitter_url && external__react__default.a.createElement("a", {
        target: "_blank",
        href: breweryDetail.twitter_url,
        className: "image-holder"
      }, external__react__default.a.createElement("img", {
        alt: "twitter",
        src: twitterIconWhite
      }))))), external__react__default.a.createElement(col__default.a, {
        lg: 10,
        md: 10
      }, " ", external__react__default.a.createElement("div", {
        className: "map"
      }, external__react__default.a.createElement(Map["a" /* default */], {
        icon: "brewery",
        location: isPairing ? [coordinate] : [{
          latitude: latitude,
          longtitude: longtitude,
          address: breweryDetail.location
        }]
      })))), external__react__default.a.createElement("div", {
        className: "contact intro"
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "INTRODUCTION"), external__react__default.a.createElement("div", {
        className: "Body-1RegularGrayLeft"
      }, breweryDetail.company_description)), external__react__default.a.createElement("div", {
        className: "contact intro"
      }, external__react__default.a.createElement("p", {
        className: "ButtonGreyLeft"
      }, "SCHEDULE"), breweryDetail.calendar && breweryDetail.calendar.length > 0 ? external__react__default.a.createElement(Calendar["a" /* default */], {
        events: Object(global["e" /* getSchedule */])(breweryDetail.calendar)
      }) : external__react__default.a.createElement("div", {
        className: "no-schedule"
      }, "This brewery doesn\u2019t have any food trucks scheduled this month ")));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(breweryMenu) {
      return breweryMenu.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          className: "food",
          sm: 24,
          md: 24,
          lg: 24
        }, external__react__default.a.createElement(card__default.a, {
          hoverable: true
        }, external__react__default.a.createElement("div", {
          className: "name Body-1MediumBlackLeft"
        }, item.name), external__react__default.a.createElement("div", {
          className: "bref CaptionGreyLeft"
        }, item.description), external__react__default.a.createElement("div", {
          className: "price Body-1MediumBlackLeft"
        }, item.abv && "".concat(item.abv, "%"))));
      });
    }
  }, {
    key: "renderSuggestBrewery",
    value: function renderSuggestBrewery(suggestBrewery) {
      return suggestBrewery.map(function (item, index) {
        var coverURL = "",
            logoURL = "";

        if (typeof item.cover_photo !== 'string') {
          coverURL = item.cover_photo;
          logoURL = item.logo;
        } else {
          coverURL = JSON.parse(item.cover_photo);
          logoURL = JSON.parse(item.logo);
        }

        if (item && index < 3) return external__react__default.a.createElement(col__default.a, {
          key: index,
          style: {
            marginBottom: "16px"
          },
          sm: 12,
          xs: 24,
          md: 8,
          lg: 8
        }, external__react__default.a.createElement(TruckNewCard["a" /* default */], {
          data: {
            url: "/brewery/" + item.slug,
            image: item.cover_photo ? coverURL[0].url : breweryIcon,
            logo: item.logo && item.logo !== "null" ? logoURL[0].thumbnails.large.url : imageBreweryPlaceholder,
            name: item.name,
            cuisine: item.brewery_type && [{
              name: item.brewery_type.name
            }],
            rating: parseFloat((Math.round(item.rating * 2) / 2).toFixed(1), 10)
          }
        }));
      });
    }
  }, {
    key: "renderBreweryDetail",
    value: function renderBreweryDetail(breweryDetail) {
      var rateNum = parseFloat((Math.round(breweryDetail.rating * 2) / 2).toFixed(1), 10);
      var _props2 = this.props,
          isPairing = _props2.isPairing,
          toggleShareModal = _props2.toggleShareModal,
          suggestBrewery = _props2.suggestBrewery,
          isLoggedIn = _props2.isLoggedIn,
          onFavoriteChange = _props2.onFavoriteChange,
          favorite = _props2.favorite;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "detail-main-header",
        style: {
          backgroundImage: "url(".concat(breweryDetail.cover_photo ? breweryDetail.cover_photo[0].url : homeImage, ")")
        }
      }, external__react__default.a.createElement("div", {
        className: "content-detail"
      }, external__react__default.a.createElement("div", {
        className: "detail-wrapper"
      }, external__react__default.a.createElement("h1", {
        className: "DisplayWhiteLeft name "
      }, "  ", breweryDetail.name), external__react__default.a.createElement("div", {
        className: "detail-rate"
      }, external__react__default.a.createElement("div", {
        className: "rate-number Body-1SemiBlackCenter"
      }, breweryDetail.rating), external__react__default.a.createElement("div", {
        className: "rate-star"
      }, external__react__default.a.createElement(rate__default.a, {
        disabled: true,
        value: isNaN(rateNum) ? 0 : rateNum
      }))), external__react__default.a.createElement("div", {
        className: "flex-row"
      }, external__react__default.a.createElement("div", {
        className: "tag"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/brewery-type/".concat(breweryDetail.breweries_type && breweryDetail.breweries_type.name)
      }, external__react__default.a.createElement("a", {
        className: "tag-item Body-1MediumBlackCenter"
      }, breweryDetail.breweries_type && breweryDetail.breweries_type.name, " ")))))), external__react__default.a.createElement("div", {
        className: "cover"
      }, external__react__default.a.createElement("div", {
        className: "cover-mask"
      }))), external__react__default.a.createElement("div", {
        className: "body-wrapper"
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
        title: "Review"
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
      }, this.renderInfo(breweryDetail), external__react__default.a.createElement("div", {
        id: "menu",
        className: "menu-title Display-2BlackLeft"
      }, "Menu"), external__react__default.a.createElement("div", {
        className: "menu-brewery"
      }, external__react__default.a.createElement(row__default.a, {
        className: "menu-container",
        gutter: 25
      }, breweryDetail.menus[0] && this.renderMenu(breweryDetail.menus[0].brewery_items))), external__react__default.a.createElement("div", {
        className: "menu-title Display-2BlackLeft"
      }, "Reviews "), external__react__default.a.createElement("div", {
        id: "reviews",
        className: "review-brewery"
      }, external__react__default.a.createElement(ReviewSummary["a" /* default */], {
        summary: breweryDetail.reviews_summary
      }), external__react__default.a.createElement(ReviewModifyContainer["a" /* default */], _extends({
        detail: breweryDetail
      }, this.props)), external__react__default.a.createElement(UserReview["a" /* default */], {
        reviews: breweryDetail.reviews_detail
      })), suggestBrewery && external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "menu-title Display-2BlackLeft"
      }, "You Might Also Like"), external__react__default.a.createElement(row__default.a, {
        gutter: 16,
        className: "suggest-brewery"
      }, this.renderSuggestBrewery(suggestBrewery)))))));
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          breweryDetail = _props3.breweryDetail,
          isPairing = _props3.isPairing;
      return external__react__default.a.createElement("div", {
        style: {
          padding: isPairing && 0
        },
        className: "brewery-detail"
      }, external__react__default.a.createElement("div", {
        id: "info",
        className: "detail-container"
      }, this.renderBreweryDetail(breweryDetail)));
    }
  }]);

  return BreweryDetail;
}(external__react_["Component"]);

/* harmony default export */ var breweryDetail_BreweryDetail = (BreweryDetail_BreweryDetail);
// EXTERNAL MODULE: ./src/api/breweryApi.js
var breweryApi = __webpack_require__(45);

// EXTERNAL MODULE: ./src/components/common/errorPage/ErrorPage.js
var ErrorPage = __webpack_require__(42);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(17);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: ./src/actions/toggleAction.js
var toggleAction = __webpack_require__(31);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(12);

// EXTERNAL MODULE: ./src/api/reviewApi.js + 1 modules
var reviewApi = __webpack_require__(56);

// EXTERNAL MODULE: ./src/actions/deepLinkAction.js
var deepLinkAction = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: external "react-cookie"
var external__react_cookie_ = __webpack_require__(10);
var external__react_cookie__default = /*#__PURE__*/__webpack_require__.n(external__react_cookie_);

// EXTERNAL MODULE: ./src/components/breweryDetail/_breweryDetail.less
var _breweryDetail = __webpack_require__(148);
var _breweryDetail_default = /*#__PURE__*/__webpack_require__.n(_breweryDetail);

// CONCATENATED MODULE: ./src/components/breweryDetail/BreweryDetailContainer.js


function BreweryDetailContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BreweryDetailContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { BreweryDetailContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BreweryDetailContainer__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function BreweryDetailContainer__extends() { BreweryDetailContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BreweryDetailContainer__extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BreweryDetailContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BreweryDetailContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BreweryDetailContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) BreweryDetailContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) BreweryDetailContainer__defineProperties(Constructor, staticProps); return Constructor; }

function BreweryDetailContainer__possibleConstructorReturn(self, call) { if (call && (BreweryDetailContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return BreweryDetailContainer__assertThisInitialized(self); }

function BreweryDetailContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BreweryDetailContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var cookies = new external__react_cookie_["Cookies"]();

var BreweryDetailContainer_BreweryDetailContainer =
/*#__PURE__*/
function (_Component) {
  BreweryDetailContainer__inherits(BreweryDetailContainer, _Component);

  function BreweryDetailContainer(props) {
    var _this;

    BreweryDetailContainer__classCallCheck(this, BreweryDetailContainer);

    _this = BreweryDetailContainer__possibleConstructorReturn(this, (BreweryDetailContainer.__proto__ || Object.getPrototypeOf(BreweryDetailContainer)).call(this, props));
    _this.state = {
      latitude: 39.7384953,
      longtitude: -104.9964992,
      favorite: false
    };
    return _this;
  }

  BreweryDetailContainer__createClass(BreweryDetailContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          breweryDetail = _props.breweryDetail,
          changeRoute = _props.changeRoute,
          getSuggestBrewery = _props.getSuggestBrewery;

      if (breweryDetail) {
        changeRoute("gotrucksterconsumer://app/brewery/".concat(breweryDetail.id));
        getSuggestBrewery(breweryDetail.id);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var self = this;

      if (nextProps.breweryDetail) {
        if (this.props.breweryDetail !== nextProps.breweryDetail) {
          this.props.getSuggestBrewery(nextProps.breweryDetail.id);
        }

        external__axios__default()({
          method: 'get',
          url: "https://maps.googleapis.com/maps/api/geocode/json?address=".concat(nextProps.breweryDetail.location, "&key=").concat(config["c" /* googleApi */])
        }).then(function (response) {
          self.setState({
            latitude: response.data.results[0].geometry.location.lat,
            longtitude: response.data.results[0].geometry.location.lng
          });
        }).catch(function (response) {});
      }

      if (nextProps.id !== this.props.id) {
        this.props.getBreweryDetail(nextProps.id);
      }

      self.setState({
        favorite: nextProps.breweryDetail.is_favourite
      });
    }
  }, {
    key: "handleEditReview",
    value: function handleEditReview(e) {
      this.props.editBreweryReview(_objectSpread({
        breweryId: this.props.breweryDetail.id
      }, e));
    }
  }, {
    key: "handlePostReview",
    value: function handlePostReview(e) {
      this.props.postBreweryReview(_objectSpread({
        breweryId: this.props.breweryDetail.id
      }, e));
    }
  }, {
    key: "onFavoriteChange",
    value: function onFavoriteChange(e) {
      var _props2 = this.props,
          markFavoriteBrewery = _props2.markFavoriteBrewery,
          unmarkFavoriteBrewery = _props2.unmarkFavoriteBrewery,
          breweryDetail = _props2.breweryDetail;

      if (e === 1) {
        markFavoriteBrewery(breweryDetail.id);
      } else {
        unmarkFavoriteBrewery(breweryDetail.id);
      }

      this.setState({
        favorite: e
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          status = _props3.status,
          breweryDetail = _props3.breweryDetail,
          slug = _props3.slug;
      return external__react__default.a.createElement("div", null, breweryDetail ? external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _breweryDetail_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        url: "https://gotruckster.com/brewery/" + "".concat(slug),
        title: breweryDetail.name + " - Brewery Denver, CO - Truckster",
        description: breweryDetail.company_description.length > 160 ? breweryDetail.company_description.substring(0, 160) : breweryDetail.company_description,
        ogImage: breweryDetail.cover_photo[0].url
      }, external__react__default.a.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: "{\n                                \"@context\": \"http://schema.org\",\n                                \"@type\": \"LocalBusiness\",\n                                \"name\": ".concat(breweryDetail.name, ",\n                                \"telePhone\": ").concat(breweryDetail.phone, ",                               \n                                \"geo\": {\n                                    \"@type\": \"GeoCoordinates\",\n                                    \"latitude\": ").concat(breweryDetail.calendar && breweryDetail.calendar.length > 0 && breweryDetail.calendar[0].latitude, ",\n                                    \"longitude\":  ").concat(breweryDetail.calendar && breweryDetail.calendar.length > 0 && breweryDetail.calendar[0].longtitude, "\n                                },\n                                \"url\": https://gotruckster.com/brewery/").concat(slug, ",\n                                \"logo\":").concat(breweryDetail.logo && breweryDetail.logo.length > 0 && breweryDetail.logo[0].url, ",\n                                \"image\":").concat(breweryDetail.cover_photo && breweryDetail.cover_photo.length > 0 && breweryDetail.cover_photo[0].url, ",\n                                \"aggregateRating\": {\n                                    \"@type\": \"AggregateRating\",\n                                    \"ratingValue\":").concat(breweryDetail.avg_rating || 0, ",\n                                    \"ratingCount\": ").concat(breweryDetail.reviews_summary.total_reviews, "\n                                }}")
        }
      })), external__react__default.a.createElement(breweryDetail_BreweryDetail, BreweryDetailContainer__extends({}, this.state, this.props, {
        onFavoriteChange: function onFavoriteChange(e) {
          return _this2.onFavoriteChange(e);
        },
        handlePostReview: function handlePostReview(e) {
          return _this2.handlePostReview(e);
        },
        handleEditReview: function handleEditReview(e) {
          return _this2.handleEditReview(e);
        }
      }))) : external__react__default.a.createElement(ErrorPage["a" /* default */], {
        status: status
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var req, query, token, breweryDetail;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                token = cookies.get('token');
                breweryDetail = null;

                if (req && req.cookies) {
                  token = req.cookies.token;
                }

                _context.next = 6;
                return Object(global["a" /* getDataInitial */])("consumer/v1/breweries/slug/".concat(query.slug), token);

              case 6:
                breweryDetail = _context.sent;
                return _context.abrupt("return", {
                  breweryDetail: breweryDetail,
                  slug: query.slug
                });

              case 8:
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

  return BreweryDetailContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    isLoadingPostBreweryReview: state.reviewReducer.isLoadingPostBreweryReview,
    isLoadingEditBreweryReview: state.reviewReducer.isLoadingEditBreweryReview,
    isLoadingBreweryDetail: state.breweryReducer.isLoadingBreweryDetail,
    error: state.breweryReducer.error,
    status: state.breweryReducer.status,
    reviews: state.reviewReducer.breweryReviews,
    suggestBrewery: state.breweryReducer.suggestBrewery,
    isLoggedIn: state.authReducer.isLoggedIn
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    toggleShareModal: toggleAction["f" /* toggleShareModal */],
    getBreweryDetail: breweryApi["a" /* getBreweryDetail */],
    editBreweryReview: reviewApi["a" /* editBreweryReview */],
    postBreweryReview: reviewApi["k" /* postBreweryReview */],
    getBreweryReview: reviewApi["c" /* getBreweryReview */],
    changeRoute: deepLinkAction["a" /* changeRoute */],
    getSuggestBrewery: breweryApi["b" /* getSuggestBrewery */],
    markFavoriteBrewery: reviewApi["j" /* markFavoriteBrewery */],
    unmarkFavoriteBrewery: reviewApi["n" /* unmarkFavoriteBrewery */]
  }, dispatch);
}
/* harmony default export */ var breweryDetail_BreweryDetailContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(BreweryDetailContainer_BreweryDetailContainer));
// CONCATENATED MODULE: ./pages/brewery.js

/* harmony default export */ var brewery = __webpack_exports__["default"] = (breweryDetail_BreweryDetailContainer);

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = ".brewery-detail {\n  padding-top: 68px;\n  background: #fff;\n}\n.brewery-detail hr {\n  background: #efefef;\n  height: 1px;\n  border: 0;\n}\n.brewery-detail .detail-container .detail-main-header {\n  height: 480px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  background-position: 50%;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail {\n  top: 330px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 730px;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  position: absolute;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .detail-wrapper {\n  width: 100%;\n  max-width: 789px;\n  padding-right: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .brewery-detail .detail-container .detail-main-header .content-detail .detail-wrapper .name {\n    font-size: 30px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .brewery-detail .detail-container .detail-main-header .content-detail .detail-wrapper .name {\n    font-size: 24px;\n  }\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .hire-button button {\n  width: 353px;\n  height: 48px;\n  background-color: #ffd35e;\n  border-color: #ffd35e;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .hire-button button:hover,\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .hire-button button:focus {\n  border-color: #ffd35e;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section {\n  background: #fff;\n  width: 350px;\n  border-radius: 6px;\n  box-shadow: 0 8px 16px 0 rgba(33, 33, 33, 0.15);\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-header {\n  padding: 16px 23px;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body {\n  padding: 16px 23px;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-sub-total {\n  padding-top: 8px;\n  display: flex;\n  justify-content: space-between;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .order-total {\n  padding-top: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .checkout-button {\n  padding-top: 30px;\n}\n.brewery-detail .detail-container .detail-main-header .content-detail .affix-wrapper .affix-section .order-section .order-body .checkout-button button {\n  width: 100%;\n  height: 48px;\n}\n.brewery-detail .detail-container .detail-main-header .cover {\n  height: 480px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n}\n.brewery-detail .detail-container .detail-main-header .cover .cover-mask {\n  height: 480px;\n  position: absolute;\n  width: 100%;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);\n}\n.brewery-detail .detail-container .body-wrapper {\n  padding-bottom: 50px;\n  max-width: 730px;\n  margin: 0 auto;\n}\n.brewery-detail .detail-container .detail-rate {\n  padding-top: 8px;\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.brewery-detail .detail-container .detail-rate .rate-number {\n  border-radius: 4px;\n  background-color: #ffd35e;\n  padding: 2px 5px;\n}\n.brewery-detail .detail-container .detail-rate .rate-star {\n  padding: 0 8px;\n  line-height: 15px;\n}\n.brewery-detail .detail-container .detail-rate .rate-star i::before {\n  font-size: 16px !important;\n}\n.brewery-detail .detail-container .flex-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.brewery-detail .detail-container .flex-row .tag {\n  padding-bottom: 20px;\n  justify-content: flex-start !important;\n}\n.brewery-detail .detail-container .flex-row .left-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.brewery-detail .detail-container .flex-row .left-row img {\n  width: 24px;\n}\n.brewery-detail .detail-container .detail-time {\n  align-items: center;\n  display: flex;\n  padding-bottom: 24px;\n}\n.brewery-detail .detail-container .detail-time .time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.brewery-detail .detail-container .detail-time .time img {\n  width: 24px;\n  padding-right: 8px;\n}\n.brewery-detail .detail-container .menu-anchor .ant-anchor-wrapper {\n  margin-left: 0px;\n  background-color: #fff;\n  padding: 0;\n  border-bottom: solid 1px #efefef;\n}\n.brewery-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor {\n  display: flex;\n}\n.brewery-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-ink {\n  position: relative;\n}\n.brewery-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-ink span {\n  display: none;\n}\n.brewery-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-link {\n  padding: 20px;\n  font-size: 16px;\n  font-weight: 600;\n  border-bottom: 0;\n}\n.brewery-detail .detail-container .menu-anchor .ant-anchor-wrapper .ant-anchor .ant-anchor-link-active > .ant-anchor-link {\n  border-bottom: solid 1px #f32126;\n}\n.brewery-detail .detail-container .menu-anchor .left-row {\n  flex: 1;\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n}\n.brewery-detail .detail-container .menu-anchor .left-row img,\n.brewery-detail .detail-container .menu-anchor .left-row i {\n  cursor: pointer;\n  width: 24px;\n}\n.brewery-detail .detail-container .menu-content {\n  padding-top: 24px;\n}\n@media only screen and (max-width: 768px) {\n  .brewery-detail .detail-container .menu-content {\n    padding-right: 16px;\n    padding-left: 16px;\n  }\n}\n.brewery-detail .detail-container .menu-content .menu-title {\n  display: flex;\n  justify-content: space-between;\n  padding: 32px 0;\n  padding-top: 12px;\n}\n.brewery-detail .detail-container .menu-content .contact {\n  padding-bottom: 30px;\n}\n.brewery-detail .detail-container .menu-content .contact .location {\n  display: flex;\n  align-items: center;\n}\n.brewery-detail .detail-container .menu-content .contact .location img {\n  width: 24px;\n  padding-right: 8px;\n}\n.brewery-detail .detail-container .menu-content .contact .location span {\n  color: #757575;\n}\n.brewery-detail .detail-container .menu-content .contact .social {\n  display: flex;\n}\n.brewery-detail .detail-container .menu-content .contact .social .image-holder {\n  background: #bdbdbd;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 16px;\n}\n.brewery-detail .detail-container .menu-content .contact .social .image-holder img {\n  width: 16px;\n}\n.brewery-detail .detail-container .menu-content .intro {\n  padding-top: 40px;\n}\n.brewery-detail .detail-container .menu-content .no-schedule {\n  text-align: center;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.brewery-detail .detail-container .menu-content .menu-brewery .menu-container .category-menu {\n  padding-bottom: 16px;\n}\n.brewery-detail .detail-container .menu-content .menu-brewery .food .ant-card {\n  margin-bottom: 25px;\n  border-radius: 6px;\n}\n.brewery-detail .detail-container .menu-content .menu-brewery .food .ant-card .ant-card-body {\n  padding: 16px;\n}\n.brewery-detail .detail-container .menu-content .menu-brewery .food .ant-card .ant-card-body .bref {\n  color: #bdbdbd;\n  padding-bottom: 20px;\n}\n.brewery-detail .detail-container .menu-content .review-brewery {\n  padding-bottom: 20px;\n}\n.brewery-detail .map {\n  position: relative;\n  width: 350px;\n  height: 240px;\n  border-radius: 6px;\n  border: solid 1px #dadada;\n  width: 100%;\n}\n";

/***/ })
/******/ ]);