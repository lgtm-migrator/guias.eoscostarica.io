(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=a,O=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?r.a.createElement(O,s(s({ref:n},l),{},{components:t})):r.a.createElement(O,s({ref:n},l))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),o=(t(0),t(106)),i={id:"instalacion-de-nodos",title:"Instalaci\xf3n de Nodos",sidebar_label:"Instalaci\xf3n de Nodos"},s={unversionedId:"aprender-eosio/instalacion-de-nodos",id:"aprender-eosio/instalacion-de-nodos",isDocsHomePage:!1,title:"Instalaci\xf3n de Nodos",description:"Versi\xf3n EOSIO : v2.0.6",source:"@site/docs/aprender-eosio/instalacion-de-nodos.md",permalink:"/docs/aprender-eosio/instalacion-de-nodos",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/instalacion-de-nodos.md",lastUpdatedBy:"Andres Gomez",lastUpdatedAt:1598012216,sidebar_label:"Instalaci\xf3n de Nodos",sidebar:"docs",previous:{title:"Como Iniciar",permalink:"/docs/aprender-eosio/como-iniciar"},next:{title:"Contrato Hola Mundo",permalink:"/docs/aprender-eosio/contrato-hola-mundo"}},c=[{value:"Instale EOSIO desde binarios precompilados",id:"instale-eosio-desde-binarios-precompilados",children:[{value:"Desinstalar",id:"desinstalar",children:[]}]}],l={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Versi\xf3n EOSIO : ",Object(o.b)("inlineCode",{parentName:"p"},"v2.0.6")),Object(o.b)("p",null,"Chain ID: ",Object(o.b)("inlineCode",{parentName:"p"},"2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840")),Object(o.b)("p",null,"Archivo G\xe9nesis : ",Object(o.b)("inlineCode",{parentName:"p"},"genesis.json")),Object(o.b)("h2",{id:"instale-eosio-desde-binarios-precompilados"},"Instale EOSIO desde binarios precompilados"),Object(o.b)("p",null,"Descargue la \xfaltima versi\xf3n de EOSIO para su sistema operativo desde: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases/tag/v2.0.6"}),"https://github.com/EOSIO/eos/releases/tag/v2.0.6")),Object(o.b)("p",null,"Por ejemplo, para ubuntu 18.04 necesitas descargar ",Object(o.b)("inlineCode",{parentName:"p"},"eosio_2.0.6-1-ubuntu-18.04_amd64.deb")),Object(o.b)("p",null,"Puedes usar apt para instalarlo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/eosio/eos/releases/download/v2.0.6/eosio_2.0.6-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.6-1-ubuntu-18.04_amd64.deb\n")),Object(o.b)("p",null,"Descargar\xe1 todas las dependencias e instalar\xe1 EOSIO a ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.6")),Object(o.b)("h3",{id:"desinstalar"},"Desinstalar"),Object(o.b)("p",null,"Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/eosio_uninstall.sh\n")))}d.isMDXComponent=!0}}]);