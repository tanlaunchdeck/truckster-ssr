webpackHotUpdate(7,{

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

/***/ "./src/components/city/City.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_cityCard_CityCard__ = __webpack_require__("./src/components/common/cityCard/CityCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_breadCumb_BreadCumb__ = __webpack_require__("./src/components/common/breadCumb/BreadCumb.js");


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/city/City.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var cityImage1 = '/static/images/image-city-comming.png';
var cityImage2 = '/static/images/image-city-taking.png';
var breadCumb = [{
  name: "HOME",
  url: "/"
}, {
  name: "FOOD TRUCKS",
  url: "/food-trucks"
}];
var data = [{
  title: "Truckster is coming to your city!",
  desc: "It\u2019s hard to remember the names of trucks you stumbled upon and loved, and even if you do manage to come up with their name, how do you find them? Food trucks are mobile, so naturally they are on the go. In this day and age, there needs to be a better way to do this. We get you! That\u2019s why Truckster\u2019s here and available as an app when you\u2019re on the go. Not a fan of lines? Amen. Skip those pesky lines with mobile ordering directly from your favorite trucks. Just download the Truckster app to get started.\n\n        Truckster\u2019s platform today spans 6 cities and lists nearly 1,000 food trucks. We\u2019re not stopping there! US, we\u2019re coming for you. Let us know your favorite food truck city so we can make sure you\u2019re next on our list!",
  image: cityImage1
}, {
  title: "Food Trucks are taking over!",
  desc: "How many food trucks are there in the US? Where did the movement start? Where are food trucks today?\n\n        The answer is a ton, and everywhere! While mobile food has been around for hundreds of years, the modern food truck phenomenon is believed to have started either on the beach in Hawaii or in Los Angeles with the first taco truck serving late night eats outside of a local bar in the 70\u2019s. Also around that time, labor unions in New York City and Chicago started feeding workers using the not-so-friendly term of roach coaches.\n        \n        We have come a long way since then! In the US today, there are estimated to be around 25,000 food trucks, trailers, and food carts. And thanks to food truck fans nationwide, that number is growing every year. Food trucks can be found in nearly every major US city, and are popular for locals and tourists alike. You can find authentic ethnic food, farm to table ingredients, no fuss comfort food, and refined, gourmet cuisines.\n        \n        In most cities, food trucks can park anywhere with public parking or with permission on private property. Special event permits are used for food trucks in public spaces like parks or pavilions. Some food trucks post up in food truck specific parks or outside of breweries or bars and stay there permanently or for several months at a time. This is more common in cities like Austin and Portland, where food truck destinations have thrived. No matter what city you live in, a great place to find food trucks would be at large events like festivals, conventions, farmers markets, or neighborhood parties. Truckster lists popular events happening in your city where you can find delicious options!",
  image: cityImage2
}];

var City =
/*#__PURE__*/
function (_Component) {
  _inherits(City, _Component);

  function City() {
    _classCallCheck(this, City);

    return _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).apply(this, arguments));
  }

  _createClass(City, [{
    key: "renderCityCard",
    // render category card 
    value: function renderCityCard(cities) {
      console.log("cities", cities);
      return cities.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          key: index,
          style: {
            marginBottom: "16px"
          },
          span: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_cityCard_CityCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cities = this.props.cities;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: " main-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__common_breadCumb_BreadCumb__["a" /* default */], {
        breadCumb: breadCumb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        className: "title DisplayBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Explore Local Food Trucks by City"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "desc LeadRegularDarkGreyCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Looking for local, delicious eats? We got you! Search Truckster's cities to find everything you need on the best local food trucks."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        style: {
          paddingTop: "30px"
        },
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, cities && this.renderCityCard(cities)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "city__news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "city__news--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: data[0].image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "title Display-3BlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, data[0].title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "desc Body-2RegularBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, data[0].desc))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "city__news--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "title Display-3BlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, data[1].title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "desc Body-2RegularBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, data[1].desc)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: data[1].image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })))));
    }
  }]);

  return City;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (City);

/***/ }),

/***/ "./src/components/city/CityContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__City__ = __webpack_require__("./src/components/city/City.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__city_less__ = __webpack_require__("./src/components/city/_city.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__city_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__city_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_cityCard_cityCard_less__ = __webpack_require__("./src/components/common/cityCard/_cityCard.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_cityCard_cityCard_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__common_cityCard_cityCard_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global__ = __webpack_require__("./global.js");

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/city/CityContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      hasMore: true
    };
    return _this;
  }

  _createClass(CityContainer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "gray-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_6__common_cityCard_cityCard_less___default.a + __WEBPACK_IMPORTED_MODULE_5__city_less___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__City__["a" /* default */], _extends({}, this.state, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, query, cities;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_7__global__["a" /* getDataInitial */])("api/consumer/v1/city");

              case 3:
                cities = _context.sent;
                return _context.abrupt("return", {
                  cities: cities
                });

              case 5:
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
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(CityContainer));

/***/ })

})
//# sourceMappingURL=7.11bc5519a543629cbebf.hot-update.js.map