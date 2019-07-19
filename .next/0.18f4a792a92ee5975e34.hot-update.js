webpackHotUpdate(0,{

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
/* unused harmony export googleApi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return googleClientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return facebookAppID; });
//export const apiUrl = "http://52.14.177.231/"
var apiUrl = "https://test.gotruckster.com/";
var googleApi = "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A";
var googleClientID = "617001021912-4jd9lv4ut3nig7vrchouji9076rjs8pd.apps.googleusercontent.com";
var facebookAppID = "2077048179191099";

/***/ }),

/***/ "./global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getSchedule;
/* harmony export (immutable) */ __webpack_exports__["b"] = getEventTime;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataInitial; });
/* unused harmony export getPageData */
/* unused harmony export getPageDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json__ = __webpack_require__("./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var cookies = new __WEBPACK_IMPORTED_MODULE_2_react_cookie__["Cookies"]();

var https = __webpack_require__("./node_modules/https-browserify/index.js");

function getSchedule(data) {
  var schudeles = [];
  data.forEach(function (calendarItem) {
    switch (calendarItem.frequency && calendarItem.frequency.name) {
      case "ONCE":
        {
          schudeles.push(_objectSpread({}, calendarItem, {
            timeDisplay: calendarItem.end_time,
            start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).toDate(),
            end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).toDate()
          }));
          break;
        }

      case "DAILY":
        {
          //Get day of pairing of the week
          var interval = calendarItem.interval ? calendarItem.interval : 1;
          var repeated = calendarItem.times_repeated ? calendarItem.times_repeated : 100;

          for (var i = 0; i < repeated; ++i) {
            var tempDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).add(i * interval, 'day'),
                tempDate1 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).add(i * interval, 'w');
            schudeles.push(_objectSpread({}, calendarItem, {
              timeDisplay: tempDate.format("YYYY-MM-DD h:mm a"),
              start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(tempDate1.format("YYYY-MM-DD h:mm a"), "YYYY-MM-DD h:mm a").toDate(),
              end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(tempDate1.format("YYYY-MM-DD") + ' ' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).format("h:mm a"), "YYYY-MM-DD h:mm a").toDate()
            }));
          }

          break;
        }

      case "WEEKLY":
        {
          //Get day of pairing of the week
          var _interval = calendarItem.interval ? calendarItem.interval : 1;

          var _repeated = calendarItem.times_repeated ? calendarItem.times_repeated : 100;

          for (var _i = 0; _i < _repeated; ++_i) {
            var _tempDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).add(_i * _interval, 'w'),
                _tempDate2 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).add(_i * _interval, 'w');

            schudeles.push(_objectSpread({}, calendarItem, {
              timeDisplay: _tempDate.format("YYYY-MM-DD h:mm a"),
              start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate2.format("YYYY-MM-DD h:mm a"), "YYYY-MM-DD h:mm a").toDate(),
              end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate2.format("YYYY-MM-DD") + ' ' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).format("h:mm a"), "YYYY-MM-DD h:mm a").toDate()
            }));
          }

          break;
        }

      case "MONTHLY":
        {
          var _interval2 = calendarItem.interval ? calendarItem.interval : 1;

          var _repeated2 = calendarItem.times_repeated ? calendarItem.times_repeated : 2000;

          for (var j = 0; j < _repeated2; ++j) {
            var _tempDate3 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).add(j * _interval2, 'M'),
                _tempDate4 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.start_time).add(j * _interval2, 'w');

            schudeles.push(_objectSpread({}, calendarItem, {
              timeDisplay: _tempDate3.format("YYYY-MM-DD h:mm a"),
              start: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate4.format("YYYY-MM-DD h:mm a"), "YYYY-MM-DD h:mm a").toDate(),
              end: __WEBPACK_IMPORTED_MODULE_0_moment___default()(_tempDate4.format("YYYY-MM-DD") + ' ' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(calendarItem.end_time).format("h:mm a"), "YYYY-MM-DD h:mm a").toDate()
            }));
          }

          break;
        }

      default:
        break;
    }
  });
  return schudeles;
}
function getEventTime(data) {
  var schudeles = [];

  switch (data.frequency.name) {
    case "ONCE":
      {
        schudeles.push(data.end_time);
        break;
      }

    case "DAILY":
      {
        var interval = data.interval ? data.interval : 1;
        var repeated = data.times_repeated ? data.times_repeated : 100; //Get day of pairing of the week

        for (var _i2 = 0; _i2 < repeated; ++_i2) {
          var tempDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.end_time).add(_i2 * interval, 'day');
          schudeles.push(tempDate.format("YYYY-MM-DD h:mm a"));
        }

        break;
      }

    case "WEEKLY":
      {
        var _interval3 = data.interval ? data.interval : 1;

        var _repeated3 = data.times_repeated ? data.times_repeated : 100; //Get day of pairing of the week


        for (var i = 0; i < _repeated3; ++i) {
          var _tempDate5 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.end_time).add(i * _interval3, 'w');

          schudeles.push(_tempDate5.format("YYYY-MM-DD h:mm a"));
        }

        break;
      }

    case "MONTHLY":
      {
        var _interval4 = data.interval ? data.interval : 1;

        var _repeated4 = data.times_repeated ? data.times_repeated : 100;

        for (var j = 0; j < _repeated4; ++j) {
          var _tempDate6 = __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.end_time).add(j * _interval4, 'M');

          schudeles.push(_tempDate6.format("YYYY-MM-DD h:mm a"));
        }

        break;
      }

    default:
      break;
  }

  return schudeles;
}
var getDataInitial = function getDataInitial(url, token) {
  var header = {
    "Accept": "application/json"
  };

  if (token) {
    header = {
      'Authorization': "Bearer " + token,
      "Accept": "application/json"
    };
  }

  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'get',
    url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + url,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: header
  }).then(function (response) {
    return response.data;
  }).catch(function (response) {
    return null;
  });
};
var getPageData = function getPageData(page) {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'get',
    url: "https://cms.gotruckster.com/wp-json/wp/v2/posts?page=" + page,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: {
      "Accept": "application/json"
    }
  }).then(function (response) {
    return __WEBPACK_IMPORTED_MODULE_3_circular_json___default.a.stringify(response);
  }).catch(function (error) {});
};
var getPageDetail = function getPageDetail(slug) {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'get',
    url: "https://cms.gotruckster.com/wp-json/wp/v2/posts?slug=" + slug,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: {
      "Accept": "application/json"
    }
  }).then(function (response) {
    return __WEBPACK_IMPORTED_MODULE_3_circular_json___default.a.stringify(response);
  }).catch(function (error) {});
};

/***/ }),

/***/ "./node_modules/rc-menu/es/DOMWrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_resize_observer_polyfill__ = __webpack_require__("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SubMenu__ = __webpack_require__("./node_modules/rc-menu/es/SubMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");












var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Fix ssr
if (canUseDOM) {
  __webpack_require__("./node_modules/mutationobserver-shim/dist/mutationobserver.min.js");
}

var DOMWrap = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(DOMWrap, _React$Component);

  function DOMWrap() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, DOMWrap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      lastVisibleIndex: undefined
    }, _this.getOverflowedSubMenuItem = function (keyPrefix, overflowedItems, renderPlaceholder) {
      var _this$props = _this.props,
          overflowedIndicator = _this$props.overflowedIndicator,
          level = _this$props.level,
          mode = _this$props.mode,
          prefixCls = _this$props.prefixCls,
          theme = _this$props.theme,
          propStyle = _this$props.style;

      if (level !== 1 || mode !== 'horizontal') {
        return null;
      }
      // put all the overflowed item inside a submenu
      // with a title of overflow indicator ('...')
      var copy = _this.props.children[0];

      var _copy$props = copy.props,
          throwAway = _copy$props.children,
          title = _copy$props.title,
          eventKey = _copy$props.eventKey,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_copy$props, ['children', 'title', 'eventKey']);

      var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, propStyle);
      var key = keyPrefix + '-overflowed-indicator';

      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, {
          display: 'none'
        });
      } else if (renderPlaceholder) {
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, {
          visibility: 'hidden',
          // prevent from taking normal dom space
          position: 'absolute'
        });
        key = key + '-placeholder';
      }

      var popupClassName = theme ? prefixCls + '-' + theme : '';

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9__SubMenu__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          title: overflowedIndicator,
          className: prefixCls + '-overflowed-submenu',
          popupClassName: popupClassName
        }, rest, {
          key: key,
          eventKey: keyPrefix + '-overflowed-indicator',
          disabled: false,
          style: style
        }),
        overflowedItems
      );
    }, _this.setChildrenWidthAndResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }
      var ul = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(_this);

      if (!ul) {
        return;
      }

      var ulChildrenNodes = ul.children;

      if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
        return;
      }

      _this.childrenSizes = [];
      var children = _this.props.children;


      var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1];

      // need last overflowed indicator for calculating length;
      lastOverflowedIndicatorPlaceholder.style.width = 'auto';
      _this.childrenSizes = children.map(function (c, i) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__util__["c" /* getWidth */])(ul.children[2 * i + 1]);
      });

      _this.overflowedIndicatorWidth = Object(__WEBPACK_IMPORTED_MODULE_10__util__["c" /* getWidth */])(ul.children[ul.children.length - 1]);
      _this.originalTotalWidth = _this.childrenSizes.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
      _this.handleResize();

      // prevent the overflowed indicator from taking space;
      lastOverflowedIndicatorPlaceholder.style.width = 0;
    }, _this.resizeObserver = null, _this.mutationObserver = null, _this.originalTotalWidth = 0, _this.overflowedItems = [], _this.childrenSizes = [], _this.handleResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }

      var ul = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(_this);
      if (!ul) {
        return;
      }
      var width = Object(__WEBPACK_IMPORTED_MODULE_10__util__["c" /* getWidth */])(ul);

      _this.overflowedItems = [];
      var currentSumWidth = 0;

      // index for last visible child in horizontal mode
      var lastVisibleIndex = undefined;

      if (_this.originalTotalWidth > width) {
        lastVisibleIndex = -1;

        _this.childrenSizes.forEach(function (liWidth) {
          currentSumWidth += liWidth;
          if (currentSumWidth + _this.overflowedIndicatorWidth <= width) {
            lastVisibleIndex++;
          }
        });
      }

      _this.setState({ lastVisibleIndex: lastVisibleIndex });
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  DOMWrap.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.setChildrenWidthAndResize();
    if (this.props.level === 1 && this.props.mode === 'horizontal') {
      var menuUl = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
      if (!menuUl) {
        return;
      }
      this.resizeObserver = new __WEBPACK_IMPORTED_MODULE_8_resize_observer_polyfill__["a" /* default */](function (entries) {
        entries.forEach(_this2.setChildrenWidthAndResize);
      });

      [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
        _this2.resizeObserver.observe(el);
      });

      if (typeof MutationObserver !== 'undefined') {
        this.mutationObserver = new MutationObserver(function () {
          _this2.resizeObserver.disconnect();
          [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
            _this2.resizeObserver.observe(el);
          });
          _this2.setChildrenWidthAndResize();
        });
        this.mutationObserver.observe(menuUl, { attributes: false, childList: true, subTree: false });
      }
    }
  };

  DOMWrap.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.resizeObserver.disconnect();
    }
  };

  // memorize rendered menuSize


  // original scroll size of the list


  // copy of overflowed items


  // cache item of the original items (so we can track the size and order)


  DOMWrap.prototype.renderChildren = function renderChildren(children) {
    var _this3 = this;

    // need to take care of overflowed items in horizontal mode
    var lastVisibleIndex = this.state.lastVisibleIndex;

    return (children || []).reduce(function (acc, childNode, index) {
      var item = childNode;
      if (_this3.props.mode === 'horizontal') {
        var overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, []);
        if (lastVisibleIndex !== undefined && _this3.props.className.indexOf(_this3.props.prefixCls + '-root') !== -1) {
          if (index > lastVisibleIndex) {
            item = __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(childNode,
            // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
            { style: { visibility: 'hidden' }, eventKey: childNode.props.eventKey + '-hidden' });
          }
          if (index === lastVisibleIndex + 1) {
            _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
              return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(c,
              // children[index].key will become '.$key' in clone by default,
              // we have to overwrite with the correct key explicitly
              { key: c.props.eventKey, mode: 'vertical-left' });
            });

            overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, _this3.overflowedItems);
          }
        }

        var ret = [].concat(acc, [overflowed, item]);

        if (index === children.length - 1) {
          // need a placeholder for calculating overflowed indicator width
          ret.push(_this3.getOverflowedSubMenuItem(childNode.props.eventKey, [], true));
        }
        return ret;
      }
      return [].concat(acc, [item]);
    }, []);
  };

  DOMWrap.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        overflowedIndicator = _props.overflowedIndicator,
        mode = _props.mode,
        level = _props.level,
        Tag = _props.tag,
        children = _props.children,
        theme = _props.theme,
        rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['hiddenClassName', 'visible', 'prefixCls', 'overflowedIndicator', 'mode', 'level', 'tag', 'children', 'theme']);

    if (!visible) {
      rest.className += ' ' + hiddenClassName;
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      Tag,
      rest,
      this.renderChildren(this.props.children)
    );
  };

  return DOMWrap;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

