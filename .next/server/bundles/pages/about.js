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
/******/ 	return __webpack_require__(__webpack_require__.s = 137);
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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/staticPage/_about.less
var _about = __webpack_require__(139);
var _about_default = /*#__PURE__*/__webpack_require__.n(_about);

// CONCATENATED MODULE: ./src/components/staticPage/About.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var aboutImage = "/static/images/cover-about.jpg";
var checkIcon = "/static/images/check-icon.svg";

var About_About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "about-container  main-wrapper"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _about_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: "https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png",
        url: "https://gotruckster.com/about",
        title: "About Truckster \u2013 Our Story",
        description: "Learn more about Truckster and its founders. See how they got started and learn what makes their app the best of its kind!"
      }), external__react__default.a.createElement("div", {
        className: "home-main-header",
        style: {
          backgroundImage: "url(".concat(aboutImage, ")")
        }
      }, external__react__default.a.createElement("div", {
        className: "content-city"
      }, external__react__default.a.createElement("div", {
        className: "title DisplayBlackCenter"
      }, "Everything you need to know about Truckster")), external__react__default.a.createElement("div", {
        className: "cover"
      }, external__react__default.a.createElement("div", {
        className: "cover-mask"
      }))), external__react__default.a.createElement("div", {
        className: "about-body"
      }, external__react__default.a.createElement("div", {
        className: "padding-bottom Body-2GreyLeft"
      }, "After running a food truck for four years in Denver, it became apparent to Connor that food trucks and consumers need a better way to connect. Few consumers are willing to follow multiple food trucks to find their locations, while food trucks are continuously on the move, creating a difficult environment for the love affair to work. Throw breweries into the mix and it becomes increasingly hard to plan a day that includes one of your favorite breweries and trucks.\n\nConnor and his wife Molly teamed up to build Truckster, your hub for everything food trucks. We love the food truck movement and how it is constantly evolving, delivering creative, delicious food that is accessible to everyone, all through a unique experience. Our goal is to be a tool that helps grow the food truck industry and the culinary joy it brings. Whether you are traveling to a new city, in an unfamiliar part of your home city, or are just a foodie on the go, Truckster will elevate your food truck experience."), external__react__default.a.createElement("div", {
        className: "SubheadingBlackLeft about-title"
      }, "Truckster enables consumers to:     "), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Explore the best food trucks and breweries  ")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Use a map to find nearby food trucks  ")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "View ratings and reviews  ")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Skip the lines with mobile ordering ")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Share events, trucks, and breweries with friends  ")), external__react__default.a.createElement("span", {
        className: "list-about padding-bottom"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Follow your favorite food trucks and breweries all on one platform  ")), external__react__default.a.createElement("div", {
        className: "SubheadingBlackLeft about-title"
      }, "For food trucks and breweries, Truckster delivers:   "), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Increased sales opportunities through mobile ordering")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Integration into popular POS systems, easing the process workflow ")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Enhanced consumer relationship  ")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Outsourced marketing service ")), external__react__default.a.createElement("span", {
        className: "list-about padding-bottom"
      }, external__react__default.a.createElement("img", {
        alt: "icon-check",
        src: checkIcon
      }), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Dashboards and analytics ")), external__react__default.a.createElement("span", {
        className: "list-about"
      }, external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Truckster is new, fun, and the best way to eat through your city. What are you waiting for? It's time to jump on board! #Truckyeah!  "))), external__react__default.a.createElement("div", {
        className: "not-find"
      }, external__react__default.a.createElement("div", {
        className: "title Display-2BlackCenter"
      }, "Not finding what you looking for?"), external__react__default.a.createElement("div", {
        className: "button-contact"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/contact"
      }, external__react__default.a.createElement(button__default.a, {
        type: "primary"
      }, external__react__default.a.createElement("div", {
        className: "ButtonWhiteCenter"
      }, "CONTACT US"))))));
    }
  }]);

  return About;
}(external__react_["Component"]);

/* harmony default export */ var staticPage_About = (About_About);
// CONCATENATED MODULE: ./pages/about.js

/* harmony default export */ var about = __webpack_exports__["default"] = (staticPage_About);

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = ".about-container {\n  width: 100%;\n  background: #fff !important;\n}\n.about-container .home-main-header {\n  height: 320px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  overflow: auto;\n  background-position: 50%;\n  overflow: hidden;\n}\n.about-container .home-main-header .content-city {\n  max-width: 730px;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  position: absolute;\n}\n.about-container .home-main-header .content-city .title {\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n}\n.about-container .home-main-header .cover {\n  height: 320px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n}\n.about-container .home-main-header .cover .cover-mask {\n  height: 384px;\n  position: absolute;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n.about-container .about-body {\n  white-space: pre-line;\n  padding-top: 56px;\n  max-width: 730px;\n  padding-bottom: 120px;\n  margin: 0 auto;\n}\n.about-container .about-body .padding-bottom {\n  padding-bottom: 24px;\n}\n.about-container .about-body .about-title {\n  padding-bottom: 18px;\n}\n.about-container .about-body .list-about {\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.about-container .about-body .list-about img {\n  width: 24px;\n  margin-right: 16px;\n}\n.about-container .not-find {\n  background: #fafafa;\n  text-align: center;\n}\n.about-container .not-find .title {\n  color: #212121;\n  padding-top: 56px;\n}\n.about-container .not-find .button-contact {\n  padding-top: 24px;\n  padding-bottom: 56px;\n}\n.about-container .not-find .button-contact button {\n  height: 48px;\n  width: 217px;\n}\n";

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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ })

/******/ });