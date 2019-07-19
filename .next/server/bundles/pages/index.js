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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_staticPage_AboutTruckster__ = __webpack_require__("./src/components/staticPage/AboutTruckster.js");

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_components_staticPage_AboutTruckster__["a" /* default */]);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes");

module.exports = routes().add('about').add('help').add('contact').add('privacy').add('user').add('edit').add('nearby').add('search').add('intro').add('trucks').add('truck-owner').add('food-truck-catering').add('success', '/order/:success').add('info-detail', '/info/:slug').add('info', '/info/page/:page').add('pairing', '/pairing/:state/:city').add('events', '/event/:state/:city').add('event', '/event/:slug').add('brewery-detail', '/brewery/:slug').add('brewery').add('brewery-type', '/brewery-type/:value').add('food-trucks').add('truck-detail-redirect', '/truck/:state/:city').add('truck-redirect', '/truck/:state/:city').add('truck', '/food-truck/:slug', 'truck').add('cuisine-redirect', '/cuisine/:value').add('cuisines', '/food-truck/:state/:city/cuisines').add('food-truck', '/food-truck/:state/:city/all').add('city-detail', '/food-truck/:state/:city').add('city-detail-redirect', '/:state/:city').add('cuisine', '/food-truck/:state/:city/:value');

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

/***/ "./src/components/staticPage/AboutTruckster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_slick__ = __webpack_require__("react-slick");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutTruckster_less__ = __webpack_require__("./src/components/staticPage/_aboutTruckster.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutTruckster_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__aboutTruckster_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__head__ = __webpack_require__("./src/components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__routes__);




var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/staticPage/AboutTruckster.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var aboutTrucksterImage = "/static/images/truckster-image-about.jpg";
var landingImage1 = "/static/images/video-1.png";
var landingImage2 = "/static/images/video-2.png";
var landingImage3 = "/static/images/video-3.png";
var landingImage4 = "/static/images/video-4.png";
var pairingIcon = "/static/images/pairing-icon.svg";
var starIcon = "/static/images/star-icon.svg";
var placeIcon = "/static/images/place-icon.svg";
var googlePlay = "/static/images/google-play.png";
var appStore = "/static/images/app-store.png";
var upcomingCities = "/static/images/upcoming-cities.png";
var data = [{
  image: landingImage1,
  icon: placeIcon,
  iconColor: "#743ad4",
  title: "Tracking more live locations than anyone else.",
  description: "Truckster\u2019s database of almost 400 food trucks in Colorado makes it the most comprehensive resource out there,\n    Serving Colorado today, and adding more cities soon!"
}, {
  image: landingImage2,
  icon: pairingIcon,
  iconColor: "#fa8939",
  title: "Featuring food trucks paired up with your favorite local breweries.",
  description: "Search over 200 breweries in Colorado, explore their menus, ratings, and upcoming food truck calendars."
}, {
  image: landingImage3,
  icon: placeIcon,
  iconColor: "#fa393d",
  title: "Skip lines with mobile ordering.",
  description: "Salvage your lunch hour by ordering ahead of time and picking up from the truck."
}, {
  image: landingImage4,
  icon: starIcon,
  iconColor: "#5289ff",
  title: "Get social!\n    Share favorites and upcoming events with friends.",
  description: "Stay connected with beer culture and the foodie community. Truckster keeps you updated with the latest events and newest releases. Follow your favorites and share with friends."
}];

var Page = function Page(_ref) {
  var item = _ref.item,
      key = _ref.key;
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    className: "carousel-item",
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default.a, {
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
    className: "carousel-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
    src: item.image,
    alt: "truckster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
    className: "carousel-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    className: "carousel-bref",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    className: "carousel-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
    className: "carousel-icon",
    style: {
      background: item.iconColor
    },
    src: item.icon,
    alt: "truckster-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    className: "title Display-2BlackLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, item.title), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    className: "Body-2LeftGrey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, item.description)))));
};

var Carousel = function Carousel(_ref2) {
  var self = _ref2.self;
  var settings = {
    afterChange: function afterChange(i) {
      self.setState({
        currentSelect: i
      });
    },
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    // nextArrow: <NextArrow />,
    appendDots: function appendDots(dots) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "append-dots",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("ul", {
        style: {
          margin: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, " ", dots, " "));
    },
    customPaging: function customPaging(i) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        id: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, self.state.currentSelect === i ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "selected-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "\u2022"));
    }
  };
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_slick___default.a, _extends({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }), data.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Page, {
      item: item,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      }
    });
  }));
};