DOMWrap.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,
  mode: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  prefixCls: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  level: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  theme: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  overflowedIndicator: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,
  visible: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  hiddenClassName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object
};

DOMWrap.defaultProps = {
  tag: 'div',
  className: ''
};

/* harmony default export */ __webpack_exports__["a"] = (DOMWrap);

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/api/authApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginSocial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__ = __webpack_require__("./src/actions/authAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__ = __webpack_require__("./src/actions/toggleAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_cookie__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var cookies = new __WEBPACK_IMPORTED_MODULE_4_react_cookie__["Cookies"](); // Sign Up api

var signUp = function signUp(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["i" /* requestSignUp */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/register',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["m" /* signUpSuccess */])(response));
        cookies.set('token', response.token, {
          path: '/'
        });
        window.location.replace("/");
      },
      error: function error(_error) {
        if (_error.responseJSON.errors.email) dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["l" /* signUpError */])(_objectSpread({}, _error, {
          status: 404
        })));else dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["l" /* signUpError */])(_objectSpread({}, _error, {
          status: 422
        })));
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__["c" /* toggleErrorSignUpPopOver */])());
      }
    });
  };
}; // Sign In api

var signIn = function signIn(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["h" /* requestSignIn */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/login',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__["f" /* toggleSignInModal */])());
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["k" /* signInSuccess */])(response));
        cookies.set('token', response.token, {
          path: '/'
        });
        window.location.replace("/");
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["j" /* signInError */])(_error2));
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_toggleAction__["b" /* toggleErrorSignInPopOver */])());
      }
    });
  };
}; // Log out api

