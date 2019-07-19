webpackHotUpdate(5,{

/***/ "./src/components/cityDetail/CityDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_section_Section__ = __webpack_require__("./src/components/common/section/Section.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_truckCard_TruckCard__ = __webpack_require__("./src/components/common/truckCard/TruckCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_truckNewCard_TruckNewCard__ = __webpack_require__("./src/components/common/truckNewCard/TruckNewCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_articleCard_ArticleCard__ = __webpack_require__("./src/components/common/articleCard/ArticleCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_pairingCard_PairingCard__ = __webpack_require__("./src/components/common/pairingCard/PairingCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_eventCard_EventCard__ = __webpack_require__("./src/components/common/eventCard/EventCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__ = __webpack_require__("./src/components/common/renderContainer/RenderContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_responsive__ = __webpack_require__("./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__ = __webpack_require__("./src/components/common/placeholder/LoadingPlaceHolder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__ = __webpack_require__("./src/components/common/placeholder/Placeholder.js");


var _jsxFileName = "/Users/tannguyen/LaunchDeck/truckster_SSR/src/components/cityDetail/CityDetail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var breweryIcon = '/static/images/brewery-marker-icon.png';
var imageBreweryPlaceholder = "/static/images/image_brewery_placeholder.png";
var civicCard = "/static/images/civic-card.jpg";
var homeImage = "/static/images/denver-city.jpg";
var cuisine = [{
  name: 'Mexican',
  image: '/static/images/cuisines/Mexican.jpg',
  truckNum: 51
}, {
  name: 'BBQ',
  image: '/static/images/cuisines/BBQ.jpg',
  truckNum: 58
}, {
  name: 'American',
  image: '/static/images/cuisines/American.jpg',
  truckNum: 95
}, {
  name: 'Dessert',
  image: '/static/images/cuisines/Dessert.jpg',
  truckNum: 42
}, {
  name: 'Coffee',
  image: '/static/images/cuisines/Coffee.jpg',
  truckNum: 16
}, {
  name: 'Asian',
  image: '/static/images/cuisines/Asian.jpg',
  truckNum: 15
}];
var articles = [{
  title: "Find the Best Taco Food \n        Trucks in Denver",
  image: '/static/images/card-tacos.png',
  detail: "Taco trucks are what kicked off the food truck craze to begin with so it's only natural that there would be plenty to choose from.\n\n        Food trucks tend to offer tacos in all kinds of interesting varieties. That\u2019s not to say that there aren\u2019t any traditional Mexican food trucks either. You can also find foods from other cultures like Venezuelan or Brazilian.\n        \n        They usually offer a variety of favorites like tacos, enchiladas, burritos and more. Vegetarian and vegan options tend to be available as well depending on the food truck.\n        "
}, {
  title: "Experience Multi-Cuisine\n         Food Trucks",
  image: '/static/images/home-image.jpg',
  detail: "If you're looking for something with their own unique twist then you're in luck. The Denver area is home to many different food trucks that blend different types of cuisines or have their own creative spin on a certain type of dish.\n\n        For example, instead of regular french fries you can try different fry dishes like classic poutine, Greek fries, chili fries, and even steak and cheese fries.\n        \n        On the healthier side you'll find some trucks that serve salad bowl dishes with gluten free and vegan options to choose from.\n        "
}, {
  title: "Taste the Flavor of\n        Denver BBQ",
  image: '/static/images/card-bbq.png',
  detail: "In the mood for some mouth-watering BBQ? These and many other food trucks in the area have plenty of smoked meats to choose from.\n\n        Bar-B-Que comes in a variety of types such as Texas style brisket, St. Louis style pork rib, pulled pork and more. Beef ribs are a popular choice as well. Plenty of trucks offer their own spin on BBQ chicken, beans and coleslaw.\n        \n        For something a little different than traditional BBQ, some food trucks offer a blend of Mexican and American. They create blends like BBQ nachos and BBQ mac n\u2019 cheese.\n        "
}, {
  title: 'I Am Searching For a Food Truck Near Me',
  image: '/static/images/card-map.png',
  detail: "Hungry and don\u2019t know where to eat? In a new neighborhood and don\u2019t know what\u2019s nearby? No matter where you are in Denver, Truckster can find you a great food truck. Get something for any time of day or any meal, be it breakfast, lunch, dinner or even dessert. \n        Looking for somewhere to meet your friends? Food trucks create a fun atmosphere for you and your friends to eat and socialize, taking in the 300 days of sunshine that Denver offers. \n        "
}, {
  title: "I Want a Food Truck to \n        Cater my Party",
  image: '/static/images/card-cater.png',
  detail: "Food truck catering is becoming more and more popular. The novelty of having a truck immediately makes your event unique and stand out. It also allows you to serve food wherever your event may be, rural in the mountains, or right at your own home. No on-site kitchen required. \n        Food truck catering is ideal for many different occasions, whether it be a corporate event, wedding, or party with family and friends. Find one you like on Truckster and submit your request through our easy to use form. This makes it effortless for both you and the trucks, allowing you to fully enjoy your event! \n        "
}, {
  title: 'Find Today’s Best Food Truck and Brewery Pairings',
  image: '/static/images/card-alls.png',
  detail: "We\u2019re so lucky in Colorado to have the heart of the craft beer culture right in our backyard. It\u2019s no secret that what makes a good brewery is the food truck parked outside, and what makes a good food truck is the beer that goes with it. \n        Choosing which brewery to visit today? Explore on Truckster all your favorite breweries and their upcoming food truck calendars. Easily plan your Saturday with your family or meeting friends at one of our many awesome micro-breweries in town. \n        "
}];
var events = [{
  link: "https://colorado.ourcommunitynow.com/2018/05/14/dtc-eats-back-food-trucks/",
  image: "https://www.thedenverear.com/wp-content/uploads/2015/07/11403320_832715533486476_306799773388049945_n.png",
  name: "DTC Eats",
  desc: "This lunch takes place in the Denver Tech Center every other Monday from May through September. It features over 15 trucks with a wide range of cuisine types and is the perfect cure for your everyday lunch. Picnic tables are setup nearby to enjoy the Colorado outdoors on your lunchbreak."
}, {
  link: "http://www.ucdenver.edu/about/departments/FoodServices/Pages/Food-Truck-Wednesdays.aspx",
  image: "https://pbs.twimg.com/media/C7ias3MUwAAC2cB.jpg",
  name: "Food Truck Wednesdays at Anschutz Medical Campus",
  desc: "Food Truck Wednesdays serves the medical community and visitors to the Anschutz Medical Campus every week all summer long. A variety of 10 or more food trucks attend each Wednesday, and picnic tables are setup on the campus lawn for you to enjoy."
}, {
  link: "http://www.civiccenterconservancy.org/event-civic-center-eats-2018_88.html",
  image: civicCard,
  name: "Civic Center Eats",
  desc: "The largest gathering of food trucks and gourmet foods in the entire Denver area. Enjoy live music and other activities along with over 80 varieties of food vendors."
}, {
  link: "https://denversartdistrict.org/first-friday/",
  image: "https://static1.squarespace.com/static/598679b4cf81e0278eb708fb/t/59e67c0eb078699478c320a5/1533008031364/20637837_1613853705313913_3592591070002448170_n.jpg",
  name: "First Friday Art Walk on Santa Fe",
  desc: "Attended by thousands year round, the art walk happens every first Friday of the month from 5:30pm-9:30pm. Santa Fe’s Art District spans from 13th to Alameda, with the majority of food trucks parked between 7th Street and 9th Street. Check out hundreds of artists in the galleries and studios that line streets while you take in some local bites from your favorite trucks."
}];

var CityDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(CityDetail, _Component);

  function CityDetail() {
    _classCallCheck(this, CityDetail);

    return _possibleConstructorReturn(this, (CityDetail.__proto__ || Object.getPrototypeOf(CityDetail)).apply(this, arguments));
  }

  _createClass(CityDetail, [{
    key: "renderSmallEventCard",
    value: function renderSmallEventCard(events) {
      return events.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          lg: 6,
          md: 6,
          sm: 12,
          key: index,
          className: "event-card-small-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          href: item.url,
          rel: "nofollow",
          target: "_blank",
          className: "event-card-small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          src: item.image,
          alt: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "event-card-small-detail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "Body-1RegularWhiteLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "Body-1RegularGrayLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, item.description))));
      });
    }
  }, {
    key: "renderOffers",
    value: function renderOffers(offers) {
      var _this = this;

      return offers.map(function (offer, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          onClick: function onClick(e) {
            return _this.props.toggleAnnounceModal();
          },
          key: index,
          className: "offer-card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          style: {
            backgroundImage: "url(".concat(offer.image, ")")
          },
          className: "article overlay image ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "offer-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          }
        }, offer.offerName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: " offer-learn ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, "Learn More >"))));
      });
    }
  }, {
    key: "renderPlaceHolder",
    value: function renderPlaceHolder() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        style: {
          marginBottom: "16px"
        },
        sm: 12,
        xs: 24,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__common_placeholder_Placeholder__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      })));
    } // render truck card 

  }, {
    key: "renderEventCard",
    value: function renderEventCard(events) {
      return events.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          key: index,
          sm: 12,
          xs: 24,
          md: 6,
          lg: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__common_eventCard_EventCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }));
      });
    } // render truck card 

  }, {
    key: "renderTruckCard",
    value: function renderTruckCard(trucks) {
      return trucks.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 8,
          lg: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__common_truckCard_TruckCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          }
        }));
      });
    } // render pairing card 

  }, {
    key: "renderPairingCard",
    value: function renderPairingCard(pairings) {
      return pairings.map(function (item, index) {
        if (index < 6) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 24,
          lg: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__common_pairingCard_PairingCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        }));else return null;
      });
    } // render brewery card 

  }, {
    key: "renderBreweryCard",
    value: function renderBreweryCard(breweries) {
      return breweries.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          style: {
            marginBottom: "16px"
          },
          key: index,
          sm: 12,
          xs: 24,
          md: 8,
          lg: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__common_truckNewCard_TruckNewCard__["a" /* default */], {
          data: {
            url: "/brewery/" + item.slug,
            image: item.cover_photo && item.cover_photo[0] && item.cover_photo[0].thumbnails ? item.cover_photo[0].thumbnails.large.url : breweryIcon,
            logo: item.logo ? item.logo[0].url : imageBreweryPlaceholder,
            name: item.name,
            cuisine: item.breweries_type && [{
              name: item.breweries_type.name
            }],
            rating: parseFloat((Math.round(item.rating * 2) / 2).toFixed(1), 10)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }));
      });
    } //render favorite cuisine

  }, {
    key: "renderCuisine",
    value: function renderCuisine(cuisine) {
      return cuisine.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
          prefetch: true,
          key: index,
          to: "/food-truck/co/denver/".concat(item.name.toLowerCase()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
          lg: 4,
          md: 4,
          sm: 6,
          xs: 6,
          className: "cuisine-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "cuisine-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          src: item.image,
          alt: "cuisine-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "Body-2CenterBlack",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "CaptionGreyCenter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }, item.truckNum, "  trucks     "))));
      });
    } //render article

  }, {
    key: "renderArticleCard",
    value: function renderArticleCard(articles) {
      return articles.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          key: index,
          rel: "nofollow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__common_articleCard_ArticleCard__["a" /* default */], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          truckFeaturedCity = _props.truckFeaturedCity,
          error = _props.error,
          activitiesWeek = _props.activitiesWeek,
          errorActivity = _props.errorActivity,
          history = _props.history,
          featuredBreweries = _props.featuredBreweries,
          errorBrewery = _props.errorBrewery,
          cityDetail = _props.cityDetail;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "home main-wrapper ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(homeImage, ")")
        },
        className: "home-main-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "content-city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        className: "title DisplayBlackCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, "Discover the Best Denver Food Trucks and Upcoming Events")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "cover-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          paddingTop: 0
        },
        className: "body-content media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_section_Section__["a" /* default */], {
        type: "trucks",
        url: "/food-truck/co/denver/all",
        title: "Featured Food Trucks in Denver, CO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, truckFeaturedCity ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, this.renderTruckCard(truckFeaturedCity)) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_responsive___default.a, {
        key: "loader",
        maxWidth: 768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, function (matches) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__["a" /* default */], {
          itemNum: matches ? 4 : 8,
          key: "loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          }
        });
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_section_Section__["a" /* default */], {
        type: "events",
        url: "/event/co/denver",
        seeall: true,
        title: "What's Happening in Denver?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: errorActivity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, activitiesWeek && activitiesWeek.length > 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, this.renderEventCard(activitiesWeek)) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_responsive___default.a, {
        key: "loader",
        maxWidth: 767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, function (matches) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__["a" /* default */], {
          itemNum: matches ? 1 : 3,
          key: "loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          }
        });
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_section_Section__["a" /* default */], {
        type: "breweries",
        url: "/brewery/co/denver",
        seeall: true,
        title: "Featured Breweries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__common_renderContainer_RenderContainer__["a" /* default */], {
        message: "Something went wrong, please try another time!",
        error: errorBrewery,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, featuredBreweries && featuredBreweries.length > 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, this.renderBreweryCard(featuredBreweries)) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_responsive___default.a, {
        key: "loader",
        maxWidth: 768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, function (matches) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_placeholder_LoadingPlaceHolder__["a" /* default */], {
          itemNum: matches ? 2 : 2,
          key: "loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          }
        });
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
        className: "favorite-cuisine-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        className: "Display-2BlackCenter ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, "Favorite Cuisine in Denver "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        type: "flex",
        justify: "center",
        className: "cuisine-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, this.renderCuisine(cuisine)))), cityDetail && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-section media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-section-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        className: "Display-3BlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, "".concat(cityDetail.name, " Food Truck Events & Festivals")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-description Body-2RegularBlackLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, "".concat(cityDetail.description, ". Be sure to go to the "), " ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://itunes.apple.com/us/app/truckster-denver-food-trucks/id1375284993?l=vi&ls=1&mt=8");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, "App Store"), " or ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          window.open("https://play.google.com/store/apps/details?id=com.truckster");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, "Google Play"), " to download Truckster and find all the food truck events happening near you."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        className: "article__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, "Some of our Favorite Events:"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        type: "flex",
        justify: "space-between",
        className: "small-events-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, this.renderSmallEventCard(cityDetail.event)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "article-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, this.renderArticleCard(cityDetail.feature)))));
    }
  }]);

  return CityDetail;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CityDetail);

/***/ })

})
//# sourceMappingURL=5.54b84bac835e8c1bce8b.hot-update.js.map