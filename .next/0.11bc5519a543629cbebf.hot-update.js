webpackHotUpdate(0,{

/***/ "./global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getSchedule;
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
    toggleDeepLink: __WEBPACK_IMPORTED_MODULE_7__actions_deepLinkAction__["b" /* toggleDeepLink */]
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
//# sourceMappingURL=0.11bc5519a543629cbebf.hot-update.js.map