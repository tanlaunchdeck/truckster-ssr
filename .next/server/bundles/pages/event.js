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
/******/ 	return __webpack_require__(__webpack_require__.s = 175);
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176);


/***/ }),

/***/ 176:
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

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(21);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./src/components/common/map/Map.js
var Map = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/common/CustomCarousel/CustomCarousel.js
var CustomCarousel = __webpack_require__(60);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(9);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: ./global.js
var global = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/common/renderContainer/RenderContainer.js
var RenderContainer = __webpack_require__(28);

// EXTERNAL MODULE: external "react-responsive"
var external__react_responsive_ = __webpack_require__(26);
var external__react_responsive__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_);

// EXTERNAL MODULE: ./src/components/common/placeholder/LoadingPlaceHolder.js
var LoadingPlaceHolder = __webpack_require__(30);

// EXTERNAL MODULE: ./src/components/common/truckCard/TruckCard.js
var TruckCard = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/eventDetail/EventDetail.js





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var defaultImage = "/static/images/default-image.png";
var shareIcon = '/static/images/share-icon.png';
var timeIcon = '/static/images/time-icon.png';
var locationIcon = '/static/images/location-icon.png';

var EventDetail_EventDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(EventDetail, _Component);

  function EventDetail() {
    _classCallCheck(this, EventDetail);

    return _possibleConstructorReturn(this, (EventDetail.__proto__ || Object.getPrototypeOf(EventDetail)).apply(this, arguments));
  }

  _createClass(EventDetail, [{
    key: "renderTruckCard",
    // render truck card 
    value: function renderTruckCard(trucks) {
      return trucks.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 8,
          lg: 6
        }, external__react__default.a.createElement(TruckCard["a" /* default */], {
          data: item.food_truck
        }));
      });
    }
  }, {
    key: "renderEventDetail",
    value: function renderEventDetail(event) {
      var _props = this.props,
          toggleShareModal = _props.toggleShareModal,
          trucks = _props.trucks;
      var time = "";
      var events = Object(global["b" /* getEventTime */])(event);

      for (var i = 0; i < events.length; ++i) {
        if (external__moment__default()(events[i], "YYYY-MM-DD h:mm a") > external__moment__default()()) {
          time = events[i];
          break;
        } else time = events[events.length - 1];
      }

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "detail-header"
      }, external__react__default.a.createElement("h1", {
        className: "name DisplayBlackLeft "
      }, "  ", event.name), external__react__default.a.createElement("img", {
        onClick: function onClick(e) {
          return toggleShareModal();
        },
        alt: "back",
        src: shareIcon
      })), external__react__default.a.createElement("div", {
        className: "detail-body"
      }, external__react__default.a.createElement("div", {
        className: "carousel"
      }, external__react__default.a.createElement(CustomCarousel["a" /* default */], null, event.pictures ? event.pictures.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: index,
          className: "event-image"
        }, external__react__default.a.createElement("img", {
          alt: "event",
          src: item.url
        }));
      }) : external__react__default.a.createElement("div", {
        className: "event-image"
      }, external__react__default.a.createElement("img", {
        alt: "event",
        src: defaultImage
      })))), external__react__default.a.createElement("div", {
        className: "event-info"
      }, external__react__default.a.createElement("img", {
        alt: "location",
        src: locationIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, event.address)), external__react__default.a.createElement("div", {
        className: "event-info"
      }, external__react__default.a.createElement("img", {
        alt: "location",
        src: timeIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, external__moment__default()(time, "YYYY-MM-DD h:mm a").format("ddd, MMMM DD"), "  ", external__moment__default()(event.start_time, "YYYY-MM-DD h:mm a").format("h:mm a"), " - ", external__moment__default()(event.end_time).format(" h:mm a"))), external__react__default.a.createElement("div", {
        className: "event-intro"
      }, external__react__default.a.createElement("div", {
        className: "SubheadingBlackLeft"
      }, "Introduction"), external__react__default.a.createElement("div", {
        className: "Body-1RegularGrayLeft information"
      }, event.information)), external__react__default.a.createElement("div", {
        className: "event-intro"
      }, trucks && trucks.length > 0 && external__react__default.a.createElement(RenderContainer["a" /* default */], {
        message: "Something went wrong, please try another time!"
      }, external__react__default.a.createElement("div", {
        className: "SubheadingBlackLeft"
      }, "Food trucks serving at this event "), external__react__default.a.createElement("div", null, trucks ? external__react__default.a.createElement(row__default.a, {
        gutter: 16
      }, this.renderTruckCard(trucks)) : external__react__default.a.createElement(external__react_responsive__default.a, {
        key: "loader",
        maxWidth: 768
      }, function (matches) {
        return external__react__default.a.createElement(LoadingPlaceHolder["a" /* default */], {
          itemNum: matches ? 4 : 8,
          key: "loader"
        });
      }))))));
    }
  }, {
    key: "render",
    value: function render() {
      var activity = this.props.activity;
      var time = "";
      var events = Object(global["b" /* getEventTime */])(activity);

      for (var i = 0; i < events.length; ++i) {
        if (external__moment__default()(events[i], "YYYY-MM-DD h:mm a") > external__moment__default()()) {
          time = events[i];
          break;
        }
      }

      return external__react__default.a.createElement("div", {
        className: "event-detail"
      }, activity ? external__react__default.a.createElement(row__default.a, null, external__react__default.a.createElement(col__default.a, {
        id: "introduction",
        className: "detail-container",
        sm: 24,
        xs: 24,
        lg: 13,
        md: 13
      }, this.renderEventDetail(activity)), external__react__default.a.createElement(col__default.a, {
        className: "map",
        sm: 24,
        xs: 24,
        lg: 11,
        md: 11
      }, external__react__default.a.createElement(Map["a" /* default */], {
        icon: "event",
        location: [_objectSpread({}, activity, {
          timeDisplay: time
        })]
      }))) : external__react__default.a.createElement("div", {
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

  return EventDetail;
}(external__react_["Component"]);

/* harmony default export */ var eventDetail_EventDetail = (EventDetail_EventDetail);
// EXTERNAL MODULE: ./src/api/activityApi.js
var activityApi = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/common/errorPage/ErrorPage.js
var ErrorPage = __webpack_require__(42);

// EXTERNAL MODULE: ./src/actions/toggleAction.js
var toggleAction = __webpack_require__(31);

// EXTERNAL MODULE: ./src/components/eventDetail/_eventDetail.less
var _eventDetail = __webpack_require__(177);
var _eventDetail_default = /*#__PURE__*/__webpack_require__.n(_eventDetail);

// EXTERNAL MODULE: ./src/actions/deepLinkAction.js
var deepLinkAction = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/eventDetail/EventDetailContainer.js


function EventDetailContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EventDetailContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { EventDetailContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EventDetailContainer__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function EventDetailContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventDetailContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EventDetailContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) EventDetailContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) EventDetailContainer__defineProperties(Constructor, staticProps); return Constructor; }

function EventDetailContainer__possibleConstructorReturn(self, call) { if (call && (EventDetailContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return EventDetailContainer__assertThisInitialized(self); }

function EventDetailContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EventDetailContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var EventDetailContainer_EventDetailContainer =
/*#__PURE__*/
function (_Component) {
  EventDetailContainer__inherits(EventDetailContainer, _Component);

  function EventDetailContainer(props) {
    var _this;

    EventDetailContainer__classCallCheck(this, EventDetailContainer);

    _this = EventDetailContainer__possibleConstructorReturn(this, (EventDetailContainer.__proto__ || Object.getPrototypeOf(EventDetailContainer)).call(this, props));
    _this.state = {
      trucks: null
    };
    return _this;
  }

  EventDetailContainer__createClass(EventDetailContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.statusReview === 201 || nextProps.statusReview === 422) {
        this.setState({
          visibleReview: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          activity = _props.activity,
          changeRoute = _props.changeRoute;
      changeRoute("gotrucksterconsumer://app/event/".concat(activity.id));
      var keys = [1],
          trucks = [];

      for (var i = 0; i < activity.calendar.length; ++i) {
        if (activity.calendar[i].food_truck && !keys.includes(activity.calendar[i].food_truck.id)) {
          trucks.push(activity.calendar[i]);
          keys.push(activity.calendar[i].food_truck.id);
        }
      }

      this.setState({
        trucks: trucks
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          activity = _props2.activity,
          status = _props2.status,
          slug = _props2.slug;
      return external__react__default.a.createElement("div", null, activity ? external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _eventDetail_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        url: "https://gotruckster.com/event/" + "".concat(slug),
        title: activity.name + " - Event in Denver, CO - Truckster",
        description: activity.information.length > 160 ? activity.information.substring(0, 160) : activity.information,
        ogImage: activity.pictures[0].url
      }), external__react__default.a.createElement(eventDetail_EventDetail, _extends({}, this.state, this.props))) : external__react__default.a.createElement(ErrorPage["a" /* default */], {
        status: status
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var reduxStore, res, query;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reduxStore = _ref.reduxStore, res = _ref.res, query = _ref.query;

                if (!query.slug) {
                  res.writeHead(301, {
                    Location: "/events"
                  });
                  res.end();
                }

                _context.next = 4;
                return Object(global["a" /* getDataInitial */])("consumer/v1/activities/slug/".concat(query.slug));

              case 4:
                _context.t0 = _context.sent;
                _context.t1 = query.slug;
                return _context.abrupt("return", {
                  activity: _context.t0,
                  slug: _context.t1
                });

              case 7:
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

  return EventDetailContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    error: state.activityReducer.error,
    status: state.activityReducer.status,
    isLoggedIn: state.authReducer.isLoggedIn
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    toggleShareModal: toggleAction["f" /* toggleShareModal */],
    getActivityDetail: activityApi["a" /* getActivityDetail */],
    changeRoute: deepLinkAction["a" /* changeRoute */]
  }, dispatch);
}
/* harmony default export */ var eventDetail_EventDetailContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(EventDetailContainer_EventDetailContainer));
// CONCATENATED MODULE: ./pages/event.js

/* harmony default export */ var pages_event = __webpack_exports__["default"] = (eventDetail_EventDetailContainer);

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = ".event-detail {\n  padding-top: 68px;\n  background: #fff;\n  height: 100vh;\n  overflow: hidden;\n}\n.event-detail hr {\n  background: #efefef;\n  height: 1px;\n  border: 0;\n}\n.event-detail .detail-container {\n  overflow-y: scroll;\n  height: 100vh;\n  padding: 30px;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.event-detail .detail-container::-webkit-scrollbar {\n  width: 5px;\n}\n.event-detail .detail-container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.event-detail .detail-container::-webkit-scrollbar-thumb {\n  background: #888;\n}\n.event-detail .detail-container::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.event-detail .detail-container .detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.event-detail .detail-container .detail-header .name {\n  color: #212121;\n}\n.event-detail .detail-container .detail-header img {\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n}\n.event-detail .detail-container .detail-body {\n  padding: 30px 0;\n}\n.event-detail .detail-container .detail-body .carousel {\n  padding-bottom: 30px;\n}\n.event-detail .detail-container .detail-body .event-image {\n  display: flex;\n  justify-content: center;\n}\n.event-detail .detail-container .detail-body .event-image img {\n  height: 250px;\n  border-radius: 8px;\n}\n.event-detail .detail-container .detail-body .event-info {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n.event-detail .detail-container .detail-body .event-info img {\n  width: 24px;\n  margin-right: 8px;\n}\n.event-detail .detail-container .detail-body .event-intro {\n  padding-top: 16px;\n}\n.event-detail .detail-container .detail-body .event-intro .information {\n  white-space: pre-line;\n}\n.event-detail .detail-container .detail-body .event-intro .SubheadingBlackLeft {\n  padding-bottom: 16px;\n}\n.event-detail .map {\n  right: 0;\n  height: 100vh;\n  top: 0;\n}\n";

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

/***/ 31:
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

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

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

/***/ 42:
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

/***/ 43:
/***/ (function(module, exports) {

module.exports = ".error-container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-container .error-detail {\n  padding-left: 60px;\n}\n.error-container .error-detail .error-status {\n  font-size: 60px;\n  font-weight: 600;\n}\n.error-container .error-detail .error-message {\n  font-size: 20px;\n  padding-bottom: 20px;\n}\n.error-container .error-detail .return-button button {\n  height: 48px;\n  width: 200px;\n}\n";

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 50:
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

/***/ 51:
/***/ (function(module, exports) {

module.exports = ".map-container {\n  height: 100%;\n}\n.map-container .marker-container {\n  cursor: pointer !important;\n}\n";

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = requestSearchActivity;
/* harmony export (immutable) */ __webpack_exports__["g"] = searchActivitySuccess;
/* harmony export (immutable) */ __webpack_exports__["f"] = searchActivityError;
/* harmony export (immutable) */ __webpack_exports__["d"] = requestGetActivityDetail;
/* harmony export (immutable) */ __webpack_exports__["b"] = getActivityDetailSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = getActivityDetailError;
/* harmony export (immutable) */ __webpack_exports__["c"] = mountActivity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(2);
 // Search activity action

function requestSearchActivity(isLoadingSearchActivity) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_42" /* REQUEST_SEARCH_ACTIVITY */],
    isLoadingSearchActivity: isLoadingSearchActivity
  };
}
function searchActivitySuccess(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_51" /* SEARCH_ACTIVITY_SUCCESS */],
      response: response
    });
  };
}
function searchActivityError(response) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_50" /* SEARCH_ACTIVITY_ERROR */],
      response: response
    });
  };
} // get activity detail

function requestGetActivityDetail(isLoadingGetActivityDetail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["_17" /* REQUEST_GET_ACTIVITY_DETAIL */],
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
      type: __WEBPACK_IMPORTED_MODULE_0__types__["_1" /* MOUNT_ACTIVITY */]
    });
  };
}

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActivityDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(12);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var searchActivity = function searchActivity(isFeature, page) {
  var url = "";

  if (isFeature) {
    url = "?is_featured=true&";
  } else url = "?this_week=true&";

  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["e" /* requestSearchActivity */])(true));
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/consumer/v1/activities' + url + "page=".concat(page),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["g" /* searchActivitySuccess */])(_objectSpread({}, response, {
          isFeature: isFeature
        })));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["f" /* searchActivityError */])(_error));
      }
    });
  };
};
var getActivityDetail = function getActivityDetail(acticityId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_activityAction_js__["d" /* requestGetActivityDetail */])(true));
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

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuka_carousel__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuka_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuka_carousel__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var arrowRightIcon = "/static/images/arrow-right-icon.png";
var arrowLeftIcon = "/static/images/arrow-left-icon.svg";

var CustomCarousel =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomCarousel, _Component);

  function CustomCarousel() {
    _classCallCheck(this, CustomCarousel);

    return _possibleConstructorReturn(this, (CustomCarousel.__proto__ || Object.getPrototypeOf(CustomCarousel)).apply(this, arguments));
  }

  _createClass(CustomCarousel, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          slideToShow = _props.slideToShow;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_nuka_carousel___default.a, {
        slidesToShow: slideToShow,
        renderBottomCenterControls: function renderBottomCenterControls() {},
        renderCenterLeftControls: function renderCenterLeftControls(_ref) {
          var previousSlide = _ref.previousSlide;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
            className: "carousel-button",
            onClick: previousSlide
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            alt: "left",
            src: arrowLeftIcon
          }));
        },
        renderCenterRightControls: function renderCenterRightControls(_ref2) {
          var nextSlide = _ref2.nextSlide;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
            className: "carousel-button",
            onClick: nextSlide
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            alt: "right",
            src: arrowRightIcon
          }));
        }
      }, children);
    }
  }]);

  return CustomCarousel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CustomCarousel);

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

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