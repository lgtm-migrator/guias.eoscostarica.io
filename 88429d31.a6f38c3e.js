(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var o=r(3),a=r(7),t=(r(0),r(134)),c=r(137),i={id:"docker",title:"Docker",sidebar_label:"Docker"},s={unversionedId:"tutoriales/docker",id:"tutoriales/docker",isDocsHomePage:!1,title:"Docker",description:'Docker es una herramienta que permite crear, probar y desplegar aplicaciones r\xe1pidamente. La idea detr\xe1s de Docker es crear "contenedores" que sean ligeros y port\xe1tiles para que las aplicaciones puedan ejecutarse en cualquier m\xe1quina con Docker instalado, independientemente del sistema operativo.',source:"@site/docs/tutoriales/docker.md",slug:"/tutoriales/docker",permalink:"/docs/tutoriales/docker",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/docker.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1613167723,sidebar_label:"Docker",sidebar:"docs",previous:{title:"GraphQL",permalink:"/docs/tutoriales/graphql"},next:{title:"Kubernetes",permalink:"/docs/tutoriales/kubernetes"}},l=[{value:"Docker Engine",id:"docker-engine",children:[]},{value:"Docker Compose",id:"docker-compose",children:[{value:"C\xf3mo Iniciar",id:"c\xf3mo-iniciar",children:[]},{value:"Estructura del proyecto",id:"estructura-del-proyecto",children:[]},{value:"Desglose del c\xf3digo",id:"desglose-del-c\xf3digo",children:[]},{value:"Comandos",id:"comandos",children:[]},{value:"Docker Compose Example",id:"docker-compose-example",children:[]},{value:"Ejecutar Multiples Contenedores",id:"ejecutar-multiples-contenedores",children:[]}]}],d={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(t.b)("wrapper",Object(o.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,'Docker es una herramienta que permite crear, probar y desplegar aplicaciones r\xe1pidamente. La idea detr\xe1s de Docker es crear "contenedores" que sean ligeros y port\xe1tiles para que las aplicaciones puedan ejecutarse en cualquier m\xe1quina con Docker instalado, independientemente del sistema operativo.'),Object(t.b)("p",null,"Por ejemplo, cada nodo de la red blockchain o servicio/aplicaci\xf3n desarrollada se compilar\xe1 en una imagen Docker que contiene todas sus dependencias y se despliega en uno de los varios proveedores de infraestructura con Docker disponible."),Object(t.b)("div",{style:{textAlign:"center"}},Object(t.b)("img",{alt:"Docker vs. Traditional VMs",src:Object(c.a)("/img/documentation-images/Docker-containerized-and-vm-transparent-bg.png")})),Object(t.b)("p",null,'Adem\xe1s de Docker, utilizamos una herramienta de "orquestaci\xf3n" de contenedores llamada Kubernetes (K8s).'),Object(t.b)("p",null,"Kubernetes te ayuda a gestionar los contenedores en los que se alojan tus aplicaciones de forma f\xe1cil, r\xe1pida y escalable. Adem\xe1s, tambi\xe9n dispone de monitorizaci\xf3n y balanceo de carga. Sobre los servidores virtuales. ",Object(t.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/devops#introducci%C3%B3n-a-kubernetes-y-docker"},"M\xe1s informaci\xf3n"),"."),Object(t.b)("h2",{id:"docker-engine"},"Docker Engine"),Object(t.b)("p",null,"Docker Engine es una tecnolog\xeda de contenedores de c\xf3digo abierto para construir y contenerizar sus aplicaciones. Docker Engine act\xfaa como una aplicaci\xf3n cliente-servidor con:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Un servidor con un proceso daemon de larga duraci\xf3n ",Object(t.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd"},"dockerd"),"."),Object(t.b)("li",{parentName:"ul"},"APIs que especifican interfaces que los programas pueden utilizar para hablar con el daemon Docker y darle instrucciones."),Object(t.b)("li",{parentName:"ul"},"Una interfaz de l\xednea de comandos (CLI) ",Object(t.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/cli/"},"docker"),".")),Object(t.b)("p",null,"La CLI utiliza ",Object(t.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/api/"},"Docker APIs")," para controlar o interactuar con el daemon Docker a trav\xe9s de scripts o comandos directos de la CLI. Muchas otras aplicaciones de Docker utilizan la API y la CLI subyacentes. El demonio crea y gestiona objetos Docker, como im\xe1genes, contenedores, redes y vol\xfamenes."),Object(t.b)("p",null,"Para m\xe1s detalles, v\xe9ase ",Object(t.b)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/#docker-architecture"},"Arquitectura Docker"),"."),Object(t.b)("p",null,"Para tener una configuraci\xf3n inicial de Docker, necesitamos establecer tres cosas principales:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("strong",{parentName:"li"},"Dockerfile"),": Define los pasos necesarios para crear la imagen y ejecutarla. Cada instrucci\xf3n en un Dockerfile crea una capa en la imagen."),Object(t.b)("li",{parentName:"ol"},Object(t.b)("strong",{parentName:"li"},"Imagen"),": Una imagen es una plantilla de s\xf3lo lectura con instrucciones para crear un contenedor Docker."),Object(t.b)("li",{parentName:"ol"},Object(t.b)("strong",{parentName:"li"},"Contenedor"),": Un contenedor es una instancia ejecutable de una imagen. Puedes crear, iniciar, detener, mover o eliminar un contenedor utilizando la API de Docker o la CLI.")),Object(t.b)("h2",{id:"docker-compose"},"Docker Compose"),Object(t.b)("p",null,"Compose es una herramienta para definir y ejecutar aplicaciones Docker multicontenedor. Con Compose, usted utiliza un archivo YAML para configurar los servicios de su aplicaci\xf3n. Luego, con un solo comando, creas e inicias todos los servicios desde tu configuraci\xf3n."),Object(t.b)("p",null,"El uso de Compose es b\xe1sicamente un proceso de tres pasos:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Define el entorno de tu aplicaci\xf3n con un Dockerfile para que pueda ser reproducido en cualquier lugar."),Object(t.b)("li",{parentName:"ol"},"Define los servicios que componen tu app en docker-compose.yml para que puedan ejecutarse juntos en un entorno aislado."),Object(t.b)("li",{parentName:"ol"},"Ejecuta docker-compose y Compose inicia y ejecuta toda tu app.")),Object(t.b)("p",null,"Un docker-compose.yml tiene el siguiente aspecto:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"  # optional since v1.27.0\nservices:\n  web:\n    build: .\n    ports:\n      - "5000:5000"\n    volumes:\n      - .:/code\n      - logvolume01:/var/log\n    links:\n      - redis\n  redis:\n    image: redis\nvolumes:\n  logvolume01: {}\n')),Object(t.b)("h3",{id:"c\xf3mo-iniciar"},"C\xf3mo Iniciar"),Object(t.b)("p",null,"Para iniciar nuestro primer proyecto Docker, vamos a crear la configuraci\xf3n necesaria para que arranque y diga ",Object(t.b)("inlineCode",{parentName:"p"},"Hola mundo, somos EOS Costa Rica \ud83e\udd8b"),". En primer lugar, necesitamos la configuraci\xf3n principal, as\xed que sigue los siguientes pasos para obtenerla."),Object(t.b)("h3",{id:"estructura-del-proyecto"},"Estructura del proyecto"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500  node_modules\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 .dockerignore\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 yarn.lock\n")),Object(t.b)("h3",{id:"desglose-del-c\xf3digo"},"Desglose del c\xf3digo"),Object(t.b)("h4",{id:"dockerfile"},"Dockerfile"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:12\nWORKDIR /app\nCOPY package*.json ./\nRUN yarn\nCOPY . .\nENV PORT=8080\nEXPOSE 8080\nCMD [ "yarn", "start" ]\n')),Object(t.b)("h4",{id:"dockerignore"},".dockerignore"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"node_modules")),Object(t.b)("h4",{id:"gitignore"},".gitignore"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"node_modules")),Object(t.b)("h4",{id:"srcindexjs"},"src/index.js"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},"const app = require('express')();\n \napp.get('/', (req, res ) => \n    res.json({ message: 'Hello world, we are EOS Costa Rica \ud83e\udd8b' }) \n);\n \nconst port = process.env.PORT || 8080;\n \napp.listen(port, () => console.log(`app listening on http://localhost:${port}`) );\n")),Object(t.b)("h4",{id:"packagejson"},"package.json"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "docker-demo",\n  "version": "1.0.0",\n  "description": "Hello world, we are EOS Costa Rica \ud83e\udd8b",\n  "main": "index.js",\n  "scripts": {\n    "start": "node src/index.js"\n  },\n  "keywords": [],\n  "author": "EOS Costa Rica",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),Object(t.b)("h3",{id:"comandos"},"Comandos"),Object(t.b)("h4",{id:"construir-imagen"},"Construir Imagen"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"docker build -t eoscostarica/helloworld:1.0 .")),Object(t.b)("h4",{id:"correr-contenedor"},"Correr contenedor"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"docker run -p 5000:8080 <image-id>")),Object(t.b)("h3",{id:"docker-compose-example"},"Docker Compose Example"),Object(t.b)("h4",{id:"docker-composeyml"},"docker-compose.yml"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\nservices:\n  web:\n    build: .\n    ports:\n      - "8080:8080"\n  db:\n    image: "mysql"\n    environment: \n      MYSQL_ROOT_PASSWORD: password\n    volumes:\n      - db-data:/foo\nvolumes:\n  db-data:\n')),Object(t.b)("h3",{id:"ejecutar-multiples-contenedores"},"Ejecutar Multiples Contenedores"),Object(t.b)("h4",{id:"comando"},"Comando"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"docker-compose up")))}u.isMDXComponent=!0},134:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var o=r(0),a=r.n(o);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,a=function(e,n){if(null==e)return{};var r,o,a={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),b=o,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||t;return r?a.a.createElement(m,i(i({ref:n},l),{},{components:r})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,c=new Array(t);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<t;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},137:function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return c}));var o=r(22),a=r(139);function t(){var e=Object(o.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,t=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,o){var t=void 0===o?{}:o,c=t.forcePrependBaseUrl,i=void 0!==c&&c,s=t.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return n+r;var d=r.startsWith(n)?r:n+r.replace(/^\//,"");return l?e+d:d}(t,r,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,t().withBaseUrl)(e,n)}},139:function(e,n,r){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return a}))}}]);