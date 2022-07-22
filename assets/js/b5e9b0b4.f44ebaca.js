"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[4619],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(f,d(d({ref:a},c),{},{components:t})):n.createElement(f,d({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var l=2;l<r;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1835:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),d=t(4996),i=["components"],s={id:"patron-demux",title:"Patr\xf3n arquitect\xf3nico Demux",sidebar_label:"Patr\xf3n Demux",description:"Descripci\xf3n del patr\xf3n demux",keywords:["demux","patr\xf3n arquitect\xf3nico backend","patr\xf3n demux","patr\xf3n de arquitectura demux","EOSIO","EOS Costa Rica"]},l=void 0,c={unversionedId:"aprender-eosio/patron-demux",id:"aprender-eosio/patron-demux",title:"Patr\xf3n arquitect\xf3nico Demux",description:"Descripci\xf3n del patr\xf3n demux",source:"@site/docs/aprender-eosio/patron-demux.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/patron-demux",permalink:"/docs/aprender-eosio/patron-demux",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/patron-demux.md",tags:[],version:"current",lastUpdatedBy:"Helbertson Torres",lastUpdatedAt:1658512646,formattedLastUpdatedAt:"22 jul 2022",frontMatter:{id:"patron-demux",title:"Patr\xf3n arquitect\xf3nico Demux",sidebar_label:"Patr\xf3n Demux",description:"Descripci\xf3n del patr\xf3n demux",keywords:["demux","patr\xf3n arquitect\xf3nico backend","patr\xf3n demux","patr\xf3n de arquitectura demux","EOSIO","EOS Costa Rica"]},sidebar:"docs",previous:{title:"Desarrollo de Dapps",permalink:"/docs/aprender-eosio/desarrollo-de-dapps"},next:{title:"Cadena de Bloques EOS",permalink:"/docs/aprender-eosio/cadena-de-bloques-eos"}},u={},p=[{value:"Patr\xf3n Demux",id:"patr\xf3n-demux",level:2},{value:"Capa de persistencia separada",id:"capa-de-persistencia-separada",level:2},{value:"\xdanica fuente de la verdad",id:"\xfanica-fuente-de-la-verdad",level:2},{value:"Efectos Secundarios",id:"efectos-secundarios",level:2},{value:"Flujo de los datos",id:"flujo-de-los-datos",level:2},{value:"Diagrama del flujo de datos de demux",id:"diagrama-del-flujo-de-datos-de-demux",level:3},{value:"Secuencia del flujo de datos de demux",id:"secuencia-del-flujo-de-datos-de-demux",level:3},{value:"Implementaci\xf3n en EOS Costa Rica",id:"implementaci\xf3n-en-eos-costa-rica",level:2},{value:"Proyectos de c\xf3digo abierto",id:"proyectos-de-c\xf3digo-abierto",level:3}],m={toc:p};function f(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"patr\xf3n-demux"},"Patr\xf3n Demux"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/eosio/introducing-demux-deterministic-databases-off-chain-verified-by-the-eosio-blockchain-bd860c49b017"},"Demux")," es un patr\xf3n arquitect\xf3nico para infraestructura backend basado en el patr\xf3n de ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/flux/docs/in-depth-overview.html"},"Arquitectura Flux")," y ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/"},"Redux"),". "),(0,r.kt)("p",null,"Es utilizado para que aplicaciones construidas en la cadena de bloques de EOSIO puedan abastecer de eventos a la cadena de bloques, actualizar de forma determinista bases de datos consultables y desencadenar efectos secundarios tanto en la cadena de bloques como en servicios externos."),(0,r.kt)("p",null,"Del mismo modo, el patr\xf3n en cuesti\xf3n naci\xf3 considerando lo siguiente:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Separar la preocupaci\xf3n de c\xf3mo existe el estado en la cadena de bloques y c\xf3mo es consultado por el frontend del cliente."),(0,r.kt)("li",{parentName:"ul"},"El frontend del cliente no es el \xfanico responsable de determinar el estado derivado, reducido y/o acumulado."),(0,r.kt)("li",{parentName:"ul"},"Posibilidad de que los eventos de la cadena de bloques desencadenen nuevas transacciones, as\xed como otros efectos secundarios fuera de la cadena de bloques."),(0,r.kt)("li",{parentName:"ul"},"La cadena de bloques como la \xfanica fuente de verdad para todo el estado de la aplicaci\xf3n.")),(0,r.kt)("p",null,"De manera general, demux permite aprovechar los beneficios tanto de las cadenas de bloques como de las bases de datos tradicionales, por un lado, se mantienen las propiedades de inmutabilidad, trazabilidad y confianza ofrecidas por las cadenas de bloques y por el otro, la facilidad, rapidez y flexibilidad para consultar bases de datos. Esto porque como realizar consultas complejas en una cadena de bloques posee un alto costo, se aprovecha que gracias a diversas optimizaciones que efect\xfaan las bases de datos la cantidad de recursos necesarios es mucho menor."),(0,r.kt)("h2",{id:"capa-de-persistencia-separada"},"Capa de persistencia separada"),(0,r.kt)("p",null,"El almacenamiento de datos en el estado indexado de las cadenas de bloques puede ser \xfatil por tres razones: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El consenso descentralizado de los resultados de los c\xe1lculos."),(0,r.kt)("li",{parentName:"ul"},"El uso del estado dentro de otros c\xe1lculos de la cadena de bloques. "),(0,r.kt)("li",{parentName:"ul"},"La recuperaci\xf3n del estado para su uso en las interfaces de los clientes.")),(0,r.kt)("p",null,"Sin embargo, cuando se construyen frontends m\xe1s complicados comienzan a aparecer problemas al realizar la consulta directa a la cadena de bloques, es debido a esto, que demux aborda los problemas de escalado descargando las consultas a una capa de persistencia, definida a la medida seg\xfan las necesidades, por lo que, se preprocesan e indexan en una base de datos tradicional."),(0,r.kt)("p",null,"De este modo, se evita agregar m\xe1s nodos endpoints cuando se necesita escalar la carga de las consultas y tambi\xe9n, omite que se deba realizar un excesivo n\xfamero de consultas a la cadena de bloques y procesar los datos, lo cual es sumamente costoso. Lo anterior es \xfatil para cuando se tienen aplicaciones complejas que requieran recuperar los datos de una cadena de bloque. "),(0,r.kt)("p",null,"Adem\xe1s, a medida que se producen los eventos de la cadena de bloques, la base de datos elegida se actualiza mediante funciones de actualizaci\xf3n (",(0,r.kt)("inlineCode",{parentName:"p"},"Updaters"),"), que procesan de forma determinista una lista de objetos de acciones (",(0,r.kt)("inlineCode",{parentName:"p"},"Actions"),"). Entonces, de esta manera la base de datos se mantiene actualizada con respecto a la cadena de bloques y el frontend de la DAPP consulta la base de datos a trav\xe9s de una ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," adecuada."),(0,r.kt)("h2",{id:"\xfanica-fuente-de-la-verdad"},"\xdanica fuente de la verdad"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si se elimina o se pierde la base de datos puede ser recuperada reproduciendo las acciones de la cadena de bloques."),(0,r.kt)("li",{parentName:"ul"},"Si la aplicaci\xf3n es de c\xf3digo abierto y la cadena de bloques es p\xfablica, el estado de la aplicaci\xf3n puede ser auditado."),(0,r.kt)("li",{parentName:"ul"},"No se requiere mantener m\xfaltiples formas de actualizar el estado.")),(0,r.kt)("h2",{id:"efectos-secundarios"},"Efectos Secundarios"),(0,r.kt)("p",null,"Dado que se tiene un sistema para actuar sobre eventos espec\xedficos de la cadena de bloques de forma determinista, se puede utilizar este sistema para gestionar tambi\xe9n eventos no deterministas."),(0,r.kt)("p",null,"Para esto se tienen las funciones de efecto (",(0,r.kt)("inlineCode",{parentName:"p"},"Effects"),") que trabajan de manera similar a las funciones de actualizaci\xf3n, con la diferencia que las de efecto se ejecutan de forma asincr\xf3nica, no se ejecutan durante las repeticiones, y modificar la base de datos est\xe1 fuera del alcance de estas funciones. "),(0,r.kt)("p",null,"Algunos ejemplos de efectos secundarios son: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Firmar y emitir una transacci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Enviar un correo electr\xf3nico."),(0,r.kt)("li",{parentName:"ul"},"Iniciar un pago Fiat tradicional.")),(0,r.kt)("h2",{id:"flujo-de-los-datos"},"Flujo de los datos"),(0,r.kt)("p",null,"As\xed como ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/flux/docs/in-depth-overview.html#structure-and-data-flow"},"Flux")," y ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-terms-and-concepts"},"Redux"),", el flujo de los datos en demux es unidireccional. Comenzando desde el frontend de la DAPP, este puede escribir en la cadena de datos mediante transacciones (",(0,r.kt)("inlineCode",{parentName:"p"},"Transactions"),"), que ser\xe1n le\xeddas por un observador (",(0,r.kt)("inlineCode",{parentName:"p"},"Action Watcher"),") para notificar que deben ser manejadas lo que puede provocar efectos secundarios, despu\xe9s de esto mediante las funciones de actualizaci\xf3n el evento ser\xe1 registrado en la base de datos que ser\xe1 consultada mediante un ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," por la DAPP. "),(0,r.kt)("h3",{id:"diagrama-del-flujo-de-datos-de-demux"},"Diagrama del flujo de datos de demux"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"Diagrama del flujo de datos de demux",title:"Diagrama del patr\xf3n Demux",src:(0,d.Z)("/img/diagramas/demux-pattern.webp"),loading:"lazy"})),(0,r.kt)("h3",{id:"secuencia-del-flujo-de-datos-de-demux"},"Secuencia del flujo de datos de demux"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"El cliente env\xeda una transacci\xf3n a la cadena de bloques."),(0,r.kt)("li",{parentName:"ol"},"El ",(0,r.kt)("inlineCode",{parentName:"li"},"Action Watcher")," invoca al ",(0,r.kt)("inlineCode",{parentName:"li"},"Action Reader")," para verificar los nuevos bloques."),(0,r.kt)("li",{parentName:"ol"},"El ",(0,r.kt)("inlineCode",{parentName:"li"},"Action Reader")," ve las transacciones del nuevo bloque, analiza las acciones."),(0,r.kt)("li",{parentName:"ol"},"El ",(0,r.kt)("inlineCode",{parentName:"li"},"Action Watcher")," env\xeda las acciones al ",(0,r.kt)("inlineCode",{parentName:"li"},"Action Handler"),"."),(0,r.kt)("li",{parentName:"ol"},"El ",(0,r.kt)("inlineCode",{parentName:"li"},"Action Handler")," procesa las acciones mediante ",(0,r.kt)("inlineCode",{parentName:"li"},"Updaters")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"Effects"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Actions")," ejecuta los correspondientes ",(0,r.kt)("inlineCode",{parentName:"li"},"Updaters"),", actualizando el estado de la base de datos."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Actions")," ejecuta los correspondientes ",(0,r.kt)("inlineCode",{parentName:"li"},"Effects"),", activando eventos externos."),(0,r.kt)("li",{parentName:"ol"},"El cliente consulta el ",(0,r.kt)("inlineCode",{parentName:"li"},"API")," para actualizar los datos.")),(0,r.kt)("h2",{id:"implementaci\xf3n-en-eos-costa-rica"},"Implementaci\xf3n en EOS Costa Rica"),(0,r.kt)("p",null,"Utilizamos nuestra propia soluci\xf3n inspirada en el patr\xf3n arquitect\xf3nico demux, en la que se usa el State History Plugin de nodeos como ",(0,r.kt)("inlineCode",{parentName:"p"},"Action Watcher"),"."),(0,r.kt)("h3",{id:"proyectos-de-c\xf3digo-abierto"},"Proyectos de c\xf3digo abierto"),(0,r.kt)("p",null,"Algunos de nuestros proyectos de c\xf3digo abierto implementados con la soluci\xf3n basada en el patr\xf3n demux:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eoscostarica/eosio-dashboard"},"EOSIO Dashboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eoscostarica/MyvoteEOS-proxy"},"MyvoteEOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eoscostarica/eosio-spend-explorer"},"EOSIO Spend Explorer"))))}f.isMDXComponent=!0}}]);