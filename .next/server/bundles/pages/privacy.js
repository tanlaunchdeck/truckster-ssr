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
/******/ 	return __webpack_require__(__webpack_require__.s = 208);
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

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/components/staticPage/_privacy.less
var _privacy = __webpack_require__(210);
var _privacy_default = /*#__PURE__*/__webpack_require__.n(_privacy);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/staticPage/PrivacyTerm.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var data = {
  type: "Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Calendar permission, Approximate location permission (non-continuous), SMS permission, Reminders permission, food related activity and date of birth.\n\n    Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.\n    The Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.\n    All Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without any consequences on the availability or the functioning of the service.\n    Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.\n    Any use of Cookies \u2013 or of other tracking tools \u2013 by this Application or by the owners of third-party services used by this Application serves the purpose of providing the service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.\n    \n    Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.",
  most1: "The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.\n    The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.",
  most2: "The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller.",
  most3: "The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.",
  use: "The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Access to third-party accounts, Device permissions for Personal Data access and Handling activity data.\n\nThe Personal Data used for each purpose is outlined in the specific sections of this document.",
  facebook1: "This Application may ask for some Facebook permissions allowing it to perform actions with the User's Facebook account and to retrieve information, including Personal Data, from it. This service allows this Application to connect with the User's account on the Facebook social network, provided by Facebook Inc.\n\nFor more information about the following permissions, refer to the Facebook permissions documentation and to the Facebook privacy policy.\n\nThe permissions asked are the following:",
  facebook2: "By default, this includes certain User\u2019s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available.",
  device1: "Depending on the User's specific device, this Application may request certain permissions that allow it to access the User's device Data as described below.\n\n    By default, these permissions must be granted by the User before the respective information can be accessed. Once the permission has been given, it can be revoked by the User at any time. In order to revoke these permissions, Users may refer to the device settings or contact the Owner for support at the contact details provided in the present document.\n    The exact procedure for controlling app permissions may be dependent on the User's device and software.\n    \n    Please note that the revoking of such permissions might impact the proper functioning of this Application.\n    \n    If User grants any of the permissions listed below, the respective Personal Data may be processed (i.e accessed to, modified or removed) by this Application.",
  device2: "Used for accessing the User's approximate device location. This Application may collect, use, and share User location Data in order to provide location-based services.\nThe geographic location of the User is determined in a manner that isn't continuous. This means that it is impossible for this Application to derive the approximate position of the User on a continuous basis.",
  device3: "Used for accessing the calendar on the User's device, including the reading, adding and removing of entries.",
  device4: "Used for accessing the Reminders app on the User's device, including the reading, adding and removing of entries.",
  device5: "Used for accessing features related to the User's messaging including the sending, receiving and reading of SMS.",
  addition1: "The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services.\n    The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.",
  addition2: "In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.",
  addition3: "For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.",
  addition4: "More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.",
  addition5: "Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.\n\nThis Application does not support \u201CDo Not Track\u201D requests.\nTo determine whether any of the third-party services it uses honor the \u201CDo Not Track\u201D requests, please read their privacy policies.",
  addition6: "The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.",
  addition7: "The Data Controller is responsible for this privacy policy, prepared starting from the modules provided by iubenda and hosted on iubenda's servers."
};

