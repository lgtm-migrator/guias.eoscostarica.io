"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[2779],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(g,s(s({ref:a},c),{},{components:t})):n.createElement(g,s({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},908:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],l={id:"llaves-github",title:"Llaves de GitHub",sidebar_label:"Llaves de GitHub",description:"Llaves SSH para acceder a los repositorios de GitHub",keywords:["github","ssh","ssh-key","ssh-keygen","generar ssh key github","git key","extensi\xf3n de la llave privada en git","ssh key github","Qu\xe9 es SSH","Qu\xe9 son las llaves SSH"]},o=void 0,u={unversionedId:"tutoriales/llaves-github",id:"tutoriales/llaves-github",title:"Llaves de GitHub",description:"Llaves SSH para acceder a los repositorios de GitHub",source:"@site/docs/tutoriales/llaves-github.md",sourceDirName:"tutoriales",slug:"/tutoriales/llaves-github",permalink:"/docs/tutoriales/llaves-github",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/llaves-github.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1658940519,formattedLastUpdatedAt:"27 jul 2022",frontMatter:{id:"llaves-github",title:"Llaves de GitHub",sidebar_label:"Llaves de GitHub",description:"Llaves SSH para acceder a los repositorios de GitHub",keywords:["github","ssh","ssh-key","ssh-keygen","generar ssh key github","git key","extensi\xf3n de la llave privada en git","ssh key github","Qu\xe9 es SSH","Qu\xe9 son las llaves SSH"]},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/tutoriales/kubernetes"},next:{title:"Publicaci\xf3n de Paquetes",permalink:"/docs/tutoriales/publicacion-de-paquetes"}},c={},p=[{value:"\xbfPor qu\xe9 necesitamos Llaves de GitHub?",id:"por-qu\xe9-necesitamos-llaves-de-github",level:2},{value:"\xbfC\xf3mo generar una nueva clave SSH en Windows?",id:"c\xf3mo-generar-una-nueva-clave-ssh-en-windows",level:2},{value:"\xbfC\xf3mo a\xf1adir su clave SSH al ssh-agent?",id:"c\xf3mo-a\xf1adir-su-clave-ssh-al-ssh-agent",level:2}],d={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"por-qu\xe9-necesitamos-llaves-de-github"},"\xbfPor qu\xe9 necesitamos Llaves de GitHub?"),(0,i.kt)("p",null,"Definamos primero a GitHub como un sistema de control de versiones distribuidas en l\xednea basado en un navegador para aquellos desarrolladores de software que utilizan el sistema de control de revisiones Git. Git utiliza la autenticaci\xf3n de clave p\xfablica SSH y no una autenticaci\xf3n por contrase\xf1a.  Cada usuario del sistema tiene que generar una clave."),(0,i.kt)("p",null,"El ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH")," es tambi\xe9n conocido como Secure Shell o Secure Socket Shell. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh"},"M\xe1s sobre SSH en GitHub"),". Las claves SSH se utilizan para autenticar conexiones seguras que se generan a trav\xe9s de un algoritmo criptogr\xe1fico de clave p\xfablica, siendo los m\xe1s comunes RSA o DSA. Se trata de una f\xf3rmula unidireccional que garantiza que la clave p\xfablica puede derivarse de la clave privada, pero que la clave privada no puede derivarse de la clave p\xfablica."),(0,i.kt)("h2",{id:"c\xf3mo-generar-una-nueva-clave-ssh-en-windows"},"\xbfC\xf3mo generar una nueva clave SSH en Windows?"),(0,i.kt)("p",null,"Esta gu\xeda es para usuarios de Windows, m\xe1s informaci\xf3n para Linux y Mac visite ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"Generando una nueva llave SSH"),"."),(0,i.kt)("p",null,"Los entornos Windows no tienen un shell Unix est\xe1ndar por defecto. Ser\xe1 necesario instalar programas de shell externos para tener una experiencia completa de keygen. La opci\xf3n m\xe1s directa es utilizar Git Bash."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abra Git Bash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pega el texto de abajo, sustituyendo ",(0,i.kt)("inlineCode",{parentName:"p"},'"your_email@example.com"')," por tu direcci\xf3n de correo electr\xf3nico de GitHub"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t ed25519 -C "your_email@example.com"\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTA:"),"\nSi est\xe1 utilizando un sistema heredado que no soporta el algoritmo ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519"),", utilice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n')),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le pedir\xe1 un archivo para guardar la clave, s\xf3lo tiene que pulsar enter. Esto acepta la ubicaci\xf3n del archivo por defecto. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En el indicador (shell), escriba una frase de contrase\xf1a segura. Por razones de seguridad debe ser lo m\xe1s compleja posible."))),(0,i.kt)("p",null,"\xa1Ahora tienes una nueva clave SSH!"),(0,i.kt)("h2",{id:"c\xf3mo-a\xf1adir-su-clave-ssh-al-ssh-agent"},"\xbfC\xf3mo a\xf1adir su clave SSH al ssh-agent?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aseg\xfarate de que el ssh-agent se est\xe1 ejecutando, para m\xe1s informaci\xf3n visite ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases"},"Trabajando con Llaves SSH"),", o inicielo manualmente:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#iniciar el agente ssh en segundo plano\n$ eval $(ssh-agent -s)\n> Agent pid 59566\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTA:"),"\nSi sigue este flujo de generaci\xf3n de claves ssh, no es necesario iniciar el agente ssh."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A\xf1ade tu clave privada SSH al ssh-agent. Si cre\xf3 su clave con un nombre diferente, o si est\xe1 a\xf1adiendo una clave existente que tiene un nombre diferente, sustituya ",(0,i.kt)("inlineCode",{parentName:"li"},"id_ed25519")," en el comando por el nombre de su archivo de clave privada.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh-add ~/.ssh/id_ed25519\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ahora necesitas a\xf1adir tu clave p\xfablica a tu cuenta de ",(0,i.kt)("strong",{parentName:"li"},"GitHub"),", para ello ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"},"sigue estos pasos"),".")),(0,i.kt)("p",null,"Ya est\xe1 listo."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.preveil.com/blog/public-and-private-key/"},"M\xe1s informaci\xf3n sobre c\xf3mo funciona"),"."))}m.isMDXComponent=!0}}]);