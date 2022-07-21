"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[5952],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(b,o(o({ref:t},l),{},{components:r})):n.createElement(b,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1826:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={id:"kubernetes",title:"Kubernetes",sidebar_label:"Kubernetes",description:"definiciones de Kubernetes",keywords:["Qu\xe9 es kubernetes","C\xf3mo funciona Kubernetes","Ventajas de Kubernetes"]},u=void 0,c={unversionedId:"tutoriales/kubernetes",id:"tutoriales/kubernetes",title:"Kubernetes",description:"definiciones de Kubernetes",source:"@site/docs/tutoriales/kubernetes.md",sourceDirName:"tutoriales",slug:"/tutoriales/kubernetes",permalink:"/docs/tutoriales/kubernetes",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1658367012,formattedLastUpdatedAt:"21 jul 2022",frontMatter:{id:"kubernetes",title:"Kubernetes",sidebar_label:"Kubernetes",description:"definiciones de Kubernetes",keywords:["Qu\xe9 es kubernetes","C\xf3mo funciona Kubernetes","Ventajas de Kubernetes"]},sidebar:"docs",previous:{title:"Instalaci\xf3n Red Privada EOSIO",permalink:"/docs/tutoriales/instalacion-de-red-privada"},next:{title:"Llaves de GitHub",permalink:"/docs/tutoriales/llaves-github"}},l={},d=[{value:"Caracter\xedsticas de Kubernetes:",id:"caracter\xedsticas-de-kubernetes",level:2},{value:"Arquitectura de Kubernetes",id:"arquitectura-de-kubernetes",level:2},{value:"Esquema de Arquitectura de Kubernetes",id:"esquema-de-arquitectura-de-kubernetes",level:2},{value:"Conceptos Clave en k8s",id:"conceptos-clave-en-k8s",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kubernetes es una plataforma de c\xf3digo abierto, que fue creada por Google, utilizada para la gesti\xf3n, el despliegue, la escalabilidad y el monitoreo de contenedores Docker. "),(0,s.kt)("h2",{id:"caracter\xedsticas-de-kubernetes"},"Caracter\xedsticas de Kubernetes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Distribuci\xf3n inteligente de contenedores."),(0,s.kt)("li",{parentName:"ul"},"Administraci\xf3n de las cargas de trabajos (provee balanceo de carga)."),(0,s.kt)("li",{parentName:"ul"},"F\xe1cil gesti\xf3n de servicios y aplicaciones."),(0,s.kt)("li",{parentName:"ul"},"Alta disponibilidad."),(0,s.kt)("li",{parentName:"ul"},"Gran flexibilidad y permite trabajo modular."),(0,s.kt)("li",{parentName:"ul"},"Monitoreo de contenedores.")),(0,s.kt)("h2",{id:"arquitectura-de-kubernetes"},"Arquitectura de Kubernetes"),(0,s.kt)("p",null,"Hay dos roles principales, \u201cmaster\u201d y \u201cnode\u201d. El master se encarga de manejar y orquestar los diferentes micro-servicios entre los 4 nodos disponibles del cluster."),(0,s.kt)("h2",{id:"esquema-de-arquitectura-de-kubernetes"},"Esquema de Arquitectura de Kubernetes"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/107062957-724c5c00-679f-11eb-88f0-fb4b884785ab.png",alt:"Diagrama de la Arquitectura de Kubernetes"})),(0,s.kt)("h2",{id:"conceptos-clave-en-k8s"},"Conceptos Clave en k8s"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Cluster:")," Es un grupo de dispositivos que pueden ser f\xedsicos o virtuales y que se encuentran unidos muchas veces por una red y, por lo cual, se comportan como una."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Nodo Kubernetes:")," Es una m\xe1quina que se est\xe1 ejecutando en Kubernetes, en la cual se pueden programar \u201cpods\u201d."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Pod:")," Es un grupo de uno o m\xe1s containers que comparten el almacenamiento y las configuraciones necesarias para ser ejecutados."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Replication Controller:")," Es quien maneja los fallos antes comentados y recrea, en caso de ser necesario, los pods. Adem\xe1s, tambi\xe9n se asegura de que el n\xfamero de r\xe9plicas del pod se est\xe9 ejecutando."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Service:")," Es una abstracci\xf3n que define un conjunto l\xf3gico de pods, as\xed como las reglas y la l\xf3gica para acceder a ellos."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Infraestructura como C\xf3digo IaC"),"\nSe crear\xe1 un repositorio con c\xf3digo para el dise\xf1o y despliegue de la infraestructura del proyecto Este representar\xe1 el estado deseado en los servidores, as\xed como im\xe1genes pre-compiladas de cada servicio que se desea desplegar."),(0,s.kt)("p",null,"Para m\xe1s informaci\xf3n visite nuestra gu\xeda de ",(0,s.kt)("a",{parentName:"p",href:"/docs/devops#kubernetes"},"Kubernetes")))}m.isMDXComponent=!0}}]);