var logOut = function logOut() {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["f" /* requestLogOut */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/user/show',
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        cookies.remove('token', {
          path: '/'
        });
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["c" /* logOutSuccess */])());
        window.location.replace("/");
      },
      error: function error(_error3) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["b" /* logOutError */])(_error3));
      }
    });
  };
}; // Login social api

var loginSocial = function loginSocial(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["g" /* requestLoginSocial */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + 'api/social-login/' + data.provider,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        token: data.token
      }),
      success: function success(response, status, xhr) {
        cookies.set('token', response.token, {
          path: '/'
        });
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["e" /* loginSocialSuccess */])(response));
        window.location.replace("/");
      },
      error: function error(_error4) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_authAction_js__["d" /* loginSocialError */])(_error4));
      }
    });
  };
};

/***/ }),

/***/ "./src/api/breweryApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchBrewery; });
/* unused harmony export getBreweryDetail */
/* unused harmony export getSuggestBrewery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__ = __webpack_require__("./src/actions/breweryAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

 // import { notification, Icon } from 'antd'





var cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie__["Cookies"]();
var searchBrewery = function searchBrewery(params, value, page) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["g" /* requestSearchBrewery */])(true));
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()({
                  method: 'GET',
                  url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/breweries?".concat(params, "=").concat(value, "&per_page=12&page=").concat(page),
                  headers: {
                    "Accept": "application/json"
                  }
                }).then(function (response) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["i" /* searchBrewerySuccess */])(_objectSpread({}, response.data, {
                    params: params
                  })));
                }).catch(function (error) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["h" /* searchBreweryError */])(error));
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}; // Get brewery detail api

var getBreweryDetail = function getBreweryDetail(breweryId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["e" /* requestGetBreweryDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/breweries/" + breweryId,
      headers: {
        "Accept": "application/json"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["b" /* getBreweryDetailSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["a" /* getBreweryDetailError */])(_error));
      }
    });
  };
}; // get suggest truck api

var getSuggestBrewery = function getSuggestBrewery(type) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["f" /* requestGetSuggestBrewery */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/breweries/".concat(type, "/suggests"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["d" /* getSuggestBrewerySuccess */])(response));
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_breweryAction_js__["c" /* getSuggestBreweryError */])(_error2));
      }
    });
  };
};

/***/ }),

/***/ "./src/api/profileApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });
/* unused harmony export updateProfile */
/* unused harmony export changePassword */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__ = __webpack_require__("./node_modules/antd/lib/notification/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__ = __webpack_require__("./src/actions/profileAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__("./config.js");


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/api/profileApi.js";






var cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie__["Cookies"](); // Get user information

var getUser = function getUser() {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["f" /* requestGetUser */])(true));
    __WEBPACK_IMPORTED_MODULE_6_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* apiUrl */] + 'api/user/show',
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', {
          doNotParse: true
        }));
      },
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["d" /* getUserSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["c" /* getUserError */])(_error));
      }
    });
  };
}; // Update user information

