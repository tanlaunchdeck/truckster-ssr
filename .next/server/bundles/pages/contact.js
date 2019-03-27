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
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(162);


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(11);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(8);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(5);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__(34);
var popover__default = /*#__PURE__*/__webpack_require__.n(popover_);

// EXTERNAL MODULE: external "google-map-react"
var external__google_map_react_ = __webpack_require__(44);
var external__google_map_react__default = /*#__PURE__*/__webpack_require__.n(external__google_map_react_);

// CONCATENATED MODULE: ./src/components/contact/Contact.js




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var facebook = "/static/images/facebook-icon.png";
var google = "/static/images/google-icon.png";
var instagram = "/static/images/instagram-icon.png";
var twitter = "/static/images/twitter-icon.svg";
var mailIcon = '/static/images/mail-icon.png';
var phoneIcon = '/static/images/phone-icon.png';
var locationIcon = '/static/images/location-icon.png'; // const minusIcon = require('/static/images/minus-icon.png')

var Contact_AnyReactComponent = function AnyReactComponent(_ref) {
  var info = _ref.info,
      icon = _ref.icon;
  return external__react__default.a.createElement(popover__default.a, {
    className: "marker-container",
    content: "We are here!",
    visible: true
  }, external__react__default.a.createElement("div", null));
};

var Contact_Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "contact-container"
      }, external__react__default.a.createElement("div", {
        className: "contact"
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 110
      }, external__react__default.a.createElement(col__default.a, {
        lg: 12
      }, external__react__default.a.createElement("div", {
        className: "DisplayBlackLeft"
      }, "Get in Touch"), external__react__default.a.createElement("div", {
        className: "contact-bref Body-2GreyLeft"
      }, "We'd love to hear from you!"), external__react__default.a.createElement("div", {
        className: "item-info"
      }, external__react__default.a.createElement("img", {
        alt: "info",
        src: phoneIcon
      }), external__react__default.a.createElement("span", {
        className: "Body-2GreyLeft"
      }, external__react__default.a.createElement("a", {
        href: "tel:720-626-4619"
      }, "720-230-6750"))), external__react__default.a.createElement("div", {
        className: "item-info"
      }, external__react__default.a.createElement("img", {
        alt: "info",
        src: mailIcon
      }), external__react__default.a.createElement("span", {
        className: "Body-2GreyLeft"
      }, external__react__default.a.createElement("a", {
        href: "mailto:info@gotruckster.com"
      }, "info@gotruckster.com"))), external__react__default.a.createElement("div", {
        className: "item-info"
      }, external__react__default.a.createElement("img", {
        alt: "info",
        src: locationIcon
      }), external__react__default.a.createElement("span", {
        className: "Body-2GreyLeft"
      }, "Denver, Colorado")), external__react__default.a.createElement("div", {
        className: "social-container"
      }, external__react__default.a.createElement("div", {
        className: "title"
      }, "SOCIAL MEDIA"), external__react__default.a.createElement("div", {
        className: "social-icon"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://www.facebook.com/GoTruckster/");
        }
      }, "  ", external__react__default.a.createElement("img", {
        alt: "Alternative text",
        src: facebook
      })), external__react__default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://www.instagram.com/gotruckster/");
        }
      }, "   ", external__react__default.a.createElement("img", {
        alt: "Alternative text",
        src: instagram
      }))))), external__react__default.a.createElement(col__default.a, {
        className: "contact-right",
        lg: 12
      }, external__react__default.a.createElement("div", {
        className: "contact-map"
      }, external__react__default.a.createElement(external__google_map_react__default.a, {
        bootstrapURLKeys: {
          key: "AIzaSyA38TbYpItOyBso3moz0u6yf-hv7VziVfs"
        },
        defaultCenter: {
          lat: 39.7384953,
          lng: -104.9964992
        },
        defaultZoom: 10
      }, external__react__default.a.createElement(Contact_AnyReactComponent, {
        lat: 39.7384953,
        lng: -104.9964992
      })))))));
    }
  }]);

  return Contact;
}(external__react_["Component"]);

/* harmony default export */ var contact_Contact = (Contact_Contact);
// EXTERNAL MODULE: ./src/components/contact/_contact.less
var _contact = __webpack_require__(163);
var _contact_default = /*#__PURE__*/__webpack_require__.n(_contact);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/contact/ContactContainer.js
function ContactContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContactContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { ContactContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContactContainer__typeof(obj); }

function ContactContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContactContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContactContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) ContactContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) ContactContainer__defineProperties(Constructor, staticProps); return Constructor; }

function ContactContainer__possibleConstructorReturn(self, call) { if (call && (ContactContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return ContactContainer__assertThisInitialized(self); }

function ContactContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ContactContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ContactContainer_ContactContainer =
/*#__PURE__*/
function (_Component) {
  ContactContainer__inherits(ContactContainer, _Component);

  function ContactContainer(props) {
    var _this;

    ContactContainer__classCallCheck(this, ContactContainer);

    _this = ContactContainer__possibleConstructorReturn(this, (ContactContainer.__proto__ || Object.getPrototypeOf(ContactContainer)).call(this, props));
    _this.state = {};
    return _this;
  }

  ContactContainer__createClass(ContactContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head["a" /* default */], {
        url: "https://gotruckster.com/contact",
        title: "Contact Us - Truckster",
        description: "Looking for something important? Have a question? View contract information for Truckster here!"
      }), external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _contact_default.a
        }
      }), external__react__default.a.createElement(contact_Contact, null));
    }
  }]);

  return ContactContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var contact_ContactContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ContactContainer_ContactContainer));
// CONCATENATED MODULE: ./pages/contact.js

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_ContactContainer);

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  padding-bottom: 128px;\n  padding-top: 128px;\n  background: #fff;\n  width: 100%;\n}\n.contact-container .contact {\n  max-width: 1140px;\n  margin: 0 auto;\n}\n.contact-container .contact .contact-bref {\n  padding-top: 24px;\n  padding-bottom: 40px;\n}\n.contact-container .contact .item-info {\n  padding-bottom: 16px;\n}\n.contact-container .contact .item-info img {\n  width: 24px;\n  margin-right: 16px;\n}\n.contact-container .contact .social-container {\n  padding-left: 40px;\n}\n.contact-container .contact .social-container .title {\n  padding-bottom: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: 0.5px;\n  text-align: left;\n  color: #bdbdbd;\n}\n.contact-container .contact .social-container .social-icon {\n  display: flex;\n  align-content: center;\n}\n.contact-container .contact .social-container .social-icon img {\n  width: 24px;\n  height: 24px;\n  margin-right: 16px;\n}\n.contact-container .contact .form-contact .contact-item .item-title {\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: 0.5px;\n  text-align: left;\n  color: #757575;\n  padding-bottom: 8px;\n}\n.contact-container .contact .form-contact .contact-item input {\n  height: 45px;\n  background: #fafafa;\n}\n.contact-container .contact .form-contact .contact-item textarea {\n  min-height: 96px;\n  background: #fafafa;\n}\n.contact-container .contact .form-contact .button-submit {\n  text-align: center;\n}\n.contact-container .contact .form-contact .button-submit button {\n  width: 200px;\n  height: 48px;\n}\n.contact-container .contact .contact-right .contact-map {\n  width: 500px;\n  height: 500px;\n  margin-top: 40px;\n}\n";

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });