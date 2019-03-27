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
/******/ 	return __webpack_require__(__webpack_require__.s = 169);
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);


/***/ }),

/***/ 170:
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

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/common/categoryCard/CategoryCard.js
var CategoryCard = __webpack_require__(46);

// EXTERNAL MODULE: ./src/components/data.js
var data = __webpack_require__(35);

// CONCATENATED MODULE: ./src/components/category/Category.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Category_Category =
/*#__PURE__*/
function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
  }

  _createClass(Category, [{
    key: "renderCategoryCard",
    // render category card 
    value: function renderCategoryCard(categories) {
      return categories.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          lg: 6,
          md: 12,
          sm: 12,
          xs: 12,
          key: index,
          style: {
            marginBottom: "16px"
          }
        }, external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          to: "/food-truck/co/denver/".concat(item.slug && item.slug)
        }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(CategoryCard["a" /* default */], {
          image: item.image_url,
          name: item.name
        }))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cuisineList = this.props.cuisineList;
      return external__react__default.a.createElement("div", {
        className: "category main-wrapper body-content"
      }, external__react__default.a.createElement("h1", {
        className: "body-title DisplayBlackLeft"
      }, "Cuisine"), external__react__default.a.createElement("div", {
        className: "divider"
      }, " "), external__react__default.a.createElement(row__default.a, {
        style: {
          paddingTop: "30px"
        },
        gutter: 16
      }, this.renderCategoryCard(cuisineList)));
    }
  }]);

  return Category;
}(external__react_["Component"]);

/* harmony default export */ var category_Category = (Category_Category);
// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/category/CategoryContainer.js
function CategoryContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CategoryContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { CategoryContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CategoryContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CategoryContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CategoryContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CategoryContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) CategoryContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) CategoryContainer__defineProperties(Constructor, staticProps); return Constructor; }

function CategoryContainer__possibleConstructorReturn(self, call) { if (call && (CategoryContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return CategoryContainer__assertThisInitialized(self); }

function CategoryContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CategoryContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CategoryContainer_CategoryContainer =
/*#__PURE__*/
function (_Component) {
  CategoryContainer__inherits(CategoryContainer, _Component);

  function CategoryContainer(props) {
    var _this;

    CategoryContainer__classCallCheck(this, CategoryContainer);

    _this = CategoryContainer__possibleConstructorReturn(this, (CategoryContainer.__proto__ || Object.getPrototypeOf(CategoryContainer)).call(this, props));
    _this.state = {
      hasMore: true
    };
    return _this;
  }

  CategoryContainer__createClass(CategoryContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var cuisineList = this.props.cuisineList;
      return external__react__default.a.createElement("div", {
        style: {
          background: "#fafafa"
        }
      }, external__react__default.a.createElement(head["a" /* default */], {
        url: "https://gotruckster.com/food-truck/co/denver/cuisines",
        title: "Search Denver Food Trucks By Cuisine – Truckster",
        description: "Satisfying your growling stomach is easy with our cuisine search tool. View Denver food trucks by cuisine type now!",
        ogImage: "https://www.langan.com/wp-content/uploads/2017/08/Denver.jpg"
      }, external__react__default.a.createElement("meta", {
        name: "robots",
        content: "noindex"
      }), external__react__default.a.createElement("link", {
        rel: "canonical",
        href: "https://gotruckster.com/food-truck/co/denver"
      })), cuisineList && external__react__default.a.createElement(category_Category, _extends({}, this.state, this.props)));
    }
  }]);

  return CategoryContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    cuisineList: state.truckReducer.cuisineList
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var category_CategoryContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(CategoryContainer_CategoryContainer));
// CONCATENATED MODULE: ./pages/cuisines.js

