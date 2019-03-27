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
/******/ 	return __webpack_require__(__webpack_require__.s = 190);
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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-slick"
var external__react_slick_ = __webpack_require__(192);
var external__react_slick__default = /*#__PURE__*/__webpack_require__.n(external__react_slick_);

// EXTERNAL MODULE: ./src/components/staticPage/_aboutTruckster.less
var _aboutTruckster = __webpack_require__(193);
var _aboutTruckster_default = /*#__PURE__*/__webpack_require__.n(_aboutTruckster);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/staticPage/AboutTruckster.js




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






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

var AboutTruckster_Page = function Page(_ref) {
  var item = _ref.item,
      key = _ref.key;
  return external__react__default.a.createElement("div", {
    className: "carousel-item",
    key: key
  }, external__react__default.a.createElement(row__default.a, {
    type: "flex",
    justify: "center"
  }, external__react__default.a.createElement(col__default.a, {
    className: "carousel-image"
  }, external__react__default.a.createElement("img", {
    src: item.image,
    alt: "truckster"
  })), external__react__default.a.createElement(col__default.a, {
    className: "carousel-info"
  }, external__react__default.a.createElement("div", {
    className: "carousel-bref"
  }, external__react__default.a.createElement("div", {
    className: "carousel-icon"
  }, external__react__default.a.createElement("img", {
    className: "carousel-icon",
    style: {
      background: item.iconColor
    },
    src: item.icon,
    alt: "truckster-icon"
  })), external__react__default.a.createElement("div", {
    className: "title Display-2BlackLeft"
  }, item.title), external__react__default.a.createElement("div", {
    className: "Body-2LeftGrey"
  }, item.description)))));
};

var AboutTruckster_Carousel = function Carousel(_ref2) {
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
      return external__react__default.a.createElement("div", {
        className: "append-dots"
      }, external__react__default.a.createElement("ul", {
        style: {
          margin: "0px"
        }
      }, " ", dots, " "));
    },
    customPaging: function customPaging(i) {
      return external__react__default.a.createElement("div", {
        id: i
      }, self.state.currentSelect === i ? external__react__default.a.createElement("div", {
        className: "selected-circle"
      }) : external__react__default.a.createElement("span", null, "\u2022"));
    }
  };
  return external__react__default.a.createElement(external__react_slick__default.a, settings, data.map(function (item, index) {
    return external__react__default.a.createElement(AboutTruckster_Page, {
      item: item,
      key: index
    });
  }));
};

var AboutTruckster_AboutTruckster =
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
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _aboutTruckster_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: "https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png",
        url: "https://gotruckster.com/",
        title: "Truckster \u2013 Find Food Trucks Near You",
        description: "When hunger strikes, rely on Truckster to help find food trucks & breweries near you. View schedules, pairings and events in your area. Download our App today!s"
      }), external__react__default.a.createElement("div", {
        className: "about-truckster-container  main-wrapper"
      }, external__react__default.a.createElement("div", {
        className: "home-main-header",
        style: {
          backgroundImage: "url(".concat(aboutTrucksterImage, ")")
        }
      }, external__react__default.a.createElement("div", {
        className: "content-city"
      }, external__react__default.a.createElement("h1", {
        className: "title DisplayWhiteCenter"
      }, " Your Source for\nEverything Food Trucks"), external__react__default.a.createElement("h2", {
        className: "explore-breweries"
      }, "Explore breweries, upcoming events, menus, and your favorite brewery & food truck pairings"), external__react__default.a.createElement("div", {
        className: "button-explore"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: function onClick() {
          routes["Router"].push("/food-truck/co/denver");
        },
        type: "primary"
      }, external__react__default.a.createElement("a", {
        className: "ButtonWhiteCenter"
      }, "GO EXPLORE")), external__react__default.a.createElement(button__default.a, {
        onClick: function onClick() {
          routes["Router"].push("/food-truck-catering");
        }
      }, external__react__default.a.createElement("a", {
        className: "ButtonWhiteCenter"
      }, "CATERING")))), external__react__default.a.createElement("div", {
        className: "cover"
      }, external__react__default.a.createElement("div", {
        className: "cover-mask"
      }))), external__react__default.a.createElement("div", {
        className: "about-body"
      }, external__react__default.a.createElement(AboutTruckster_Carousel, {
        self: this
      }), external__react__default.a.createElement("div", {
        className: "upcoming__plan-container"
      }, external__react__default.a.createElement(row__default.a, {
        type: "flex",
        justify: "space-between",
        align: "middle",
        className: "upcoming__plan"
      }, external__react__default.a.createElement(col__default.a, {
        className: "left",
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      }, external__react__default.a.createElement("h3", {
        className: "Display-4WhiteLeft"
      }, "See when we plan to launch in your city"), external__react__default.a.createElement("div", {
        className: "Body-1RegularWhiteLeft desc"
      }, "We are covering Colorado food trucks today, and actively working to add more cities and states soon! Contact us to see when we plan to launch in your city."), external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/contact"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(button__default.a, {
        type: "primary"
      }, "CONTACT US NOW!")))), external__react__default.a.createElement(col__default.a, {
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      }, external__react__default.a.createElement("div", {
        className: "image__container"
      }, external__react__default.a.createElement("img", {
        src: upcomingCities,
        alt: "upcoming"
      }))))))));
    }
  }]);

  return AboutTruckster;
}(external__react_["Component"]);