var AboutTruckster =
/*#__PURE__*/
function (_Component) {
  _inherits(AboutTruckster, _Component);

  function AboutTruckster(props) {
    var _this;

    _classCallCheck(this, AboutTruckster);

    _this = _possibleConstructorReturn(this, (AboutTruckster.__proto__ || Object.getPrototypeOf(AboutTruckster)).call(this, props));
    _this.state = {
      currentSelect: 0
    };
    return _this;
  }

  _createClass(AboutTruckster, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_6__aboutTruckster_less___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__head__["a" /* default */], {
        ogImage: "https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png",
        url: "https://gotruckster.com/",
        title: "Truckster \u2013 Find Food Trucks Near You",
        description: "When hunger strikes, rely on Truckster to help find food trucks & breweries near you. View schedules, pairings and events in your area. Download our App today!s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "about-truckster-container  main-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "home-main-header",
        style: {
          backgroundImage: "url(".concat(aboutTrucksterImage, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "content-city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        className: "title DisplayWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, " Your Source for\nEverything Food Trucks"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h2", {
        className: "explore-breweries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, "Explore breweries, upcoming events, menus, and your favorite brewery & food truck pairings"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "button-explore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        onClick: function onClick() {
          __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].push("/food-trucks");
        },
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        className: "SubheadingWhiteLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Food Trucks")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        onClick: function onClick() {
          __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].push("/brewery");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        className: "SubheadingWhiteLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "Breweries")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "cover-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "about-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Carousel, {
        self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "upcoming__plan-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default.a, {
        type: "flex",
        justify: "space-between",
        align: "middle",
        className: "upcoming__plan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
        className: "left",
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h3", {
        className: "Display-4WhiteLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "See when we plan to launch in your city"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "Body-1RegularWhiteLeft desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "We are covering Colorado food trucks today, and actively working to add more cities and states soon! Contact us to see when we plan to launch in your city."), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__routes__["Link"], {
        prefetch: true,
        to: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "CONTACT US NOW!")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "image__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: upcomingCities,
        alt: "upcoming",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (ctx && ctx.query) {
                  if (ctx.query.foodtruck) {
                    ctx.res.writeHead(301, {
                      Location: "/food-truck/" + ctx.query.foodtruck
                    });
                    ctx.res.end();
                  } else if (ctx.query.brewery) {
                    ctx.res.writeHead(301, {
                      Location: "/brewery/" + ctx.query.brewery
                    });
                    ctx.res.end();
                  } else if (ctx.query.event) {
                    ctx.res.writeHead(301, {
                      Location: "/event/" + ctx.query.event
                    });
                    ctx.res.end();
                  }
                }

              case 1:
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

  return AboutTruckster;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AboutTruckster);

/***/ }),

/***/ "./src/components/staticPage/_aboutTruckster.less":
/***/ (function(module, exports) {

module.exports = ".about-truckster-container {\n  width: 100%;\n  background: #fff !important;\n  overflow: hidden;\n}\n.about-truckster-container .home-main-header {\n  height: 536px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  overflow: auto;\n  background-position: bottom;\n  overflow: hidden;\n}\n.about-truckster-container .home-main-header .content-city {\n  max-width: 730px;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  position: absolute;\n}\n.about-truckster-container .home-main-header .content-city .title {\n  white-space: pre-wrap;\n  margin: 0 auto;\n  padding-bottom: 16px;\n}\n.about-truckster-container .home-main-header .content-city .explore-breweries {\n  padding-bottom: 32px;\n}\n.about-truckster-container .home-main-header .content-city .button-explore button {\n  width: 144px;\n  height: 40px;\n  opacity: 0.6;\n  border-radius: 6px;\n  border: solid 1px #fafafa;\n  background-color: var(--black);\n  color: #fff;\n}\n.about-truckster-container .home-main-header .content-city .button-explore button:first-child {\n  margin-right: 16px;\n}\n@media only screen and (max-width: 450px) {\n  .about-truckster-container .home-main-header .content-city .button-explore button:first-child {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n}\n.about-truckster-container .home-main-header .cover {\n  height: 536px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n}\n.about-truckster-container .home-main-header .cover .cover-mask {\n  height: 536px;\n  position: absolute;\n  width: 100%;\n  background-color: rgba(33, 33, 33, 0.8);\n}\n.about-truckster-container .about-body {\n  white-space: pre-line;\n  padding-top: 56px;\n  margin: 0 auto;\n  background: #fafafa;\n}\n.about-truckster-container .about-body .carousel-item .carousel-image img {\n  width: 640px;\n  height: 560px;\n}\n@media only screen and (max-width: 768px) {\n  .about-truckster-container .about-body .carousel-item .carousel-image img {\n    width: 377px;\n    height: 331px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .about-truckster-container .about-body .carousel-item .carousel-image img {\n    width: 345px;\n    height: 303px;\n  }\n}\n.about-truckster-container .about-body .carousel-info {\n  width: 360px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref {\n  min-height: 360px;\n  padding-top: 70px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref .carousel-icon {\n  padding-bottom: 24px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref .carousel-icon img {\n  padding: 16px;\n  border-radius: 50%;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref .title {\n  padding-bottom: 24px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-controller {\n  color: #d8d8d8;\n  font-size: 24px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-controller span {\n  padding-right: 8px;\n}\n.about-truckster-container .upcoming__plan-container {\n  background: #212121;\n  margin-top: 120px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan {\n  max-width: 1110px;\n  margin: 0 auto;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .left {\n  padding: 10px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan h3 {\n  max-width: 450px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .desc {\n  margin-top: 16px;\n  max-width: 460px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan button {\n  width: 210px;\n  height: 56px;\n  margin-top: 24px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .image__container {\n  position: relative;\n  height: 362px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .image__container img {\n  top: -40px;\n  position: absolute;\n  width: 628px;\n  object-fit: contain;\n}\n.selected-circle {\n  border-radius: 50%;\n  border: solid 2px #fa393d;\n  width: 16px;\n  height: 16px;\n  margin-top: 5px;\n}\n.slick-dots {\n  color: #d8d8d8;\n  font-size: 24px;\n  top: 360px;\n  left: 171px;\n}\n@media only screen and (max-width: 1014px) {\n  .slick-dots {\n    position: relative;\n    top: initial;\n    left: initial;\n  }\n}\n";

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

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

/***/ "react-slick":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map