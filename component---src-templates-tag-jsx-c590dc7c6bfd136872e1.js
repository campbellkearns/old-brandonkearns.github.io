webpackJsonp([0xa6cd3c51205b],{38:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var i=n(1),f=o(i),l=n(33),s=o(l),c=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return u(e,t),e.prototype.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},e.prototype.render=function(){var t=this.getPostList();return f.default.createElement("div",null,t.map(function(t){return f.default.createElement(s.default,{to:t.path,key:t.title},f.default.createElement("p",null,t.title))}))},e}(f.default.Component);e.default=c,t.exports=e.default},171:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var i=n(1),f=o(i),l=n(15),s=o(l),c=n(38),p=o(c),d=n(12),h=o(d),y=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return u(e,t),e.prototype.render=function(){var t=this.props.pathContext.tag,e=this.props.data.allMarkdownRemark.edges;return f.default.createElement("div",{className:"tag-container"},f.default.createElement(s.default,{title:'Posts tagged as "'+t+'" | '+h.default.siteTitle}),f.default.createElement(p.default,{postEdges:e}))},e}(f.default.Component);e.default=y;e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-c590dc7c6bfd136872e1.js.map