/* harmony default export */ var staticPage_AboutTruckster = (AboutTruckster_AboutTruckster);
// CONCATENATED MODULE: ./pages/index.js

/* harmony default export */ var pages = __webpack_exports__["default"] = (staticPage_AboutTruckster);

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = ".about-truckster-container {\n  width: 100%;\n  background: #fff !important;\n  overflow: hidden;\n}\n.about-truckster-container .home-main-header {\n  height: 536px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  overflow: auto;\n  background-position: bottom;\n  overflow: hidden;\n}\n.about-truckster-container .home-main-header .content-city {\n  max-width: 730px;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  position: absolute;\n}\n.about-truckster-container .home-main-header .content-city .title {\n  white-space: pre-wrap;\n  margin: 0 auto;\n  padding-bottom: 16px;\n}\n.about-truckster-container .home-main-header .content-city .explore-breweries {\n  padding-bottom: 32px;\n}\n.about-truckster-container .home-main-header .content-city .button-explore button {\n  width: 217px;\n  height: 56px;\n}\n.about-truckster-container .home-main-header .content-city .button-explore button:first-child {\n  margin-right: 16px;\n}\n@media only screen and (max-width: 450px) {\n  .about-truckster-container .home-main-header .content-city .button-explore button:first-child {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n}\n.about-truckster-container .home-main-header .content-city .button-explore button:last-child {\n  border: none;\n}\n.about-truckster-container .home-main-header .cover {\n  height: 536px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n}\n.about-truckster-container .home-main-header .cover .cover-mask {\n  height: 536px;\n  position: absolute;\n  width: 100%;\n  background-color: rgba(33, 33, 33, 0.8);\n}\n.about-truckster-container .about-body {\n  white-space: pre-line;\n  padding-top: 56px;\n  margin: 0 auto;\n  background: #fafafa;\n}\n.about-truckster-container .about-body .carousel-item .carousel-image img {\n  width: 640px;\n  height: 560px;\n}\n@media only screen and (max-width: 768px) {\n  .about-truckster-container .about-body .carousel-item .carousel-image img {\n    width: 377px;\n    height: 331px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .about-truckster-container .about-body .carousel-item .carousel-image img {\n    width: 345px;\n    height: 303px;\n  }\n}\n.about-truckster-container .about-body .carousel-info {\n  width: 360px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref {\n  min-height: 360px;\n  padding-top: 70px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref .carousel-icon {\n  padding-bottom: 24px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref .carousel-icon img {\n  padding: 16px;\n  border-radius: 50%;\n}\n.about-truckster-container .about-body .carousel-info .carousel-bref .title {\n  padding-bottom: 24px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-controller {\n  color: #d8d8d8;\n  font-size: 24px;\n}\n.about-truckster-container .about-body .carousel-info .carousel-controller span {\n  padding-right: 8px;\n}\n.about-truckster-container .upcoming__plan-container {\n  background: #212121;\n  margin-top: 120px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan {\n  max-width: 1110px;\n  margin: 0 auto;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .left {\n  padding: 10px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan h3 {\n  max-width: 450px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .desc {\n  margin-top: 16px;\n  max-width: 460px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan button {\n  width: 210px;\n  height: 56px;\n  margin-top: 24px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .image__container {\n  position: relative;\n  height: 362px;\n}\n.about-truckster-container .upcoming__plan-container .upcoming__plan .image__container img {\n  top: -40px;\n  position: absolute;\n  width: 628px;\n  object-fit: contain;\n}\n.selected-circle {\n  border-radius: 50%;\n  border: solid 2px #fa393d;\n  width: 16px;\n  height: 16px;\n  margin-top: 5px;\n}\n.slick-dots {\n  color: #d8d8d8;\n  font-size: 24px;\n  top: 360px;\n  left: 171px;\n}\n@media only screen and (max-width: 1014px) {\n  .slick-dots {\n    position: relative;\n    top: initial;\n    left: initial;\n  }\n}\n";

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ })

/******/ });