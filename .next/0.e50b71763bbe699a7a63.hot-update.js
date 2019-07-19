webpackHotUpdate(0,{

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
/* unused harmony export getSchedule */
/* harmony export (immutable) */ __webpack_exports__["b"] = getEventTime;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataInitial; });
/* unused harmony export getPageData */
/* unused harmony export getPageDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json__ = __webpack_require__("./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var cookies = new __WEBPACK_IMPORTED_MODULE_2_react_cookie__["Cookies"]();

var https = __webpack_require__("./node_modules/https-browserify/index.js");

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

/***/ "./node_modules/antd/lib/col/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Col;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ }),

/***/ "./src/actions/deepLinkAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export changeRoute */
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleDeepLink;
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

/***/ "./src/api/authApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginSocial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__ = __webpack_require__("./src/actions/authAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__ = __webpack_require__("./src/actions/toggleAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_cookie__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var cookies = new __WEBPACK_IMPORTED_MODULE_4_react_cookie__["Cookies"](); // Sign Up api

var signUp = function signUp(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["i" /* requestSignUp */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/register',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["m" /* signUpSuccess */])(response));
        cookies.set('token', response.token, {
          path: '/'
        });
        window.location.replace("/");
      },
      error: function error(_error) {
        if (_error.responseJSON.errors.email) dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["l" /* signUpError */])(_objectSpread({}, _error, {
          status: 404
        })));else dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["l" /* signUpError */])(_objectSpread({}, _error, {
          status: 422
        })));
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__["c" /* toggleErrorSignUpPopOver */])());
      }
    });
  };
}; // Sign In api

var signIn = function signIn(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["h" /* requestSignIn */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/login',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__["f" /* toggleSignInModal */])());
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["k" /* signInSuccess */])(response));
        cookies.set('token', response.token, {
          path: '/'
        });
        window.location.replace("/");
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["j" /* signInError */])(_error2));
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__["b" /* toggleErrorSignInPopOver */])());
      }
    });
  };
}; // Log out api

var logOut = function logOut() {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["f" /* requestLogOut */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/user/show',
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        cookies.remove('token', {
          path: '/'
        });
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["c" /* logOutSuccess */])());
        window.location.replace("/");
      },
      error: function error(_error3) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["b" /* logOutError */])(_error3));
      }
    });
  };
}; // Login social api

var loginSocial = function loginSocial(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["g" /* requestLoginSocial */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/social-login/' + data.provider,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        token: data.token
      }),
      success: function success(response, status, xhr) {
        cookies.set('token', response.token, {
          path: '/'
        });
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["e" /* loginSocialSuccess */])(response));
        window.location.replace("/");
      },
      error: function error(_error4) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["d" /* loginSocialError */])(_error4));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__ = __webpack_require__("./src/actions/breweryAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
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

/***/ "./src/api/profileApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });
/* unused harmony export updateProfile */
/* unused harmony export changePassword */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__ = __webpack_require__("./node_modules/antd/lib/notification/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__ = __webpack_require__("./src/actions/profileAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__("./config.js");


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/api/profileApi.js";






var cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie__["Cookies"](); // Get user information

var getUser = function getUser() {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["f" /* requestGetUser */])(true));
    __WEBPACK_IMPORTED_MODULE_6_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* apiUrl */] + 'api/user/show',
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["d" /* getUserSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["c" /* getUserError */])(_error));
      }
    });
  };
}; // Update user information

