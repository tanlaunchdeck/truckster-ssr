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
/******/ 	return __webpack_require__(__webpack_require__.s = 181);
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
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 25 */,
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
/* 34 */,
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
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
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
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
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
/* 99 */
/***/ (function(module, exports) {

module.exports = ".catering__container {\n  padding-top: 68px;\n}\n.catering__container .catering__header .catering__background {\n  position: relative;\n  height: 640px;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  color: white;\n  background-size: cover;\n}\n.catering__container .catering__header .catering__background .header__text {\n  text-shadow: 0px 4px 20px #000000;\n}\n.catering__container .catering__header .catering__background .header__content {\n  padding-top: 128px;\n  max-width: 720px;\n  margin: 0 auto;\n  text-align: center;\n}\n.catering__container .catering__header .catering__background .header__content .header__desc {\n  text-shadow: 0px 4px 20px #000000;\n  padding-top: 24px;\n  white-space: pre-line;\n  font-size: 20px;\n  line-height: 1.6;\n}\n.catering__container .catering__header .catering__background .catering__mask {\n  width: 100%;\n  height: 640px;\n  position: absolute;\n  background: #212121;\n  z-index: 2;\n  opacity: 0.7;\n}\n.catering__container .catering__header .catering__step {\n  padding: 0 40px;\n  width: 100%;\n  bottom: -80px;\n  position: absolute;\n  text-align: center;\n}\n@media only screen and (max-width: 999px) {\n  .catering__container .catering__header .catering__step {\n    bottom: -320px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .catering__container .catering__header .catering__step {\n    position: relative;\n    bottom: initial;\n  }\n}\n.catering__container .catering__header .catering__step .step__container {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.catering__container .catering__header .catering__step .step__container .ant-card-body {\n  padding: 0;\n  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.15);\n  border: solid 0.5px #dadada;\n  background-color: #ffffff;\n}\n.catering__container .catering__header .catering__step .step__container .ant-card-body .step-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin: 0 24px;\n}\n.catering__container .catering__header .catering__step .step__container .ant-card-body .step-item .step__num {\n  padding-bottom: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.catering__container .catering__header .catering__step .step__container .ant-card-body .step-item .step__num .num__circle {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: solid 1px #fa393d;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.5;\n  color: #fa393d;\n}\n.catering__container .catering__header .catering__step .step__container .ant-card-body .step-item .item__desc {\n  font-size: 16px;\n  font-weight: bold;\n  color: #212121;\n  line-height: 1.5;\n}\n.catering__container .catering__body {\n  padding-top: 200px;\n  background: #fafafa;\n}\n@media only screen and (max-width: 768px) {\n  .catering__container .catering__body {\n    padding-top: 240px;\n  }\n}\n.catering__container .catering__body .catering__body-section {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.catering__container .catering__body .catering__body-section .catering__section {\n  padding-bottom: 56px;\n}\n@media only screen and (max-width: 768px) {\n  .catering__container .catering__body .catering__body-section .catering__section {\n    padding: 0;\n  }\n}\n.catering__container .catering__body .catering__body-section .catering__section img {\n  object-fit: cover;\n  width: 445px;\n  height: 560px;\n}\n@media only screen and (max-width: 768px) {\n  .catering__container .catering__body .catering__body-section .catering__section img {\n    display: none;\n  }\n}\n.catering__container .catering__body .catering__body-section .auto {\n  margin: auto;\n  margin-top: 100px;\n}\n.catering__container .catering__body .catering__body-section .section__container {\n  max-width: 350px;\n  margin-top: 100px;\n}\n@media only screen and (max-width: 768px) {\n  .catering__container .catering__body .catering__body-section .section__container {\n    margin: auto;\n    margin-top: 100px;\n  }\n}\n.catering__container .catering__body .catering__body-section .section__container .section__title {\n  font-size: 32px;\n  font-weight: 800;\n  line-height: 1.25;\n  letter-spacing: -0.2px;\n  color: #212121;\n  padding-bottom: 24px;\n}\n.catering__container .catering__body .catering__body-section .section__container .section__content {\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.3px;\n  color: #757575;\n  white-space: pre-line;\n}\n.catering__container .catering__body .catering__body-cuisine {\n  background: #fff;\n  padding-top: 80px;\n  text-align: center;\n}\n.catering__container .catering__body .catering__body-cuisine .perfect__sub-header {\n  margin: 0 auto;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: normal;\n  text-align: center;\n  color: #757575;\n  padding-top: 16px;\n  max-width: 570px;\n}\n.catering__container .catering__body .catering__body-cuisine .favorite-cuisine-container {\n  padding-top: 48px;\n}\n.catering__container .catering__body .catering__body-cuisine .favorite-cuisine-container .cuisine-list {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.catering__container .catering__body .catering__body-cuisine .favorite-cuisine-container .cuisine-list .cuisine-item {\n  padding-bottom: 16px;\n  text-align: center;\n}\n.catering__container .catering__body .catering__body-cuisine .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img {\n  object-fit: cover;\n  margin-bottom: 8px;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n.catering__container .catering__body .catering__body-cuisine .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img:hover,\n.catering__container .catering__body .catering__body-cuisine .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img:focus,\n.catering__container .catering__body .catering__body-cuisine .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img:active {\n  transform: translateY(-8px);\n}\n.catering__container .catering__body .catering__body-perfect .perfect__title {\n  padding-top: 80px;\n  white-space: pre-line;\n  padding-bottom: 80px;\n  max-width: 350px;\n  margin: 0 auto;\n}\n.catering__container .catering__body .catering__body-perfect .perfect__width {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.catering__container .catering__body .catering__body-perfect .perfect__width .perfect__item {\n  margin-bottom: 120px;\n  text-align: center;\n  position: relative;\n}\n.catering__container .catering__body .catering__body-perfect .perfect__width .perfect__item .perfect__image {\n  position: absolute;\n  top: -40px;\n  right: 40%;\n}\n.catering__container .catering__body .catering__body-perfect .perfect__width .perfect__item .perfect__image img {\n  width: 80px;\n  margin-bottom: 16px;\n}\n.catering__container .catering__body .catering__body-perfect .perfect__width .perfect__item .perfect__content {\n  padding-top: 68px;\n  height: 236px;\n  background: #fff;\n}\n.catering__container .catering__body .catering__body-perfect .perfect__width .perfect__item .perfect__content .perfect__name {\n  height: 64px;\n  white-space: pre-line;\n  font-size: 24px;\n  font-weight: 800;\n  line-height: 1.33;\n  letter-spacing: -0.1px;\n  color: #212121;\n  margin-bottom: 8px;\n}\n.catering__container .catering__body .catering__body-perfect .perfect__width .perfect__item .perfect__content .perfect__desc {\n  margin: 0 auto;\n  max-width: 285px;\n  font-size: 14px;\n  line-height: 1.43;\n  letter-spacing: 0.2px;\n  text-align: center;\n  color: #757575;\n}\n.catering__container .catering__body .catering__body-recommend {\n  padding: 0 40px;\n  background: #fff;\n}\n.catering__container .catering__body .catering__body-recommend .perfect__title {\n  padding-top: 80px;\n  padding-bottom: 72px;\n  white-space: pre-line;\n}\n.catering__container .catering__body .catering__body-recommend .perfect__width {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.catering__container .catering__body .catering__body-recommend .perfect__width .perfect__item {\n  padding-bottom: 32px;\n}\n.catering__container .catering__body .catering__body-contact .catering__perfect-image {\n  height: 480px;\n  background-position: center;\n}\n.catering__container .catering__body .catering__body-contact .perfect__title {\n  padding-top: 128px;\n}\n.catering__container .catering__body .catering__body-contact .perfect__desc {\n  padding-top: 24px;\n}\n.catering__container .catering__body .catering__body-contact .contact-button {\n  text-align: center;\n  padding-top: 32px;\n}\n.catering__container .catering__body .catering__body-contact .contact-button button {\n  width: 217px;\n  height: 56px;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: 0.5px;\n}\n.catering__container .book-button {\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.catering__container .book-button button {\n  font-size: 14px;\n  font-weight: bold;\n  width: 220px;\n  height: 48px;\n}\n.catering__container .book-button button:first-child {\n  margin-right: 8px;\n}\n@media only screen and (max-width: 450px) {\n  .catering__container .book-button button:first-child {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n}\n.catering__container .explore-button {\n  text-align: center;\n  padding-top: 52px;\n  padding-bottom: 80px;\n}\n.catering__container .explore-button button {\n  text-transform: uppercase;\n  width: 320px;\n  height: 48px;\n  border-radius: 6px;\n  border: solid 1px #dadada;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.71;\n  letter-spacing: 0.5px;\n}\n";

/***/ }),
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(20);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(11);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(8);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(27);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/progress"
var progress_ = __webpack_require__(52);
var progress__default = /*#__PURE__*/__webpack_require__.n(progress_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(19);
var card__default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(183);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: ./src/components/aboutCatering/_aboutCatering.less
var _aboutCatering = __webpack_require__(99);
var _aboutCatering_default = /*#__PURE__*/__webpack_require__.n(_aboutCatering);

// EXTERNAL MODULE: ./src/components/data.js
var data = __webpack_require__(35);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/common/truckCard/TruckCard.js
var TruckCard = __webpack_require__(33);

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

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(39);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./src/components/catering/Catering9.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FormItem = form__default.a.Item;

var Catering9__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          cuisineList = _props.cuisineList,
          handleAddCuisine = _props.handleAddCuisine,
          cuisine = _props.cuisine;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement("div", {
        className: "catering9-container"
      }, external__react__default.a.createElement("div", {
        className: "catering-section-title"
      }, "Choose one or multiple cuisine types"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('cuisine', {})(external__react__default.a.createElement("div", {
        className: "cuisine__button-container"
      }, cuisineList.length > 0 && cuisineList.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: item.id,
          className: "cuisine__button"
        }, external__react__default.a.createElement(button__default.a, {
          type: cuisine.includes(item.id) ? "primary" : "default",
          onClick: function onClick() {
            return handleAddCuisine(item);
          }
        }, item.name));
      })))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/aboutCatering/AboutCatering.js








