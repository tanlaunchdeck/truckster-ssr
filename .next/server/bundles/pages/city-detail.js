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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
/* unused harmony export googleApi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return googleClientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return facebookAppID; });
//export const apiUrl = "http://52.14.177.231/"
var apiUrl = "https://test.gotruckster.com/";
var googleApi = "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A";
var googleClientID = "617001021912-4jd9lv4ut3nig7vrchouji9076rjs8pd.apps.googleusercontent.com";
var facebookAppID = "2077048179191099";

/***/ }),

/***/ "./global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getSchedule;
/* harmony export (immutable) */ __webpack_exports__["b"] = getEventTime;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataInitial; });
/* unused harmony export getPageData */
/* unused harmony export getPageDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie__ = __webpack_require__("react-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json__ = __webpack_require__("circular-json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var cookies = new __WEBPACK_IMPORTED_MODULE_2_react_cookie__["Cookies"]();

var https = __webpack_require__("https");

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
    url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + url,
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

/***/ "./pages/city-detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_cityDetail_CityDetailContainer__ = __webpack_require__("./src/components/cityDetail/CityDetailContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_components_cityDetail_CityDetailContainer__["a" /* default */]);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes");

module.exports = routes().add('about').add('help').add('contact').add('privacy').add('user').add('edit').add('nearby').add('search').add('intro').add('trucks').add('truck-owner').add('food-truck-catering').add('success', '/order/:success').add('info-detail', '/info/:slug').add('info', '/info/page/:page').add('pairing', '/pairing/:state/:city').add('events', '/event/:state/:city').add('event', '/event/:slug').add('brewery-detail', '/brewery/:slug').add('brewery').add('brewery-type', '/brewery-type/:value').add('food-trucks').add('truck-detail-redirect', '/truck/:state/:city').add('truck-redirect', '/truck/:state/:city').add('truck', '/food-truck/:slug', 'truck').add('cuisine-redirect', '/cuisine/:value').add('cuisines', '/food-truck/:state/:city/cuisines').add('food-truck', '/food-truck/:state/:city/all').add('city-detail', '/food-truck/:state/:city').add('city-detail-redirect', '/:state/:city').add('cuisine', '/food-truck/:state/:city/:value');

/***/ }),

/***/ "./src/actions/activityAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = requestSearchActivity;
/* harmony export (immutable) */ __webpack_exports__["f"] = searchActivitySuccess;
/* harmony export (immutable) */ __webpack_exports__["e"] = searchActivityError;
/* harmony export (immutable) */ __webpack_exports__["c"] = requestGetActivityDetail;
/* harmony export (immutable) */ __webpack_exports__["b"] = getActivityDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = getActivityDetailError;
/* unused harmony export mountActivity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./src/actions/types.js");
 // Search activity action

function requestSearchActivity(isLoadingSearchActivity) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_45" /* REQUEST_SEARCH_ACTIVITY */],
    isLoadingSearchActivity: isLoadingSearchActivity
  };
}
function searchActivitySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_54" /* SEARCH_ACTIVITY_SUCCESS */],
      response: response
    });
  };
}
function searchActivityError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_53" /* SEARCH_ACTIVITY_ERROR */],
      response: response
    });
  };
} // get activity detail

function requestGetActivityDetail(isLoadingGetActivityDetail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_19" /* REQUEST_GET_ACTIVITY_DETAIL */],
    isLoadingGetActivityDetail: isLoadingGetActivityDetail
  };
}
function getActivityDetailSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["k" /* GET_ACTIVITY_DETAIL_SUCCESS */],
      response: response
    });
  };
}
function getActivityDetailError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["j" /* GET_ACTIVITY_DETAIL_ERROR */],
      response: response
    });
  };
}
function mountActivity() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_3" /* MOUNT_ACTIVITY */]
    });
  };
}

/***/ }),

/***/ "./src/actions/breweryAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = requestSearchBrewery;
/* harmony export (immutable) */ __webpack_exports__["i"] = searchBrewerySuccess;
/* harmony export (immutable) */ __webpack_exports__["h"] = searchBreweryError;
/* harmony export (immutable) */ __webpack_exports__["e"] = requestGetBreweryDetail;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBreweryDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = getBreweryDetailError;
/* unused harmony export mountBrewery */
/* harmony export (immutable) */ __webpack_exports__["f"] = requestGetSuggestBrewery;
/* harmony export (immutable) */ __webpack_exports__["d"] = getSuggestBrewerySuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = getSuggestBreweryError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./src/actions/types.js");

function requestSearchBrewery(isLoadingSearchBrewery) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_46" /* REQUEST_SEARCH_BREWERY */],
    isLoadingSearchBrewery: isLoadingSearchBrewery
  };
}
function searchBrewerySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_56" /* SEARCH_BREWERY_SUCCESS */],
      response: response
    });
  };
}
function searchBreweryError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_55" /* SEARCH_BREWERY_ERROR */],
      response: response
    });
  };
} // Get brewery detail action 

function requestGetBreweryDetail(isLoadingGetBreweryDetail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_21" /* REQUEST_GET_BREWERY_DETAIL */],
    isLoadingGetBreweryDetail: isLoadingGetBreweryDetail
  };
}
function getBreweryDetailSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["o" /* GET_BREWERY_DETAIL_SUCCESS */],
      response: response
    });
  };
}
function getBreweryDetailError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["n" /* GET_BREWERY_DETAIL_ERROR */],
      response: response
    });
  };
}
function mountBrewery() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_4" /* MOUNT_BREWERY */]
    });
  };
}
function requestGetSuggestBrewery(isLoadingGetSuggestBrewery) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_28" /* REQUEST_GET_SUGGEST_BREWERY */],
      isLoadingGetSuggestBrewery: isLoadingGetSuggestBrewery
    });
  };
}
function getSuggestBrewerySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["C" /* GET_SUGGEST_BREWERY_SUCCESS */],
      response: response
    });
  };
}
function getSuggestBreweryError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["B" /* GET_SUGGEST_BREWERY_ERROR */]
    });
  };
}

/***/ }),

/***/ "./src/actions/deepLinkAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = changeRoute;
/* harmony export (immutable) */ __webpack_exports__["b"] = toggleDeepLink;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./src/actions/types.js");
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
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_67" /* TOGGLE_DEEP_LINK */]
    });
  };
}

/***/ }),

/***/ "./src/actions/pairingAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = requestGetPairing;
/* harmony export (immutable) */ __webpack_exports__["d"] = getPairingSuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = getPairingError;
/* unused harmony export requestGetTruckMenu */
/* harmony export (immutable) */ __webpack_exports__["f"] = requestGetPairingDetail;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPairingDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = getPairingDetailError;
/* unused harmony export mountPairing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./src/actions/types.js");
 // Get paring action

function requestGetPairing(isLoadingGetPairing) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_25" /* REQUEST_GET_PAIRING */],
    isLoadingGetPairing: isLoadingGetPairing
  };
}
function getPairingSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["y" /* GET_PAIRING_SUCCESS */],
      response: response
    });
  };
}
function getPairingError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["x" /* GET_PAIRING_ERROR */],
      response: response
    });
  };
} // Get truck menu

function requestGetTruckMenu(isLoadingGetTruckMenu) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_31" /* REQUEST_GET_TRUCK_MENU */],
    isLoadingGetTruckMenu: isLoadingGetTruckMenu
  };
} // Get pairing detail action 

function requestGetPairingDetail(isLoadingGetPairingDetail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_26" /* REQUEST_GET_PAIRING_DETAIL */],
    isLoadingGetPairingDetail: isLoadingGetPairingDetail
  };
}
function getPairingDetailSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["w" /* GET_PAIRING_DETAIL_SUCCESS */],
      response: response
    });
  };
}
function getPairingDetailError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["v" /* GET_PAIRING_DETAIL_ERROR */],
      response: response
    });
  };
}
function mountPairing() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_6" /* MOUNT_PAIRING */]
    });
  };
}

/***/ }),

/***/ "./src/actions/searchAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = requestSearch;
/* harmony export (immutable) */ __webpack_exports__["d"] = searchSuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = searchError;
/* harmony export (immutable) */ __webpack_exports__["a"] = onParamChange;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./src/actions/types.js");

function requestSearch(isLoadingSearch) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_44" /* REQUEST_SEARCH */],
    isLoadingSearch: isLoadingSearch
  };
}
function searchSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_58" /* SEARCH_SUCCESS */],
      response: response
    });
  };
}
function searchError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_57" /* SEARCH_ERROR */],
      response: response
    });
  };
}
function onParamChange(param) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_9" /* ON_PARAM_CHANGE */],
      param: param
    });
  };
}

