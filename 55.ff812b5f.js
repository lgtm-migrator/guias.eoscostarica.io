(window.webpackJsonp=window.webpackJsonp||[]).push([[55,9,23],{139:function(e,t,a){"use strict";var r=a(3),l=a(7),n=a(0),o=a.n(n),c=a(125),s=a(129),m=a(134),i=a(126),f=a(131),u=a(56),h=a.n(u);function _(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,m=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(f.a)(t),u=Object(f.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:i},m),n)}var d=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().isDarkTheme,t=Object(i.useThemeConfig)().footer,a=t||{},r=a.copyright,l=a.links,s=void 0===l?[]:l,u=a.logo,E=void 0===u?{}:u,g=Object(n.useState)(Object(f.a)(E.src)),b=g[0],p=g[1];return t?(Object(n.useEffect)((function(){p(e?"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png":E.src)}),[e]),o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===t.style})},o.a.createElement("div",{className:"container"},s&&s.length>0&&o.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(_,e))}))):null)}))),(E||r)&&o.a.createElement("div",{className:"footer__bottom text--center"},E&&E.src&&o.a.createElement("div",{className:"margin-bottom--sm"},E.href?o.a.createElement("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},o.a.createElement(d,{alt:E.alt,url:b})):o.a.createElement(d,{alt:E.alt,url:b})),r?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null)))):null}},149:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(137);t.default=function(){return l.a.createElement(n.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);