var updateProfile = function updateProfile(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["g" /* requestUpdateProfile */])(true));
    var form = new FormData();
    form.append('name', data.name);
    form.append('phone', data.phone);
    form.append('gender', data.gender);
    form.append('birthday', data.birthday);
    form.append('_method', "PUT");
    if (data.avatar) form.append('avatar', data.avatar);
    __WEBPACK_IMPORTED_MODULE_4_axios___default()({
      method: 'post',
      url: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* apiUrl */] + 'api/user',
      data: form,
      headers: {
        'Authorization': "Bearer " + cookies.get('token', {
          doNotParse: true
        }),
        'Content-Type': 'multipart/form-data',
        "Accept": "application/json"
      }
    }).then(function (response) {
      //handle success
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["i" /* updateProfileSuccess */])(response.data));

      __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
        message: 'Success',
        description: "Successfully updated profile",
        icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
          type: "check-circle-o",
          style: {
            color: 'rgb(76, 218, 100)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        })
      });
    }).catch(function (response) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["h" /* updateProfileError */])(response));

      __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
        message: 'Opps!',
        description: "Can not update profile",
        icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
          type: "close-circle",
          style: {
            color: '#f32126'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        })
      });
    });
  };
}; //Change user password 

var changePassword = function changePassword(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["e" /* requestChangePassword */])(true));
    __WEBPACK_IMPORTED_MODULE_6_jquery___default.a.ajax({
      type: 'PATCH',
      url: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* apiUrl */] + 'api/user',
      headers: {
        "Accept": "application/json"
      },
      data: data,
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["b" /* changePasswordSuccess */])(response));

        __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
          message: 'Success',
          description: "Successfully updated new password",
          icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          })
        });
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["a" /* changePasswordError */])(_error2));

        __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
          message: 'Opps!',
          description: "Can not update password",
          icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
            type: "close-circle",
            style: {
              color: '#f32126'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          })
        });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__ = __webpack_require__("./src/actions/truckAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var https = __webpack_require__("./node_modules/https-browserify/index.js"); // import { notification, Icon } from 'antd'





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

/***/ "./src/components/footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_js__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes_js__);


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/footer/Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var cover = "/static/images/footer-cover.png";
var googlePlay = "/static/images/google-play.png";
var appStore = "/static/images/app-store.png";
var truck = "/static/images/footer-truck.png";
var facebook = "/static/images/facebook-icon.png";
var google = "/static/images/google-icon.png";
var instagram = "/static/images/instagram-icon.png";
var youtube = "/static/images/youtube-icon.png";
var logoApp = "/static/images/logo-app.png";
var logo = "/static/images/logo-vertical.png";

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var toggleAnnounceModal = this.props.toggleAnnounceModal;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
        className: "footer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        className: "download",
        style: {
          backgroundImage: "url(".concat(cover, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        lg: 12,
        md: 12,
        className: "store",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "logo",
        src: logoApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        className: "Display-2BlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Download the app"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        gutter: 16,
        className: "store-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://itunes.apple.com/us/app/truckster-denver-food-trucks/id1375284993?ls=1&mt=8");
        },
        className: "image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "Alternative text",
        src: appStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://play.google.com/store/apps/details?id=com.truckster");
        },
        className: "image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "Alternative text",
        src: googlePlay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        lg: 12,
        md: 12,
        className: "truck-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "Alternative text",
        src: truck,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        type: "flex",
        justify: "space-between",
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        md: 4,
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        className: "SubheadingBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "About us")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/privacy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Privacy & Terms")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Help")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Blog"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        md: 4,
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        className: "SubheadingBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Food trucks"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/food-truck/co/denver/all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Find trucks")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/food-truck/co/denver/cuisines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Cuisine")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/event/co/denver",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Events"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        md: 4,
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        className: "SubheadingBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Vendor"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://itunes.apple.com/vn/app/truckster-vendor/id1375287755?mt=8&fbclid=IwAR1WMhekkYtGr1w3Qeq2Qzp9rFSkcgzCGoSasEKrK_e7b2MGZfYUgE2kpVo",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Vendor login"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "mailto:info@gotruckster.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Add my truck"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes_js__["Link"], {
        prefetch: true,
        to: "/truck-owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Food truck Owner"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        xs: 24,
        sm: 24,
        md: 5,
        className: "social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "Logo app",
        src: logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://www.facebook.com/GoTruckster/");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "  ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "Alternative text",
        src: facebook,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://www.instagram.com/gotruckster/");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "   ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "Alternative text",
        src: instagram,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "bref CaptionGreyCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "2018 \xA9 Truckster Inc. All Rights Reserved."));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./src/components/footer/FooterContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./src/components/footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DownloadApp__ = __webpack_require__("./src/components/footer/DownloadApp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_device_detect__ = __webpack_require__("./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_device_detect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_device_detect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_toggleAction__ = __webpack_require__("./src/actions/toggleAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_deepLinkAction__ = __webpack_require__("./src/actions/deepLinkAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_less__ = __webpack_require__("./src/components/footer/_footer.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__footer_less__);
var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/footer/FooterContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var FooterContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(FooterContainer, _Component);

  function FooterContainer(props) {
    var _this;

    _classCallCheck(this, FooterContainer);

    _this = _possibleConstructorReturn(this, (FooterContainer.__proto__ || Object.getPrototypeOf(FooterContainer)).call(this, props));
    _this.state = {
      isDownloadVisible: true
    };
    return _this;
  }

  _createClass(FooterContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          router = _props.router,
          toggleDeepLink = _props.toggleDeepLink,
          paramsDeepLink = _props.paramsDeepLink,
          visibleDeepLink = _props.visibleDeepLink;
      return router.pathname.includes("/event") || router.pathname.includes("/profile") || router.pathname.includes("/pairing") || router.pathname.includes("/nearby") || router.pathname.includes("/user") || router.pathname.includes("/success") || router.pathname.includes("/activities") ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_9__footer_less___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], _extends({}, this.state, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react_device_detect__["isMobile"] && visibleDeepLink && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DownloadApp__["a" /* default */], {
        paramsDeepLink: paramsDeepLink,
        toggleDeepLink: toggleDeepLink,
        isIOS: __WEBPACK_IMPORTED_MODULE_5_react_device_detect__["isIOS"],
        isAndroid: __WEBPACK_IMPORTED_MODULE_5_react_device_detect__["isAndroid"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }));
    }
  }]);

  return FooterContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state) {
  3;
  return {
    visibleDeepLink: state.deepLinkReducer.visibleDeepLink,
    paramsDeepLink: state.deepLinkReducer.params
  };
}
function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({
    toggleAnnounceModal: __WEBPACK_IMPORTED_MODULE_6__actions_toggleAction__["a" /* toggleAnnounceModal */],
    toggleDeepLink: __WEBPACK_IMPORTED_MODULE_7__actions_deepLinkAction__["a" /* toggleDeepLink */]
  }, dispatch);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(FooterContainer)));

