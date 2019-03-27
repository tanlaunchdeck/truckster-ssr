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
/******/ 	return __webpack_require__(__webpack_require__.s = 186);
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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(187);


/***/ }),

/***/ 187:
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

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/auto-complete"
var auto_complete_ = __webpack_require__(54);
var auto_complete__default = /*#__PURE__*/__webpack_require__.n(auto_complete_);

// EXTERNAL MODULE: external "antd/lib/collapse"
var collapse_ = __webpack_require__(188);
var collapse__default = /*#__PURE__*/__webpack_require__.n(collapse_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/help/Help.js






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Panel = collapse__default.a.Panel;
var plusIcon = '/static/images/plus-icon.png'; // const minusIcon = require('/static/images/minus-icon.png')

var Help_questions = [{
  question: "The food truck isn’t there, but Truckster says it should be?",
  answer: "This could be because of last minute changes or an early shift end for the food truck. Please send us a note on our Contact Us page to make us aware of the situation so we can improve our location tracking going forward."
}, {
  question: "When will mobile ordering be available ?",
  answer: "Mobile ordering is coming soon! We are working hard to have it ready for summer.Once it’s up and running, only food trucks using the Truckster application will be providing mobile ordering.See a truck you love that doesn’t offer it ? Let them know about us! We are here to benefit both you and the food truck!"
}, {
  question: "What are the taxes and processing fees for my mobile order ?",
  answer: "The taxes reflect sales tax charged by state and local government and are calculated based on where the transaction takes place.The processing fees are a convenience charge of $1 per order and are used to help bring you the best mobile ordering experience possible."
}, {
  question: "Should I tip the trucks when placing a mobile order ?",
  answer: "YES PLEASE! Food trucks and their staff work so hard to deliver delicious food to you and your friends.Please tip them as if you were ordering directly from the truck."
}, {
  question: "What can I do if my order is cancelled ?",
  answer: "You will receive a full refund to your card for any cancelled orders.Please reach out to us on our Contact Us page if you have any issues or questions."
}, {
  question: "How can I cancel my mobile order ?",
  answer: "Food trucks are fast workers and may have already started making your food.Please contact the truck directly to cancel the order.You can find the truck’s contact information on your order history and on the truck’s profile."
}, {
  question: "Is my information safe on Truckster ? Should I save my credit card info on my profile ?",
  answer: "We are dedicated to providing a fun and safe platform for consumers, food trucks, and breweries.Your credit card information is protected on our system and will not be shared.It is similar to how Square remembers your credit card and your receipt delivery preferences(like your email)."
}];
var questions1 = [{
  question: "How do I update my profile and schedule?",
  answer: "We are developing a vendor specific version of Truckster, where you can manage all your information, facilitate mobile ordering, and track a dashboard of helpful analytics specific to your truck. \n        More questions? Please send us a note under Contact Us and we will reach out to you ASAP.  \n        "
}];
var questions2 = [{
  question: "How do I update my profile and schedule?",
  answer: "We are developing a vendor specific version of Truckster, where you can manage all your information.\n        More questions? Please send us a note under Contact Us and we will reach out to you ASAP.  \n        "
}];

var Help_Help =
/*#__PURE__*/
function (_Component) {
  _inherits(Help, _Component);

  function Help() {
    _classCallCheck(this, Help);

    return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).apply(this, arguments));
  }

  _createClass(Help, [{
    key: "renderQuestion",
    value: function renderQuestion(questions) {
      return questions.map(function (item, index) {
        return external__react__default.a.createElement(Panel, {
          showArrow: false,
          header: external__react__default.a.createElement("div", {
            className: "collapse-header Body-2LeftBlack"
          }, item.question, external__react__default.a.createElement("div", {
            className: "icon"
          }, external__react__default.a.createElement("img", {
            alt: "expand",
            src: plusIcon
          }))),
          key: index
        }, external__react__default.a.createElement("p", {
          className: "Body-1RegularGrayLeft answer"
        }, "  ", item.answer));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var callback = this.props.callback;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "help-container"
      }, external__react__default.a.createElement("div", {
        className: "help-main-header"
      }, external__react__default.a.createElement("div", {
        className: "title-help DisplayBlackCenter "
      }, "Help center"), external__react__default.a.createElement("div", {
        className: "search-help"
      }, external__react__default.a.createElement(auto_complete__default.a, {
        className: "certain-category-search",
        dropdownClassName: "certain-category-search-dropdown",
        dropdownMatchSelectWidth: false,
        dropdownStyle: {
          width: 300
        },
        size: "large",
        style: {
          width: '100%'
        },
        placeholder: "Type your question here",
        optionLabelProp: "value"
      }), external__react__default.a.createElement("div", {
        className: "button-find"
      }, external__react__default.a.createElement(button__default.a, {
        icon: "search",
        className: "search-btn",
        size: "large",
        type: "primary"
      })))), external__react__default.a.createElement("div", {
        className: "help-body"
      }, external__react__default.a.createElement(row__default.a, {
        className: "content-help",
        gutter: 25
      }, external__react__default.a.createElement(col__default.a, {
        lg: 12,
        mg: 12
      }, external__react__default.a.createElement("div", {
        className: "help-card"
      }, external__react__default.a.createElement("div", {
        className: "title Display-2BlackLeft"
      }, "General Questions"), external__react__default.a.createElement("div", {
        className: "content"
      }, external__react__default.a.createElement(collapse__default.a, {
        onChange: callback
      }, this.renderQuestion(Help_questions))))), external__react__default.a.createElement(col__default.a, {
        lg: 12,
        mg: 12
      }, external__react__default.a.createElement("div", {
        className: "help-card"
      }, external__react__default.a.createElement("div", {
        className: "title Display-2BlackLeft"
      }, "Food Truck Vendors"), external__react__default.a.createElement("div", {
        className: "content"
      }, external__react__default.a.createElement(collapse__default.a, {
        onChange: callback
      }, this.renderQuestion(questions1)))), external__react__default.a.createElement("div", {
        style: {
          marginTop: '30px'
        },
        className: "help-card"
      }, external__react__default.a.createElement("div", {
        className: "title Display-2BlackLeft"
      }, "Breweries"), external__react__default.a.createElement("div", {
        className: "content"
      }, external__react__default.a.createElement(collapse__default.a, {
        onChange: callback
      }, this.renderQuestion(questions2))))))), external__react__default.a.createElement("div", {
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
      }, "CONTACT US")))))));
    }
  }]);

  return Help;
}(external__react_["Component"]);