/***/ }),

/***/ "./src/actions/toggleAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleSignInModal;
/* harmony export (immutable) */ __webpack_exports__["g"] = toggleSignUpModal;
/* harmony export (immutable) */ __webpack_exports__["d"] = toggleForgotModal;
/* harmony export (immutable) */ __webpack_exports__["b"] = toggleErrorSignInPopOver;
/* harmony export (immutable) */ __webpack_exports__["c"] = toggleErrorSignUpPopOver;
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleAnnounceModal;
/* harmony export (immutable) */ __webpack_exports__["e"] = toggleShareModal;
/* unused harmony export toggleCateringModal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./src/actions/types.js");

function toggleSignInModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_72" /* TOGGLE_SIGN_IN_MODAL */]
  };
}
function toggleSignUpModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_73" /* TOGGLE_SIGN_UP_MODAL */]
  };
}
function toggleForgotModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_70" /* TOGGLE_FORGOT_MODAL */]
  };
}
function toggleErrorSignInPopOver() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_68" /* TOGGLE_ERROR_SIGN_IN_POP_OVER */]
  };
}
function toggleErrorSignUpPopOver() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_69" /* TOGGLE_ERROR_SIGN_UP_POP_OVER */]
  };
}
function toggleAnnounceModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_65" /* TOGGLE_ANNOUNCE_MODAL */]
  };
}
function toggleShareModal() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_71" /* TOGGLE_SHARE_MODAL */]
    });
  };
}
function toggleCateringModal() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_66" /* TOGGLE_CATERING_MODAL */]
  };
}

/***/ }),

/***/ "./src/actions/truckAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["s"] = requestSearchTruck;
/* harmony export (immutable) */ __webpack_exports__["u"] = searchTruckSuccess;
/* harmony export (immutable) */ __webpack_exports__["t"] = searchTruckError;
/* harmony export (immutable) */ __webpack_exports__["q"] = requestGetTruckDetail;
/* harmony export (immutable) */ __webpack_exports__["j"] = getTruckDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["i"] = getTruckDetailError;
/* harmony export (immutable) */ __webpack_exports__["r"] = requestGetTruckMenu;
/* harmony export (immutable) */ __webpack_exports__["l"] = getTruckMenuSuccess;
/* harmony export (immutable) */ __webpack_exports__["k"] = getTruckMenuError;
/* unused harmony export mountTruck */
/* harmony export (immutable) */ __webpack_exports__["p"] = requestGetSuggestTruck;
/* harmony export (immutable) */ __webpack_exports__["h"] = getSuggestTruckSuccess;
/* harmony export (immutable) */ __webpack_exports__["g"] = getSuggestTruckError;
/* harmony export (immutable) */ __webpack_exports__["o"] = requestGetRecommendTruck;
/* harmony export (immutable) */ __webpack_exports__["f"] = getRecommendTruckSuccess;
/* harmony export (immutable) */ __webpack_exports__["e"] = getRecommendTruckError;
/* harmony export (immutable) */ __webpack_exports__["n"] = requestGetCuisineList;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCuisineListSuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = getCuisineListError;
/* harmony export (immutable) */ __webpack_exports__["m"] = requestGetAlbumDetail;
/* harmony export (immutable) */ __webpack_exports__["b"] = getAlbumDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = getAlbumDetailError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./src/actions/types.js");
 //Search truck action

function requestSearchTruck(isLoadingSearchTruck) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_47" /* REQUEST_SEARCH_TRUCK */],
    isLoadingSearchTruck: isLoadingSearchTruck
  };
}
function searchTruckSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_60" /* SEARCH_TRUCK_SUCCESS */],
      response: response
    });
  };
}
function searchTruckError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_59" /* SEARCH_TRUCK_ERROR */],
      response: response
    });
  };
} // Get truck detail action 

function requestGetTruckDetail(isLoadingGetTruckDetail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_30" /* REQUEST_GET_TRUCK_DETAIL */],
    isLoadingGetTruckDetail: isLoadingGetTruckDetail
  };
}
function getTruckDetailSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["G" /* GET_TRUCK_DETAIL_SUCCESS */],
      response: response
    });
  };
}
function getTruckDetailError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["F" /* GET_TRUCK_DETAIL_ERROR */],
      response: response
    });
  };
} // Get truck menu

function requestGetTruckMenu(isLoadingGetTruckMenu) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_31" /* REQUEST_GET_TRUCK_MENU */],
    isLoadingGetTruckMenu: isLoadingGetTruckMenu
  };
}
function getTruckMenuSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["I" /* GET_TRUCK_MENU_SUCCESS */],
      response: response
    });
  };
}
function getTruckMenuError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["H" /* GET_TRUCK_MENU_ERROR */],
      response: response
    });
  };
}
function mountTruck() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_7" /* MOUNT_TRUCK */]
    });
  };
}
function requestGetSuggestTruck(isLoadingGetSuggestTruck) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_29" /* REQUEST_GET_SUGGEST_TRUCK */],
      isLoadingGetSuggestTruck: isLoadingGetSuggestTruck
    });
  };
}
function getSuggestTruckSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["E" /* GET_SUGGEST_TRUCK_SUCCESS */],
      response: response
    });
  };
}
function getSuggestTruckError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["D" /* GET_SUGGEST_TRUCK_ERROR */]
    });
  };
}
function requestGetRecommendTruck(isLoadingGetRecommendTruck) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_27" /* REQUEST_GET_RECOMMEND_TRUCK */],
      isLoadingGetRecommendTruck: isLoadingGetRecommendTruck
    });
  };
}
function getRecommendTruckSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["A" /* GET_RECOMMEND_TRUCK_SUCCESS */],
      response: response
    });
  };
}
function getRecommendTruckError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["z" /* GET_RECOMMEND_TRUCK_ERROR */]
    });
  };
}
function requestGetCuisineList(isLoadingGetCuisineList) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_23" /* REQUEST_GET_CUISINE_LIST */],
      isLoadingGetCuisineList: isLoadingGetCuisineList
    });
  };
}
function getCuisineListSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["s" /* GET_CUISINE_LIST_SUCCESS */],
      response: response
    });
  };
}
function getCuisineListError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["r" /* GET_CUISINE_LIST_ERROR */]
    });
  };
}
function requestGetAlbumDetail(isLoadingGetAlbumDetail) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_20" /* REQUEST_GET_ALBUM_DETAIL */],
      isLoadingGetAlbumDetail: isLoadingGetAlbumDetail
    });
  };
}
function getAlbumDetailSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["m" /* GET_ALBUM_DETAIL_SUCCESS */],
      response: response
    });
  };
}
function getAlbumDetailError() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["l" /* GET_ALBUM_DETAIL_ERROR */]
    });
  };
}

/***/ }),

/***/ "./src/actions/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_72", function() { return TOGGLE_SIGN_IN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_73", function() { return TOGGLE_SIGN_UP_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_70", function() { return TOGGLE_FORGOT_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_68", function() { return TOGGLE_ERROR_SIGN_IN_POP_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_69", function() { return TOGGLE_ERROR_SIGN_UP_POP_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_65", function() { return TOGGLE_ANNOUNCE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_71", function() { return TOGGLE_SHARE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_66", function() { return TOGGLE_CATERING_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return REQUEST_GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return GET_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return GET_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return REQUEST_SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_64", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_63", function() { return SIGN_UP_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return REQUEST_SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_62", function() { return SIGN_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_61", function() { return SIGN_IN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return REQUEST_LOGIN_SOCIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return LOGIN_SOCIAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return LOGIN_SOCIAL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return REQUEST_LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return LOG_OUT_ERROR; });
/* unused harmony export LOGOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_52", function() { return REQUEST_UPDATE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_79", function() { return UPDATE_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_78", function() { return UPDATE_PROFILE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return REQUEST_CHANGE_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_PASSWORD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return REQUEST_SEARCH_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_60", function() { return SEARCH_TRUCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_59", function() { return SEARCH_TRUCK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return REQUEST_GET_TRUCK_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_TRUCK_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return GET_TRUCK_DETAIL_ERROR; });
/* unused harmony export CHECK_LOGIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return REQUEST_GET_TRUCK_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return GET_TRUCK_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return GET_TRUCK_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return REQUEST_GET_PAIRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GET_PAIRING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GET_PAIRING_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return REQUEST_GET_TRUCK_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return GET_TRUCK_MENU_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return GET_TRUCK_MENU_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return REQUEST_POST_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return POST_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return POST_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return REQUEST_EDIT_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EDIT_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return EDIT_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return REQUEST_GET_USER_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return GET_USER_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return GET_USER_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return REQUEST_MARK_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return MARK_FAVORITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return MARK_FAVORITE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return REQUEST_UNMARK_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_77", function() { return UNMARK_FAVORITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_76", function() { return UNMARK_FAVORITE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return REQUEST_GET_USER_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return GET_USER_FAVORITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return GET_USER_FAVORITE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return REQUEST_SEARCH_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_54", function() { return SEARCH_ACTIVITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_53", function() { return SEARCH_ACTIVITY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return REQUEST_GET_ACTIVITY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_ACTIVITY_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_ACTIVITY_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return REQUEST_SEARCH_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_56", function() { return SEARCH_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_55", function() { return SEARCH_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return REQUEST_GET_BREWERY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_BREWERY_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_BREWERY_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return MOUNT_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return MOUNT_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return MOUNT_PAIRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return MOUNT_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return REQUEST_GET_PAIRING_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GET_PAIRING_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GET_PAIRING_DETAIL_ERROR; });
/* unused harmony export GET_SEARCH_RESULT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return REQUEST_GET_NEARBY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GET_NEARBY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GET_NEARBY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return MOUNT_NEARBY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return REQUEST_GET_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return REQUEST_EDIT_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EDIT_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EDIT_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return REQUEST_POST_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return POST_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return POST_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return REQUEST_GET_USER_BREWERY_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return GET_USER_BREWERY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return GET_USER_BREWERY_REVIEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGE_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_67", function() { return TOGGLE_DEEP_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return REQUEST_GET_SUGGEST_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return GET_SUGGEST_TRUCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return GET_SUGGEST_TRUCK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return NEXT_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return PREVIOUS_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return REQUEST_GET_RECOMMEND_TRUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return GET_RECOMMEND_TRUCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GET_RECOMMEND_TRUCK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return REQUEST_CATERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CATERING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATERING_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return REQUEST_GET_SUGGEST_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return GET_SUGGEST_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return GET_SUGGEST_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return REQUEST_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_58", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_57", function() { return SEARCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return ON_PARAM_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return REQUEST_MARK_FAVORITE_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return MARK_FAVORITE_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return MARK_FAVORITE_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_51", function() { return REQUEST_UNMARK_FAVORITE_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_75", function() { return UNMARK_FAVORITE_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_74", function() { return UNMARK_FAVORITE_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return REQUEST_GET_USER_FAVORITE_BREWERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return GET_USER_FAVORITE_BREWERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return GET_USER_FAVORITE_BREWERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return REQUEST_GET_CUISINE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_CUISINE_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_CUISINE_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return REQUEST_GET_ALBUM_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_ALBUM_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_ALBUM_DETAIL_SUCCESS; });
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
var GET_CUISINE_LIST_ERROR = 'GET_CUISINE_LIST_ERROR'; //Get album detail

var REQUEST_GET_ALBUM_DETAIL = 'REQUEST_GET_ALBUM_DETAIL';
var GET_ALBUM_DETAIL_ERROR = 'GET_ALBUM_DETAIL_ERROR';
var GET_ALBUM_DETAIL_SUCCESS = 'GET_ALBUM_DETAIL_SUCCESS';

/***/ }),

/***/ "./src/api/activityApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchActivity; });
/* unused harmony export getActivityDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__ = __webpack_require__("./src/actions/activityAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var searchActivity = function searchActivity(isFeature, page) {
  var url = "";

  if (isFeature) {
    url = "?is_featured=true&";
  } else url = "?this_week=true&";

  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["d" /* requestSearchActivity */])(true));
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/consumer/v1/activities' + url + "page=".concat(page),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["f" /* searchActivitySuccess */])(_objectSpread({}, response, {
          isFeature: isFeature
        })));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["e" /* searchActivityError */])(_error));
      }
    });
  };
};
var getActivityDetail = function getActivityDetail(acticityId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["c" /* requestGetActivityDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/consumer/v1/activities/' + acticityId,
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["b" /* getActivityDetailSuccess */])(response));
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["a" /* getActivityDetailError */])(_error2));
      }
    });
  };
};

/***/ }),

/***/ "./src/api/breweryApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchBrewery; });
/* unused harmony export getBreweryDetail */
/* unused harmony export getSuggestBrewery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__ = __webpack_require__("./src/actions/breweryAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("react-cookie");
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
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["g" /* requestSearchBrewery */])(true));
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()({
                  method: 'GET',
                  url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/breweries?".concat(params, "=").concat(value, "&per_page=12&page=").concat(page),
                  headers: {
                    "Accept": "application/json"
                  }
                }).then(function (response) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["i" /* searchBrewerySuccess */])(_objectSpread({}, response.data, {
                    params: params
                  })));
                }).catch(function (error) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["h" /* searchBreweryError */])(error));
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
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["e" /* requestGetBreweryDetail */])(true));
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
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["f" /* requestGetSuggestBrewery */])(true));
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

/***/ "./src/api/pairingApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPairing; });
/* unused harmony export getPairingDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_pairingAction__ = __webpack_require__("./src/actions/pairingAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { notification, Icon } from 'antd'


 // Get pairing api

var getPairing = function getPairing(params, value, page) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_pairingAction__["e" /* requestGetPairing */])(true));
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + "api/consumer/v1/pairings?".concat(params, "=").concat(value, "&sort_by=avg_rating&page=").concat(page, "&per_page=12"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_pairingAction__["d" /* getPairingSuccess */])(_objectSpread({}, response, {
          params: params
        })));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_pairingAction__["c" /* getPairingError */])(_error));
      }
    });
  };
}; // Get pairing detail api

var getPairingDetail = function getPairingDetail(pairingId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_pairingAction__["f" /* requestGetPairingDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + "api/pairings/" + pairingId,
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_pairingAction__["b" /* getPairingDetailSuccess */])(response));
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_pairingAction__["a" /* getPairingDetailError */])(_error2));
      }
    });
  };
};

/***/ }),

/***/ "./src/api/searchApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_searchAction__ = __webpack_require__("./src/actions/searchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
 // import { notification, Icon } from 'antd'


 // Get search api

var search = function search(keyword) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_searchAction__["b" /* requestSearch */])(true));
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + "api/consumer/v1/search?keyword=" + keyword,
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_searchAction__["d" /* searchSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_searchAction__["c" /* searchError */])(_error));
      }
    });
  };
};

/***/ }),

/***/ "./src/api/truckApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchTruck; });
/* unused harmony export getTruckDetail */
/* unused harmony export getTruckMenu */
/* unused harmony export getSuggestTruck */
/* unused harmony export getRecommenedTruck */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCuisineList; });
/* unused harmony export getAlbumDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__ = __webpack_require__("./src/actions/truckAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("react-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var https = __webpack_require__("https"); // import { notification, Icon } from 'antd'





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
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["s" /* requestSearchTruck */])(true));
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()({
                  method: 'GET',
                  url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks?".concat(params, "=").concat(value, "&page=").concat(page),
                  headers: {
                    "Accept": "application/json"
                  }
                }).then(function (response) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["u" /* searchTruckSuccess */])(_objectSpread({}, response.data, {
                    params: params
                  })));
                }).catch(function (error) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["t" /* searchTruckError */])(error));
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
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["q" /* requestGetTruckDetail */])(true));
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
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["j" /* getTruckDetailSuccess */])(response.data));
    }).catch(function (error) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["i" /* getTruckDetailError */])(error));
    });
  };
}; // Get truck menu api 

var getTruckMenu = function getTruckMenu(truckId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["r" /* requestGetTruckMenu */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/foodtrucks/".concat(truckId, "/menus"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["l" /* getTruckMenuSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["k" /* getTruckMenuError */])(_error));
      }
    });
  };
}; // get suggest truck api

var getSuggestTruck = function getSuggestTruck(params) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["p" /* requestGetSuggestTruck */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/".concat(params, "/suggests"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["h" /* getSuggestTruckSuccess */])(response));
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["g" /* getSuggestTruckError */])(_error2));
      }
    });
  };
}; // get caltering recommended truck api

var getRecommenedTruck = function getRecommenedTruck() {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["o" /* requestGetRecommendTruck */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/recommendation-catering",
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["f" /* getRecommendTruckSuccess */])(response));
      },
      error: function error(_error3) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["e" /* getRecommendTruckError */])(_error3));
      }
    });
  };
};
var getCuisineList = function getCuisineList(page) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["n" /* requestGetCuisineList */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/cuisine",
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["d" /* getCuisineListSuccess */])(response));
      },
      error: function error(_error4) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["c" /* getCuisineListError */])(_error4));
      }
    });
  };
};
var getAlbumDetail = function getAlbumDetail(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["m" /* requestGetAlbumDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/".concat(data.truckID, "/album/").concat(data.albumID),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["b" /* getAlbumDetailSuccess */])(response));
      },
      error: function error(_error5) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["a" /* getAlbumDetailError */])(_error5));
      }
    });
  };
};

