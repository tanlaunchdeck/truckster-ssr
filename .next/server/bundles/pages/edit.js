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
/******/ 	return __webpack_require__(__webpack_require__.s = 171);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

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
var apiUrl = "https://test.gotruckster.com/";
var googleApi = "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A";
var googleClientID = "617001021912-4jd9lv4ut3nig7vrchouji9076rjs8pd.apps.googleusercontent.com";
var facebookAppID = "2077048179191099";

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(172);


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(20);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(11);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(8);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./src/api/profileApi.js + 1 modules
var profileApi = __webpack_require__(72);

// EXTERNAL MODULE: external "antd/lib/date-picker"
var date_picker_ = __webpack_require__(63);
var date_picker__default = /*#__PURE__*/__webpack_require__.n(date_picker_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(7);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(24);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__(83);
var tabs__default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__(48);
var radio__default = /*#__PURE__*/__webpack_require__.n(radio_);

// EXTERNAL MODULE: external "react-dropzone"
var external__react_dropzone_ = __webpack_require__(173);
var external__react_dropzone__default = /*#__PURE__*/__webpack_require__.n(external__react_dropzone_);

// CONCATENATED MODULE: ./src/components/editProfile/EditProfile.js







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RadioGroup = radio__default.a.Group;
var FormItem = form__default.a.Item;
var TabPane = tabs__default.a.TabPane;
var unknownUserIcon = '/static/images/unknown-user-icon.png';
var userIcon = '/static/images/user-icon.png';
var lockIcon = '/static/images/lock-icon.png';
var phoneIcon = '/static/images/phone-icon.png';

var EditProfile_EditProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(EditProfile, _Component);

  function EditProfile() {
    _classCallCheck(this, EditProfile);

    return _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).apply(this, arguments));
  }

  _createClass(EditProfile, [{
    key: "renderAccountSetting",
    value: function renderAccountSetting() {
      var _props = this.props,
          checkPassword = _props.checkPassword,
          handleChangePassword = _props.handleChangePassword,
          isLoadingChangePassword = _props.isLoadingChangePassword;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement("div", {
        className: "max-width"
      }, external__react__default.a.createElement("div", {
        className: "edit-general"
      }, external__react__default.a.createElement("div", {
        className: "change-info"
      }, external__react__default.a.createElement("div", {
        className: "form-login"
      }, external__react__default.a.createElement("div", {
        className: "title-info LabelGreyLeft"
      }, "Current Password"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('current_password', {
        rules: [{
          required: true,
          message: "Please enter your current password"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        onPressEnter: handleChangePassword,
        suffix: external__react__default.a.createElement("img", {
          className: "img-icon",
          alt: "password",
          src: lockIcon
        }),
        type: "password",
        placeholder: "Password"
      }))), external__react__default.a.createElement("div", {
        className: "title-info LabelGreyLeft"
      }, "New Password"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('new_password', {
        rules: [{
          required: true,
          message: "Please enter your new password"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        onPressEnter: handleChangePassword,
        suffix: external__react__default.a.createElement("img", {
          className: "img-icon",
          alt: "password",
          src: lockIcon
        }),
        type: "password",
        placeholder: "Password"
      }))), external__react__default.a.createElement("div", {
        className: "title-info LabelGreyLeft"
      }, "Confirm Password"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('confirm_password', {
        rules: [{
          required: true,
          message: "Please confirm your new password"
        }]
      }, {
        validator: function validator(rule, value, callback) {
          return checkPassword(rule, value, callback);
        }
      })(external__react__default.a.createElement(input__default.a, {
        onPressEnter: handleChangePassword,
        suffix: external__react__default.a.createElement("img", {
          className: "img-icon",
          alt: "password",
          src: lockIcon
        }),
        type: "password",
        placeholder: "Password"
      }))))), external__react__default.a.createElement("div", {
        className: "save-button"
      }, external__react__default.a.createElement(button__default.a, {
        loading: isLoadingChangePassword,
        onClick: handleChangePassword,
        type: "primary"
      }, external__react__default.a.createElement("span", {
        className: "ButtonWhiteCenter"
      }, "SAVE PASSWORD  ")))));
    }
  }, {
    key: "renderGeneralSetting",
    value: function renderGeneralSetting(userProfile) {
      var _props2 = this.props,
          userData = _props2.userData,
          handleUpdateProfile = _props2.handleUpdateProfile,
          onNameChange = _props2.onNameChange,
          onGenderChange = _props2.onGenderChange,
          onPhoneChange = _props2.onPhoneChange,
          onBirthdayChange = _props2.onBirthdayChange,
          disabledDate = _props2.disabledDate,
          onAvatarChange = _props2.onAvatarChange,
          isLoadingUpdateProfile = _props2.isLoadingUpdateProfile,
          preview = _props2.preview;
      return external__react__default.a.createElement("div", {
        className: "max-width"
      }, external__react__default.a.createElement("div", {
        className: "edit-general"
      }, external__react__default.a.createElement("div", {
        className: "change-avatar"
      }, preview ? external__react__default.a.createElement("img", {
        alt: "avatar",
        src: preview
      }) : external__react__default.a.createElement("img", {
        alt: "avatar",
        src: userData && userData.avatar ? userData.avatar : unknownUserIcon
      }), external__react__default.a.createElement("div", {
        className: "change-avatar-button"
      }, external__react__default.a.createElement(external__react_dropzone__default.a, {
        className: "container",
        onDrop: onAvatarChange
      }, external__react__default.a.createElement(button__default.a, null, external__react__default.a.createElement("div", {
        className: "ButtonBlackCenter"
      }, "CHANGE AVATAR"))))), external__react__default.a.createElement("div", {
        className: "change-info"
      }, external__react__default.a.createElement("div", {
        className: "form-login"
      }, external__react__default.a.createElement("div", {
        className: "title-info LabelGreyLeft"
      }, "Full Name"), external__react__default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        }
      }, external__react__default.a.createElement(input__default.a, {
        onChange: onNameChange,
        value: userProfile.name,
        suffix: external__react__default.a.createElement("img", {
          className: "img-icon",
          alt: "email",
          src: userIcon
        }),
        placeholder: "Name"
      })), external__react__default.a.createElement("div", {
        className: "title-info LabelGreyLeft"
      }, "Phone"), external__react__default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        }
      }, external__react__default.a.createElement(input__default.a, {
        onChange: onPhoneChange,
        value: userProfile.phone,
        suffix: external__react__default.a.createElement("img", {
          className: "img-icon",
          alt: "email",
          src: phoneIcon
        }),
        placeholder: "Phone"
      })), external__react__default.a.createElement("div", {
        className: "title-info LabelGreyLeft"
      }, "Birthday"), external__react__default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        }
      }, external__react__default.a.createElement(date_picker__default.a, {
        showToday: false,
        disabledDate: disabledDate,
        mode: "time",
        value: userProfile.birthday,
        onChange: onBirthdayChange
      })), external__react__default.a.createElement("div", {
        className: "title-info LabelGreyLeft"
      }, "Gender"), external__react__default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        }
      }, external__react__default.a.createElement(RadioGroup, {
        onChange: onGenderChange,
        value: userProfile.gender
      }, external__react__default.a.createElement(radio__default.a, {
        value: 1
      }, "Male"), external__react__default.a.createElement(radio__default.a, {
        value: 0
      }, "Female"))))), external__react__default.a.createElement("div", {
        className: "save-button"
      }, external__react__default.a.createElement(button__default.a, {
        loading: isLoadingUpdateProfile,
        onClick: handleUpdateProfile,
        type: "primary"
      }, external__react__default.a.createElement("span", {
        className: "ButtonWhiteCenter"
      }, "SAVE PROFILE  ")))));
    }
  }, {
    key: "render",
    value: function render() {
      var userProfile = this.props.userProfile;
      return external__react__default.a.createElement("div", {
        className: "edit-container"
      }, external__react__default.a.createElement("div", {
        className: "edit-header"
      }, external__react__default.a.createElement("div", {
        className: "title-edit DisplayBlackLeft"
      }, "Account Settings")), external__react__default.a.createElement("div", {
        className: "edit-body"
      }, external__react__default.a.createElement(tabs__default.a, {
        defaultActiveKey: "1"
      }, external__react__default.a.createElement(TabPane, {
        tab: "General",
        key: "1"
      }, userProfile && external__react__default.a.createElement("div", {
        className: "edit-content"
      }, this.renderGeneralSetting(userProfile))), external__react__default.a.createElement(TabPane, {
        tab: "Account",
        key: "2"
      }, external__react__default.a.createElement("div", {
        className: "edit-content"
      }, this.renderAccountSetting())), external__react__default.a.createElement(TabPane, {
        tab: "Settings",
        key: "3"
      }, external__react__default.a.createElement("div", {
        className: "edit-content"
      }, external__react__default.a.createElement("div", {
        className: "edit-settings"
      }))))));
    }
  }]);

  return EditProfile;
}(external__react_["Component"]);

/* harmony default export */ var editProfile_EditProfile = (EditProfile_EditProfile);
// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(9);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: ./src/components/editProfile/_editProfile.less
var _editProfile = __webpack_require__(174);
var _editProfile_default = /*#__PURE__*/__webpack_require__.n(_editProfile);

// CONCATENATED MODULE: ./src/components/editProfile/EditProfileContainer.js


function EditProfileContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditProfileContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { EditProfileContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditProfileContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EditProfileContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditProfileContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditProfileContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditProfileContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditProfileContainer__defineProperties(Constructor, staticProps); return Constructor; }

function EditProfileContainer__possibleConstructorReturn(self, call) { if (call && (EditProfileContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return EditProfileContainer__assertThisInitialized(self); }

function EditProfileContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditProfileContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var EditProfileContainer_EditProfileContainer =
/*#__PURE__*/
function (_Component) {
  EditProfileContainer__inherits(EditProfileContainer, _Component);

  function EditProfileContainer(props) {
    var _this;

    EditProfileContainer__classCallCheck(this, EditProfileContainer);

    _this = EditProfileContainer__possibleConstructorReturn(this, (EditProfileContainer.__proto__ || Object.getPrototypeOf(EditProfileContainer)).call(this, props));
    _this.state = {
      preview: "",
      userProfile: {}
    };
    return _this;
  }

  EditProfileContainer__createClass(EditProfileContainer, [{
    key: "onAvatarChange",
    value: function onAvatarChange(e) {
      this.setState({
        userProfile: _objectSpread({}, this.state.userProfile, {
          avatar: e[0]
        }),
        preview: e[0].preview
      });
    }
  }, {
    key: "onNameChange",
    value: function onNameChange(e) {
      this.setState({
        userProfile: _objectSpread({}, this.state.userProfile, {
          name: e.target.value
        })
      });
    }
  }, {
    key: "onPhoneChange",
    value: function onPhoneChange(e) {
      this.setState({
        userProfile: _objectSpread({}, this.state.userProfile, {
          phone: e.target.value
        })
      });
    }
  }, {
    key: "onGenderChange",
    value: function onGenderChange(e) {
      this.setState({
        userProfile: _objectSpread({}, this.state.userProfile, {
          gender: e.target.value
        })
      });
    }
  }, {
    key: "onBirthdayChange",
    value: function onBirthdayChange(date, dateString) {
      this.setState({
        userProfile: _objectSpread({}, this.state.userProfile, {
          birthday: date
        })
      });
    }
  }, {
    key: "handleChangePassword",
    value: function handleChangePassword(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this2.props.changePassword(values);
        }
      });
    }
  }, {
    key: "handleUpdateProfile",
    value: function handleUpdateProfile() {
      this.props.updateProfile(_objectSpread({}, this.state.userProfile, {
        birthday: external__moment__default()(this.state.userProfile.birthday).format("YYYY/MM/DD")
      }));
    }
  }, {
    key: "disabledDate",
    value: function disabledDate(current) {
      // Can not select days before today and today
      return current && current > external__moment__default()().endOf('day');
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      sessionStorage.setItem("reloadUrl", window.location.href);
      if (this.props.userData) this.setState({
        userProfile: _objectSpread({}, this.props.userData, {
          birthday: external__moment__default()(this.props.userData.birthday),
          avatar: null
        })
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.userData && !nextProps.isLoadingUpdateProfile) {
        this.setState({
          userProfile: _objectSpread({}, nextProps.userData, {
            birthday: external__moment__default()(nextProps.userData.birthday),
            avatar: null
          })
        });
      }
    }
  }, {
    key: "checkPassword",
    value: function checkPassword(rule, value, callback) {
      var form = this.props.form;

      if (value && value !== form.getFieldValue('new_password')) {
        var a = "Two passwords that you've entered are inconsistent";
        callback(a);
      } else {
        callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _editProfile_default.a
        }
      }), external__react__default.a.createElement(editProfile_EditProfile, _extends({
        onAvatarChange: function onAvatarChange(e) {
          return _this3.onAvatarChange(e);
        },
        handleChangePassword: function handleChangePassword(e) {
          return _this3.handleChangePassword(e);
        },
        checkPassword: function checkPassword(rule, value, callback) {
          return _this3.checkPassword(rule, value, callback);
        },
        disabledDate: function disabledDate(e) {
          return _this3.disabledDate(e);
        },
        onBirthdayChange: function onBirthdayChange(date, dateString) {
          return _this3.onBirthdayChange(date, dateString);
        },
        onNameChange: function onNameChange(e) {
          return _this3.onNameChange(e);
        },
        onGenderChange: function onGenderChange(e) {
          return _this3.onGenderChange(e);
        },
        onPhoneChange: function onPhoneChange(e) {
          return _this3.onPhoneChange(e);
        },
        handleUpdateProfile: function handleUpdateProfile(e) {
          return _this3.handleUpdateProfile(e);
        }
      }, this.state, this.props)));
    }
  }]);

  return EditProfileContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    userData: state.profileReducer.userData,
    isLoadingUpdateProfile: state.profileReducer.isLoadingUpdateProfile,
    isLoadingChangePassword: state.profileReducer.isLoadingChangePassword
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    updateProfile: profileApi["c" /* updateProfile */],
    changePassword: profileApi["a" /* changePassword */]
  }, dispatch);
}
/* harmony default export */ var editProfile_EditProfileContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(EditProfileContainer_EditProfileContainer)));
// CONCATENATED MODULE: ./pages/edit.js

/* harmony default export */ var edit = __webpack_exports__["default"] = (editProfile_EditProfileContainer);

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = ".edit-container {\n  background: #fff;\n  padding-top: 68px;\n}\n.edit-container .edit-header {\n  max-width: 540px;\n  margin: 0 auto;\n  padding: 40px;\n}\n.edit-container .edit-body {\n  background-color: #ffffff;\n}\n.edit-container .edit-body .ant-tabs-bar {\n  max-width: 540px;\n  margin: 0 auto;\n}\n.edit-container .edit-body .ant-tabs-bar .ant-tabs-tab {\n  width: 30%;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n}\n.edit-container .edit-body .ant-tabs-bar .ant-tabs-nav {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.edit-container .edit-body .ant-tabs-ink-bar {\n  left: 100px;\n}\n.edit-container .edit-body .max-width {\n  margin: 0 auto;\n  max-width: 540px;\n}\n.edit-container .edit-body .edit-content {\n  min-height: 600px;\n  background-color: #fafafa;\n  padding: 40px;\n}\n.edit-container .edit-body .edit-content .edit-general {\n  display: flex;\n  flex-direction: column;\n}\n.edit-container .edit-body .edit-content .edit-general .change-avatar {\n  display: flex;\n  align-items: center;\n}\n.edit-container .edit-body .edit-content .edit-general .change-avatar img {\n  height: 80px;\n  margin-right: 24px;\n  width: 80px;\n  border-radius: 50%;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login {\n  margin-top: 30px;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login .ant-calendar-picker {\n  width: 100%;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login .ant-calendar-picker input {\n  background-color: #fcfcfc;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login .ant-calendar-picker .ant-calendar-picker-icon {\n  right: 22px;\n  margin-top: -12px;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login .ant-calendar-picker .ant-calendar-picker-icon::after {\n  font-size: 24px;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login .title-info {\n  padding-bottom: 8px;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login .img-icon {\n  width: 24px;\n}\n.edit-container .edit-body .edit-content .edit-general .change-info .form-login input {\n  border-radius: 6px;\n  height: 45px;\n}\n.edit-container .edit-body .edit-content .edit-general .save-button button {\n  width: 200px;\n  height: 48px;\n}\n";

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

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(21);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/notification"
var notification_ = __webpack_require__(36);
var notification__default = /*#__PURE__*/__webpack_require__.n(notification_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/actions/types.js
var types = __webpack_require__(2);

// CONCATENATED MODULE: ./src/actions/profileAction.js
 // Get user action

function requestGetUser(isLoadingUser) {
  return {
    type: types["_30" /* REQUEST_GET_USER */],
    isLoadingUser: isLoadingUser
  };
}
function getUserSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["S" /* GET_USER_SUCCESS */],
      response: response
    });
  };
}
function getUserError(error) {
  return {
    type: types["L" /* GET_USER_ERROR */],
    error: error
  };
} // Update user information action

