webpackJsonp([79611799117203,60335399758886],{106:function(e,t){e.exports={layoutContext:{}}},204:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(1),l=n(a),i=r(214),u=n(i),c=r(106),f=n(c);t.default=function(e){return l.default.createElement(u.default,o({},e,f.default))},e.exports=t.default},310:function(e,t){},214:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),u=n(i),c=r(21),f=n(c),s=r(14),p=n(s);r(310);var d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=p.default.pathPrefix?p.default.pathPrefix:"/",r=this.props.location.pathname.replace(t,"").replace("/",""),n="";if(""===r)n="Home";else if("tags/"===r)n="Tags";else if("categories/"===r)n="Categories";else if("about/"===r)n="About";else if(r.indexOf("posts"))n="Article";else if(r.indexOf("tags/")){var o=r.replace("tags/","").replace("/","").replace("-"," ");n="Tagged in "+e(o)}else if(r.indexOf("categories/")){var a=r.replace("categories/","").replace("/","").replace("-"," ");n=""+e(a)}return n},t.prototype.render=function(){var e=this.props.children;return u.default.createElement("div",null,u.default.createElement(f.default,null,u.default.createElement("title",null,p.default.siteTitle+" |  "+this.getLocalTitle()),u.default.createElement("meta",{name:"description",content:p.default.siteDescription})),e())},t}(u.default.Component);t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-d880848323bee33cbd99.js.map