/***/ }),

/***/ "./src/components/forgot/ForgotModal.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("./node_modules/antd/lib/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);






var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/forgot/ForgotModal.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var FormItem = __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.Item;
var backIcon = '/static/images/back-icon.png';
var mailIcon = '/static/images/mail-icon.png';

var ForgotModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ForgotModal, _React$Component);

  function ForgotModal() {
    _classCallCheck(this, ForgotModal);

    return _possibleConstructorReturn(this, (ForgotModal.__proto__ || Object.getPrototypeOf(ForgotModal)).apply(this, arguments));
  }

  _createClass(ForgotModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          toggleSignInModal = _props.toggleSignInModal,
          toggleForgotModal = _props.toggleForgotModal,
          visibleForgot = _props.visibleForgot;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        width: 540,
        closable: false,
        visible: visibleForgot,
        title: "",
        footer: null,
        onCancel: toggleForgotModal,
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        className: "forgot-title Display-2BlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Forgot your password?"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        className: "bref Body1RegularGrayLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Enter the email address associated with your account, and we\u2019ll email you a link to reset your password."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        style: {
          marginTop: 0
        },
        className: "form-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: "It not a valid email address"
        }, {
          required: true,
          message: "Please enter your email"
        }]
      })(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a, {
        suffix: __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "email",
          src: mailIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }),
        placeholder: "Email Address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        type: "flex",
        justify: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
        span: 10,
        className: "back-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("img", {
        alt: "back",
        src: backIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", {
        className: "ButtonGreyLeft",
        onClick: toggleSignInModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "BACK TO LOGIN")), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "   ", __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        className: "button-container email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_button___default.a, {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        className: "ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, " RESET PASSWORD")))))));
    }
  }]);

  return ForgotModal;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ForgotModal);

