module.exports=__NEXT_REGISTER_PAGE("/_error",function(){return{page:webpackJsonp([20],{1065:function(e,t,r){e.exports=r(1066)},1066:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r.n(n),a=r(108);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(i=[{key:"render",value:function(){return o.a.createElement(a.a,{status:404})}}])&&c(r.prototype,i),u&&c(r,u),t}();t.default=u},108:function(e,t,r){"use strict";var n=r(22),o=r.n(n),a=r(0),i=r.n(a),c=r(12),s=(r.n(c),r(109)),u=r.n(s);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),r=t,(n=[{key:"render",value:function(){var e=this.props.status,t="",r=null;switch(e){case 500:t="Sorry, the server has gone wrong",r="/static/images/error-500.svg";break;case 404:t="Sorry, the page you visited does not exist",r="/static/images/error-404.svg";break;case 403:t="Sorry, you do not have permission to access this page",r="/static/images/error-403.svg";break;default:r="/static/images/error-no-result.svg",t="Something went wrong!"}return i.a.createElement("div",{className:"error-container"},i.a.createElement("style",{dangerouslySetInnerHTML:{__html:u.a}}),i.a.createElement("div",{className:"error-image"},i.a.createElement("img",{alt:"error",src:r})),i.a.createElement("div",{className:"error-detail"},i.a.createElement("div",{className:"error-status"},e),i.a.createElement("div",{className:"error-message"},t),i.a.createElement("div",{className:"return-button"},i.a.createElement(c.Link,{prefetch:!0,to:"/"},i.a.createElement("a",null," ",i.a.createElement(o.a,{type:"primary ButtonWhiteCenter"},"Return Home "))))))}}])&&f(r.prototype,n),s&&f(r,s),t}();t.a=y},109:function(e,t){e.exports=".error-container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-container .error-detail {\n  padding-left: 60px;\n}\n.error-container .error-detail .error-status {\n  font-size: 60px;\n  font-weight: 600;\n}\n.error-container .error-detail .error-message {\n  font-size: 20px;\n  padding-bottom: 20px;\n}\n.error-container .error-detail .return-button button {\n  height: 48px;\n  width: 200px;\n}\n"}},[1065]).default}});