var PrivacyTerm_PrivacyTerm =
/*#__PURE__*/
function (_Component) {
  _inherits(PrivacyTerm, _Component);

  function PrivacyTerm() {
    _classCallCheck(this, PrivacyTerm);

    return _possibleConstructorReturn(this, (PrivacyTerm.__proto__ || Object.getPrototypeOf(PrivacyTerm)).apply(this, arguments));
  }

  _createClass(PrivacyTerm, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _privacy_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: "https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png",
        url: "https://gotruckster.com/privacy",
        title: "Privacy Policy - Truckster",
        description: "We take your privacy seriously. Read over our Privacy Policy to gain a better understanding of how we use your information."
      }), external__react__default.a.createElement("div", {
        className: "privacy-wrapper"
      }, external__react__default.a.createElement("div", {
        className: "privacy-container"
      }, external__react__default.a.createElement("div", {
        className: "privacy-header"
      }, external__react__default.a.createElement("div", {
        className: "privacy-title DisplayBlackCenter"
      }, "Privacy & Terms"), external__react__default.a.createElement("div", {
        className: "privacy-bref Body-2GreyCenter"
      }, "This Application collects some Personal Data from its Users.")), external__react__default.a.createElement("section", {
        className: "privacy-section"
      }, external__react__default.a.createElement("div", {
        className: "section-title Display-2BlackLeft"
      }, "Owner and Data Controller"), external__react__default.a.createElement("div", {
        className: "section-info "
      }, external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Truckster"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "  Denver, Colorado"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, "Owner contact email: ", external__react__default.a.createElement("a", {
        href: "mailto:connor@gotruckster.com"
      }, "connor@gotruckster.com")))), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("section", {
        className: "privacy-section"
      }, external__react__default.a.createElement("div", {
        className: "section-title Display-2BlackLeft"
      }, "Types of Data collected"), external__react__default.a.createElement("div", {
        className: "section-info "
      }, external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, data.type))), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("section", {
        className: "privacy-section"
      }, external__react__default.a.createElement("div", {
        className: "section-title Display-2BlackLeft"
      }, "Mode and place of processing the Data"), external__react__default.a.createElement("div", {
        className: "section-info "
      }, external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Methods of processing"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.most1), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Place"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.most2), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Retention time"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft"
      }, data.most3))), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("section", {
        className: "privacy-section"
      }, external__react__default.a.createElement("div", {
        className: "section-title Display-2BlackLeft"
      }, "The use of the collected Data"), external__react__default.a.createElement("div", {
        className: "section-info "
      }, external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft "
      }, data.use))), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("section", {
        className: "privacy-section"
      }, external__react__default.a.createElement("div", {
        className: "section-title Display-2BlackLeft"
      }, "Facebook permissions asked by this Application"), external__react__default.a.createElement("div", {
        className: "section-info "
      }, external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom "
      }, data.facebook1), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Basic information"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom "
      }, data.facebook2), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "App Notifications"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, "Send notifications."), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Birthday"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, "Provides access to the birthday."), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Contact email"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, "Access the User's contact email address."), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Current City"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, "Provides access to the User's current location."))), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("section", {
        className: "privacy-section"
      }, external__react__default.a.createElement("div", {
        className: "section-title Display-2BlackLeft"
      }, "Device permissions for Personal Data access"), external__react__default.a.createElement("div", {
        className: "section-info "
      }, external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom "
      }, data.device1), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Approximate location permission (non-continuous)"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom "
      }, data.device2), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Calendar permission"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.device3), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Reminders permission"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.device4), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "SMS permission"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.device5))), external__react__default.a.createElement("hr", null), external__react__default.a.createElement("section", {
        className: "privacy-section"
      }, external__react__default.a.createElement("div", {
        className: "section-title Display-2BlackLeft"
      }, "Additional information about Data collection and processing"), external__react__default.a.createElement("div", {
        className: "section-info "
      }, external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Legal action"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom "
      }, data.addition1), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Additional information about User's Personal Data"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.addition2), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "System logs and maintenance"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.addition3), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Information not contained in this policy"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.addition4), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "The rights of Users"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.addition5), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Changes to this privacy policy"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.addition6), external__react__default.a.createElement("div", {
        className: "small-title SubheadingBlackLeft"
      }, "Information about this privacy policy"), external__react__default.a.createElement("div", {
        className: "Body-2GreyLeft padding-bottom"
      }, data.addition7)))), external__react__default.a.createElement("div", {
        className: "not-find"
      }, external__react__default.a.createElement("div", {
        className: "title Display-2BlackCenter"
      }, "Not finding what you looking for?"), external__react__default.a.createElement("div", {
        className: "button-contact"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/contact"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(button__default.a, {
        type: "primary"
      }, external__react__default.a.createElement("div", {
        className: "ButtonWhiteCenter"
      }, "CONTACT US"))))))));
    }
  }]);

  return PrivacyTerm;
}(external__react_["Component"]);

/* harmony default export */ var staticPage_PrivacyTerm = (PrivacyTerm_PrivacyTerm);
// CONCATENATED MODULE: ./pages/privacy.js

/* harmony default export */ var privacy = __webpack_exports__["default"] = (staticPage_PrivacyTerm);

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = ".privacy-wrapper {\n  width: 100%;\n  background: #fff;\n}\n.privacy-wrapper .privacy-container {\n  max-width: 730px;\n  margin: 0 auto;\n  padding-top: 64px;\n}\n.privacy-wrapper .privacy-container .privacy-header {\n  padding: 64px 0;\n  padding-bottom: 40px;\n  text-align: center;\n}\n.privacy-wrapper .privacy-container .privacy-header .privacy-bref {\n  padding-top: 8px;\n}\n.privacy-wrapper .privacy-container .privacy-section {\n  padding: 0;\n}\n.privacy-wrapper .privacy-container .privacy-section .section-title {\n  padding: 24px 0;\n}\n.privacy-wrapper .privacy-container .privacy-section .padding-bottom {\n  padding-bottom: 24px;\n}\n.privacy-wrapper .privacy-container .privacy-section .section-info {\n  white-space: pre-line;\n  padding-bottom: 24px;\n}\n.privacy-wrapper .privacy-container .privacy-section .small-title {\n  padding-bottom: 8px;\n}\n.privacy-wrapper .not-find {\n  background: #fafafa;\n  text-align: center;\n}\n.privacy-wrapper .not-find .title {\n  color: #212121;\n  padding-top: 56px;\n}\n.privacy-wrapper .not-find .button-contact {\n  padding-top: 24px;\n  padding-bottom: 56px;\n}\n.privacy-wrapper .not-find .button-contact button {\n  height: 48px;\n  width: 217px;\n}\n";

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