function requestUpdateProfile(isLoadingUpdateProfile) {
  return {
    type: types["_49" /* REQUEST_UPDATE_PROFILE */],
    isLoadingUpdateProfile: isLoadingUpdateProfile
  };
}
function updateProfileSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["_76" /* UPDATE_PROFILE_SUCCESS */],
      response: response
    });
  };
}
function updateProfileError(response) {
  return function (dispatch) {
    dispatch({
      type: types["_75" /* UPDATE_PROFILE_ERROR */],
      response: response
    });
  };
} // Change password 

function requestChangePassword(isLoadingChangePassword) {
  return {
    type: types["_14" /* REQUEST_CHANGE_PASSWORD */],
    isLoadingChangePassword: isLoadingChangePassword
  };
}
function changePasswordSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types["d" /* CHANGE_PASSWORD_SUCCESS */],
      response: response
    });
  };
}
function changePasswordError(response) {
  return function (dispatch) {
    dispatch({
      type: types["c" /* CHANGE_PASSWORD_ERROR */],
      response: response
    });
  };
}
// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(17);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "react-cookie"
var external__react_cookie_ = __webpack_require__(10);
var external__react_cookie__default = /*#__PURE__*/__webpack_require__.n(external__react_cookie_);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(13);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(12);

// CONCATENATED MODULE: ./src/api/profileApi.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return profileApi_getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return profileApi_updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileApi_changePassword; });