/***/ }),

/***/ "./src/components/cityDetail/CityDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_section_Section__ = __webpack_require__("./src/components/common/section/Section.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_truckCard_TruckCard__ = __webpack_require__("./src/components/common/truckCard/TruckCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_truckNewCard_TruckNewCard__ = __webpack_require__("./src/components/common/truckNewCard/TruckNewCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_articleCard_ArticleCard__ = __webpack_require__("./src/components/common/articleCard/ArticleCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_pairingCard_PairingCard__ = __webpack_require__("./src/components/common/pairingCard/PairingCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_eventCard_EventCard__ = __webpack_require__("./src/components/common/eventCard/EventCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__ = __webpack_require__("./src/components/common/renderContainer/RenderContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_responsive__ = __webpack_require__("react-responsive");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__ = __webpack_require__("./src/components/common/placeholder/LoadingPlaceHolder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__ = __webpack_require__("./src/components/common/placeholder/Placeholder.js");


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/cityDetail/CityDetail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var imageEvent = '/static/images/image-city-event.svg';
var breweryIcon = '/static/images/brewery-marker-icon.png';
var imageBreweryPlaceholder = "/static/images/image_brewery_placeholder.png";
var civicCard = "/static/images/civic-card.jpg";
var homeImage = "/static/images/denver-city.jpg";
var cuisine = [{
  name: 'Mexican',
  image: '/static/images/cuisines/Mexican.jpg',
  truckNum: 51
}, {
  name: 'BBQ',
  image: '/static/images/cuisines/BBQ.jpg',
  truckNum: 58
}, {
  name: 'American',
  image: '/static/images/cuisines/American.jpg',
  truckNum: 95
}, {
  name: 'Dessert',
  image: '/static/images/cuisines/Dessert.jpg',
  truckNum: 42
}, {
  name: 'Coffee',
  image: '/static/images/cuisines/Coffee.jpg',
  truckNum: 16
}, {
  name: 'Asian',
  image: '/static/images/cuisines/Asian.jpg',
  truckNum: 15
}];
var articles = [{
  title: "Find the Best Taco Food \n        Trucks in Denver",
  image: '/static/images/card-tacos.png',
  detail: "Taco trucks are what kicked off the food truck craze to begin with so it's only natural that there would be plenty to choose from.\n\n        Food trucks tend to offer tacos in all kinds of interesting varieties. That\u2019s not to say that there aren\u2019t any traditional Mexican food trucks either. You can also find foods from other cultures like Venezuelan or Brazilian.\n        \n        They usually offer a variety of favorites like tacos, enchiladas, burritos and more. Vegetarian and vegan options tend to be available as well depending on the food truck.\n        "
}, {
  title: "Experience Multi-Cuisine\n         Food Trucks",
  image: '/static/images/home-image.jpg',
  detail: "If you're looking for something with their own unique twist then you're in luck. The Denver area is home to many different food trucks that blend different types of cuisines or have their own creative spin on a certain type of dish.\n\n        For example, instead of regular french fries you can try different fry dishes like classic poutine, Greek fries, chili fries, and even steak and cheese fries.\n        \n        On the healthier side you'll find some trucks that serve salad bowl dishes with gluten free and vegan options to choose from.\n        "
}, {
  title: "Taste the Flavor of\n        Denver BBQ",
  image: '/static/images/card-bbq.png',
  detail: "In the mood for some mouth-watering BBQ? These and many other food trucks in the area have plenty of smoked meats to choose from.\n\n        Bar-B-Que comes in a variety of types such as Texas style brisket, St. Louis style pork rib, pulled pork and more. Beef ribs are a popular choice as well. Plenty of trucks offer their own spin on BBQ chicken, beans and coleslaw.\n        \n        For something a little different than traditional BBQ, some food trucks offer a blend of Mexican and American. They create blends like BBQ nachos and BBQ mac n\u2019 cheese.\n        "
}, {
  title: 'I Am Searching For a Food Truck Near Me',
  image: '/static/images/card-map.png',
  detail: "Hungry and don\u2019t know where to eat? In a new neighborhood and don\u2019t know what\u2019s nearby? No matter where you are in Denver, Truckster can find you a great food truck. Get something for any time of day or any meal, be it breakfast, lunch, dinner or even dessert. \n        Looking for somewhere to meet your friends? Food trucks create a fun atmosphere for you and your friends to eat and socialize, taking in the 300 days of sunshine that Denver offers. \n        "
}, {
  title: "I Want a Food Truck to \n        Cater my Party",
  image: '/static/images/card-cater.png',
  detail: "Food truck catering is becoming more and more popular. The novelty of having a truck immediately makes your event unique and stand out. It also allows you to serve food wherever your event may be, rural in the mountains, or right at your own home. No on-site kitchen required. \n        Food truck catering is ideal for many different occasions, whether it be a corporate event, wedding, or party with family and friends. Find one you like on Truckster and submit your request through our easy to use form. This makes it effortless for both you and the trucks, allowing you to fully enjoy your event! \n        "
}, {
  title: 'Find Today’s Best Food Truck and Brewery Pairings',
  image: '/static/images/card-alls.png',
  detail: "We\u2019re so lucky in Colorado to have the heart of the craft beer culture right in our backyard. It\u2019s no secret that what makes a good brewery is the food truck parked outside, and what makes a good food truck is the beer that goes with it. \n        Choosing which brewery to visit today? Explore on Truckster all your favorite breweries and their upcoming food truck calendars. Easily plan your Saturday with your family or meeting friends at one of our many awesome micro-breweries in town. \n        "
}];
var events = [{
  link: "https://colorado.ourcommunitynow.com/2018/05/14/dtc-eats-back-food-trucks/",
  image: "https://www.thedenverear.com/wp-content/uploads/2015/07/11403320_832715533486476_306799773388049945_n.png",
  name: "DTC Eats",
  desc: "This lunch takes place in the Denver Tech Center every other Monday from May through September. It features over 15 trucks with a wide range of cuisine types and is the perfect cure for your everyday lunch. Picnic tables are setup nearby to enjoy the Colorado outdoors on your lunchbreak."
}, {
  link: "http://www.ucdenver.edu/about/departments/FoodServices/Pages/Food-Truck-Wednesdays.aspx",
  image: "https://pbs.twimg.com/media/C7ias3MUwAAC2cB.jpg",
  name: "Food Truck Wednesdays at Anschutz Medical Campus",
  desc: "Food Truck Wednesdays serves the medical community and visitors to the Anschutz Medical Campus every week all summer long. A variety of 10 or more food trucks attend each Wednesday, and picnic tables are setup on the campus lawn for you to enjoy."
}, {
  link: "http://www.civiccenterconservancy.org/event-civic-center-eats-2018_88.html",
  image: civicCard,
  name: "Civic Center Eats",
  desc: "The largest gathering of food trucks and gourmet foods in the entire Denver area. Enjoy live music and other activities along with over 80 varieties of food vendors."
}, {
  link: "https://denversartdistrict.org/first-friday/",
  image: "https://static1.squarespace.com/static/598679b4cf81e0278eb708fb/t/59e67c0eb078699478c320a5/1533008031364/20637837_1613853705313913_3592591070002448170_n.jpg",
  name: "First Friday Art Walk on Santa Fe",
  desc: "Attended by thousands year round, the art walk happens every first Friday of the month from 5:30pm-9:30pm. Santa Fe’s Art District spans from 13th to Alameda, with the majority of food trucks parked between 7th Street and 9th Street. Check out hundreds of artists in the galleries and studios that line streets while you take in some local bites from your favorite trucks."
}];

var CityDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(CityDetail, _Component);

  function CityDetail() {
    _classCallCheck(this, CityDetail);

    return _possibleConstructorReturn(this, (CityDetail.__proto__ || Object.getPrototypeOf(CityDetail)).apply(this, arguments));
  }

  _createClass(CityDetail, [{
    key: "renderSmallEventCard",
    value: function renderSmallEventCard(events) {
      return events.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          lg: 6,
          md: 6,
          sm: 12,
          key: index,
          className: "event-card-small-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          href: item.url,
          rel: "nofollow",
          target: "_blank",
          className: "event-card-small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          src: item.image,
          alt: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "event-card-small-detail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "SubheadingBlackLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "Body-1RegularGrayLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, item.description))));
      });
    }
  }, {
    key: "renderOffers",
    value: function renderOffers(offers) {
      var _this = this;

      return offers.map(function (offer, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          onClick: function onClick(e) {
            return _this.props.toggleAnnounceModal();
          },
          key: index,
          className: "offer-card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          style: {
            backgroundImage: "url(".concat(offer.image, ")")
          },
          className: "article overlay image ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "offer-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          }
        }, offer.offerName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: " offer-learn ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, "Learn More >"))));
      });
    }
  }, {
    key: "renderPlaceHolder",
    value: function renderPlaceHolder() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      })));
    } // render truck card 

  }, {
    key: "renderEventCard",
    value: function renderEventCard(events) {
      return events.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          key: index,
          sm: 12,
          xs: 24,
          md: 6,
          lg: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__common_eventCard_EventCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }));
      });
    } // render truck card 

  }, {
    key: "renderTruckCard",
    value: function renderTruckCard(trucks) {
      return trucks.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 8,
          lg: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__common_truckCard_TruckCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          }
        }));
      });
    } // render pairing card 

  }, {
    key: "renderPairingCard",
    value: function renderPairingCard(pairings) {
      return pairings.map(function (item, index) {
        if (index < 6) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 24,
          lg: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__common_pairingCard_PairingCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        }));else return null;
      });
    } // render brewery card 

  }, {
    key: "renderBreweryCard",
    value: function renderBreweryCard(breweries) {
      return breweries.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 8,
          lg: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__common_truckNewCard_TruckNewCard__["a" /* default */], {
          data: {
            url: "/brewery/" + item.slug,
            image: item.cover_photo && item.cover_photo[0] && item.cover_photo[0].thumbnails ? item.cover_photo[0].thumbnails.large.url : breweryIcon,
            logo: item.logo ? item.logo[0].url : imageBreweryPlaceholder,
            name: item.name,
            cuisine: item.breweries_type && [{
              name: item.breweries_type.name
            }],
            rating: parseFloat((Math.round(item.rating * 2) / 2).toFixed(1), 10)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }));
      });
    } //render favorite cuisine

  }, {
    key: "renderCuisine",
    value: function renderCuisine(cuisine) {
      return cuisine.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
          prefetch: true,
          key: index,
          to: "/food-truck/co/denver/".concat(item.name.toLowerCase()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          lg: 4,
          md: 4,
          sm: 6,
          xs: 6,
          className: "cuisine-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "cuisine-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          src: item.image,
          alt: "cuisine-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "Body-2CenterBlack",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "CaptionGreyCenter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }, item.truckNum, "  trucks     "))));
      });
    } //render article

  }, {
    key: "renderArticleCard",
    value: function renderArticleCard(articles) {
      return articles.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          key: index,
          rel: "nofollow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__common_articleCard_ArticleCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          truckFeaturedCity = _props.truckFeaturedCity,
          error = _props.error,
          activitiesWeek = _props.activitiesWeek,
          errorActivity = _props.errorActivity,
          history = _props.history,
          featuredBreweries = _props.featuredBreweries,
          errorBrewery = _props.errorBrewery,
          cityDetail = _props.cityDetail;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "home main-wrapper ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(homeImage, ")")
        },
        className: "home-main-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "content-city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        className: "title DisplayBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, "Discover the Best Denver Food Trucks and Upcoming Events")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "cover-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          paddingTop: 0
        },
        className: "body-content media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_section_Section__["a" /* default */], {
        type: "trucks",
        url: "/food-truck/co/denver/all",
        title: "Featured Food Trucks in Denver, CO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, truckFeaturedCity ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, this.renderTruckCard(truckFeaturedCity)) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_responsive___default.a, {
        key: "loader",
        maxWidth: 768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, function (matches) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__["a" /* default */], {
          itemNum: matches ? 4 : 8,
          key: "loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          }
        });
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_section_Section__["a" /* default */], {
        type: "events",
        url: "/event/co/denver",
        seeall: true,
        title: "What's Happening in Denver?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: errorActivity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, activitiesWeek && activitiesWeek.length > 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, this.renderEventCard(activitiesWeek)) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_responsive___default.a, {
        key: "loader",
        maxWidth: 767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, function (matches) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__["a" /* default */], {
          itemNum: matches ? 1 : 3,
          key: "loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          }
        });
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_section_Section__["a" /* default */], {
        type: "breweries",
        url: "/brewery/co/denver",
        seeall: true,
        title: "Featured Breweries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: errorBrewery,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, featuredBreweries && featuredBreweries.length > 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, this.renderBreweryCard(featuredBreweries)) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_responsive___default.a, {
        key: "loader",
        maxWidth: 768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, function (matches) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__["a" /* default */], {
          itemNum: matches ? 2 : 2,
          key: "loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          }
        });
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
        className: "favorite-cuisine-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        className: "Display-2BlackCenter ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, "Favorite Cuisine in Denver "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        type: "flex",
        justify: "center",
        className: "cuisine-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, this.renderCuisine(cuisine)))), cityDetail && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-section media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-section-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-section--header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        className: "Display-4BlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, "".concat(cityDetail.name, " Food Truck Events & Festivals")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-description Body-2RegularBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, "".concat(cityDetail.description, ". Be sure to go to the "), " ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://itunes.apple.com/us/app/truckster-denver-food-trucks/id1375284993?l=vi&ls=1&mt=8");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, "App Store"), " or ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://play.google.com/store/apps/details?id=com.truckster");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, "Google Play"), " to download Truckster and find all the food truck events happening near you.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: imageEvent,
        alt: "events",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        className: "article__title Display-3BlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, "Some of our Favorite Events:"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        type: "flex",
        justify: "space-between",
        className: "small-events-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, this.renderSmallEventCard(cityDetail.event)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, this.renderArticleCard(cityDetail.feature)))));
    }
  }]);

  return CityDetail;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CityDetail);

