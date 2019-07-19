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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_common_errorPage_ErrorPage__ = __webpack_require__("./src/components/common/errorPage/ErrorPage.js");
var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/pages/_error.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Error =
/*#__PURE__*/
function (_Component) {
  _inherits(Error, _Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_components_common_errorPage_ErrorPage__["a" /* default */], {
        status: 404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      });
    }
  }]);

  return Error;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes");

module.exports = routes().add('about').add('help').add('contact').add('privacy').add('user').add('edit').add('nearby').add('search').add('intro').add('trucks').add('truck-owner').add('food-truck-catering').add('success', '/order/:success').add('info-detail', '/info/:slug').add('info', '/info/page/:page').add('pairing', '/pairing/:state/:city').add('events', '/event/:state/:city').add('event', '/event/:slug').add('brewery-detail', '/brewery/:slug').add('brewery').add('brewery-type', '/brewery-type/:value').add('food-trucks').add('truck-detail-redirect', '/truck/:state/:city').add('truck-redirect', '/truck/:state/:city').add('truck', '/food-truck/:slug', 'truck').add('cuisine-redirect', '/cuisine/:value').add('cuisines', '/food-truck/:state/:city/cuisines').add('food-truck', '/food-truck/:state/:city/all').add('city-detail', '/food-truck/:state/:city').add('city-detail-redirect', '/:state/:city').add('cuisine', '/food-truck/:state/:city/:value');

/***/ }),

/***/ "./src/components/common/errorPage/ErrorPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorPage_less__ = __webpack_require__("./src/components/common/errorPage/_errorPage.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorPage_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__errorPage_less__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/errorPage/ErrorPage.js";

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
        className: "error-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_3__errorPage_less___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "error",
        src: image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, status), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "error-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, message), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "return-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        prefetch: true,
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Return Home "))))));
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);

/***/ }),

/***/ "./src/components/common/errorPage/_errorPage.less":
/***/ (function(module, exports) {

module.exports = ".error-container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-container .error-detail {\n  padding-left: 60px;\n}\n.error-container .error-detail .error-status {\n  font-size: 60px;\n  font-weight: 600;\n}\n.error-container .error-detail .error-message {\n  font-size: 20px;\n  padding-bottom: 20px;\n}\n.error-container .error-detail .return-button button {\n  height: 48px;\n  width: 200px;\n}\n";

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_error.js");


/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map