function AboutCatering__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AboutCatering__typeof = function _typeof(obj) { return typeof obj; }; } else { AboutCatering__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AboutCatering__typeof(obj); }

function AboutCatering__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AboutCatering__possibleConstructorReturn(self, call) { if (call && (AboutCatering__typeof(call) === "object" || typeof call === "function")) { return call; } return AboutCatering__assertThisInitialized(self); }

function AboutCatering__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AboutCatering__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AboutCatering__createClass(Constructor, protoProps, staticProps) { if (protoProps) AboutCatering__defineProperties(Constructor.prototype, protoProps); if (staticProps) AboutCatering__defineProperties(Constructor, staticProps); return Constructor; }

function AboutCatering__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var cateringImage1 = '/static/images/catering-1.jpg';
var cateringImage2 = '/static/images/catering-2.jpg';
var cateringImage3 = '/static/images/catering-3.jpg';
var cateringImage4 = '/static/images/catering-4.jpg';
var cateringImage5 = '/static/images/catering-5.jpg';
var cateringContact = '/static/images/catering-contact.jpg';
var perfectImage1 = '/static/images/perfect-1.png';
var perfectImage2 = '/static/images/perfect-2.png';
var perfectImage3 = '/static/images/perfect-3.png';
var perfectImage4 = '/static/images/perfect-4.png';
var perfectImage5 = '/static/images/perfect-5.png';
var perfectImage6 = '/static/images/perfect-6.png';
var perfects = [{
  name: "Corporate Events \n        and Lunches",
  desc: "Open Houses, Drop-off Lunches, Team Building, Networking Events, Office Buildings, Business Parks\n        ",
  image: perfectImage1
}, {
  name: "Weddings",
  desc: "Engagement Parties, Bridal Showers, Bridal Luncheons, Rehearsal Dinners, Wedding Receptions, Farewell Brunch",
  image: perfectImage2
}, {
  name: "Private Parties",
  desc: "Graduations, Birthdays, Anniversaries, Sweet Sixteen, Bar-Mitzvahs, Baby Showers, Reunions, Holiday",
  image: perfectImage3
}, {
  name: "Campus Catering",
  desc: "Teacher Appreciation, Sporting Events, Student Run Organizations, Campus Lunch, Recruitment Events, Alumni Events",
  image: perfectImage4
}, {
  name: "Large-Scale Events \n        and Festivals",
  desc: "Music Festivals, Food Festivals, Races, Sporting Events, Cultural Events, Conventions, Expos, Conferences",
  image: perfectImage5
}, {
  name: "Neighborhood Events",
  desc: "Block Parties, Farmers Markets, Recreation Leagues, Car Shows, Art Walks, Fundraisers, Community Events",
  image: perfectImage6
}];
var stepCatering = ["What’s the Occasion? Tell us about it so we can cater specifically to you", "Choose from our list of food trucks or let us help you decide", "Fill out the quick and easy catering request form", "Let us handle the logistics. We’ll be in touch within 24 hours"];

var AboutCatering__default =
/*#__PURE__*/
function (_Component) {
  AboutCatering__inherits(_default, _Component);

  AboutCatering__createClass(_default, [{
    key: "handleScrollToElement",
    value: function handleScrollToElement() {
      window.scrollTo(0, this.myRef.current.offsetTop);
    }
  }]);

  function _default(props) {
    var _this;

    AboutCatering__classCallCheck(this, _default);

    _this = AboutCatering__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.myRef = external__react__default.a.createRef();
    return _this;
  }

  AboutCatering__createClass(_default, [{
    key: "renderCateringStep",
    value: function renderCateringStep(step) {
      switch (step) {
        case 1:
          return external__react__default.a.createElement(Catering1["a" /* default */], this.props);

        case 2:
          return external__react__default.a.createElement(Catering9__default, this.props);

        case 3:
          return external__react__default.a.createElement(Catering2["a" /* default */], this.props);

        case 4:
          return external__react__default.a.createElement(Catering3["a" /* default */], this.props);

        case 5:
          return external__react__default.a.createElement(Catering4["a" /* default */], this.props);

        case 6:
          return external__react__default.a.createElement(Catering5["a" /* default */], this.props);

        case 7:
          return external__react__default.a.createElement(Catering6["a" /* default */], this.props);

        case 8:
          return external__react__default.a.createElement(Catering7["a" /* default */], this.props);

        case 9:
          return external__react__default.a.createElement(Catering8["a" /* default */], this.props);

        default:
          return external__react__default.a.createElement(Catering1["a" /* default */], this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          recommendTruck = _props.recommendTruck,
          step = _props.step,
          visibleCatering = _props.visibleCatering,
          toggleCateringModal = _props.toggleCateringModal,
          previousStep = _props.previousStep,
          handleSubmit = _props.handleSubmit,
          handleSubmitForm = _props.handleSubmitForm;
      return external__react__default.a.createElement("div", {
        className: "catering__container"
      }, external__react__default.a.createElement("div", {
        className: "catering__header"
      }, external__react__default.a.createElement("div", {
        className: "catering__background",
        style: {
          backgroundImage: "url(".concat(cateringImage1, ")")
        }
      }, external__react__default.a.createElement("div", {
        className: "header__content"
      }, external__react__default.a.createElement("h1", {
        className: "DisplayWhiteCenter header__text"
      }, "Food Truck Catering  "), external__react__default.a.createElement("h2", {
        className: "LeadRegularWhiteCenter header__desc"
      }, "Make your event memorable, whether it\u2019s a wedding, business lunch, or graduation party. There are so many different kinds of food trucks out there, \n                                how to begin? Truckster makes it easy."), external__react__default.a.createElement("div", {
        className: "book-button"
      }, external__react__default.a.createElement(button__default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this2.handleScrollToElement();
        }
      }, "BOOK A TRUCK"), external__react__default.a.createElement(button__default.a, {
        onClick: toggleCateringModal
      }, "HELP ME CHOOSE A TRUCK"))), external__react__default.a.createElement("div", {
        className: "catering__step"
      }, external__react__default.a.createElement(card__default.a, {
        bordered: false,
        className: "step__container"
      }, external__react__default.a.createElement(row__default.a, null, stepCatering.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          xs: 12,
          sm: 12,
          md: 12,
          lg: 6
        }, external__react__default.a.createElement(card__default.a.Grid, {
          key: index,
          style: {
            width: '100%',
            textAlign: 'center',
            border: 0,
            padding: 0,
            height: '280px'
          }
        }, external__react__default.a.createElement("div", {
          className: "step-item"
        }, external__react__default.a.createElement("div", {
          className: "step__num"
        }, external__react__default.a.createElement("div", {
          className: "num__circle"
        }, index + 1)), external__react__default.a.createElement("div", {
          className: "item__desc"
        }, item))));
      })))))), external__react__default.a.createElement("div", {
        className: "catering__body"
      }, external__react__default.a.createElement("div", {
        className: "catering__body-section"
      }, external__react__default.a.createElement(row__default.a, {
        className: "catering__section"
      }, external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("img", {
        src: cateringImage3,
        alt: "catering"
      })), external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("div", {
        className: "section__container"
      }, external__react__default.a.createElement("h3", {
        className: "section__title"
      }, "Make your Event Unique"), external__react__default.a.createElement("div", {
        className: "section__content"
      }, "Break off from old school catering and try on something fun. No two events should be the same. With over 500 food trucks in Truckster\u2019s network and adding your own personal style, they won\u2019t be. Choose from over 50 different cuisine types to make all your guests happy, including BBQ, Cajun, Mexican, Vegan, and many more. \n\nBooking a truck allows you to serve food wherever your event may be, rural in the mountains, or right at your own home. No on-site kitchen required. Do what you want, where you want. Aren\u2019t food trucks more fun?\n")))), external__react__default.a.createElement(row__default.a, {
        className: "catering__section"
      }, external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("div", {
        className: "section__container auto"
      }, external__react__default.a.createElement("h3", {
        className: "section__title"
      }, "Choose a Style that Best Fits your Event"), external__react__default.a.createElement("div", {
        className: "section__content"
      }, "Choosing a service style helps set the tone for your event, and food trucks offer the flexibility for whatever you envision. A variety of different service styles are possible, such as ordering right from the truck, drop-off catering, buffet, family style or plated dinners.\n\nIf you are looking to host a more formal event, plated dinners will help add to the ambience. For an event that encourages socializing, passed appetizers and food stations work well. Family style can create a community feel. While ordering directly from the truck allows people to eat whenever they\u2019re ready and interaction with the food truck staff can be fun. What do you have in mind?\n"))), external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("img", {
        src: cateringImage5,
        alt: "catering"
      }))), external__react__default.a.createElement(row__default.a, {
        className: "catering__section"
      }, external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("img", {
        src: cateringImage2,
        alt: "catering"
      })), external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("div", {
        className: "section__container"
      }, external__react__default.a.createElement("h3", {
        className: "section__title"
      }, "Set your Budget"), external__react__default.a.createElement("div", {
        className: "section__content"
      }, "Pricing can vary, but is usually based on the number of people attending, your menu selection, the style of service, and the hours of service. For events where the host is paying, it is typical for a food truck to build their proposal on a cost per person basis. \n\nWill you pay for the food or will the attendees? Keep in mind that food trucks frequently require a minimum for a catered event. Even if your attendees pay, it\u2019s possible that you may be responsible to cover the minimum.\n")))), external__react__default.a.createElement(row__default.a, {
        className: "catering__section",
        style: {
          justifyContent: 'flex-end'
        }
      }, external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("div", {
        className: "section__container auto"
      }, external__react__default.a.createElement("h3", {
        className: "section__title"
      }, "Plan Ahead"), external__react__default.a.createElement("div", {
        className: "section__content"
      }, "Food trucks book up fast, especially in the summer and on weekends. Start planning a few months ahead to make sure your favorite trucks are available. \n\nWhen you submit a catering request through Truckster, we reach out to the food trucks for you. Not sure which questions to ask? We\u2019ll help guide you through it. If your first choice wasn\u2019t available, we will recommend other similar trucks that you would love. Let us handle the hassle of the logistics. Planning an event is enough work, we\u2019ve got the food covered! \n"))), external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement("img", {
        src: cateringImage4,
        alt: "catering"
      })))), external__react__default.a.createElement("div", {
        className: "catering__body-cuisine"
      }, external__react__default.a.createElement("h3", {
        className: "Display-3BlackCenter"
      }, "More than 50 different cuisines"), external__react__default.a.createElement("div", {
        className: "perfect__sub-header"
      }, "Have something specific in mind? From Vegan to Venezuelan, we\u2019ve got it. \n                        Take your pick from Truckster\u2019s network of more than 500 food trucks in Colorado. \n"), external__react__default.a.createElement("div", {
        className: "favorite-cuisine-container"
      }, external__react__default.a.createElement(row__default.a, {
        type: "flex",
        justify: "center",
        className: "cuisine-list"
      }, data["a" /* categories */].map(function (item, index) {
        if (index < 12) return external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          key: index,
          to: "/food-truck/co/denver/".concat(item.link)
        }, external__react__default.a.createElement(col__default.a, {
          lg: 4,
          md: 4,
          sm: 6,
          xs: 6,
          className: "cuisine-item"
        }, external__react__default.a.createElement("a", {
          rel: "nofollow"
        }, external__react__default.a.createElement("div", {
          className: "cuisine-image"
        }, external__react__default.a.createElement("img", {
          src: item.image,
          alt: "cuisine-image"
        })), external__react__default.a.createElement("div", {
          className: "Body-2CenterBlack paddingBottom40"
        }, item.name))));else return external__react__default.a.createElement("div", {
          key: index
        });
      }))), external__react__default.a.createElement("div", {
        className: "explore-button"
      }, external__react__default.a.createElement(routes["Link"], {
        to: "/food-truck/co/denver/cuisines"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(button__default.a, null, "Explore All Cuisines"))))), external__react__default.a.createElement("div", {
        className: "catering__body-perfect"
      }, external__react__default.a.createElement("h3", {
        className: "Display-3BlackCenter perfect__title"
      }, "Food Truck Catering is Perfect for"), external__react__default.a.createElement("div", {
        className: "perfect__width"
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 30,
        type: "flex",
        justify: "center"
      }, perfects.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          className: "perfect__item",
          xs: 12,
          sm: 12,
          md: 8,
          lg: 8
        }, external__react__default.a.createElement("div", {
          className: "perfect__image"
        }, external__react__default.a.createElement("img", {
          alt: "perfect",
          src: item.image
        })), external__react__default.a.createElement("div", {
          className: "perfect__content"
        }, external__react__default.a.createElement("div", {
          className: "perfect__name"
        }, "  ", item.name), external__react__default.a.createElement("div", {
          className: "perfect__desc"
        }, item.desc)));
      })))), recommendTruck && external__react__default.a.createElement("div", {
        className: "catering__body-recommend",
        ref: this.myRef
      }, external__react__default.a.createElement("h3", {
        className: "Display-3BlackCenter perfect__title"
      }, "Food Truck Recommendations\nfor your Upcoming Event "), external__react__default.a.createElement("div", {
        className: "perfect__width"
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 30,
        type: "flex",
        justify: "center"
      }, recommendTruck.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          className: "perfect__item",
          xs: 24,
          sm: 12,
          md: 8,
          lg: 8
        }, external__react__default.a.createElement(TruckCard["a" /* default */], {
          data: item
        }));
      })), external__react__default.a.createElement("div", {
        className: "explore-button"
      }, external__react__default.a.createElement(routes["Link"], {
        to: "/food-truck/co/denver/all"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(button__default.a, null, "Explore All Trucks  ")))))), external__react__default.a.createElement("div", {
        className: "catering__body-contact"
      }, external__react__default.a.createElement("div", {
        className: "catering__perfect-image",
        style: {
          backgroundImage: "url(".concat(cateringContact, ")")
        }
      }, external__react__default.a.createElement("div", {
        className: "DisplayWhiteCenter perfect__title"
      }, "Not sure how to get started?"), external__react__default.a.createElement("div", {
        className: "LeadRegularWhiteCenter perfect__desc"
      }, "Reach out to Truckster\u2019s experts to discuss your specific event and let us help you make it easy."), external__react__default.a.createElement("div", {
        className: "contact-button"
      }, external__react__default.a.createElement(routes["Link"], {
        to: "/contact"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(button__default.a, {
        type: "primary",
        className: "ButtonNormalPrimary"
      }, "CONTACT US"))))))), external__react__default.a.createElement(modal__default.a, {
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
        percent: step / 9 * 100,
        showInfo: false
      })), external__react__default.a.createElement("div", {
        className: "catering-header"
      }, external__react__default.a.createElement("div", {
        style: {
          paddingLeft: (step * 44.4).toString() + "px"
        },
        className: "LabelBlackCenter step-stage"
      }, step, "/9")), external__react__default.a.createElement("div", {
        className: "catering-body"
      }, this.renderCateringStep(step)), external__react__default.a.createElement("div", {
        style: {
          justifyContent: step === 1 && "flex-end"
        },
        className: "catering-footer"
      }, step !== 1 && external__react__default.a.createElement(button__default.a, {
        onClick: previousStep
      }, "BACK"), step < 9 ? external__react__default.a.createElement(button__default.a, {
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


// EXTERNAL MODULE: ./src/api/truckApi.js
var truckApi = __webpack_require__(37);

// EXTERNAL MODULE: ./src/components/catering/_catering.less
var _catering = __webpack_require__(95);
var _catering_default = /*#__PURE__*/__webpack_require__.n(_catering);

// EXTERNAL MODULE: ./src/actions/toggleAction.js
var toggleAction = __webpack_require__(31);

// EXTERNAL MODULE: ./src/actions/cateringAction.js
var cateringAction = __webpack_require__(64);

// EXTERNAL MODULE: ./src/api/cateringApi.js
var cateringApi = __webpack_require__(96);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(9);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// CONCATENATED MODULE: ./src/components/aboutCatering/AboutCateringContainer.js


function AboutCateringContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AboutCateringContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { AboutCateringContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AboutCateringContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AboutCateringContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AboutCateringContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AboutCateringContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) AboutCateringContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) AboutCateringContainer__defineProperties(Constructor, staticProps); return Constructor; }

function AboutCateringContainer__possibleConstructorReturn(self, call) { if (call && (AboutCateringContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return AboutCateringContainer__assertThisInitialized(self); }

function AboutCateringContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AboutCateringContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var AboutCateringContainer_cateringImage1 = '/static/images/catering-1.jpg';

var AboutCateringContainer_AboutCateringContainer =
/*#__PURE__*/
function (_Component) {
  AboutCateringContainer__inherits(AboutCateringContainer, _Component);

  function AboutCateringContainer(props) {
    var _this;

    AboutCateringContainer__classCallCheck(this, AboutCateringContainer);

    _this = AboutCateringContainer__possibleConstructorReturn(this, (AboutCateringContainer.__proto__ || Object.getPrototypeOf(AboutCateringContainer)).call(this, props));
    Object.defineProperty(AboutCateringContainer__assertThisInitialized(_this), "handleAddCuisine", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var cuisine = _this.state.cuisine;
        var temp = cuisine;

        if (cuisine.includes(e.id)) {
          temp.splice(cuisine.indexOf(e.id), 1);

          _this.setState({
            cuisine: temp
          });
        } else _this.setState({
          cuisine: cuisine.concat(e.id)
        });
      }
    });
    Object.defineProperty(AboutCateringContainer__assertThisInitialized(_this), "handleSubmitForm", {
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
            start_time: external__moment__default()(cateringData.eventDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + " " + external__moment__default()(cateringData.start_time, 'HH:mm:s').format('HH:mm:s'),
            end_time: external__moment__default()(cateringData.eventDate).format('YYYY-MM-DD') + " " + external__moment__default()(cateringData.end_time, 'HH:mm:s').format('HH:mm:s'),
            cuisine: _this.state.cuisine.toString(),
            comment: values.comment
          }));
        });
      }
    });
    Object.defineProperty(AboutCateringContainer__assertThisInitialized(_this), "onOccasionChange", {
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
    Object.defineProperty(AboutCateringContainer__assertThisInitialized(_this), "onPreviousStep", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.previousStep();
      }
    });
    Object.defineProperty(AboutCateringContainer__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props2 = _this.props,
            form = _this$props2.form,
            nextStep = _this$props2.nextStep;
        e.preventDefault();
        form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            nextStep(values);
          }
        });
      }
    });
    _this.state = {
      hasMore: true,
      occasion: "",
      cuisine: []
    };
    return _this;
  }

  AboutCateringContainer__createClass(AboutCateringContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var getRecommenedTruck = this.props.getRecommenedTruck;
      getRecommenedTruck();
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _aboutCatering_default.a + _catering_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: AboutCateringContainer_cateringImage1,
        url: "https://gotruckster.com/catering",
        title: "Food Truck Catering - Great for Weddings, Birthday Parties & More",
        description: "Book a food truck here for next special event! Search by cuisine type, choose from a large list of trucks & submit a catering request."
      }), external__react__default.a.createElement(AboutCatering__default, _extends({
        handleSubmit: this.handleSubmit,
        handleSubmitForm: this.handleSubmitForm,
        onOccasionChange: this.onOccasionChange,
        onPreviousStep: this.onPreviousStep,
        handleAddCuisine: this.handleAddCuisine
      }, this.state, this.props)));
    }
  }]);

  return AboutCateringContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    recommendTruck: state.truckReducer.recommendTruck,
    step: state.cateringReducer.step,
    visibleCatering: state.toggleReducer.visibleCatering,
    cateringData: state.cateringReducer.cateringData,
    cuisineList: state.truckReducer.cuisineList
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    getRecommenedTruck: truckApi["b" /* getRecommenedTruck */],
    nextStep: cateringAction["c" /* nextStep */],
    previousStep: cateringAction["d" /* previousStep */],
    toggleCateringModal: toggleAction["b" /* toggleCateringModal */],
    catering: cateringApi["a" /* catering */]
  }, dispatch);
}
/* harmony default export */ var aboutCatering_AboutCateringContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(AboutCateringContainer_AboutCateringContainer)));
// CONCATENATED MODULE: ./pages/food-truck-catering.js

/* harmony default export */ var food_truck_catering = __webpack_exports__["default"] = (aboutCatering_AboutCateringContainer);

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })
/******/ ]);