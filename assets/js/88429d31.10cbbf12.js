"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[1475],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,a=function(e,n){if(null==e)return{};var r,o,a={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),s=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,a=e.mdxType,t=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||t;return r?o.createElement(k,i(i({ref:n},d),{},{components:r})):o.createElement(k,i({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=r.length,i=new Array(t);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<t;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1900:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var o=r(7462),a=r(3366),t=(r(7294),r(3905)),i=r(4996),c=["components"],l={id:"docker",title:"Docker",sidebar_label:"Docker"},s=void 0,d={unversionedId:"tutoriales/docker",id:"tutoriales/docker",title:"Docker",description:'Docker es una herramienta que permite crear, probar y desplegar aplicaciones r\xe1pidamente. La idea detr\xe1s de Docker es crear "contenedores" que sean ligeros y port\xe1tiles para que las aplicaciones puedan ejecutarse en cualquier m\xe1quina con Docker instalado, independientemente del sistema operativo.',source:"@site/docs/tutoriales/docker.md",sourceDirName:"tutoriales",slug:"/tutoriales/docker",permalink:"/docs/tutoriales/docker",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/docker.md",tags:[],version:"current",lastUpdatedBy:"Xavier",lastUpdatedAt:1643131129,formattedLastUpdatedAt:"25/1/2022",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker"},sidebar:"docs",previous:{title:"C++ Moderno",permalink:"/docs/tutoriales/cpp-moderno"},next:{title:"GraphQL",permalink:"/docs/tutoriales/graphql"}},u=[{value:"Docker Engine",id:"docker-engine",children:[],level:2},{value:"Docker Compose",id:"docker-compose",children:[{value:"C\xf3mo Iniciar",id:"c\xf3mo-iniciar",children:[],level:3},{value:"Estructura del proyecto",id:"estructura-del-proyecto",children:[],level:3},{value:"Desglose del c\xf3digo",id:"desglose-del-c\xf3digo",children:[{value:"Dockerfile",id:"dockerfile",children:[],level:4},{value:".dockerignore",id:"dockerignore",children:[],level:4},{value:".gitignore",id:"gitignore",children:[],level:4},{value:"src/index.js",id:"srcindexjs",children:[],level:4},{value:"package.json",id:"packagejson",children:[],level:4}],level:3},{value:"Comandos",id:"comandos",children:[{value:"Construir Imagen",id:"construir-imagen",children:[],level:4},{value:"Correr contenedor",id:"correr-contenedor",children:[],level:4}],level:3},{value:"Docker Compose Example",id:"docker-compose-example",children:[{value:"docker-compose.yml",id:"docker-composeyml",children:[],level:4}],level:3},{value:"Ejecutar Multiples Contenedores",id:"ejecutar-multiples-contenedores",children:[{value:"Comando",id:"comando",children:[],level:4}],level:3}],level:2}],p={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,t.kt)("wrapper",(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,'Docker es una herramienta que permite crear, probar y desplegar aplicaciones r\xe1pidamente. La idea detr\xe1s de Docker es crear "contenedores" que sean ligeros y port\xe1tiles para que las aplicaciones puedan ejecutarse en cualquier m\xe1quina con Docker instalado, independientemente del sistema operativo.'),(0,t.kt)("p",null,"Por ejemplo, cada nodo de la red blockchain o servicio/aplicaci\xf3n desarrollada se compilar\xe1 en una imagen Docker que contiene todas sus dependencias y se despliega en uno de los varios proveedores de infraestructura con Docker disponible."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)("img",{alt:"Docker vs. Traditional VMs",src:(0,i.Z)("/img/documentation-images/Docker-containerized-and-vm-transparent-bg.png")})),(0,t.kt)("p",null,'Adem\xe1s de Docker, utilizamos una herramienta de "orquestaci\xf3n" de contenedores llamada Kubernetes (K8s).'),(0,t.kt)("p",null,"Kubernetes te ayuda a gestionar los contenedores en los que se alojan tus aplicaciones de forma f\xe1cil, r\xe1pida y escalable. Adem\xe1s, tambi\xe9n dispone de monitorizaci\xf3n y balanceo de carga. Sobre los servidores virtuales. ",(0,t.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/devops#introducci%C3%B3n-a-kubernetes-y-docker"},"M\xe1s informaci\xf3n"),"."),(0,t.kt)("h2",{id:"docker-engine"},"Docker Engine"),(0,t.kt)("p",null,"Docker Engine es una tecnolog\xeda de contenedores de c\xf3digo abierto para construir y contenerizar sus aplicaciones. Docker Engine act\xfaa como una aplicaci\xf3n cliente-servidor con:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Un servidor con un proceso daemon de larga duraci\xf3n ",(0,t.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd"},"dockerd"),"."),(0,t.kt)("li",{parentName:"ul"},"APIs que especifican interfaces que los programas pueden utilizar para hablar con el daemon Docker y darle instrucciones."),(0,t.kt)("li",{parentName:"ul"},"Una interfaz de l\xednea de comandos (CLI) ",(0,t.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/cli/"},"docker"),".")),(0,t.kt)("p",null,"La CLI utiliza ",(0,t.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/api/"},"Docker APIs")," para controlar o interactuar con el daemon Docker a trav\xe9s de scripts o comandos directos de la CLI. Muchas otras aplicaciones de Docker utilizan la API y la CLI subyacentes. El demonio crea y gestiona objetos Docker, como im\xe1genes, contenedores, redes y vol\xfamenes."),(0,t.kt)("p",null,"Para m\xe1s detalles, v\xe9ase ",(0,t.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/#docker-architecture"},"Arquitectura Docker"),"."),(0,t.kt)("p",null,"Para tener una configuraci\xf3n inicial de Docker, necesitamos establecer tres cosas principales:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Dockerfile"),": Define los pasos necesarios para crear la imagen y ejecutarla. Cada instrucci\xf3n en un Dockerfile crea una capa en la imagen."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Imagen"),": Una imagen es una plantilla de s\xf3lo lectura con instrucciones para crear un contenedor Docker."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Contenedor"),": Un contenedor es una instancia ejecutable de una imagen. Puedes crear, iniciar, detener, mover o eliminar un contenedor utilizando la API de Docker o la CLI.")),(0,t.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,t.kt)("p",null,"Compose es una herramienta para definir y ejecutar aplicaciones Docker multicontenedor. Con Compose, usted utiliza un archivo YAML para configurar los servicios de su aplicaci\xf3n. Luego, con un solo comando, creas e inicias todos los servicios desde tu configuraci\xf3n."),(0,t.kt)("p",null,"El uso de Compose es b\xe1sicamente un proceso de tres pasos:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Define el entorno de tu aplicaci\xf3n con un Dockerfile para que pueda ser reproducido en cualquier lugar."),(0,t.kt)("li",{parentName:"ol"},"Define los servicios que componen tu app en docker-compose.yml para que puedan ejecutarse juntos en un entorno aislado."),(0,t.kt)("li",{parentName:"ol"},"Ejecuta docker-compose y Compose inicia y ejecuta toda tu app.")),(0,t.kt)("p",null,"Un docker-compose.yml tiene el siguiente aspecto:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"  # optional since v1.27.0\nservices:\n  web:\n    build: .\n    ports:\n      - "5000:5000"\n    volumes:\n      - .:/code\n      - logvolume01:/var/log\n    links:\n      - redis\n  redis:\n    image: redis\nvolumes:\n  logvolume01: {}\n')),(0,t.kt)("h3",{id:"c\xf3mo-iniciar"},"C\xf3mo Iniciar"),(0,t.kt)("p",null,"Para iniciar nuestro primer proyecto Docker, vamos a crear la configuraci\xf3n necesaria para que arranque y diga ",(0,t.kt)("inlineCode",{parentName:"p"},"Hola mundo, somos EOS Costa Rica \ud83e\udd8b"),". En primer lugar, necesitamos la configuraci\xf3n principal, as\xed que sigue los siguientes pasos para obtenerla."),(0,t.kt)("h3",{id:"estructura-del-proyecto"},"Estructura del proyecto"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500  node_modules\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 .dockerignore\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 yarn.lock\n")),(0,t.kt)("h3",{id:"desglose-del-c\xf3digo"},"Desglose del c\xf3digo"),(0,t.kt)("h4",{id:"dockerfile"},"Dockerfile"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:12\nWORKDIR /app\nCOPY package*.json ./\nRUN yarn\nCOPY . .\nENV PORT=8080\nEXPOSE 8080\nCMD [ "yarn", "start" ]\n')),(0,t.kt)("h4",{id:"dockerignore"},".dockerignore"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")),(0,t.kt)("h4",{id:"gitignore"},".gitignore"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")),(0,t.kt)("h4",{id:"srcindexjs"},"src/index.js"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const app = require('express')();\n \napp.get('/', (req, res ) => \n    res.json({ message: 'Hello world, we are EOS Costa Rica \ud83e\udd8b' }) \n);\n \nconst port = process.env.PORT || 8080;\n \napp.listen(port, () => console.log(`app listening on http://localhost:${port}`) );\n")),(0,t.kt)("h4",{id:"packagejson"},"package.json"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "docker-demo",\n  "version": "1.0.0",\n  "description": "Hello world, we are EOS Costa Rica \ud83e\udd8b",\n  "main": "index.js",\n  "scripts": {\n    "start": "node src/index.js"\n  },\n  "keywords": [],\n  "author": "EOS Costa Rica",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),(0,t.kt)("h3",{id:"comandos"},"Comandos"),(0,t.kt)("h4",{id:"construir-imagen"},"Construir Imagen"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"docker build -t eoscostarica/helloworld:1.0 .")),(0,t.kt)("h4",{id:"correr-contenedor"},"Correr contenedor"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"docker run -p 5000:8080 <image-id>")),(0,t.kt)("h3",{id:"docker-compose-example"},"Docker Compose Example"),(0,t.kt)("h4",{id:"docker-composeyml"},"docker-compose.yml"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\nservices:\n  web:\n    build: .\n    ports:\n      - "8080:8080"\n  db:\n    image: "mysql"\n    environment: \n      MYSQL_ROOT_PASSWORD: password\n    volumes:\n      - db-data:/foo\nvolumes:\n  db-data:\n')),(0,t.kt)("h3",{id:"ejecutar-multiples-contenedores"},"Ejecutar Multiples Contenedores"),(0,t.kt)("h4",{id:"comando"},"Comando"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"docker-compose up")))}m.isMDXComponent=!0}}]);