/***/ }),

/***/ "./src/components/cityDetail/CityDetailContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_truckApi__ = __webpack_require__("./src/api/truckApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_pairingApi__ = __webpack_require__("./src/api/pairingApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_activityApi__ = __webpack_require__("./src/api/activityApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_breweryApi__ = __webpack_require__("./src/api/breweryApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_searchApi__ = __webpack_require__("./src/api/searchApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_toggleAction__ = __webpack_require__("./src/actions/toggleAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_deepLinkAction__ = __webpack_require__("./src/actions/deepLinkAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_searchAction__ = __webpack_require__("./src/actions/searchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__global__ = __webpack_require__("./global.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CityDetail__ = __webpack_require__("./src/components/cityDetail/CityDetail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data__ = __webpack_require__("./src/components/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__head__ = __webpack_require__("./src/components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cityDetail_less__ = __webpack_require__("./src/components/cityDetail/_cityDetail.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cityDetail_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__cityDetail_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_articleCard_articleCard_less__ = __webpack_require__("./src/components/common/articleCard/_articleCard.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_articleCard_articleCard_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__common_articleCard_articleCard_less__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/cityDetail/CityDetailContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var CityContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(CityContainer, _Component);

  function CityContainer(props) {
    var _this;

    _classCallCheck(this, CityContainer);

    _this = _possibleConstructorReturn(this, (CityContainer.__proto__ || Object.getPrototypeOf(CityContainer)).call(this, props));
    _this.state = {
      visibleAnnounce: false,
      searchValue: "",
      result: [],
      flagSearch: false,
      typing: false,
      typingTimeout: 0
    };
    return _this;
  }

  _createClass(CityContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          searchTruck = _props.searchTruck,
          searchBrewery = _props.searchBrewery,
          changeRoute = _props.changeRoute; // searchActivity(true)

      changeRoute(null);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.truckSearchResult && nextProps.brewerySearchResult) {
        var truckSearch = [],
            brewerySearch = [];
        nextProps.brewerySearchResult.forEach(function (item) {
          brewerySearch.push(_objectSpread({}, item, {
            id: item.id,
            type: "brewery",
            name: item.name,
            cover_photo: item.cover_photo,
            rating: item.rating,
            breweries_type: item.breweries_type
          }));
        });
        nextProps.truckSearchResult.forEach(function (item) {
          truckSearch.push(_objectSpread({}, item, {
            id: item.id,
            type: "truck",
            name: item.name,
            cover_photo: item.cover_photo,
            avg_rating: item.avg_rating
          }));
        });
        var result = this.searchResultCuisine(this.state.searchValue).concat(truckSearch).concat(brewerySearch);
        this.setState({
          result: result
        });

        if (this.state.flagSearch) {
          this.setState({
            flagSearch: false
          });
        }
      }
    }
  }, {
    key: "searchResultCuisine",
    value: function searchResultCuisine(query) {
      var newArr = [];
      __WEBPACK_IMPORTED_MODULE_14__data__["a" /* categories */].forEach(function (item) {
        if (item.name.toLowerCase().indexOf("".concat(query)) > -1) {
          newArr.push(item);
        }
      });
      return newArr;
    }
  }, {
    key: "onSearchValueChange",
    value: function onSearchValueChange(e) {
      var self = this;

      if (self.state.typingTimeout) {
        clearTimeout(self.state.typingTimeout);
      }

      self.props.onParamChange(e);
      self.setState({
        searchValue: e,
        typing: false,
        typingTimeout: setTimeout(function () {
          self.props.search(e);
          self.setState({
            flagSearch: true
          });
        }, 1000)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("sd", this.props);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_18__cityDetail_less___default.a + __WEBPACK_IMPORTED_MODULE_19__common_articleCard_articleCard_less___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__head__["a" /* default */], {
        url: "https://gotruckster.com/food-truck/co/denver",
        title: "Best Denver Food Trucks - Event Schedules & Catering Info",
        description: "Find the Best Food Trucks in Denver, CO near you. View food truck schedules, pairings, menus, reviews, discounts & catering information here!",
        ogImage: "https://www.langan.com/wp-content/uploads/2017/08/Denver.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "canonical",
        href: "https://gotruckster.com/food-truck/co/denver",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__CityDetail__["a" /* default */], _extends({}, this.state, this.props, {
        onSearchValueChange: function onSearchValueChange(e) {
          return _this2.onSearchValueChange(e);
        },
        handleShowAnnounce: function handleShowAnnounce(e) {
          return _this2.handleShowAnnounce(e);
        },
        handleSearchTruck: function handleSearchTruck(e) {
          return _this2.handleSearchTruck(e);
        },
        handleSearchBrewery: function handleSearchBrewery(e) {
          return _this2.handleSearchBrewery(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, query, activitiesWeek, truckFeaturedCity, featuredBreweries, cityDetail, activitiesWeekState;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                activitiesWeek = null, truckFeaturedCity = null, featuredBreweries = null, cityDetail = null;
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_12__global__["a" /* getDataInitial */])("api/consumer/v1/city/slug/".concat(query.city, "?state_short_name=").concat(query.state));

              case 4:
                cityDetail = _context.sent;
                _context.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_12__global__["a" /* getDataInitial */])("api/consumer/v1/activities?is_featured=true");

              case 7:
                activitiesWeek = _context.sent;
                _context.next = 10;
                return Object(__WEBPACK_IMPORTED_MODULE_12__global__["a" /* getDataInitial */])("api/consumer/v1/foodtrucks?is_featured=true");

              case 10:
                truckFeaturedCity = _context.sent;
                _context.next = 13;
                return Object(__WEBPACK_IMPORTED_MODULE_12__global__["a" /* getDataInitial */])("api/consumer/v1/breweries?is_featured=true");

              case 13:
                featuredBreweries = _context.sent;
                activitiesWeekState = [];
                activitiesWeek.data.forEach(function (element) {
                  var timeTemp = "";
                  var events = Object(__WEBPACK_IMPORTED_MODULE_12__global__["b" /* getEventTime */])(element);

                  for (var i = 0; i < events.length; ++i) {
                    if (__WEBPACK_IMPORTED_MODULE_16_moment___default()(events[i], "YYYY-MM-DD h:mm a").unix() > __WEBPACK_IMPORTED_MODULE_16_moment___default()().unix()) {
                      timeTemp = events[i];
                      activitiesWeekState.push(_objectSpread({}, element, {
                        timeDisplay: timeTemp
                      }));
                      break;
                    }
                  }
                });
                activitiesWeekState = __WEBPACK_IMPORTED_MODULE_17_lodash___default.a.orderBy(activitiesWeekState, function (item) {
                  return __WEBPACK_IMPORTED_MODULE_16_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").unix();
                });
                activitiesWeekState = __WEBPACK_IMPORTED_MODULE_17_lodash___default.a.uniqBy(activitiesWeekState, 'name');
                return _context.abrupt("return", {
                  activitiesWeek: activitiesWeekState,
                  truckFeaturedCity: truckFeaturedCity.data ? truckFeaturedCity.data : [],
                  featuredBreweries: featuredBreweries.data,
                  cityDetail: cityDetail,
                  query: query
                });

              case 19:
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

  return CityContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

function mapStateToProps(state) {
  return {
    //featuredBreweries: state.breweryReducer.featuredBreweries,
    errorBrewery: state.breweryReducer.error,
    truckSearchResult: state.truckReducer.truckSearchResult,
    //truckFeaturedCity: state.truckReducer.truckFeaturedCity,
    errorPairing: state.pairingReducer.error,
    error: state.truckReducer.error,
    // activitiesWeek: state.activityReducer.activitiesWeek,
    errorActivity: state.activityReducer.error,
    brewerySearchResult: state.breweryReducer.brewerySearchResult,
    searchResult: state.truckReducer.searchResult //featuredPairings: state.pairingReducer.featuredPairings,

  };
}
function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])({
    onParamChange: __WEBPACK_IMPORTED_MODULE_11__actions_searchAction__["a" /* onParamChange */],
    toggleAnnounceModal: __WEBPACK_IMPORTED_MODULE_9__actions_toggleAction__["a" /* toggleAnnounceModal */],
    searchBrewery: __WEBPACK_IMPORTED_MODULE_7__api_breweryApi__["a" /* searchBrewery */],
    getPairing: __WEBPACK_IMPORTED_MODULE_5__api_pairingApi__["a" /* getPairing */],
    searchTruck: __WEBPACK_IMPORTED_MODULE_4__api_truckApi__["b" /* searchTruck */],
    searchActivity: __WEBPACK_IMPORTED_MODULE_6__api_activityApi__["a" /* searchActivity */],
    search: __WEBPACK_IMPORTED_MODULE_8__api_searchApi__["a" /* search */],
    changeRoute: __WEBPACK_IMPORTED_MODULE_10__actions_deepLinkAction__["a" /* changeRoute */]
  }, dispatch);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(CityContainer));

/***/ }),

/***/ "./src/components/cityDetail/_cityDetail.less":
/***/ (function(module, exports) {

module.exports = ".home {\n  width: 100%;\n}\n.home .home-main-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  background-position: 50%;\n}\n.home .home-main-header .content-city {\n  max-width: 730px;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  position: absolute;\n}\n.home .home-main-header .content-city .title {\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n}\n.home .home-main-header .content-city .search {\n  margin: 20px;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 5px;\n}\n.home .home-main-header .content-city .search .ant-select-selection input {\n  border: 0;\n  box-shadow: none !important;\n}\n.home .home-main-header .content-city .search .ant-select-selection:focus {\n  box-shadow: none !important;\n  border-color: none !important;\n}\n.home .home-main-header .content-city .search .button-find {\n  height: 100%;\n}\n.home .home-main-header .content-city .search .button-find button {\n  border-top-left-radius: 0;\n  height: 100%;\n  border-bottom-left-radius: 0;\n}\n@media only screen and (max-width: 768px) {\n  .home .home-main-header .content-city .search .button-find {\n    display: none;\n  }\n}\n.home .home-main-header .cover {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n  height: 384px;\n}\n.home .home-main-header .cover .cover-mask {\n  height: 384px;\n  position: absolute;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n.home .offer-card {\n  padding: 0 10px;\n  text-align: center;\n}\n.home .offer-card .article {\n  border-radius: 8px;\n  width: 100%;\n  height: 160px;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 10px;\n  position: relative;\n  color: white;\n}\n.home .offer-card .bref {\n  z-index: 10;\n  position: absolute;\n}\n.home .offer-card .content {\n  text-align: left;\n  bottom: 0;\n  padding: 20px;\n  z-index: 10;\n  position: absolute;\n}\n.home .offer-card .image {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.home .offer-card .overlay:before {\n  border-radius: 8px;\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: 0;\n  background-color: rgba(255, 0, 0, 0.4);\n}\n.home .favorite-cuisine-container {\n  padding-top: 22px;\n  padding-bottom: 56px;\n}\n.home .favorite-cuisine-container .cuisine-list {\n  padding-top: 32px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.home .favorite-cuisine-container .cuisine-list .cuisine-item {\n  text-align: center;\n}\n.home .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img {\n  object-fit: cover;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n.home .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img:hover,\n.home .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img:focus,\n.home .favorite-cuisine-container .cuisine-list .cuisine-item .cuisine-image img:active {\n  transform: translateY(-8px);\n}\n.article-section {\n  background: #f7f7f7;\n  padding: 56px 0;\n}\n.article-section--header {\n  display: flex;\n  justify-content: space-around;\n}\n@media only screen and (max-width: 768px) {\n  .article-section--header {\n    flex-direction: column;\n  }\n}\n.article-section .article-section-container {\n  margin: 0 auto;\n  max-width: 1140px;\n}\n.article-section .article-section-container .article-description {\n  max-width: 760px;\n  padding-top: 24px;\n  padding-bottom: 40px;\n}\n.article-section .article-section-container .article__title {\n  padding-bottom: 24px;\n}\n.article-section .article-section-container .event-card-small-container {\n  max-width: 240px;\n  padding-bottom: 16px;\n}\n.article-section .article-section-container .event-card-small-container .event-card-small {\n  padding-top: 16px;\n}\n.article-section .article-section-container .event-card-small-container .event-card-small img {\n  object-fit: cover;\n  height: 160px;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.article-section .article-section-container .event-card-small-container .event-card-small .event-card-small-detail {\n  display: flex;\n  flex-direction: column;\n}\nhr {\n  background-color: #dadada;\n  height: 1px !important;\n  border: 0;\n}\n.slider-list {\n  height: 376px !important;\n}\n.article-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n";

/***/ }),

/***/ "./src/components/common/articleCard/ArticleCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/articleCard/ArticleCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var breweryIcon = '/static/images/brewery-marker-icon.png';
var imageBreweryPlaceholder = "/static/images/image_brewery_placeholder.png";

var ArticleCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ArticleCard, _Component);

  function ArticleCard(props) {
    var _this;

    _classCallCheck(this, ArticleCard);

    _this = _possibleConstructorReturn(this, (ArticleCard.__proto__ || Object.getPrototypeOf(ArticleCard)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(ArticleCard, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "article-card-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "example-2 card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(data.image, ")")
        },
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "title ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, data.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "detail Body-1RegularWhiteLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, data.description))))));
    }
  }]);

  return ArticleCard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ArticleCard);

