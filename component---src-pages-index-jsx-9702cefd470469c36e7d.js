webpackJsonp([0xc23565d713b7],{38:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),c=n(33),f=r(c),s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return u.default.createElement("div",null,e.map(function(e){return u.default.createElement(f.default,{to:e.path,key:e.title},u.default.createElement("p",null,e.title))}))},t}(u.default.Component);t.default=s,e.exports=t.default},63:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),c=n(15),f=r(c),s=n(12),p=r(s),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,o=void 0,a=void 0,i=void 0,l=void 0;if(r){var c=t.frontmatter;o=c.title,a=c.description?c.description:t.excerpt,i=c.cover,l=p.default.siteUrl+p.default.pathPrefix+n}else o=p.default.siteTitle,a=p.default.siteDescription,i=p.default.siteLogo;var s="/"===p.default.pathPrefix?"":p.default.pathPrefix;i=p.default.siteUrl+s+i;var d=p.default.siteUrl+p.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:o,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:"",headline:o,image:{"@type":"ImageObject",url:i},description:a}]),u.default.createElement(f.default,null,u.default.createElement("meta",{name:"description",content:a}),u.default.createElement("meta",{name:"image",content:i}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?l:d}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:o}),u.default.createElement("meta",{property:"og:description",content:a}),u.default.createElement("meta",{property:"og:image",content:i}),u.default.createElement("meta",{property:"fb:app_id",content:p.default.siteFBAppID?p.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:p.default.userTwitter?p.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:o}),u.default.createElement("meta",{name:"twitter:description",content:a}),u.default.createElement("meta",{name:"twitter:image",content:i}))},t}(l.Component);t.default=d,e.exports=t.default},168:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),u=r(l),c=n(15),f=r(c),s=n(38),p=r(s),d=n(63),m=r(d),y=n(12),h=r(y),b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"index-container"},u.default.createElement(f.default,{title:h.default.siteTitle}),u.default.createElement(m.default,{postEdges:e}),u.default.createElement("section",null,"brandonkearns.com is currently being converted to a Gatsby site - at the same time, I am learning how to use Gatsby, so keep checking back. Blog posts will still be here, don't worry. Stay tuned."),u.default.createElement(p.default,{postEdges:e}))},t}(u.default.Component);t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-9702cefd470469c36e7d.js.map