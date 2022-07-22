"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[6393],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||n;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var d=2;d<n;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4251:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),s=["components"],l={id:"desarrollo-de-dapps",title:"Desarrollo de Dapps",sidebar_label:"Desarollo de Dapps",description:"Desarrollo de Dapps con distintos frameworks y herramientas",keywords:["desarrollo de Dapps","dapps","EOS","Aplicaciones Descentralizadas","EOSIO","Qu\xe9 es Dapps","Para qu\xe9 sirve Dapps"]},i=void 0,d={unversionedId:"aprender-eosio/desarrollo-de-dapps",id:"aprender-eosio/desarrollo-de-dapps",title:"Desarrollo de Dapps",description:"Desarrollo de Dapps con distintos frameworks y herramientas",source:"@site/docs/aprender-eosio/desarrollo-de-dapps.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/desarrollo-de-dapps",permalink:"/docs/aprender-eosio/desarrollo-de-dapps",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/desarrollo-de-dapps.md",tags:[],version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1658448780,formattedLastUpdatedAt:"22 jul 2022",frontMatter:{id:"desarrollo-de-dapps",title:"Desarrollo de Dapps",sidebar_label:"Desarollo de Dapps",description:"Desarrollo de Dapps con distintos frameworks y herramientas",keywords:["desarrollo de Dapps","dapps","EOS","Aplicaciones Descentralizadas","EOSIO","Qu\xe9 es Dapps","Para qu\xe9 sirve Dapps"]},sidebar:"docs",previous:{title:"Llaves Privadas",permalink:"/docs/aprender-eosio/llaves-privadas"},next:{title:"Cadena de Bloques EOS",permalink:"/docs/aprender-eosio/cadena-de-bloques-eos"}},p={},c=[{value:"EOSIO para el Desarrollo de Aplicaciones Descentralizadas (dApps)",id:"eosio-para-el-desarrollo-de-aplicaciones-descentralizadas-dapps",level:2},{value:"Construyendo Aplicaciones Descentralizadas",id:"construyendo-aplicaciones-descentralizadas",level:2},{value:"Empezando",id:"empezando",level:2},{value:"Jungle Testnet",id:"jungle-testnet",level:2},{value:"Kylin Testnet",id:"kylin-testnet",level:2},{value:"Development Environment",id:"development-environment",level:2},{value:"Boilerplate de EOSIO de Aplicaciones Descentralizadas",id:"boilerplate-de-eosio-de-aplicaciones-descentralizadas",level:2},{value:"Portal de Desarrolladores de EOSIO",id:"portal-de-desarrolladores-de-eosio",level:2},{value:"IPFS Almacenamiento Descentralizado - IPFS",id:"ipfs-almacenamiento-descentralizado---ipfs",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"eosio-para-el-desarrollo-de-aplicaciones-descentralizadas-dapps"},"EOSIO para el Desarrollo de Aplicaciones Descentralizadas (dApps)"),(0,n.kt)("figure",{class:"video_container"},(0,n.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/E3Tx2DseLGE",frameborder:"0",allowfullscreen:"true"}," ")),(0,n.kt)("h2",{id:"construyendo-aplicaciones-descentralizadas"},"Construyendo Aplicaciones Descentralizadas"),(0,n.kt)("figure",{class:"video_container"},(0,n.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/J0SYv-GC3R0",frameborder:"0",allowfullscreen:"true"}," ")),(0,n.kt)("p",null,"Puedes ver m\xe1s en el ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/apexmaxable/videos"},"canal de Max G")),(0,n.kt)("figure",{class:"video_container"},(0,n.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/4OmQ7Ow9baI",frameborder:"0",allowfullscreen:"true"}," ")),(0,n.kt)("h2",{id:"empezando"},"Empezando"),(0,n.kt)("p",null,"Para obtener mas informaci\xf3n sobre los contratos inteligentes puede visitar la gu\xeda ",(0,n.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/contratos-inteligentes"},"Contratos Inteligentes"),". "),(0,n.kt)("h2",{id:"jungle-testnet"},"Jungle Testnet"),(0,n.kt)("figure",{class:"video_container"},(0,n.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/s3EM3Hw1S8I",frameborder:"0",allowfullscreen:"true"}," ")),(0,n.kt)("p",null,"More at ",(0,n.kt)("a",{parentName:"p",href:"https://jungletestnet.io"},"https://jungletestnet.io")),(0,n.kt)("h2",{id:"kylin-testnet"},"Kylin Testnet"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.cryptokylin.io/"},"https://www.cryptokylin.io/")),(0,n.kt)("h2",{id:"development-environment"},"Development Environment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"EOS Local")," provee una realmente r\xe1pida manera de configurar una red local de EOS con IPFS usando docker."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-local"},"https://github.com/eoscostarica/eos-local")),(0,n.kt)("p",null,"EOSIO.CDT (Contract Development Toolkit) es un conjunto de herramientas usada para desarrollar contratos de EOSIO."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eosio.cdt"},"https://github.com/EOSIO/eosio.cdt")," "),(0,n.kt)("p",null,"Contratos de desarrollo de EOSIO basados en python y framework de pruebas."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/tokenika/eosfactory"},"https://github.com/tokenika/eosfactory")),(0,n.kt)("h2",{id:"boilerplate-de-eosio-de-aplicaciones-descentralizadas"},"Boilerplate de EOSIO de Aplicaciones Descentralizadas"),(0,n.kt)("p",null,"Esta plantilla provee una muy r\xe1pida manera de empezar con el desarrollo de aplicaciones en la plataforma de EOSIO. Es una opinada selecci\xf3n de tecnolog\xedas que te permitir\xe1n construir aplicaciones descentralizadas EOSIO escalables y de alto rendimiento."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-dapp-boilerplate"},"https://github.com/eoscostarica/eos-dapp-boilerplate")," "),(0,n.kt)("h2",{id:"portal-de-desarrolladores-de-eosio"},"Portal de Desarrolladores de EOSIO"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developers.eos.io/"},"https://developers.eos.io/")),(0,n.kt)("h2",{id:"ipfs-almacenamiento-descentralizado---ipfs"},"IPFS Almacenamiento Descentralizado - IPFS"),(0,n.kt)("figure",{class:"video_container"},(0,n.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/5Uj6uR3fp-U",frameborder:"0",allowfullscreen:"true"}," ")),(0,n.kt)("figure",{class:"video_container"},(0,n.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/HUVmypx9HGI",frameborder:"0",allowfullscreen:"true"}," ")))}m.isMDXComponent=!0}}]);