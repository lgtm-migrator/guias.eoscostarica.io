"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[2527],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var a=o.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=l(e.components);return o.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||t;return n?o.createElement(b,i(i({ref:a},d),{},{components:n})):o.createElement(b,i({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,i=new Array(t);i[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<t;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2582:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(7462),r=n(3366),t=(n(7294),n(3905)),i=["components"],s={id:"seguridad-blockchain",title:"Vulnerabilidades del Blockchain",sidebar_label:"Seguridad Blockchain",description:"Consideraciones de Seguridad que para Aplicaciones Blockchain",keywords:["seguridad","blockchain","eosio","eos","EOS","Vulnerabilidades Blockchain","\xbfRiesgo de Seguridad en blockchain?"]},c=void 0,l={unversionedId:"aprender-eosio/seguridad-blockchain",id:"aprender-eosio/seguridad-blockchain",title:"Vulnerabilidades del Blockchain",description:"Consideraciones de Seguridad que para Aplicaciones Blockchain",source:"@site/docs/aprender-eosio/seguridad-blockchain.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/seguridad-blockchain",permalink:"/docs/aprender-eosio/seguridad-blockchain",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/seguridad-blockchain.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1658940519,formattedLastUpdatedAt:"27 jul 2022",frontMatter:{id:"seguridad-blockchain",title:"Vulnerabilidades del Blockchain",sidebar_label:"Seguridad Blockchain",description:"Consideraciones de Seguridad que para Aplicaciones Blockchain",keywords:["seguridad","blockchain","eosio","eos","EOS","Vulnerabilidades Blockchain","\xbfRiesgo de Seguridad en blockchain?"]},sidebar:"docs",previous:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"},next:{title:"NFTs en el ecosistema de EOSIO",permalink:"/docs/aprender-eosio/nfts-en-eosio"}},d={},u=[{value:"Explotando Vulnerabilidades en Blockchain",id:"explotando-vulnerabilidades-en-blockchain",level:2}],p={toc:u};function m(e){var a=e.components,n=(0,r.Z)(e,i);return(0,t.kt)("wrapper",(0,o.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"explotando-vulnerabilidades-en-blockchain"},"Explotando Vulnerabilidades en Blockchain"),(0,t.kt)("p",null,'El blockchain es un conjunto de tecnolog\xedas emergentes que se presentan como alternativas a sistemas centralizados. Un ejemplo notable es que buscan reemplazar los tradicionales sistemas bancarios por medio del uso de criptomonedas sin un control centralizado, como el caso del conocido Bitcoin. Tambi\xe9n tienen otras aplicaciones importantes, como en la trazabilidad de bienes, el control de la corrupci\xf3n, e incluso los sistemas democr\xe1ticos. Algunas de estas capacidades se implementan por medio de "contratos inteligentes", b\xe1sicamente software que se ejecute sobre las blockchain.'),(0,t.kt)("p",null,"Al ser una tecnolog\xeda relativamente nueva, en pleno auge de investigaci\xf3n y desarrollo, tambi\xe9n presenta problemas de seguridad que pueden ser explotados por atacantes. Como se menciona antes, algunos de los sistemas que las blockchain buscan reemplazar son cr\xedticos. Cualquier problema de seguridad puede tener consecuencias catastr\xf3ficas en dinero y continuidad de las organizaciones."),(0,t.kt)("p",null,"En esta charla hablaremos de los principales problemas de seguridad que afectan a las blockchain, especialmente con un enfoque en los contratos inteligentes. Mostraremos como se pueden explotar estas fallas y daremos algunos ejemplos pr\xe1cticos. Tambi\xe9n hablaremos de algunos hackeos famosos en los que atacantes han sido capaz de robar millones de dolares de algunas sistemas basados en blockchain. Finalmente explicaremos como se pueden evitar dichas fallas. Nos enfocaremos especialmente en a tecnolog\xeda de EOSIO."),(0,t.kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/tss1d0sow0o",frameBorder:"0",allow:"true",allowFullScreen:!0}),(0,t.kt)("br",null),(0,t.kt)("p",null,"Como se mencionaba anteriormente, ning\xfan sistema es 100% seguro. Por ello, es necesario tener en cuenta que los atacantes pueden robar informaci\xf3n de alguna u otra manera, por lo que es importante saber c\xf3mo evitar estos ataques y aprender de los mismos para mejorar la seguridad de nuestros sistemas y as\xed evitar futuras amenazas."),(0,t.kt)("p",null,"Hemos presenciando algunos ataques en los que los atacantes han sido capaces de robar informaci\xf3n o inclusive fondos de usuarios, como es el caso del ataque a ",(0,t.kt)("strong",{parentName:"p"},"(EOS SX Vault)"),". En este caso, el atacante encontr\xf3 algunas vulnerabilidades en el contrato inteligente que se ejecuta en la blockchain. Para este ataque nuestro equipo realiz\xf3 un seguimiento completo para analizar y aprender de la vulnerabilidad que presentaba el sistema, puedes dar seguimiento de este an\xe1lisis completo en ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("a",{parentName:"strong",href:"https://eoscostarica.medium.com/vulnerabilidad-encontrada-en-el-contrato-inteligente-vaults-sx-ataque-eos-sx-vault-c60eb192f148"},'Vulnerabilidad encontrada en el contrato inteligente "vaults.sx" (ataque EOS SX Vault)')),"."))}m.isMDXComponent=!0}}]);