/***/ }),

/***/ "./src/components/header/HeaderContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_notification__ = __webpack_require__("./node_modules/antd/lib/notification/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__("./src/components/header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_announceModal_AnnounceModal__ = __webpack_require__("./src/components/common/announceModal/AnnounceModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_shareModal_ShareModal__ = __webpack_require__("./src/components/common/shareModal/ShareModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__ = __webpack_require__("./src/actions/toggleAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signIn_SignInModalContainer__ = __webpack_require__("./src/components/signIn/SignInModalContainer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signUp_SignUpModalContainer__ = __webpack_require__("./src/components/signUp/SignUpModalContainer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgot_ForgotModalContainer__ = __webpack_require__("./src/components/forgot/ForgotModalContainer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_truckApi__ = __webpack_require__("./src/api/truckApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_breweryApi__ = __webpack_require__("./src/api/breweryApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_searchApi__ = __webpack_require__("./src/api/searchApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__api_authApi__ = __webpack_require__("./src/api/authApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data__ = __webpack_require__("./src/components/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions_searchAction__ = __webpack_require__("./src/actions/searchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions_authAction__ = __webpack_require__("./src/actions/authAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_less__ = __webpack_require__("./src/components/header/_header.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__header_less__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/header/HeaderContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var HeaderContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderContainer, _Component);

  function HeaderContainer(props) {
    var _this;

    _classCallCheck(this, HeaderContainer);

    _this = _possibleConstructorReturn(this, (HeaderContainer.__proto__ || Object.getPrototypeOf(HeaderContainer)).call(this, props));
    _this.state = {
      visibleDrawer: false,
      searchValue: "",
      result: [],
      flagSearch: false,
      typing: false,
      typingTimeout: 0
    };
    return _this;
  }

  _createClass(HeaderContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          getCuisineList = _props.getCuisineList,
          checkLogin = _props.checkLogin;
      getCuisineList();
      checkLogin();

      __WEBPACK_IMPORTED_MODULE_0_antd_lib_notification___default.a.config({
        placement: 'bottomRight',
        duration: 3
      });
    }
  }, {
    key: "handleOpenMenu",
    value: function handleOpenMenu() {
      this.setState({
        visibleDrawer: !this.state.visibleDrawer
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

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
            breweries_type: item.breweries_type,
            location: item.location,
            logo: item.logo
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
        if (nextProps.brewerySearchResult.length === 0) brewerySearch = [];
        if (nextProps.truckSearchResult.length === 0) truckSearch = [];
        var result = this.searchResultCuisine(this.state.searchValue).concat(truckSearch).concat(brewerySearch);
        this.setState({
          result: result
        });

        if (this.state.flagSearch) {
          setTimeout(function () {
            _this2.setState({
              flagSearch: false
            });
          }, 1000);
        }
      }
    }
  }, {
    key: "searchResultCuisine",
    value: function searchResultCuisine(query) {
      var newArr = [];
      __WEBPACK_IMPORTED_MODULE_15__data__["a" /* categories */].forEach(function (item) {
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
        }, 500)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_18__header_less___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], _extends({}, this.state, this.props, {
        onSearchValueChange: function onSearchValueChange(e) {
          return _this3.onSearchValueChange(e);
        },
        handleOpenMenu: function handleOpenMenu(e) {
          return _this3.handleOpenMenu(e);
        },
        handleSearchTruck: function handleSearchTruck(e) {
          return _this3.handleSearchTruck(e);
        },
        handleSearchBrewery: function handleSearchBrewery(e) {
          return _this3.handleSearchBrewery(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__signIn_SignInModalContainer__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__signUp_SignUpModalContainer__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__forgot_ForgotModalContainer__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__common_announceModal_AnnounceModal__["a" /* default */], {
        message: "This feature will be available soon.                               \n                                We are currently hard at work on selected feature. It will be available as soon as possible.",
        visible: this.props.visibleAnnounce,
        handleCancel: function handleCancel(e) {
          return _this3.props.toggleAnnounceModal(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__common_shareModal_ShareModal__["a" /* default */], {
        url: this.props.url,
        visible: this.props.visibleShare,
        handleCancel: function handleCancel(e) {
          return _this3.props.toggleShareModal(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }));
    }
  }]);

  return HeaderContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

function mapStateToProps(state) {
  return {
    url: state.toggleReducer.url,
    statusText: state.toggleReducer.statusText,
    visibleAnnounce: state.toggleReducer.visibleAnnounce,
    openError: state.toggleReducer.openError,
    visibleShare: state.toggleReducer.visibleShare,
    visibleSignIn: state.toggleReducer.visibleSignIn,
    visibleSignUp: state.toggleReducer.visibleSignUp,
    visibleForgot: state.toggleReducer.visibleForgot,
    visibleErrorSignInPopOver: state.toggleReducer.visibleErrorSignInPopOver,
    visibleErrorSignUpPopOver: state.toggleReducer.visibleErrorSignUpPopOver,
    isLoadingSignUp: state.authReducer.isLoadingSignUp,
    isLoadingSignIn: state.authReducer.isLoadingSignIn,
    isLoggedIn: state.authReducer.isLoggedIn,
    messageSignIn: state.authReducer.messageSignIn,
    statusSignIn: state.authReducer.statusSignIn,
    messageSignUp: state.authReducer.messageSignUp,
    statusSignUp: state.authReducer.statusSignUp,
    isLoadingGetUser: state.profileReducer.isLoadingGetUser,
    userData: state.profileReducer.userData,
    truckSearchResult: state.truckReducer.truckSearchResult,
    brewerySearchResult: state.breweryReducer.brewerySearchResult
  };
}
function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])({
    getCuisineList: __WEBPACK_IMPORTED_MODULE_11__api_truckApi__["a" /* getCuisineList */],
    onParamChange: __WEBPACK_IMPORTED_MODULE_16__actions_searchAction__["a" /* onParamChange */],
    toggleShareModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["e" /* toggleShareModal */],
    toggleAnnounceModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["a" /* toggleAnnounceModal */],
    toggleSignInModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["f" /* toggleSignInModal */],
    toggleSignUpModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["g" /* toggleSignUpModal */],
    toggleForgotModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["d" /* toggleForgotModal */],
    signIn: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["c" /* signIn */],
    signUp: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["d" /* signUp */],
    logOut: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["a" /* logOut */],
    loginSocial: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["b" /* loginSocial */],
    searchTruck: __WEBPACK_IMPORTED_MODULE_11__api_truckApi__["b" /* searchTruck */],
    searchBrewery: __WEBPACK_IMPORTED_MODULE_12__api_breweryApi__["a" /* searchBrewery */],
    checkLogin: __WEBPACK_IMPORTED_MODULE_17__actions_authAction__["a" /* checkLogin */],
    search: __WEBPACK_IMPORTED_MODULE_13__api_searchApi__["a" /* search */]
  }, dispatch);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(HeaderContainer));

/***/ }),

/***/ "./src/components/signIn/SignInModal.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("./node_modules/antd/lib/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_popover__ = __webpack_require__("./node_modules/antd/lib/popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_facebook_login__ = __webpack_require__("./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_facebook_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_facebook_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_google_login__ = __webpack_require__("./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_google_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_google_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__("./config.js");





var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/signIn/SignInModal.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FormItem = __WEBPACK_IMPORTED_MODULE_4_antd_lib_form___default.a.Item;
var mailIcon = '/static/images/mail-icon.png';
var lockIcon = '/static/images/lock-icon.png';
var facebookIcon = '/static/images/facebook-icon.svg';
var googleIcon = '/static/images/google-icon.svg';

var popOver = function popOver(messageArray) {
  return messageArray.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, item);
  });
};

var SignInModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignInModal, _React$Component);

  function SignInModal() {
    _classCallCheck(this, SignInModal);

    return _possibleConstructorReturn(this, (SignInModal.__proto__ || Object.getPrototypeOf(SignInModal)).apply(this, arguments));
  }

  _createClass(SignInModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          toggleSignInModal = _props.toggleSignInModal,
          toggleSignUpModal = _props.toggleSignUpModal,
          toggleForgotModal = _props.toggleForgotModal,
          visibleSignIn = _props.visibleSignIn,
          onLoginEmailChange = _props.onLoginEmailChange,
          isLoginEmail = _props.isLoginEmail,
          handleSignInEmail = _props.handleSignInEmail,
          isLoadingSignIn = _props.isLoadingSignIn,
          messageSignIn = _props.messageSignIn,
          statusSignIn = _props.statusSignIn,
          visibleErrorSignInPopOver = _props.visibleErrorSignInPopOver,
          handleLoginSocial = _props.handleLoginSocial;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        width: 540,
        visible: visibleSignIn,
        title: "",
        footer: null,
        onCancel: toggleSignInModal,
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "social-login ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "button-container ButtonBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
        alt: "facebook",
        src: facebookIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "social-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_facebook_login___default.a, {
        cssClass: "facebook-login-button",
        appId: __WEBPACK_IMPORTED_MODULE_8__config__["b" /* facebookAppID */] //autoload
        ,
        isMobile: false,
        autoLoad: false,
        fields: "email",
        callback: function callback(response) {
          handleLoginSocial({
            token: response.accessToken,
            provider: "facebook"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "button-container ButtonBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
        className: "facebook",
        alt: "facebook",
        src: googleIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "social-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_google_login___default.a, {
        icon: "fa-google",
        className: "google-login-button",
        clientId: __WEBPACK_IMPORTED_MODULE_8__config__["c" /* googleClientID */],
        buttonText: "LOGIN WITH GOOGLE",
        onSuccess: function onSuccess(response) {
          handleLoginSocial({
            token: response.accessToken,
            provider: "google"
          });
        },
        onFailure: function onFailure(response) {
          return console.log(response);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "or")), isLoginEmail ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "form-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default.a, {
        placement: "right",
        content: messageSignIn && popOver(messageSignIn),
        visible: statusSignIn === 404 && messageSignIn && visibleErrorSignInPopOver,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: "It not a valid email address"
        }, {
          required: true,
          message: "Please enter your email"
        }]
      })(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a, {
        suffix: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "email",
          src: mailIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }),
        placeholder: "Email Address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default.a, {
        placement: "right",
        content: messageSignIn && popOver(messageSignIn),
        visible: statusSignIn === 422 && messageSignIn && visibleErrorSignInPopOver,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: "Please enter your password"
        }]
      })(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a, {
        onPressEnter: handleSignInEmail,
        suffix: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "password",
          src: lockIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }),
        type: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "button-container email ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        loading: isLoadingSignIn,
        type: "primary",
        onClick: handleSignInEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
        className: "ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "LOGIN")))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        className: "login-form-forgot",
        onClick: toggleForgotModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Forgot password ?"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        className: "alert-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "form-login margin-bottom button-container email ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        loading: isLoadingSignIn,
        type: "primary",
        onClick: onLoginEmailChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
        className: "ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "LOGIN BY EMAIL"))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "text-highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "Don't have account?", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        onClick: toggleSignUpModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, " Sign Up"))));
    }
  }]);

  return SignInModal;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SignInModal);