/* harmony default export */ var help_Help = (Help_Help);
// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/help/_help.less
var _help = __webpack_require__(189);
var _help_default = /*#__PURE__*/__webpack_require__.n(_help);

// CONCATENATED MODULE: ./src/components/help/HelpContainer.js
function HelpContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HelpContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { HelpContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HelpContainer__typeof(obj); }

function HelpContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HelpContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HelpContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) HelpContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) HelpContainer__defineProperties(Constructor, staticProps); return Constructor; }

function HelpContainer__possibleConstructorReturn(self, call) { if (call && (HelpContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return HelpContainer__assertThisInitialized(self); }

function HelpContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HelpContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var HelpContainer_HelpContainer =
/*#__PURE__*/
function (_Component) {
  HelpContainer__inherits(HelpContainer, _Component);

  function HelpContainer(props) {
    var _this;

    HelpContainer__classCallCheck(this, HelpContainer);

    _this = HelpContainer__possibleConstructorReturn(this, (HelpContainer.__proto__ || Object.getPrototypeOf(HelpContainer)).call(this, props));
    _this.state = {};
    return _this;
  }

  HelpContainer__createClass(HelpContainer, [{
    key: "callback",
    value: function callback(key) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _help_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: "https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png",
        url: "https://gotruckster.com/help",
        title: "Help Center - Truckster FAQs",
        description: "Do you have questions about the Truckster website or app? Are you having technical difficulties? Check out our help center!"
      }), external__react__default.a.createElement(help_Help, {
        callback: function callback(e) {
          return _this2.callback(e);
        }
      }));
    }
  }]);

  return HelpContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var help_HelpContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(HelpContainer_HelpContainer));
