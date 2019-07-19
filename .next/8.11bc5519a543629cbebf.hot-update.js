webpackHotUpdate(8,{

/***/ "./node_modules/antd/lib/col/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Col;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/staticPage/AboutTruckster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_slick__ = __webpack_require__("./node_modules/react-slick/lib/index.js");
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

/***/ })

})
//# sourceMappingURL=8.11bc5519a543629cbebf.hot-update.js.map