var updateProfile = function updateProfile(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["g" /* requestUpdateProfile */])(true));
    var form = new FormData();
    form.append('name', data.name);
    form.append('phone', data.phone);
    form.append('gender', data.gender);
    form.append('birthday', data.birthday);
    form.append('_method', "PUT");
    if (data.avatar) form.append('avatar', data.avatar);
    __WEBPACK_IMPORTED_MODULE_4_axios___default()({
      method: 'post',
      url: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* apiUrl */] + 'api/user',
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
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["i" /* updateProfileSuccess */])(response.data));

      __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
        message: 'Success',
        description: "Successfully updated profile",
        icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
          type: "check-circle-o",
          style: {
            color: 'rgb(76, 218, 100)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        })
      });
    }).catch(function (response) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["h" /* updateProfileError */])(response));

      __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
        message: 'Opps!',
        description: "Can not update profile",
        icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
          type: "close-circle",
          style: {
            color: '#f32126'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        })
      });
    });
  };
}; //Change user password 

var changePassword = function changePassword(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["e" /* requestChangePassword */])(true));
    __WEBPACK_IMPORTED_MODULE_6_jquery___default.a.ajax({
      type: 'PATCH',
      url: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* apiUrl */] + 'api/user',
      headers: {
        "Accept": "application/json"
      },
      data: data,
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["b" /* changePasswordSuccess */])(response));

        __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
          message: 'Success',
          description: "Successfully updated new password",
          icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
            type: "check-circle-o",
            style: {
              color: 'rgb(76, 218, 100)'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          })
        });
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_profileAction_js__["a" /* changePasswordError */])(_error2));

        __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
          message: 'Opps!',
          description: "Can not update password",
          icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
            type: "close-circle",
            style: {
              color: '#f32126'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          })
        });
      }
    });
  };
};

/***/ }),

/***/ "./src/api/searchApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_searchAction__ = __webpack_require__("./src/actions/searchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
 // import { notification, Icon } from 'antd'


 // Get search api

var search = function search(keyword) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_searchAction__["b" /* requestSearch */])(true));
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiUrl */] + "api/consumer/v1/search?keyword=" + keyword,
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_searchAction__["d" /* searchSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_searchAction__["c" /* searchError */])(_error));
      }
    });
  };
};

/***/ }),

/***/ "./src/api/truckApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchTruck; });
/* unused harmony export getTruckDetail */
/* unused harmony export getTruckMenu */
/* unused harmony export getSuggestTruck */
/* unused harmony export getRecommenedTruck */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCuisineList; });
/* unused harmony export getAlbumDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__ = __webpack_require__("./src/actions/truckAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var https = __webpack_require__("./node_modules/https-browserify/index.js"); // import { notification, Icon } from 'antd'





var cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie__["Cookies"](); // Search truck api

var searchTruck = function searchTruck(params, value, page) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["s" /* requestSearchTruck */])(true));
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()({
                  method: 'GET',
                  url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks?".concat(params, "=").concat(value, "&page=").concat(page),
                  headers: {
                    "Accept": "application/json"
                  }
                }).then(function (response) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["u" /* searchTruckSuccess */])(_objectSpread({}, response.data, {
                    params: params
                  })));
                }).catch(function (error) {
                  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["t" /* searchTruckError */])(error));
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}; // Get truck detail api

var getTruckDetail = function getTruckDetail(truckId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["q" /* requestGetTruckDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_2_axios___default()({
      method: 'get',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/" + truckId,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      headers: {
        "Accept": "application/json"
      }
    }).then(function (response) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["j" /* getTruckDetailSuccess */])(response.data));
    }).catch(function (error) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["i" /* getTruckDetailError */])(error));
    });
  };
}; // Get truck menu api 

var getTruckMenu = function getTruckMenu(truckId) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["r" /* requestGetTruckMenu */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/foodtrucks/".concat(truckId, "/menus"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["l" /* getTruckMenuSuccess */])(response));
      },
      error: function error(_error) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["k" /* getTruckMenuError */])(_error));
      }
    });
  };
}; // get suggest truck api

var getSuggestTruck = function getSuggestTruck(params) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["p" /* requestGetSuggestTruck */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/".concat(params, "/suggests"),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["h" /* getSuggestTruckSuccess */])(response));
      },
      error: function error(_error2) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["g" /* getSuggestTruckError */])(_error2));
      }
    });
  };
}; // get caltering recommended truck api