/***/ }),

/***/ "./src/reducers/activityReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__("./src/actions/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutability_helper__ = __webpack_require__("./node_modules/immutability-helper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutability_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutability_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("./global.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initial = {
  error: null,
  message: "",
  isLoadingSearchActivity: false,
  isLoadingGetActicityDetail: false,
  status: null,
  activity: null,
  activities: [],
  activitiesWeek: [],
  currentPage: null,
  lastPage: null
};

var activityReducer = function activityReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // Get truck review reducer
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["_45" /* REQUEST_SEARCH_ACTIVITY */]:
      return _objectSpread({}, state, {
        error: false,
        isLoadingSearchActivity: action.isLoadingSearchActivity
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["_54" /* SEARCH_ACTIVITY_SUCCESS */]:
      if (action.response.isFeature) {
        var activitiesWeekState = [];
        action.response.data.forEach(function (element) {
          var timeTemp = "";
          var events = Object(__WEBPACK_IMPORTED_MODULE_4__global__["b" /* getEventTime */])(element);

          for (var i = 0; i < events.length; ++i) {
            if (__WEBPACK_IMPORTED_MODULE_1_moment___default()(events[i], "YYYY-MM-DD h:mm a").unix() > __WEBPACK_IMPORTED_MODULE_1_moment___default()().unix()) {
              timeTemp = events[i];
              activitiesWeekState.push(_objectSpread({}, element, {
                timeDisplay: timeTemp
              }));
              break;
            }
          }
        });
        activitiesWeekState = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.orderBy(activitiesWeekState, function (item) {
          return __WEBPACK_IMPORTED_MODULE_1_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").unix();
        });
        activitiesWeekState = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(activitiesWeekState, 'name');
        return __WEBPACK_IMPORTED_MODULE_2_immutability_helper___default()(state, {
          isLoadingSearchActivity: {
            $set: false
          },
          activitiesWeek: {
            $set: activitiesWeekState
          }
        });
      } else {
        var _activitiesWeekState = [];
        action.response.data.forEach(function (element) {
          var timeTemp = "";
          var events = Object(__WEBPACK_IMPORTED_MODULE_4__global__["b" /* getEventTime */])(element);

          for (var i = 0; i < events.length; ++i) {
            if (__WEBPACK_IMPORTED_MODULE_1_moment___default()(events[i], "YYYY-MM-DD h:mm a").unix() > __WEBPACK_IMPORTED_MODULE_1_moment___default()().unix()) {
              timeTemp = events[i];
              break;
            } else timeTemp = events[events.length - 1];
          }

          _activitiesWeekState.push(_objectSpread({}, element, {
            timeDisplay: timeTemp
          }));
        });
        _activitiesWeekState = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.orderBy(_activitiesWeekState, function (item) {
          return __WEBPACK_IMPORTED_MODULE_1_moment___default()(item.timeDisplay, "YYYY-MM-DD h:mm a").unix();
        });
        return _objectSpread({}, state, {
          isLoadingSearchActivity: false,
          activities: state.activities.concat(_activitiesWeekState),
          currentPage: action.response.current_page,
          lastPage: action.response.last_page
        });
      }

    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["_53" /* SEARCH_ACTIVITY_ERROR */]:
      return _objectSpread({}, state, {
        error: true,
        isLoadingSearchActivity: false,
        status: action.response.status,
        message: action.response.statusText || 'Something went wrong'
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["_19" /* REQUEST_GET_ACTIVITY_DETAIL */]:
      return _objectSpread({}, state, {
        activity: null,
        error: false,
        isLoadingGetActivityDetail: action.isLoadingGetActivityDetail
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["k" /* GET_ACTIVITY_DETAIL_SUCCESS */]:
      return _objectSpread({}, state, {
        isLoadingGetActivityDetail: false,
        activity: action.response
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["j" /* GET_ACTIVITY_DETAIL_ERROR */]:
      return _objectSpread({}, state, {
        error: true,
        isLoadingGetActivityDetail: false,
        status: action.response.status,
        message: action.response.statusText || 'Something went wrong'
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["_3" /* MOUNT_ACTIVITY */]:
      return _objectSpread({}, state, {
        activities: [],
        activitiesWeek: [],
        currentPage: null,
        lastPage: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (activityReducer);

/***/ })

})
//# sourceMappingURL=0.e50b71763bbe699a7a63.hot-update.js.map