var cookies = new external__react_cookie_["Cookies"](); // Get user information

var profileApi_getUser = function getUser() {
  return function (dispatch) {
    dispatch(requestGetUser(true));
    external__jquery__default.a.ajax({
      type: 'GET',
      url: config["a" /* apiUrl */] + 'api/user/show',
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(getUserSuccess(response));
      },
      error: function error(_error) {
        dispatch(getUserError(_error));
      }
    });
  };
}; // Update user information

var profileApi_updateProfile = function updateProfile(data) {
  return function (dispatch) {
    dispatch(requestUpdateProfile(true));
    var form = new FormData();
    form.append('name', data.name);
    form.append('phone', data.phone);
    form.append('gender', data.gender);
    form.append('birthday', data.birthday);
    form.append('_method', "PUT");
    if (data.avatar) form.append('avatar', data.avatar);
    external__axios__default()({
      method: 'post',
      url: config["a" /* apiUrl */] + 'api/user',
      data: form,
      headers: {
        'Authorization': "Bearer " + cookies.get('token', {
          doNotParse: true
        }),
        'Content-Type': 'multipart/form-data',
        "Accept": "application/json"
      }
    }).then(function (response) {
      //handle success
      dispatch(updateProfileSuccess(response.data));

      notification__default.a.open({
        message: 'Success',
        description: "Successfully updated profile",
        icon: external__react__default.a.createElement(icon__default.a, {
          type: "check-circle-o",
          style: {
            color: 'rgb(76, 218, 100)'
          }
        })
      });
    }).catch(function (response) {
      dispatch(updateProfileError(response));

      notification__default.a.open({
        message: 'Opps!',
        description: "Can not update profile",
        icon: external__react__default.a.createElement(icon__default.a, {
          type: "close-circle",
          style: {
            color: '#f32126'
          }
        })
      });
    });
  };
}; //Change user password 

var profileApi_changePassword = function changePassword(data) {
  return function (dispatch) {
    dispatch(requestChangePassword(true));
    external__jquery__default.a.ajax({
      type: 'PATCH',
      url: config["a" /* apiUrl */] + 'api/user',
      headers: {
        "Accept": "application/json"
      },
      data: data,
      success: function success(response, status, xhr) {
        dispatch(changePasswordSuccess(response));

        notification__default.a.open({
          message: 'Success',
          description: "Successfully updated new password",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            }
          })
        });
      },
      error: function error(_error2) {
        dispatch(changePasswordError(_error2));

        notification__default.a.open({
          message: 'Opps!',
          description: "Can not update password",
          icon: external__react__default.a.createElement(icon__default.a, {
            type: "close-circle",
            style: {
              color: '#f32126'
            }
          })
        });
      }
    });
  };
};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });