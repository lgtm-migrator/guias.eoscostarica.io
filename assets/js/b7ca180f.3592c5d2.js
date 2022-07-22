"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[1942],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6254:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(4996),l=["components"],s={id:"publicacion-de-paquetes",title:"Publicar Paquetes en NPM",sidebar_label:"Publicaci\xf3n de Paquetes",description:"Publicar paquetes para que otros desarrolladores puedan utilizarlos con npm",keywords:["npm","publicar paquetes","npm publish","C\xf3mo publicar un paquete","C\xf3mo publicar un paquete en npm","C\xf3mo crer una librer\xeda de npm"]},u=void 0,p={unversionedId:"tutoriales/publicacion-de-paquetes",id:"tutoriales/publicacion-de-paquetes",title:"Publicar Paquetes en NPM",description:"Publicar paquetes para que otros desarrolladores puedan utilizarlos con npm",source:"@site/docs/tutoriales/publicacion-de-paquetes.md",sourceDirName:"tutoriales",slug:"/tutoriales/publicacion-de-paquetes",permalink:"/docs/tutoriales/publicacion-de-paquetes",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/publicacion-de-paquetes.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1658512677,formattedLastUpdatedAt:"22 jul 2022",frontMatter:{id:"publicacion-de-paquetes",title:"Publicar Paquetes en NPM",sidebar_label:"Publicaci\xf3n de Paquetes",description:"Publicar paquetes para que otros desarrolladores puedan utilizarlos con npm",keywords:["npm","publicar paquetes","npm publish","C\xf3mo publicar un paquete","C\xf3mo publicar un paquete en npm","C\xf3mo crer una librer\xeda de npm"]},sidebar:"docs",previous:{title:"Llaves de GitHub",permalink:"/docs/tutoriales/llaves-github"},next:{title:"Flujo de Trabajo de Git",permalink:"/docs/tutoriales/tutorial-flujo-trabajo-git"}},c={},d=[{value:"Publicaci\xf3n de Paquetes",id:"publicaci\xf3n-de-paquetes",level:2},{value:"Generaci\xf3n del Personal Access Token",id:"generaci\xf3n-del-personal-access-token",level:2},{value:"Registro de Paquetes de Github",id:"registro-de-paquetes-de-github",level:2},{value:"Autenticaci\xf3n Utilizando <code>npm login</code>",id:"autenticaci\xf3n-utilizando-npm-login",level:2},{value:"Publicar un Paquete",id:"publicar-un-paquete",level:2},{value:"Desplegar una Nueva Versi\xf3n del Paquete",id:"desplegar-una-nueva-versi\xf3n-del-paquete",level:2},{value:"Instalar el Paquete Publicado",id:"instalar-el-paquete-publicado",level:2},{value:"Referencias",id:"referencias",level:2}],m={toc:d};function g(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"publicaci\xf3n-de-paquetes"},"Publicaci\xf3n de Paquetes"),(0,i.kt)("p",null,"La modularizaci\xf3n en el contexto del software es importante para la separaci\xf3n de c\xf3digo y archivos que tengan relevancia entre s\xed, as\xed como tambi\xe9n facilitar el consumo de m\xf3dulos que son comunes entre 2 o m\xe1s proyectos. Aunque existen distintos tipos de paquetes y formas de publicarlos, este tutorial se basa en la publicaci\xf3n de paquetes de NPM."),(0,i.kt)("h2",{id:"generaci\xf3n-del-personal-access-token"},"Generaci\xf3n del Personal Access Token"),(0,i.kt)("p",null,"Para poder publicar paquetes, es necesario generar un ",(0,i.kt)("em",{parentName:"p"},"Personal Access Token")," o ",(0,i.kt)("strong",{parentName:"p"},"Token de Acceso Personal"),". Este token puede ser generado al seguir los siguientes pasos:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dir\xedjase a la opci\xf3n de ",(0,i.kt)("strong",{parentName:"li"},"Ajustes")," o ",(0,i.kt)("em",{parentName:"li"},"Settings"),(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{alt:"Muestra gr\xe1ficamente donde est\xe1n los ajustes",src:(0,o.Z)("/img/publicacion-de-paquetes/GoToSettings.webp"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Una vez se se encuentra en el panel de configuraciones, presione el bot\xf3n ",(0,i.kt)("em",{parentName:"li"},"Developer Settings")," o ",(0,i.kt)("strong",{parentName:"li"},"Configuraciones de Desarrollador"),(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{alt:"Muestra gr\xe1ficamente donde est\xe1n las configuraciones de desarrollador",src:(0,o.Z)("/img/publicacion-de-paquetes/DeveloperSettings.webp"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Ahora, presione la opci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Tokens de Acceso Personal")," o ",(0,i.kt)("em",{parentName:"li"},"Personal Access Tokens"),(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{alt:"Muestra gr\xe1ficamente donde est\xe1 la opci\xf3n de Tokens de Acceso Personal",src:(0,o.Z)("/img/publicacion-de-paquetes/PersonalAccessToken.webp"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Una vez presionada la anterior opci\xf3n, presione el bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Generar nuevo token")," o ",(0,i.kt)("em",{parentName:"li"},"Generate new token"),(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{alt:"Muestra gr\xe1ficamente donde est\xe1 la opci\xf3n para generar un token",src:(0,o.Z)("/img/publicacion-de-paquetes/GenerateNewToken.webp"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Ahora seleccioone el ",(0,i.kt)("em",{parentName:"li"},"scope")," o ",(0,i.kt)("strong",{parentName:"li"},"\xe1mbito")," adecuado para el token, como se muestra en la siguiente imagen",(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{alt:"Muestra gr\xe1ficamente donde est\xe1 el \xe1mbito",src:(0,o.Z)("/img/publicacion-de-paquetes/TokenScope.webp"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Finalmente, presione el bot\xf3n mostrado en la siguiente imagen (ubicado al final de la p\xe1gina) para obtener el token",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'<p style={{ align: "center" }}>\n  <img alt="Muestra gr\xe1ficamente donde est\xe1 el bot\xf3n" src={ useBaseUrl( \'/img/publicacion-de-paquetes/GenerateTokenButton.webp\' )} width="100%" />\n</p>\n')),(0,i.kt)("strong",{parentName:"li"},"El token se muestra una vez este es generado; proceda a copiarlo en un lugar seguro, ya que no se vuelve a mostrar."))),(0,i.kt)("h2",{id:"registro-de-paquetes-de-github"},"Registro de Paquetes de Github"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Github Package Registry")," es un registro de paquetes que entre sus ventajas ofrece:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manejo de las mismas credenciales que se utilizan en Github."),(0,i.kt)("li",{parentName:"ul"},"Posibilidad de integraci\xf3n con ",(0,i.kt)("em",{parentName:"li"},"Github Actions")," y ",(0,i.kt)("em",{parentName:"li"},"Webhooks"),"."),(0,i.kt)("li",{parentName:"ul"},"Paquetes privados que se mantienen dentro del mismo \xe1mbito o ",(0,i.kt)("em",{parentName:"li"},"scope")," de la organizaci\xf3n.")),(0,i.kt)("h2",{id:"autenticaci\xf3n-utilizando-npm-login"},"Autenticaci\xf3n Utilizando ",(0,i.kt)("inlineCode",{parentName:"h2"},"npm login")),(0,i.kt)("p",null,"Para autenticarse en el ",(0,i.kt)("em",{parentName:"p"},"Github Registry")," es necesario utilizar el comando ",(0,i.kt)("inlineCode",{parentName:"p"},"npm login")," de la siguiente manera:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com\n\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Recuerda reemplazar USERNAME con el usuario de Github respectivo (el que cre\xf3 el ",(0,i.kt)("em",{parentName:"p"},"Personal Access Token"),"), TOKEN con el ",(0,i.kt)("em",{parentName:"p"},"Personal Access Token")," generado y el PUBLIC-EMAIL-ADDRESS con la direcci\xf3n de correo electr\xf3nico que corresponde al usuario.")),(0,i.kt)("p",null,"Si desea autenticarse a\xf1adiendo su ",(0,i.kt)("em",{parentName:"p"},"Personal Access Token")," al archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.npmrc"),", puede dirigirse a la ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"documentaci\xf3n de github")," para mayor extensi\xf3n en este asunto."),(0,i.kt)("h2",{id:"publicar-un-paquete"},"Publicar un Paquete"),(0,i.kt)("p",null,"En el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," es necesario agregar un elemento m\xe1s llamado ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig"),", que hace referencia al registro donde se desea publicar el paquete."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edite el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," e incluya la entrada ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"publishConfig": {\n  "registry":"https://npm.pkg.github.com"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verifique si la entrada ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," en el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," corresponde a la URL de repositorio. Por ejemplo si la URL del repositorio es ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com/my-org/test"),", entonces la entrada ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," debe ser ",(0,i.kt)("inlineCode",{parentName:"p"},"git://github.com/my-org/test.git"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ahora ejecute el siguiente comando en la terminal para publicar el paquete"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm publish\n")))),(0,i.kt)("h2",{id:"desplegar-una-nueva-versi\xf3n-del-paquete"},"Desplegar una Nueva Versi\xf3n del Paquete"),(0,i.kt)("p",null,"A la hora publicar una nueva versi\xf3n, es necesario cambiar la entrada ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," en el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Para esto se est\xe1 siguiendo el est\xe1ndar ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-semantic-versioning"},"Semantic Versioning")," de npm."),(0,i.kt)("h2",{id:"instalar-el-paquete-publicado"},"Instalar el Paquete Publicado"),(0,i.kt)("p",null,"Para instalar el paquete, es necesario ejecutar el siguiente c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @scope/package-name\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ten en cuenta que ",(0,i.kt)("inlineCode",{parentName:"p"},"@scope")," se refiere al propietario (nombre de usuario o nombre de org) bajo el cual est\xe1 publicado el paquete.\nSi deseas instalar una versi\xf3n espec\xedfica del paquete, es necesario ejecutar el comando: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @scope/package-name@versionhere"))),(0,i.kt)("h2",{id:"referencias"},"Referencias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"Configuring npm for use with GitHub Packages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mugan86.medium.com/crear-y-publicar-nuestro-primer-paquete-en-github-package-registry-9f229bd365bc"},"Crear y publicar nuestro primer paquete en Github Package Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/about-semantic-versioning"},"Semantic Versioning"))))}g.isMDXComponent=!0}}]);