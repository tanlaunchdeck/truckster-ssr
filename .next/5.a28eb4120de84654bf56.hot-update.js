webpackHotUpdate(5,{

/***/ "./src/components/common/articleCard/ArticleCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/common/articleCard/ArticleCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var breweryIcon = '/static/images/brewery-marker-icon.png';
var imageBreweryPlaceholder = "/static/images/image_brewery_placeholder.png";

var ArticleCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ArticleCard, _Component);

  function ArticleCard(props) {
    var _this;

    _classCallCheck(this, ArticleCard);

    _this = _possibleConstructorReturn(this, (ArticleCard.__proto__ || Object.getPrototypeOf(ArticleCard)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(ArticleCard, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "article-card-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "example-2 card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(data.image, ")")
        },
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "title ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, data.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "detail Body-1RegularWhiteLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, data.description))))));
    }
  }]);

  return ArticleCard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ArticleCard);

/***/ }),

/***/ "./src/components/common/articleCard/_articleCard.less":
/***/ (function(module, exports) {

module.exports = ".article-card-container {\n  padding-top: 56px;\n  width: 350px;\n  padding: 0 16px;\n  margin-top: 24px;\n}\n.article-card-container .card .menu-content {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.article-card-container .card .menu-content li {\n  display: inline-block;\n}\n.article-card-container .card .menu-content a {\n  color: #fff;\n}\n.article-card-container .card .menu-content span {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  font-size: 10px;\n  font-weight: 700;\n  font-family: 'Open Sans';\n  transform: translate(-50%, 0);\n}\n.article-card-container .card .wrapper {\n  background-color: #fff;\n  min-height: 440px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.article-card-container .card .wrapper:hover .data {\n  transform: translateY(-280px);\n}\n.article-card-container .card .wrapper .cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(69, 69, 69, 0), #212121);\n}\n.article-card-container .card .data {\n  position: absolute;\n  bottom: -220px;\n  width: 100%;\n  transform: translateY(calc(71px));\n  transition: transform 0.3s;\n}\n.article-card-container .card .data .content {\n  padding: 1em;\n  position: relative;\n  z-index: 1;\n}\n.article-card-container .card .data .content .detail {\n  white-space: pre-line;\n}\n.article-card-container .card .author {\n  font-size: 12px;\n}\n.article-card-container .card .text {\n  height: 70px;\n  margin: 0;\n}\n.article-card-container .card input[type='checkbox'] {\n  display: none;\n}\n.article-card-container .card input[type='checkbox']:checked + .menu-content {\n  transform: translateY(-60px);\n}\n.article-card-container .example-2 .title {\n  font-size: 20px;\n  font-weight: 800;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: -0.08px;\n  color: #ffffff;\n}\n.article-card-container .example-2 .wrapper {\n  background: center / cover no-repeat;\n}\n.article-card-container .example-2 .wrapper:hover .menu-content span {\n  transform: translate(-50%, -10px);\n  opacity: 1;\n}\n.article-card-container .example-2 .data {\n  height: 370px;\n  color: #fff;\n  transform: translateY(calc(74px));\n}\n.article-card-container .example-2 .button::after {\n  content: '\\2192';\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  transition: all 0.3s;\n}\n.article-card-container .example-2 .button:hover::after {\n  transform: translate(5px, -50%);\n  opacity: 1;\n}\n";

/***/ })

})
//# sourceMappingURL=5.a28eb4120de84654bf56.hot-update.js.map