/* harmony default export */ var cuisines = __webpack_exports__["default"] = (category_CategoryContainer);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return residences; });
var categories = [{
  name: 'Multi-Cuisine',
  image: '/static/images/cuisines/multi-cuisine.jpeg',
  type: 'cuisine',
  link: 'multi-cuisine'
}, {
  name: 'American',
  image: '/static/images/cuisines/american.jpg',
  type: 'cuisine',
  link: 'american'
}, {
  name: 'Asian',
  image: '/static/images/cuisines/asian.jpg',
  type: 'cuisine',
  link: 'asian'
}, {
  name: 'BBQ',
  image: '/static/images/cuisines/bbq.jpg',
  type: 'cuisine',
  link: 'bbq',
  id: 2
}, {
  name: 'Brazilian',
  image: '/static/images/cuisines/brazilian.jpg',
  type: 'cuisine',
  link: 'brazilian'
}, {
  name: 'Breakfast',
  image: '/static/images/cuisines/breakfast.jpg',
  type: 'cuisine',
  link: 'breakfast'
}, {
  name: 'Burgers',
  image: '/static/images/cuisines/burgers.jpg',
  type: 'cuisine',
  link: 'burgers'
}, {
  name: 'Cajun Creole',
  image: '/static/images/cuisines/cajun-creole.jpg',
  type: 'cuisine',
  link: 'cajun'
}, {
  name: 'Caribbean',
  image: '/static/images/cuisines/carribian.jpeg',
  type: 'cuisine',
  link: 'Caribbean'
}, {
  name: 'Chicago',
  image: '/static/images/cuisines/chicago.jpg',
  type: 'cuisine',
  link: 'chicago-style'
}, {
  name: 'Chinese',
  image: '/static/images/cuisines/chinese.jpg',
  type: 'cuisine',
  link: 'chinese'
}, {
  name: 'Coffee',
  image: '/static/images/cuisines/coffee.jpg',
  type: 'cuisine',
  link: 'coffee'
}, {
  name: 'Columbian',
  image: '/static/images/cuisines/columbian.jpg',
  type: 'cuisine',
  link: 'columbian'
}, {
  name: 'Crepes',
  image: '/static/images/cuisines/crepes.jpg',
  type: 'cuisine',
  link: 'crepes'
}, {
  name: 'Cuban',
  image: '/static/images/cuisines/cuban.jpg',
  type: 'cuisine',
  link: 'cuban'
}, {
  name: 'Dessert',
  image: '/static/images/cuisines/dessert.jpg',
  type: 'cuisine',
  link: 'dessert'
}, {
  name: 'Ethiopian',
  image: '/static/images/cuisines/ethiopian.jpg',
  type: 'cuisine',
  link: 'ethiopian'
}, {
  name: 'Farm Fresh',
  image: '/static/images/cuisines/farm-fresh.jpg',
  type: 'cuisine',
  link: 'farm-fresh'
}, {
  name: 'Filipino',
  image: '/static/images/cuisines/filipino.jpg',
  type: 'cuisine',
  link: 'filipino'
}, {
  name: 'French',
  image: '/static/images/cuisines/french.jpg',
  type: 'cuisine',
  link: 'french'
}, {
  name: 'German',
  image: '/static/images/cuisines/german.jpg',
  type: 'cuisine',
  link: 'german'
}, {
  name: 'Greek',
  image: '/static/images/cuisines/greek.jpg',
  type: 'cuisine',
  link: 'greek'
}, {
  name: 'Hawaiian',
  image: '/static/images/cuisines/hawaiian.jpg',
  type: 'cuisine',
  link: 'hawaiian-style'
}, {
  name: 'Indian',
  image: '/static/images/cuisines/indian.jpg',
  type: 'cuisine',
  link: 'indian'
}, {
  name: 'Italian',
  image: '/static/images/cuisines/italian.jpg',
  type: 'cuisine',
  link: 'italian'
}, {
  name: 'Jamaican',
  image: '/static/images/cuisines/jamaican.jpg',
  type: 'cuisine',
  link: 'jamaican'
}, {
  name: 'Japanese',
  image: '/static/images/cuisines/japanese.jpg',
  type: 'cuisine',
  link: 'japanese'
}, {
  name: 'Juice',
  image: '/static/images/cuisines/juice.jpg',
  type: 'cuisine',
  link: 'juice'
}, {
  name: 'Latin American',
  image: '/static/images/cuisines/latin-american.jpg',
  type: 'cuisine',
  link: 'latin-american'
}, {
  name: 'Latin Asian Fusion',
  image: '/static/images/cuisines/latin-asian-fusion.jpg',
  type: 'cuisine',
  link: 'latin-asian-fusion',
  id: 4
}, {
  name: 'Mediterranean',
  image: '/static/images/cuisines/mediterranean.jpg',
  type: 'cuisine',
  link: 'mediterranean',
  id: 1
}, {
  name: 'Mexican',
  image: '/static/images/cuisines/mexican.jpg',
  type: 'cuisine',
  link: 'mexican'
}, {
  name: 'Middle Eastern',
  image: '/static/images/cuisines/middle-eastern.jpg',
  type: 'cuisine',
  link: 'middle-eastern'
}, {
  name: 'Native American',
  image: '/static/images/cuisines/native-american.jpg',
  type: 'cuisine',
  link: 'native-american'
}, {
  name: 'New England',
  image: '/static/images/cuisines/new-england.jpg',
  type: 'cuisine',
  link: 'new-england'
}, {
  name: 'Peruvian',
  image: '/static/images/cuisines/peruvian.jpg',
  type: 'cuisine',
  link: 'peruvian',
  id: 3
}, {
  name: 'Pizza',
  image: '/static/images/cuisines/pizza.jpg',
  type: 'cuisine',
  link: 'pizza'
}, {
  name: 'Polish',
  image: '/static/images/cuisines/polish.jpg',
  type: 'cuisine',
  link: 'polish'
}, {
  name: 'Polynesian',
  image: '/static/images/cuisines/polynesian.jpg',
  type: 'cuisine',
  link: 'polynesian'
}, {
  name: 'Puertorican',
  image: '/static/images/cuisines/puertorican.jpg',
  type: 'cuisine',
  link: 'puertorican',
  id: 5
}, {
  name: 'Senegalese',
  image: '/static/images/cuisines/senegalese.jpg',
  type: 'cuisine',
  link: 'senegalese'
}, {
  name: 'Southern',
  image: '/static/images/cuisines/southern.jpg',
  type: 'cuisine',
  link: 'southern'
}, {
  name: 'Spanish',
  image: '/static/images/cuisines/spanish.jpg',
  type: 'cuisine',
  link: 'spanish'
}, {
  name: 'Thai',
  image: '/static/images/cuisines/thai.jpg',
  type: 'cuisine',
  link: 'thai'
}, {
  name: 'Turkish',
  image: '/static/images/cuisines/turkish.jpg',
  type: 'cuisine',
  link: 'turkish'
}, {
  name: 'Vegan',
  image: '/static/images/cuisines/vegan.jpg',
  type: 'cuisine',
  link: 'vegan'
}, {
  name: 'Vegetarian',
  image: '/static/images/cuisines/vegetarian.jpg',
  type: 'cuisine',
  link: 'vegetarian'
}, {
  name: 'Venezuelan',
  image: '/static/images/cuisines/venezuelan.jpg',
  type: 'cuisine',
  link: 'venezuelan'
}, {
  name: 'Wings',
  image: '/static/images/cuisines/wings.jpg',
  type: 'cuisine',
  link: 'wings'
}];
var residences = [{
  value: 'colorado',
  label: 'Colorado',
  children: [{
    value: 'acresgreen',
    label: 'Acres Green'
  }, {
    value: 'aguilar',
    label: 'Aguilar'
  }, {
    value: 'airforceacademy',
    label: 'Air Force Academy'
  }, {
    value: 'akron',
    label: 'Akron'
  }, {
    value: 'alamosa',
    label: 'Alamosa'
  }, {
    value: 'alamosaeast',
    label: 'Alamosa East'
  }, {
    value: 'allenspark',
    label: 'Allenspark'
  }, {
    value: 'alma',
    label: 'Alma'
  }, {
    value: 'antonito',
    label: 'Antonito'
  }, {
    value: 'applewood',
    label: 'Applewood'
  }, {
    value: 'arboles',
    label: 'Arboles'
  }, {
    value: 'aristocratranchettes',
    label: 'Aristocrat Ranchettes'
  }, {
    value: 'arriba',
    label: 'Arriba'
  }, {
    value: 'arvada',
    label: 'Arvada'
  }, {
    value: 'aspen',
    label: 'Aspen'
  }, {
    value: 'aspenpark',
    label: 'Aspen Park'
  }, {
    value: 'atwood',
    label: 'Atwood'
  }, {
    value: 'ault',
    label: 'Ault'
  }, {
    value: 'aurora',
    label: 'Aurora'
  }, {
    value: 'avon',
    label: 'Avon'
  }, {
    value: 'avondale',
    label: 'Avondale'
  }, {
    value: 'basalt',
    label: 'Basalt'
  }, {
    value: 'battlementmesa',
    label: 'Battlement Mesa'
  }, {
    value: 'bayfield',
    label: 'Bayfield'
  }, {
    value: 'bennett',
    label: 'Bennett'
  }, {
    value: 'berkley',
    label: 'Berkley'
  }, {
    value: 'berthoud',
    label: 'Berthoud'
  }, {
    value: 'bethune',
    label: 'Bethune'
  }, {
    value: 'beulahvalley',
    label: 'Beulah Valley'
  }, {
    value: 'blackforest',
    label: 'Black Forest'
  }, {
    value: 'blackhawk',
    label: 'Black Hawk'
  }, {
    value: 'blanca',
    label: 'Blanca'
  }, {
    value: 'blueriver',
    label: 'Blue River'
  }, {
    value: 'bonanza',
    label: 'Bonanza'
  }, {
    value: 'boone',
    label: 'Boone'
  }, {
    value: 'boulder',
    label: 'Boulder'
  }, {
    value: 'bowmar',
    label: 'Bow Mar'
  }, {
    value: 'branson',
    label: 'Branson'
  }, {
    value: 'breckenridge',
    label: 'Breckenridge'
  }, {
    value: 'brighton',
    label: 'Brighton'
  }, {
    value: 'brookside',
    label: 'Brookside'
  }, {
    value: 'broomfield',
    label: 'Broomfield'
  }, {
    value: 'brush',
    label: 'Brush'
  }, {
    value: 'buenavista',
    label: 'Buena Vista'
  }, {
    value: 'burlington',
    label: 'Burlington'
  }, {
    value: 'byers',
    label: 'Byers'
  }, {
    value: 'calhan',
    label: 'Calhan'
  }, {
    value: 'campion',
    label: 'Campion'
  }, {
    value: 'campo',
    label: 'Campo'
  }, {
    value: 'canoncity',
    label: 'Canon City'
  }, {
    value: 'carbondale',
    label: 'Carbondale'
  }, {
    value: 'carriageclub',
    label: 'Carriage Club'
  }, {
    value: 'cascade-chipitapark',
    label: 'Cascade-Chipita Park'
  }, {
    value: 'castlepines',
    label: 'Castle Pines'
  }, {
    value: 'castlerock',
    label: 'Castle Rock'
  }, {
    value: 'castlewood',
    label: 'Castlewood'
  }, {
    value: 'cedaredge',
    label: 'Cedaredge'
  }, {
    value: 'center',
    label: 'Center'
  }, {
    value: 'centralcity',
    label: 'Central City'
  }, {
    value: 'cheraw',
    label: 'Cheraw'
  }, {
    value: 'cherryhillsvillage',
    label: 'Cherry Hills Village'
  }, {
    value: 'cheyennewells',
    label: 'Cheyenne Wells'
  }, {
    value: 'cimarronhills',
    label: 'Cimarron Hills'
  }, {
    value: 'clifton',
    label: 'Clifton'
  }, {
    value: 'coalcreek',
    label: 'Coal Creek'
  }, {
    value: 'cokedale',
    label: 'Cokedale'
  }, {
    value: 'collbran',
    label: 'Collbran'
  }, {
    value: 'coloradocity',
    label: 'Colorado City'
  }, {
    value: 'coloradosprings',
    label: 'Colorado Springs'
  }, {
    value: 'columbine',
    label: 'Columbine'
  }, {
    value: 'columbinevalley',
    label: 'Columbine Valley'
  }, {
    value: 'commercecity',
    label: 'Commerce City'
  }, {
    value: 'cortez',
    label: 'Cortez'
  }, {
    value: 'cottonwood',
    label: 'Cottonwood'
  }, {
    value: 'craig',
    label: 'Craig'
  }, {
    value: 'crawford',
    label: 'Crawford'
  }, {
    value: 'creede',
    label: 'Creede'
  }, {
    value: 'crestedbutte',
    label: 'Crested Butte'
  }, {
    value: 'crestone',
    label: 'Crestone'
  }, {
    value: 'cripplecreek',
    label: 'Cripple Creek'
  }, {
    value: 'crook',
    label: 'Crook'
  }, {
    value: 'crowley',
    label: 'Crowley'
  }, {
    value: 'dacono',
    label: 'Dacono'
  }, {
    value: 'debeque',
    label: 'De Beque'
  }, {
    value: 'deertrail',
    label: 'Deer Trail'
  }, {
    value: 'delnorte',
    label: 'Del Norte'
  }, {
    value: 'delta',
    label: 'Delta'
  }, {
    value: 'denver',
    label: 'Denver'
  }, {
    value: 'derby',
    label: 'Derby'
  }, {
    value: 'dillon',
    label: 'Dillon'
  }, {
    value: 'dinosaur',
    label: 'Dinosaur'
  }, {
    value: 'dolores',
    label: 'Dolores'
  }, {
    value: 'dovecreek',
    label: 'Dove Creek'
  }, {
    value: 'downieville-lawson-dumont',
    label: 'Downieville-Lawson-Dumont'
  }, {
    value: 'durango',
    label: 'Durango'
  }, {
    value: 'eads',
    label: 'Eads'
  }, {
    value: 'eagle',
    label: 'Eagle'
  }, {
    value: 'eagle-vail',
    label: 'Eagle-Vail'
  }, {
    value: 'eastpleasantview',
    label: 'East Pleasant View'
  }, {
    value: 'eaton',
    label: 'Eaton'
  }, {
    value: 'eckley',
    label: 'Eckley'
  }, {
    value: 'edgewater',
    label: 'Edgewater'
  }, {
    value: 'edwards',
    label: 'Edwards'
  }, {
    value: 'eldora',
    label: 'Eldora'
  }, {
    value: 'eldoradosprings',
    label: 'Eldorado Springs'
  }, {
    value: 'elizabeth',
    label: 'Elizabeth'
  }, {
    value: 'eljebel',
    label: 'El Jebel'
  }, {
    value: 'empire',
    label: 'Empire'
  }, {
    value: 'englewood',
    label: 'Englewood'
  }, {
    value: 'erie',
    label: 'Erie'
  }, {
    value: 'estespark',
    label: 'Estes Park'
  }, {
    value: 'evans',
    label: 'Evans'
  }, {
    value: 'evergreen',
    label: 'Evergreen'
  }, {
    value: 'fairplay',
    label: 'Fairplay'
  }, {
    value: 'federalheights',
    label: 'Federal Heights'
  }, {
    value: 'firestone',
    label: 'Firestone'
  }, {
    value: 'flagler',
    label: 'Flagler'
  }, {
    value: 'fleming',
    label: 'Fleming'
  }, {
    value: 'florence',
    label: 'Florence'
  }, {
    value: 'fortcarson',
    label: 'Fort Carson'
  }, {
    value: 'fortcollins',
    label: 'Fort Collins'
  }, {
    value: 'fortgarland',
    label: 'Fort Garland'
  }, {
    value: 'fortlupton',
    label: 'Fort Lupton'
  }, {
    value: 'fortmorgan',
    label: 'Fort Morgan'
  }, {
    value: 'fountain',
    label: 'Fountain'
  }, {
    value: 'fowler',
    label: 'Fowler'
  }, {
    value: 'foxfield',
    label: 'Foxfield'
  }, {
    value: 'franktown',
    label: 'Franktown'
  }, {
    value: 'fraser',
    label: 'Fraser'
  }, {
    value: 'frederick',
    label: 'Frederick'
  }, {
    value: 'frisco',
    label: 'Frisco'
  }, {
    value: 'fruita',
    label: 'Fruita'
  }, {
    value: 'fruitvale',
    label: 'Fruitvale'
  }, {
    value: 'gardencity',
    label: 'Garden City'
  }, {
    value: 'genesee',
    label: 'Genesee'
  }, {
    value: 'genoa',
    label: 'Genoa'
  }, {
    value: 'georgetown',
    label: 'Georgetown'
  }, {
    value: 'gilcrest',
    label: 'Gilcrest'
  }, {
    value: 'glendale',
    label: 'Glendale'
  }, {
    value: 'gleneagle',
    label: 'Gleneagle'
  }, {
    value: 'glenwoodsprings',
    label: 'Glenwood Springs'
  }, {
    value: 'golden',
    label: 'Golden'
  }, {
    value: 'goldhill',
    label: 'Gold Hill'
  }, {
    value: 'granada',
    label: 'Granada'
  }, {
    value: 'granby',
    label: 'Granby'
  }, {
    value: 'grandjunction',
    label: 'Grand Junction'
  }, {
    value: 'grandlake',
    label: 'Grand Lake'
  }, {
    value: 'grandviewestates',
    label: 'Grand View Estates'
  }, {
    value: 'greeley',
    label: 'Greeley'
  }, {
    value: 'greenmountainfalls',
    label: 'Green Mountain Falls'
  }, {
    value: 'greenwoodvillage',
    label: 'Greenwood Village'
  }, {
    value: 'grover',
    label: 'Grover'
  }, {
    value: 'gunbarrel',
    label: 'Gunbarrel'
  }, {
    value: 'gunnison',
    label: 'Gunnison'
  }, {
    value: 'gypsum',
    label: 'Gypsum'
  }, {
    value: 'hartman',
    label: 'Hartman'
  }, {
    value: 'haswell',
    label: 'Haswell'
  }, {
    value: 'haxtun',
    label: 'Haxtun'
  }, {
    value: 'hayden',
    label: 'Hayden'
  }, {
    value: 'heritagehills',
    label: 'Heritage Hills'
  }, {
    value: 'highlandsranch',
    label: 'Highlands Ranch'
  }, {
    value: 'hillrose',
    label: 'Hillrose'
  }, {
    value: 'holly',
    label: 'Holly'
  }, {
    value: 'holyoke',
    label: 'Holyoke'
  }, {
    value: 'hooper',
    label: 'Hooper'
  }, {
    value: 'hotchkiss',
    label: 'Hotchkiss'
  }, {
    value: 'hotsulphursprings',
    label: 'Hot Sulphur Springs'
  }, {
    value: 'hudson',
    label: 'Hudson'
  }, {
    value: 'hugo',
    label: 'Hugo'
  }, {
    value: 'idahosprings',
    label: 'Idaho Springs'
  }, {
    value: 'ignacio',
    label: 'Ignacio'
  }, {
    value: 'iliff',
    label: 'Iliff'
  }, {
    value: 'indianhills',
    label: 'Indian Hills'
  }, {
    value: 'jamestown',
    label: 'Jamestown'
  }, {
    value: 'johnstown',
    label: 'Johnstown'
  }, {
    value: 'julesburg',
    label: 'Julesburg'
  }, {
    value: 'keenesburg',
    label: 'Keenesburg'
  }, {
    value: 'kencaryl',
    label: 'Ken Caryl'
  }, {
    value: 'kersey',
    label: 'Kersey'
  }, {
    value: 'keystone',
    label: 'Keystone'
  }, {
    value: 'kim',
    label: 'Kim'
  }, {
    value: 'kiowa',
    label: 'Kiowa'
  }, {
    value: 'kitcarson',
    label: 'Kit Carson'
  }, {
    value: 'kittredge',
    label: 'Kittredge'
  }, {
    value: 'kremmling',
    label: 'Kremmling'
  }, {
    value: 'lafayette',
    label: 'Lafayette'
  }, {
    value: 'lajara',
    label: 'La Jara'
  }, {
    value: 'lajunta',
    label: 'La Junta'
  }, {
    value: 'lakecity',
    label: 'Lake City'
  }, {
    value: 'lakeside',
    label: 'Lakeside'
  }, {
    value: 'lakewood',
    label: 'Lakewood'
  }, {
    value: 'lamar',
    label: 'Lamar'
  }, {
    value: 'laporte',
    label: 'Laporte'
  }, {
    value: 'larkspur',
    label: 'Larkspur'
  }, {
    value: 'lasalle',
    label: 'La Salle'
  }, {
    value: 'lasanimas',
    label: 'Las Animas'
  }, {
    value: 'laveta',
    label: 'La Veta'
  }, {
    value: 'leadville',
    label: 'Leadville'
  }, {
    value: 'leadvillenorth',
    label: 'Leadville North'
  }, {
    value: 'limon',
    label: 'Limon'
  }, {
    value: 'lincolnpark',
    label: 'Lincoln Park'
  }, {
    value: 'littleton',
    label: 'Littleton'
  }, {
    value: 'lochbuie',
    label: 'Lochbuie'
  }, {
    value: 'loghillvillage',
    label: 'Loghill Village'
  }, {
    value: 'loglanevillage',
    label: 'Log Lane Village'
  }, {
    value: 'lonetree',
    label: 'Lone Tree'
  }, {
    value: 'longmont',
    label: 'Longmont'
  }, {
    value: 'louisville',
    label: 'Louisville'
  }, {
    value: 'louviers',
    label: 'Louviers'
  }, {
    value: 'loveland',
    label: 'Loveland'
  }, {
    value: 'lyons',
    label: 'Lyons'
  }, {
    value: 'manassa',
    label: 'Manassa'
  }, {
    value: 'mancos',
    label: 'Mancos'
  }, {
    value: 'manitousprings',
    label: 'Manitou Springs'
  }, {
    value: 'manzanola',
    label: 'Manzanola'
  }, {
    value: 'marble',
    label: 'Marble'
  }, {
    value: 'mead',
    label: 'Mead'
  }, {
    value: 'meeker',
    label: 'Meeker'
  }, {
    value: 'meridian',
    label: 'Meridian'
  }, {
    value: 'merino',
    label: 'Merino'
  }, {
    value: 'milliken',
    label: 'Milliken'
  }, {
    value: 'minturn',
    label: 'Minturn'
  }, {
    value: 'moffat',
    label: 'Moffat'
  }, {
    value: 'montevista',
    label: 'Monte Vista'
  }, {
    value: 'montezuma',
    label: 'Montezuma'
  }, {
    value: 'montrose',
    label: 'Montrose'
  }, {
    value: 'monument',
    label: 'Monument'
  }, {
    value: 'morrison',
    label: 'Morrison'
  }, {
    value: 'mountainview',
    label: 'Mountain View'
  }, {
    value: 'mountainvillage',
    label: 'Mountain Village'
  }, {
    value: 'mountcrestedbutte',
    label: 'Mount Crested Butte'
  }, {
    value: 'naturita',
    label: 'Naturita'
  }, {
    value: 'nederland',
    label: 'Nederland'
  }, {
    value: 'newcastle',
    label: 'New Castle'
  }, {
    value: 'niwot',
    label: 'Niwot'
  }, {
    value: 'northglenn',
    label: 'Northglenn'
  }, {
    value: 'northwashington',
    label: 'North Washington'
  }, {
    value: 'norwood',
    label: 'Norwood'
  }, {
    value: 'nucla',
    label: 'Nucla'
  }, {
    value: 'nunn',
    label: 'Nunn'
  }, {
    value: 'oakcreek',
    label: 'Oak Creek'
  }, {
    value: 'olathe',
    label: 'Olathe'
  }, {
    value: 'olneysprings',
    label: 'Olney Springs'
  }, {
    value: 'ophir',
    label: 'Ophir'
  }, {
    value: 'orchardcity',
    label: 'Orchard City'
  }, {
    value: 'orchardmesa',
    label: 'Orchard Mesa'
  }, {
    value: 'ordway',
    label: 'Ordway'
  }, {
    value: 'otis',
    label: 'Otis'
  }, {
    value: 'ouray',
    label: 'Ouray'
  }, {
    value: 'ovid',
    label: 'Ovid'
  }, {
    value: 'padroni',
    label: 'Padroni'
  }, {
    value: 'pagosasprings',
    label: 'Pagosa Springs'
  }, {
    value: 'palisade',
    label: 'Palisade'
  }, {
    value: 'palmerlake',
    label: 'Palmer Lake'
  }, {
    value: 'paoli',
    label: 'Paoli'
  }, {
    value: 'paonia',
    label: 'Paonia'
  }, {
    value: 'parachute',
    label: 'Parachute'
  }, {
    value: 'parker',
    label: 'Parker'
  }, {
    value: 'peetz',
    label: 'Peetz'
  }, {
    value: 'penrose',
    label: 'Penrose'
  }, {
    value: 'perrypark',
    label: 'Perry Park'
  }, {
    value: 'pierce',
    label: 'Pierce'
  }, {
    value: 'pitkin',
    label: 'Pitkin'
  }, {
    value: 'platteville',
    label: 'Platteville'
  }, {
    value: 'ponchasprings',
    label: 'Poncha Springs'
  }, {
    value: 'ponderosapark',
    label: 'Ponderosa Park'
  }, {
    value: 'pritchett',
    label: 'Pritchett'
  }, {
    value: 'pueblo',
    label: 'Pueblo'
  }, {
    value: 'pueblowest',
    label: 'Pueblo West'
  }, {
    value: 'ramah',
    label: 'Ramah'
  }, {
    value: 'rangely',
    label: 'Rangely'
  }, {
    value: 'raymer',
    label: 'Raymer'
  }, {
    value: 'redcliff',
    label: 'Red Cliff'
  }, {
    value: 'redfeatherlakes',
    label: 'Red Feather Lakes'
  }, {
    value: 'redlands',
    label: 'Redlands'
  }, {
    value: 'rico',
    label: 'Rico'
  }, {
    value: 'ridgway',
    label: 'Ridgway'
  }, {
    value: 'rifle',
    label: 'Rifle'
  }, {
    value: 'rockvale',
    label: 'Rockvale'
  }, {
    value: 'rockyford',
    label: 'Rocky Ford'
  }, {
    value: 'romeo',
    label: 'Romeo'
  }, {
    value: 'roxboroughpark',
    label: 'Roxborough Park'
  }, {
    value: 'rye',
    label: 'Rye'
  }, {
    value: 'saguache',
    label: 'Saguache'
  }, {
    value: 'stmary',
    label: "St. Mary's"
  }, {
    value: 'salida',
    label: 'Salida'
  }, {
    value: 'saltcreek',
    label: 'Salt Creek'
  }, {
    value: 'sanford',
    label: 'Sanford'
  }, {
    value: 'sanluis',
    label: 'San Luis'
  }, {
    value: 'sawpit',
    label: 'Sawpit'
  }, {
    value: 'security-widefield',
    label: 'Security-Widefield'
  }, {
    value: 'sedalia',
    label: 'Sedalia'
  }, {
    value: 'sedgwick',
    label: 'Sedgwick'
  }, {
    value: 'seibert',
    label: 'Seibert'
  }, {
    value: 'severance',
    label: 'Severance'
  }, {
    value: 'sheridan',
    label: 'Sheridan'
  }, {
    value: 'sheridanlake',
    label: 'Sheridan Lake'
  }, {
    value: 'sherrelwood',
    label: 'Sherrelwood'
  }, {
    value: 'silt',
    label: 'Silt'
  }, {
    value: 'silvercliff',
    label: 'Silver Cliff'
  }, {
    value: 'silverplume',
    label: 'Silver Plume'
  }, {
    value: 'silverthorne',
    label: 'Silverthorne'
  }, {
    value: 'silverton',
    label: 'Silverton'
  }, {
    value: 'simla',
    label: 'Simla'
  }, {
    value: 'snowmassvillage',
    label: 'Snowmass Village'
  }, {
    value: 'southfork',
    label: 'South Fork'
  }, {
    value: 'southglenn',
    label: 'Southglenn'
  }, {
    value: 'springfield',
    label: 'Springfield'
  }, {
    value: 'starkville',
    label: 'Starkville'
  }, {
    value: 'steamboatsprings',
    label: 'Steamboat Springs'
  }, {
    value: 'sterling',
    label: 'Sterling'
  }, {
    value: 'stonegate',
    label: 'Stonegate'
  }, {
    value: 'strasburg',
    label: 'Strasburg'
  }, {
    value: 'stratmoor',
    label: 'Stratmoor'
  }, {
    value: 'stratton',
    label: 'Stratton'
  }, {
    value: 'sugarcity',
    label: 'Sugar City'
  }, {
    value: 'superior',
    label: 'Superior'
  }, {
    value: 'swink',
    label: 'Swink'
  }, {
    value: 'tabernash',
    label: 'Tabernash'
  }, {
    value: 'telluride',
    label: 'Telluride'
  }, {
    value: 'thepinery',
    label: 'The Pinery'
  }, {
    value: 'thornton',
    label: 'Thornton'
  }, {
    value: 'timnath',
    label: 'Timnath'
  }, {
    value: 'toddcreek',
    label: 'Todd Creek'
  }, {
    value: 'towaoc',
    label: 'Towaoc'
  }, {
    value: 'trinidad',
    label: 'Trinidad'
  }, {
    value: 'twinlakes',
    label: 'Twin Lakes'
  }, {
    value: 'twobuttes',
    label: 'Two Buttes'
  }, {
    value: 'vail',
    label: 'Vail'
  }, {
    value: 'victor',
    label: 'Victor'
  }, {
    value: 'vilas',
    label: 'Vilas'
  }, {
    value: 'vona',
    label: 'Vona'
  }, {
    value: 'walden',
    label: 'Walden'
  }, {
    value: 'walsenburg',
    label: 'Walsenburg'
  }, {
    value: 'walsh',
    label: 'Walsh'
  }, {
    value: 'ward',
    label: 'Ward'
  }, {
    value: 'welby',
    label: 'Welby'
  }, {
    value: 'wellington',
    label: 'Wellington'
  }, {
    value: 'westcliffe',
    label: 'Westcliffe'
  }, {
    value: 'westcreek',
    label: 'Westcreek'
  }, {
    value: 'westminster',
    label: 'Westminster'
  }, {
    value: 'westpleasantview',
    label: 'West Pleasant View'
  }, {
    value: 'wheatridge',
    label: 'Wheat Ridge'
  }, {
    value: 'wiggins',
    label: 'Wiggins'
  }, {
    value: 'wiley',
    label: 'Wiley'
  }, {
    value: 'williamsburg',
    label: 'Williamsburg'
  }, {
    value: 'windsor',
    label: 'Windsor'
  }, {
    value: 'winterpark',
    label: 'Winter Park'
  }, {
    value: 'woodlandpark',
    label: 'Woodland Park'
  }, {
    value: 'woodmoor',
    label: 'Woodmoor'
  }, {
    value: 'wray',
    label: 'Wray'
  }, {
    value: 'yampa',
    label: 'Yampa'
  }, {
    value: 'yuma',
    label: 'Yuma'
  }]
}];

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CategoryCard =
/*#__PURE__*/
function (_Component) {
  _inherits(CategoryCard, _Component);

  function CategoryCard(props) {
    var _this;

    _classCallCheck(this, CategoryCard);

    _this = _possibleConstructorReturn(this, (CategoryCard.__proto__ || Object.getPrototypeOf(CategoryCard)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(CategoryCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          name = _props.name,
          image = _props.image;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(image, ")")
        },
        className: "cuisine-card-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content-cuisine"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title"
      }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cover"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cover-mask"
      })));
    }
  }]);

  return CategoryCard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CategoryCard);

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