/***/ }),

/***/ "./src/components/common/articleCard/_articleCard.less":
/***/ (function(module, exports) {

module.exports = ".article-card-container {\n  padding-top: 56px;\n  width: 350px;\n  padding: 0 16px;\n  margin-top: 24px;\n}\n.article-card-container .card .menu-content {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.article-card-container .card .menu-content li {\n  display: inline-block;\n}\n.article-card-container .card .menu-content a {\n  color: #fff;\n}\n.article-card-container .card .menu-content span {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  font-size: 10px;\n  font-weight: 700;\n  font-family: 'Open Sans';\n  transform: translate(-50%, 0);\n}\n.article-card-container .card .wrapper {\n  background-color: #fff;\n  min-height: 440px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.article-card-container .card .wrapper:hover .data {\n  transform: translateY(-280px);\n}\n.article-card-container .card .wrapper .cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(69, 69, 69, 0), #212121);\n}\n.article-card-container .card .data {\n  position: absolute;\n  bottom: -210px;\n  width: 100%;\n  transform: translateY(calc(71px));\n  transition: transform 0.3s;\n}\n.article-card-container .card .data .content {\n  padding: 1em;\n  position: relative;\n  z-index: 1;\n  padding-top: 20px;\n}\n.article-card-container .card .data .content .detail {\n  white-space: pre-line;\n}\n.article-card-container .card .author {\n  font-size: 12px;\n}\n.article-card-container .card .text {\n  height: 70px;\n  margin: 0;\n}\n.article-card-container .card input[type='checkbox'] {\n  display: none;\n}\n.article-card-container .card input[type='checkbox']:checked + .menu-content {\n  transform: translateY(-60px);\n}\n.article-card-container .example-2 .title {\n  font-size: 20px;\n  font-weight: 800;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: -0.08px;\n  color: #ffffff;\n  padding-bottom: 20px;\n}\n.article-card-container .example-2 .wrapper {\n  background: center / cover no-repeat;\n}\n.article-card-container .example-2 .wrapper:hover .menu-content span {\n  transform: translate(-50%, -10px);\n  opacity: 1;\n}\n.article-card-container .example-2 .data {\n  height: 370px;\n  color: #fff;\n  transform: translateY(calc(74px));\n}\n.article-card-container .example-2 .button::after {\n  content: '\\2192';\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  transition: all 0.3s;\n}\n.article-card-container .example-2 .button:hover::after {\n  transform: translate(5px, -50%);\n  opacity: 1;\n}\n";

/***/ }),

/***/ "./src/components/common/eventCard/EventCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/eventCard/EventCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var eventIcon = '/static/images/event-marker-icon.png';

var EventCard =
/*#__PURE__*/
function (_Component) {
  _inherits(EventCard, _Component);

  function EventCard() {
    _classCallCheck(this, EventCard);

    return _possibleConstructorReturn(this, (EventCard.__proto__ || Object.getPrototypeOf(EventCard)).apply(this, arguments));
  }

  _createClass(EventCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          data = _props.data,
          imageWidth = _props.imageWidth,
          carousel = _props.carousel;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        prefetch: true,
        to: "/event/" + data.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        bordered: false,
        style: {
          margin: carousel && "8px"
        },
        className: "event-card-container",
        cover: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "event-image",
          style: {
            backgroundImage: "url(".concat(data.pictures ? data.pictures[0].thumbnails.large.url : eventIcon, ")"),
            backgroundSize: data.pictures ? "" : "50px",
            height: imageWidth && imageWidth
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "overlay-time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "month",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_3_moment___default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, __WEBPACK_IMPORTED_MODULE_3_moment___default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("DD"))))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "meta-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bref ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "Body-2SemiBlackLeft event-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, data.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text CaptionGreyLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_3_moment___default()(data.timeDisplay, "YYYY-MM-DD h:mm a").format("dddd"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "\u2022"), " ", data.address), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "time-event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_3_moment___default()(data.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ", __WEBPACK_IMPORTED_MODULE_3_moment___default()(data.end_time, "YYYY-MM-DD h:mm a").format("h:mm a")))))));
    }
  }]);

  return EventCard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (EventCard);

/***/ }),

/***/ "./src/components/common/pairingCard/PairingCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("antd/lib/modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_rate__ = __webpack_require__("antd/lib/rate");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_rate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_rate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titleLink__ = __webpack_require__("./src/components/common/titleLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global__ = __webpack_require__("./global.js");




var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/pairingCard/PairingCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var homeImage = "/static/images/home-image.jpg";
var pairingMarkerIcon = '/static/images/pairing-marker-icon.png';
var defaultImage = "/static/images/default-image.png";
var eventMarkerIcon = '/static/images/event-marker-icon.png';
var breweryMarkerIcon = '/static/images/brewery-marker-icon.png';
var locationIcon = '/static/images/location-icon.png';
var timeIcon = '/static/images/time-icon.png';
var logo = "/static/images/logo-vertical.png";

var PairingCard =
/*#__PURE__*/
function (_Component) {
  _inherits(PairingCard, _Component);

  function PairingCard(props) {
    var _this;

    _classCallCheck(this, PairingCard);

    _this = _possibleConstructorReturn(this, (PairingCard.__proto__ || Object.getPrototypeOf(PairingCard)).call(this, props));
    _this.state = {
      pairingsWeek: [],
      visiblePairing: false
    };
    return _this;
  } // Visible pairing


  _createClass(PairingCard, [{
    key: "togglePairing",
    value: function togglePairing() {
      this.setState({
        visiblePairing: !this.state.visiblePairing
      });
    } // check pairing in this week

  }, {
    key: "isThisWeek",
    value: function isThisWeek(data) {
      var schedules = [];
      Object(__WEBPACK_IMPORTED_MODULE_8__global__["c" /* getSchedule */])(data).forEach(function (item) {
        if (__WEBPACK_IMPORTED_MODULE_7_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").isSame(new Date(), "week")) schedules.push(item);
      });
      this.setState({
        pairingsWeek: schedules
      });
    }
  }, {
    key: "renderPairingWeek",
    value: function renderPairingWeek(pairingsWeek) {
      pairingsWeek.sort(function (a, b) {
        if (__WEBPACK_IMPORTED_MODULE_7_moment___default()(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() < __WEBPACK_IMPORTED_MODULE_7_moment___default()(b.timeDisplay, "YYYY-MM-DD h:mm a").unix()) return -1;
        if (__WEBPACK_IMPORTED_MODULE_7_moment___default()(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() > __WEBPACK_IMPORTED_MODULE_7_moment___default()(b.timeDisplay, "YYYY-MM-DD h:mm a").unix()) return 1;
        return 0;
      });
      return pairingsWeek.map(function (item, index) {
        if (item.activity && item.brewery === null) {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
            key: index,
            md: 12,
            lg: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__titleLink__["a" /* default */], {
            url: "/event/",
            title: item.activity.name,
            id: item.activity.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "pairing-item-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "pairing-image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            alt: "pairing-icon",
            src: item.activity.pictures ? item.activity.pictures[0].url : defaultImage,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "pairing-info",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: " Body-1SemiBlackLeft pairing-icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            src: eventMarkerIcon,
            alt: "pairing-icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }), item.activity.name), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "CaptionGreyLeft",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            src: locationIcon,
            alt: "icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }), item.address), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "CaptionGreyLeft",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            src: timeIcon,
            alt: "icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }), item.timeDisplay && item.end_time && " ".concat(__WEBPACK_IMPORTED_MODULE_7_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(__WEBPACK_IMPORTED_MODULE_7_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(__WEBPACK_IMPORTED_MODULE_7_moment___default()(item.end_time).format("h:mm a")))))));
        } else {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
            key: index,
            md: 12,
            lg: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
            prefetch: true,
            to: "/brewery/" + item.brewery.slug,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "pairing-item-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "pairing-image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            alt: "pairing-icon",
            src: item.brewery.cover_photo ? item.brewery.cover_photo[0].url : defaultImage,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "pairing-info",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: " Body-1SemiBlackLeft pairing-icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            src: breweryMarkerIcon,
            alt: "brewert-icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          }), item.brewery.name), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "CaptionGreyLeft",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            src: locationIcon,
            alt: "icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }), item.brewery.location), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
            className: "CaptionGreyLeft",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            src: timeIcon,
            alt: "icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          }), item.timeDisplay && item.end_time && " ".concat(__WEBPACK_IMPORTED_MODULE_7_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD"), ", ").concat(__WEBPACK_IMPORTED_MODULE_7_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ").concat(__WEBPACK_IMPORTED_MODULE_7_moment___default()(item.end_time).format("h:mm a")))))));
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isThisWeek(this.props.data.calendar);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var _state = this.state,
          pairingsWeek = _state.pairingsWeek,
          visiblePairing = _state.visiblePairing;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.togglePairing();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "pairing-new-card-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "pairing-image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: data.cover_photo ? data.cover_photo[0].url : homeImage,
        alt: "truck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "pairing-info-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        className: "pairing-logo",
        src: data.logo ? data.logo[0].url : pairingMarkerIcon,
        alt: "logo-pairing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: " Body-1SemiBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, data.name), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "cuisine-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "cuisine-tag-item CaptionGreyLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "Serving at ", pairingsWeek.length, " locations")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_rate___default.a, {
        disabled: true,
        value: parseInt(data.avg_rating, 10),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      })))), pairingsWeek && pairingsWeek.length > 0 ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        style: {
          top: 20
        },
        width: 800,
        closable: false,
        visible: visiblePairing,
        title: "",
        footer: null,
        onCancel: function onCancel() {
          return _this2.togglePairing();
        },
        className: "pairing-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "title-pairing Display-2BlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, " Pairing list of   "), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        prefetch: true,
        to: "/food-truck/" + data.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, data.name))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, " in this week")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, this.renderPairingWeek(pairingsWeek))) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        closable: false,
        visible: visiblePairing,
        title: "",
        footer: null,
        onCancel: function onCancel() {
          return _this2.togglePairing();
        },
        className: "pairing-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "announce-modal-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "logo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        alt: "logo",
        src: logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "Regular-24px-Style message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        prefetch: true,
        to: "/food-truck/" + data.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, data.name)), " has no pairings in this week")))));
    }
  }]);

  return PairingCard;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PairingCard);

/***/ }),

/***/ "./src/components/common/placeholder/LoadingPlaceHolder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__placeholder_Placeholder__ = __webpack_require__("./src/components/common/placeholder/Placeholder.js");


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/placeholder/LoadingPlaceHolder.js";

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
          lg: lg,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__placeholder_Placeholder__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        })));
      }

      return indent;
    }
  }, {
    key: "render",
    value: function render() {
      var itemNum = this.props.itemNum;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.renderPlaceHolder(itemNum || 6));
    }
  }]);

  return LoadingPlaceholder;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LoadingPlaceholder);

/***/ }),

/***/ "./src/components/common/placeholder/Placeholder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/placeholder/Placeholder.js";

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
        className: "timeline-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        hoverable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "timeline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "animated-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "animated-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-first-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-second-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-second-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-third-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-masker content-third-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })))));
    }
  }]);

  return Placeholder;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Placeholder);

/***/ }),

/***/ "./src/components/common/renderContainer/RenderContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/renderContainer/RenderContainer.js";

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
        className: "render-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, error ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "error-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: errorNoResult,
        alt: "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "opps DisplayBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Oops!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Body-2GreyCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, message)) : isEmpty ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, message) : children);
    }
  }]);

  return RenderContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RenderContainer);

/***/ }),

/***/ "./src/components/common/section/Section.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/section/Section.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Section =
/*#__PURE__*/
function (_Component) {
  _inherits(Section, _Component);

  function Section(props) {
    var _this;

    _classCallCheck(this, Section);

    _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          url = _props.url,
          type = _props.type;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        className: "section-block-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "header-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        className: "Display-2BlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, children), url && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "see-all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        prefetch: true,
        to: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "ButtonRedCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        className: "ButtonBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "MORE ", "".concat(type))))));
    }
  }]);

  return Section;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ }),

/***/ "./src/components/common/titleLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/titleLink.js";

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
        prefetch: true,
        to: url + changeTitleAddress(title) + "--" + id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, children)));
    }
  }]);

  return TitleLink;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TitleLink);

/***/ }),

/***/ "./src/components/common/truckCard/TruckCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_rate__ = __webpack_require__("antd/lib/rate");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_rate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_rate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/truckCard/TruckCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var homeImage = "/static/images/home-image.jpg";
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
    key: "renderCoverPhoto",
    value: function renderCoverPhoto(truckDetail) {
      if (truckDetail.cover_photos && truckDetail.cover_photos.length > 0) return truckDetail.cover_photos[truckDetail.cover_photos.length - 1].path;else if (truckDetail.cover_photo) return truckDetail.cover_photo[0].url || truckDetail.cover_photo;else return homeImage;
    }
  }, {
    key: "renderLogo",
    value: function renderLogo(truckDetail) {
      if (truckDetail.self_logo) return truckDetail.self_logo;else if (truckDetail.logo) return truckDetail.logo[0].url || truckDetail.logo;else return truckIcon;
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        prefetch: true,
        to: "/food-truck/".concat(data.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        bordered: false,
        className: "truck-card-container",
        cover: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "truck-cover",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "truck-image",
          style: {
            backgroundImage: "url(".concat(this.renderCoverPhoto(data), ")"),
            backgroundSize: this.renderCoverPhoto(data) ? "cover" : "50px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "overlay-logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          alt: "logo",
          src: this.renderLogo(data),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "meta-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "meta-header-title  Body-2SemiBlackLeft ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, data.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "cuisine-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, data.cuisine.map(function (item, index) {
        if (index === 0) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, item.name, " ");else return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, "\u2022"), "   ", item.name, " ");
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_rate___default.a, {
        disabled: true,
        value: parseInt(data.avg_rating, 10),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })))));
    }
  }]);

  return TruckCard;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TruckCard);

/***/ }),

/***/ "./src/components/common/truckNewCard/TruckNewCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_rate__ = __webpack_require__("antd/lib/rate");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_rate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_rate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/truckNewCard/TruckNewCard.js";

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
        to: data.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-new-card-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: data.image,
        alt: "truck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-info-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "truck-logo",
        src: data.logo,
        alt: "logo-truck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "truck-name Body-1SemiBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, data.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "cuisine-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, data.cuisine && data.cuisine.map(function (item, index) {
        if (index === 0) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, item.name, " ");else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          className: "cuisine-tag-item CaptionGreyLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, "\u2022"), "   ", item.name, " ");
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_rate___default.a, {
        disabled: true,
        value: parseInt(data.rating, 10),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })))));
    }
  }]);

  return TruckCard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TruckCard);

/***/ }),

/***/ "./src/components/data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
/* unused harmony export residences */
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

/***/ "./src/components/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/head.js";



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var NextHead = function NextHead(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.title || ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/city-detail.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/card":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/modal":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/rate":
/***/ (function(module, exports) {

module.exports = require("antd/lib/rate");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "circular-json":
/***/ (function(module, exports) {

module.exports = require("circular-json");

/***/ }),

/***/ "https":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=city-detail.js.map