var getRecommenedTruck = function getRecommenedTruck() {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["o" /* requestGetRecommendTruck */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/recommendation-catering",
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["f" /* getRecommendTruckSuccess */])(response));
      },
      error: function error(_error3) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["e" /* getRecommendTruckError */])(_error3));
      }
    });
  };
};
var getCuisineList = function getCuisineList(page) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["n" /* requestGetCuisineList */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/cuisine",
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["d" /* getCuisineListSuccess */])(response));
      },
      error: function error(_error4) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["c" /* getCuisineListError */])(_error4));
      }
    });
  };
};
var getAlbumDetail = function getAlbumDetail(data) {
  return function (dispatch) {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["m" /* requestGetAlbumDetail */])(true));
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax({
      type: 'GET',
      url: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "api/consumer/v1/foodtrucks/".concat(data.truckID, "/album/").concat(data.albumID),
      headers: {
        "Accept": "application/json"
      },
      success: function success(response, status, xhr) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["b" /* getAlbumDetailSuccess */])(response));
      },
      error: function error(_error5) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_truckAction_js__["a" /* getAlbumDetailError */])(_error5));
      }
    });
  };
};

/***/ }),

/***/ "./src/components/header/HeaderContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_notification__ = __webpack_require__("./node_modules/antd/lib/notification/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__("./src/components/header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_announceModal_AnnounceModal__ = __webpack_require__("./src/components/common/announceModal/AnnounceModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_shareModal_ShareModal__ = __webpack_require__("./src/components/common/shareModal/ShareModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__ = __webpack_require__("./src/actions/toggleAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signIn_SignInModalContainer__ = __webpack_require__("./src/components/signIn/SignInModalContainer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signUp_SignUpModalContainer__ = __webpack_require__("./src/components/signUp/SignUpModalContainer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgot_ForgotModalContainer__ = __webpack_require__("./src/components/forgot/ForgotModalContainer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_truckApi__ = __webpack_require__("./src/api/truckApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_breweryApi__ = __webpack_require__("./src/api/breweryApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_searchApi__ = __webpack_require__("./src/api/searchApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__api_authApi__ = __webpack_require__("./src/api/authApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data__ = __webpack_require__("./src/components/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions_searchAction__ = __webpack_require__("./src/actions/searchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions_authAction__ = __webpack_require__("./src/actions/authAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_less__ = __webpack_require__("./src/components/header/_header.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__header_less__);

var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/header/HeaderContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var HeaderContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderContainer, _Component);

  function HeaderContainer(props) {
    var _this;

    _classCallCheck(this, HeaderContainer);

    _this = _possibleConstructorReturn(this, (HeaderContainer.__proto__ || Object.getPrototypeOf(HeaderContainer)).call(this, props));
    _this.state = {
      visibleDrawer: false,
      searchValue: "",
      result: [],
      flagSearch: false,
      typing: false,
      typingTimeout: 0
    };
    return _this;
  }

  _createClass(HeaderContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          getCuisineList = _props.getCuisineList,
          checkLogin = _props.checkLogin;
      getCuisineList();
      checkLogin();

      __WEBPACK_IMPORTED_MODULE_0_antd_lib_notification___default.a.config({
        placement: 'bottomRight',
        duration: 3
      });
    }
  }, {
    key: "handleOpenMenu",
    value: function handleOpenMenu() {
      this.setState({
        visibleDrawer: !this.state.visibleDrawer
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.truckSearchResult && nextProps.brewerySearchResult) {
        var truckSearch = [],
            brewerySearch = [];
        nextProps.brewerySearchResult.forEach(function (item) {
          brewerySearch.push(_objectSpread({}, item, {
            id: item.id,
            type: "brewery",
            name: item.name,
            cover_photo: item.cover_photo,
            rating: item.rating,
            breweries_type: item.breweries_type,
            location: item.location,
            logo: item.logo
          }));
        });
        nextProps.truckSearchResult.forEach(function (item) {
          truckSearch.push(_objectSpread({}, item, {
            id: item.id,
            type: "truck",
            name: item.name,
            cover_photo: item.cover_photo,
            avg_rating: item.avg_rating
          }));
        });
        if (nextProps.brewerySearchResult.length === 0) brewerySearch = [];
        if (nextProps.truckSearchResult.length === 0) truckSearch = [];
        var result = this.searchResultCuisine(this.state.searchValue).concat(truckSearch).concat(brewerySearch);
        this.setState({
          result: result
        });

        if (this.state.flagSearch) {
          setTimeout(function () {
            _this2.setState({
              flagSearch: false
            });
          }, 1000);
        }
      }
    }
  }, {
    key: "searchResultCuisine",
    value: function searchResultCuisine(query) {
      var newArr = [];
      __WEBPACK_IMPORTED_MODULE_15__data__["a" /* categories */].forEach(function (item) {
        if (item.name.toLowerCase().indexOf("".concat(query)) > -1) {
          newArr.push(item);
        }
      });
      return newArr;
    }
  }, {
    key: "onSearchValueChange",
    value: function onSearchValueChange(e) {
      var self = this;

      if (self.state.typingTimeout) {
        clearTimeout(self.state.typingTimeout);
      }

      self.props.onParamChange(e);
      self.setState({
        searchValue: e,
        typing: false,
        typingTimeout: setTimeout(function () {
          self.props.search(e);
          self.setState({
            flagSearch: true
          });
        }, 500)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_18__header_less___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], _extends({}, this.state, this.props, {
        onSearchValueChange: function onSearchValueChange(e) {
          return _this3.onSearchValueChange(e);
        },
        handleOpenMenu: function handleOpenMenu(e) {
          return _this3.handleOpenMenu(e);
        },
        handleSearchTruck: function handleSearchTruck(e) {
          return _this3.handleSearchTruck(e);
        },
        handleSearchBrewery: function handleSearchBrewery(e) {
          return _this3.handleSearchBrewery(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__signIn_SignInModalContainer__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__signUp_SignUpModalContainer__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__forgot_ForgotModalContainer__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__common_announceModal_AnnounceModal__["a" /* default */], {
        message: "This feature will be available soon.                               \n                                We are currently hard at work on selected feature. It will be available as soon as possible.",
        visible: this.props.visibleAnnounce,
        handleCancel: function handleCancel(e) {
          return _this3.props.toggleAnnounceModal(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__common_shareModal_ShareModal__["a" /* default */], {
        url: this.props.url,
        visible: this.props.visibleShare,
        handleCancel: function handleCancel(e) {
          return _this3.props.toggleShareModal(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }));
    }
  }]);

  return HeaderContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

function mapStateToProps(state) {
  return {
    url: state.toggleReducer.url,
    statusText: state.toggleReducer.statusText,
    visibleAnnounce: state.toggleReducer.visibleAnnounce,
    openError: state.toggleReducer.openError,
    visibleShare: state.toggleReducer.visibleShare,
    visibleSignIn: state.toggleReducer.visibleSignIn,
    visibleSignUp: state.toggleReducer.visibleSignUp,
    visibleForgot: state.toggleReducer.visibleForgot,
    visibleErrorSignInPopOver: state.toggleReducer.visibleErrorSignInPopOver,
    visibleErrorSignUpPopOver: state.toggleReducer.visibleErrorSignUpPopOver,
    isLoadingSignUp: state.authReducer.isLoadingSignUp,
    isLoadingSignIn: state.authReducer.isLoadingSignIn,
    isLoggedIn: state.authReducer.isLoggedIn,
    messageSignIn: state.authReducer.messageSignIn,
    statusSignIn: state.authReducer.statusSignIn,
    messageSignUp: state.authReducer.messageSignUp,
    statusSignUp: state.authReducer.statusSignUp,
    isLoadingGetUser: state.profileReducer.isLoadingGetUser,
    userData: state.profileReducer.userData,
    truckSearchResult: state.truckReducer.truckSearchResult,
    brewerySearchResult: state.breweryReducer.brewerySearchResult
  };
}
function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])({
    getCuisineList: __WEBPACK_IMPORTED_MODULE_11__api_truckApi__["a" /* getCuisineList */],
    onParamChange: __WEBPACK_IMPORTED_MODULE_16__actions_searchAction__["a" /* onParamChange */],
    toggleShareModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["e" /* toggleShareModal */],
    toggleAnnounceModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["a" /* toggleAnnounceModal */],
    toggleSignInModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["f" /* toggleSignInModal */],
    toggleSignUpModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["g" /* toggleSignUpModal */],
    toggleForgotModal: __WEBPACK_IMPORTED_MODULE_7__actions_toggleAction__["d" /* toggleForgotModal */],
    signIn: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["c" /* signIn */],
    signUp: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["d" /* signUp */],
    logOut: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["a" /* logOut */],
    loginSocial: __WEBPACK_IMPORTED_MODULE_14__api_authApi__["b" /* loginSocial */],
    searchTruck: __WEBPACK_IMPORTED_MODULE_11__api_truckApi__["b" /* searchTruck */],
    searchBrewery: __WEBPACK_IMPORTED_MODULE_12__api_breweryApi__["a" /* searchBrewery */],
    checkLogin: __WEBPACK_IMPORTED_MODULE_17__actions_authAction__["a" /* checkLogin */],
    search: __WEBPACK_IMPORTED_MODULE_13__api_searchApi__["a" /* search */]
  }, dispatch);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(HeaderContainer));

/***/ }),

/***/ "./src/components/signIn/SignInModal.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("./node_modules/antd/lib/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_popover__ = __webpack_require__("./node_modules/antd/lib/popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_facebook_login__ = __webpack_require__("./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_facebook_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_facebook_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_google_login__ = __webpack_require__("./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_google_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_google_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__("./config.js");





var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/signIn/SignInModal.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FormItem = __WEBPACK_IMPORTED_MODULE_4_antd_lib_form___default.a.Item;
var mailIcon = '/static/images/mail-icon.png';
var lockIcon = '/static/images/lock-icon.png';
var facebookIcon = '/static/images/facebook-icon.svg';
var googleIcon = '/static/images/google-icon.svg';

var popOver = function popOver(messageArray) {
  return messageArray.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, item);
  });
};

var SignInModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignInModal, _React$Component);

  function SignInModal() {
    _classCallCheck(this, SignInModal);

    return _possibleConstructorReturn(this, (SignInModal.__proto__ || Object.getPrototypeOf(SignInModal)).apply(this, arguments));
  }

  _createClass(SignInModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          toggleSignInModal = _props.toggleSignInModal,
          toggleSignUpModal = _props.toggleSignUpModal,
          toggleForgotModal = _props.toggleForgotModal,
          visibleSignIn = _props.visibleSignIn,
          onLoginEmailChange = _props.onLoginEmailChange,
          isLoginEmail = _props.isLoginEmail,
          handleSignInEmail = _props.handleSignInEmail,
          isLoadingSignIn = _props.isLoadingSignIn,
          messageSignIn = _props.messageSignIn,
          statusSignIn = _props.statusSignIn,
          visibleErrorSignInPopOver = _props.visibleErrorSignInPopOver,
          handleLoginSocial = _props.handleLoginSocial;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        width: 540,
        visible: visibleSignIn,
        title: "",
        footer: null,
        onCancel: toggleSignInModal,
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "social-login ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "button-container ButtonBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
        alt: "facebook",
        src: facebookIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "social-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_facebook_login___default.a, {
        cssClass: "facebook-login-button",
        appId: __WEBPACK_IMPORTED_MODULE_8__config__["b" /* facebookAppID */] //autoload
        ,
        isMobile: false,
        autoLoad: false,
        fields: "email",
        callback: function callback(response) {
          handleLoginSocial({
            token: response.accessToken,
            provider: "facebook"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "button-container ButtonBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
        className: "facebook",
        alt: "facebook",
        src: googleIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "social-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_google_login___default.a, {
        icon: "fa-google",
        className: "google-login-button",
        clientId: __WEBPACK_IMPORTED_MODULE_8__config__["c" /* googleClientID */],
        buttonText: "LOGIN WITH GOOGLE",
        onSuccess: function onSuccess(response) {
          handleLoginSocial({
            token: response.accessToken,
            provider: "google"
          });
        },
        onFailure: function onFailure(response) {
          return console.log(response);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "or")), isLoginEmail ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "form-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default.a, {
        placement: "right",
        content: messageSignIn && popOver(messageSignIn),
        visible: statusSignIn === 404 && messageSignIn && visibleErrorSignInPopOver,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: "It not a valid email address"
        }, {
          required: true,
          message: "Please enter your email"
        }]
      })(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a, {
        suffix: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "email",
          src: mailIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }),
        placeholder: "Email Address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_popover___default.a, {
        placement: "right",
        content: messageSignIn && popOver(messageSignIn),
        visible: statusSignIn === 422 && messageSignIn && visibleErrorSignInPopOver,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: "Please enter your password"
        }]
      })(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a, {
        onPressEnter: handleSignInEmail,
        suffix: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
          className: "img-icon",
          alt: "password",
          src: lockIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }),
        type: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "button-container email ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        loading: isLoadingSignIn,
        type: "primary",
        onClick: handleSignInEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
        className: "ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "LOGIN")))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        className: "login-form-forgot",
        onClick: toggleForgotModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Forgot password ?"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        className: "alert-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "form-login margin-bottom button-container email ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        loading: isLoadingSignIn,
        type: "primary",
        onClick: onLoginEmailChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
        className: "ButtonWhiteCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "LOGIN BY EMAIL"))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "text-highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "Don't have account?", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        onClick: toggleSignUpModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, " Sign Up"))));
    }
  }]);

  return SignInModal;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SignInModal);

/***/ })

})
//# sourceMappingURL=0.18f4a792a92ee5975e34.hot-update.js.map