// CONCATENATED MODULE: ./pages/help.js

/* harmony default export */ var help = __webpack_exports__["default"] = (help_HelpContainer);

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = require("antd/lib/collapse");

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = ".help-container {\n  padding-top: 69px;\n  background: #fff;\n}\n.help-container .help-main-header {\n  text-align: center;\n  max-width: 540px;\n  margin: 0 auto;\n  padding-bottom: 40px;\n}\n.help-container .help-main-header .title-help {\n  padding-top: 40px;\n  padding-bottom: 20px;\n  color: #212121;\n}\n.help-container .help-main-header .search-help {\n  width: 100%;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 5px;\n}\n.help-container .help-main-header .search-help .ant-select-selection .ant-select-selection__placeholder {\n  top: 70%;\n}\n.help-container .help-main-header .search-help .ant-select-selection li {\n  height: 56px;\n}\n.help-container .help-main-header .search-help .ant-select-selection li input {\n  box-shadow: none !important;\n  height: 100%;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.help-container .help-main-header .search-help .ant-select-selection li:focus {\n  box-shadow: none !important;\n  border-color: none !important;\n}\n.help-container .help-main-header .search-help .button-find {\n  height: 100%;\n}\n.help-container .help-main-header .search-help .button-find button {\n  width: 56px;\n  border-top-left-radius: 0;\n  height: 100%;\n  border-bottom-left-radius: 0;\n}\n.help-container .help-body {\n  margin: 0 auto;\n  box-shadow: inset 0 -1px 0 0 #efefef;\n  padding: 32px;\n  background: #fafafa;\n}\n.help-container .help-body .content-help {\n  margin: 0 auto !important;\n  max-width: 1140px;\n  margin: 0 auto;\n  background: #fafafa;\n}\n.help-container .help-body .content-help .answer {\n  white-space: pre-line;\n}\n.help-container .help-body .help-card {\n  padding: 32px;\n  border-radius: 6px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(33, 33, 33, 0.1);\n}\n.help-container .help-body .help-card .title {\n  padding-bottom: 40px;\n}\n.help-container .help-body .help-card .content .ant-collapse {\n  border: none;\n  background-color: #fff;\n}\n.help-container .help-body .help-card .content .ant-collapse .ant-collapse-item {\n  border-radius: 0;\n}\n.help-container .help-body .help-card .content .ant-collapse .ant-collapse-item .ant-collapse-header {\n  padding-bottom: 25px;\n  padding-left: 0;\n}\n.help-container .help-body .help-card .content .ant-collapse .ant-collapse-item .ant-collapse-header .collapse-header {\n  display: flex;\n  justify-content: space-between;\n}\n.help-container .help-body .help-card .content .ant-collapse .ant-collapse-item .ant-collapse-header .collapse-header img {\n  width: 24px;\n}\n.help-container .help-body .help-card .content .ant-collapse .ant-collapse-item .ant-collapse-content {\n  padding: 0;\n}\n.help-container .help-body .help-card .content .question-container {\n  padding: 16px 0;\n  box-shadow: inset 0 -1px 0 0 #efefef;\n}\n.help-container .help-body .help-card .content .question-container .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.help-container .help-body .help-card .content .question-container .header .question {\n  color: #212121;\n}\n.help-container .help-body .help-card .content .question-container .header .icon img {\n  width: 24px;\n}\n.help-container .not-find {\n  text-align: center;\n}\n.help-container .not-find .title {\n  color: #212121;\n  padding-top: 56px;\n}\n.help-container .not-find .button-contact {\n  padding-top: 24px;\n  padding-bottom: 56px;\n}\n.help-container .not-find .button-contact button {\n  height: 48px;\n  width: 217px;\n}\n";

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

/***/ 54:
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });