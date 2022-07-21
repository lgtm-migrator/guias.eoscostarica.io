"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[9933],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return g}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),g=a,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8314:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={id:"contratos-inteligentes",title:"Contratos Inteligentes en EOSIO",sidebar_label:"Contratos Inteligentes EOSIO",description:"Definiciones y explicaciones de contratos inteligentes en EOSIO.",keywords:["contratos inteligentes","contrato inteligente","smart contract","blockchain","eosio","EOS","WASM","Qu\xe9 es un contrato inteligente","C\xf3mo crear un contrato inteligente"]},l=void 0,c={unversionedId:"aprender-eosio/contratos-inteligentes",id:"aprender-eosio/contratos-inteligentes",title:"Contratos Inteligentes en EOSIO",description:"Definiciones y explicaciones de contratos inteligentes en EOSIO.",source:"@site/docs/aprender-eosio/contratos-inteligentes.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/contratos-inteligentes",permalink:"/docs/aprender-eosio/contratos-inteligentes",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/contratos-inteligentes.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1658367012,formattedLastUpdatedAt:"21 jul 2022",frontMatter:{id:"contratos-inteligentes",title:"Contratos Inteligentes en EOSIO",sidebar_label:"Contratos Inteligentes EOSIO",description:"Definiciones y explicaciones de contratos inteligentes en EOSIO.",keywords:["contratos inteligentes","contrato inteligente","smart contract","blockchain","eosio","EOS","WASM","Qu\xe9 es un contrato inteligente","C\xf3mo crear un contrato inteligente"]},sidebar:"docs",previous:{title:"Cadena de Bloques EOS",permalink:"/docs/aprender-eosio/cadena-de-bloques-eos"},next:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"}},d={},u=[{value:"Framework de Dise\xf1o de Contratos Inteligentes",id:"framework-de-dise\xf1o-de-contratos-inteligentes",level:2},{value:"Pasos del Proceso",id:"pasos-del-proceso",level:3},{value:"Modelo de Datos",id:"modelo-de-datos",level:3},{value:"Acciones",id:"acciones",level:3},{value:"Pre- y Post- Condiciones",id:"pre--y-post--condiciones",level:3},{value:"Contratos Inteligentes de C\xf3digo Abierto",id:"contratos-inteligentes-de-c\xf3digo-abierto",level:2},{value:"Esquema de Contrato Inteligente B\xe1sico",id:"esquema-de-contrato-inteligente-b\xe1sico",level:2},{value:"Recursos Adicionales",id:"recursos-adicionales",level:2}],p={toc:u};function g(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un contrato es un acuerdo que rige los resultados de las acciones una vez dado un conjunto de datos de entrada. Un contrato puede ir desde los tipo legal (ejemplo transacciones financieras) hasta algo m\xe1s simple como las reglas de un juego. Las acciones t\xedpicas pueden ser transacciones de fondos (en el caso de un contrato financiero) o movimientos de juegos (en el caso de un contrato de juego)."),(0,r.kt)("p",null,"Un Contrato Inteligente de EOSIO es software registrado en el blockchain y ejecutado en los nodos de EOSIO, esto implementa las sem\xe1nticas de un contrato cuyo registro de solicitudes de acciones est\xe1n siendo guardadas en el blockchain. El Contrato Inteligente define la interfaz (acciones, par\xe1metros, estructuras de datos) y el c\xf3digo que implementa la interfaz. El c\xf3digo es compilado en el formato ",(0,r.kt)("strong",{parentName:"p"},"bytecode can\xf3nico")," el cual puede ser obtenido y ejecutado por los nodos. El blockchain guarda las transacciones (transferencias legales, movimientos de juego) del contrato. Cada Contrato Inteligente debe ser acompa\xf1ado de un Contrato Ricardiano que define la legalidad de los t\xe9rminos y condiciones enlazadas del contrato."),(0,r.kt)("p",null,"Visite nuestro ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/tutoriales/cpp-moderno"},"Tutorial C++ Moderno")),(0,r.kt)("h2",{id:"framework-de-dise\xf1o-de-contratos-inteligentes"},"Framework de Dise\xf1o de Contratos Inteligentes"),(0,r.kt)("p",null,"Escasez Digital ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/digital-scarcity/equiprental"},"github repo")," tiene un ejemplo dise\xf1ado para proveer un framework paso a paso y ejemplo de c\xf3mo crear un Contrato Inteligente en EOS. Usa un simple caso de alquiler de equipos que lista el equipo para alquilar y los alquiladores que pagan por el alquiler de dicho equipo."),(0,r.kt)("h3",{id:"pasos-del-proceso"},"Pasos del Proceso"),(0,r.kt)("p",null,"Aqu\xed se pueden ver los pasos generales para desarrollar un Contrato Inteligente.\n",(0,r.kt)("img",{alt:"Diagrama con los pasos para desarrollar un contrato inteligente",src:o(5492).Z,title:"Pasos",width:"711",height:"505"})),(0,r.kt)("h3",{id:"modelo-de-datos"},"Modelo de Datos"),(0,r.kt)("p",null,"Define la informaci\xf3n que persistir\xe1 en el Contrato Inteligente.\n",(0,r.kt)("img",{alt:"Modelo l\xf3gico de datos",src:o(6645).Z,title:"Modelo de Datos",width:"708",height:"353"})),(0,r.kt)("h3",{id:"acciones"},"Acciones"),(0,r.kt)("p",null,"Define las acciones o el estado de cambio que deben existir en el Contrato Inteligente.\n",(0,r.kt)("img",{alt:"Diagrama de caso de uso",src:o(7862).Z,title:"Acciones",width:"603",height:"489"})),(0,r.kt)("h3",{id:"pre--y-post--condiciones"},"Pre- y Post- Condiciones"),(0,r.kt)("p",null,"Define las acciones o el estado de cambios que deben existir en tu Contrato Inteligente.\n",(0,r.kt)("img",{alt:"Diagrama con las pre y post condiciones",src:o(7152).Z,title:"Pre y Post Condiciones",width:"586",height:"320"})),(0,r.kt)("h2",{id:"contratos-inteligentes-de-c\xf3digo-abierto"},"Contratos Inteligentes de C\xf3digo Abierto"),(0,r.kt)("p",null,"Nosotros manteneos una lista de Contratos Inteligentes de EOS de c\xf3digo de abierto en el siguiente repositorio:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-contracts"},"https://github.com/eoscostarica/eos-contracts")),(0,r.kt)("p",null,"Tambi\xe9n, revisar la siguiente lista de Contratos Inteligentes de EOS de c\xf3digo abierto mantenida por C\xe9sar Rodr\xedguez:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kesar/eos-awesome-contracts"},"https://github.com/kesar/eos-awesome-contracts")),(0,r.kt)("h2",{id:"esquema-de-contrato-inteligente-b\xe1sico"},"Esquema de Contrato Inteligente B\xe1sico"),(0,r.kt)("figure",{class:"video_container"},(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ZE2HxTmxfrI",frameborder:"0",allowfullscreen:"true",loading:"lazy"}," ")),(0,r.kt)("p",null,"Puedes ver m\xe1s en este canal: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/grandmoren1/videos"},"https://www.youtube.com/user/grandmoren1/videos")),(0,r.kt)("h2",{id:"recursos-adicionales"},"Recursos Adicionales"),(0,r.kt)("p",null,"Si desea conocer m\xe1s sobre esto puede visite los siguientes enlaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guias.eoscostarica.io/docs/tutoriales/contrato-hola-mundo"},"Tutorial Contrato Inteligente Hola Mundo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.eos.io/welcome/v2.1/smart-contract-guides/index"},"Gu\xedas de Contrato Inteligente")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cc32d9.gitbook.io/eosio-smart-contract-developers-handbook"},"Manual del desarrollador de Contratos Inteligentes EOSIO"))))}g.isMDXComponent=!0},7862:function(e,t,o){t.Z=o.p+"assets/images/actions-24fb6c008553074174ac61de2b60a9b5.webp"},6645:function(e,t,o){t.Z=o.p+"assets/images/datamodel-7579c35241a3241cb82d2bbaf2320552.webp"},7152:function(e,t,o){t.Z=o.p+"assets/images/prepostconditions-d890230d7d9b92e20c98d0e9f210b300.webp"},5492:function(e,t,o){t.Z=o.p+"assets/images/steps-0bd169453e2a26e850f4f9130d593bc3.webp"}}]);