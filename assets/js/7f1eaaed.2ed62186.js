"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[2779],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},908:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"llaves-github",title:"Llaves de GitHub",sidebar_label:"Llaves de GitHub"},s=void 0,u={unversionedId:"tutoriales/llaves-github",id:"tutoriales/llaves-github",title:"Llaves de GitHub",description:"\xbfPor qu\xe9 necesitamos Llaves de GitHub?",source:"@site/docs/tutoriales/llaves-github.md",sourceDirName:"tutoriales",slug:"/tutoriales/llaves-github",permalink:"/docs/tutoriales/llaves-github",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/llaves-github.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1657157462,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"llaves-github",title:"Llaves de GitHub",sidebar_label:"Llaves de GitHub"},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/tutoriales/kubernetes"},next:{title:"Publicaci\xf3n de Paquetes",permalink:"/docs/tutoriales/publicacion-de-paquetes"}},c={},p=[{value:"\xbfPor qu\xe9 necesitamos Llaves de GitHub?",id:"por-qu\xe9-necesitamos-llaves-de-github",level:2},{value:"\xbfC\xf3mo generar una nueva clave SSH en Windows?",id:"c\xf3mo-generar-una-nueva-clave-ssh-en-windows",level:2},{value:"\xbfC\xf3mo a\xf1adir su clave SSH al ssh-agent?",id:"c\xf3mo-a\xf1adir-su-clave-ssh-al-ssh-agent",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"por-qu\xe9-necesitamos-llaves-de-github"},"\xbfPor qu\xe9 necesitamos Llaves de GitHub?"),(0,i.kt)("p",null,"Definamos primero a GitHub como un sistema de control de versiones distribuidas en l\xednea basado en un navegador para aquellos desarrolladores de software que utilizan el sistema de control de revisiones Git. Git utiliza la autenticaci\xf3n de clave p\xfablica SSH y no una autenticaci\xf3n por contrase\xf1a.  Cada usuario del sistema tiene que generar una clave."),(0,i.kt)("p",null,"El ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH")," es tambi\xe9n conocido como Secure Shell o Secure Socket Shell. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh"},"M\xe1s sobre SSH en GitHub"),". Las claves SSH se utilizan para autenticar conexiones seguras que se generan a trav\xe9s de un algoritmo criptogr\xe1fico de clave p\xfablica, siendo los m\xe1s comunes RSA o DSA. Se trata de una f\xf3rmula unidireccional que garantiza que la clave p\xfablica puede derivarse de la clave privada, pero que la clave privada no puede derivarse de la clave p\xfablica."),(0,i.kt)("h2",{id:"c\xf3mo-generar-una-nueva-clave-ssh-en-windows"},"\xbfC\xf3mo generar una nueva clave SSH en Windows?"),(0,i.kt)("p",null,"Esta gu\xeda es para usuarios de Windows, m\xe1s informaci\xf3n para Linux y Mac ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"en este sitio"),"."),(0,i.kt)("p",null,"Los entornos Windows no tienen un shell Unix est\xe1ndar por defecto. Ser\xe1 necesario instalar programas de shell externos para tener una experiencia completa de keygen. La opci\xf3n m\xe1s directa es utilizar Git Bash."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abra Git Bash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pega el texto de abajo, sustituyendo ",(0,i.kt)("inlineCode",{parentName:"p"},'"your_email@example.com"')," por tu direcci\xf3n de correo electr\xf3nico de GitHub"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t ed25519 -C "your_email@example.com"\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTA:"),"\nSi est\xe1 utilizando un sistema heredado que no soporta el algoritmo ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519"),", utilice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n')),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le pedir\xe1 un archivo para guardar la clave, s\xf3lo tiene que pulsar enter. Esto acepta la ubicaci\xf3n del archivo por defecto. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En el indicador (shell), escriba una frase de contrase\xf1a segura. Por razones de seguridad debe ser lo m\xe1s compleja posible."))),(0,i.kt)("p",null,"\xa1Ahora tienes una nueva clave SSH!"),(0,i.kt)("h2",{id:"c\xf3mo-a\xf1adir-su-clave-ssh-al-ssh-agent"},"\xbfC\xf3mo a\xf1adir su clave SSH al ssh-agent?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aseg\xfarate de que el ssh-agent se est\xe1 ejecutando ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases"},"m\xe1s informaci\xf3n"),", o in\xedcialo manualmente:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#iniciar el agente ssh en segundo plano\n$ eval $(ssh-agent -s)\n> Agent pid 59566\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTA:"),"\nSi sigue este flujo de generaci\xf3n de claves ssh, no es necesario iniciar el agente ssh."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A\xf1ade tu clave privada SSH al ssh-agent. Si cre\xf3 su clave con un nombre diferente, o si est\xe1 a\xf1adiendo una clave existente que tiene un nombre diferente, sustituya ",(0,i.kt)("inlineCode",{parentName:"li"},"id_ed25519")," en el comando por el nombre de su archivo de clave privada.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh-add ~/.ssh/id_ed25519\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ahora necesitas a\xf1adir tu clave p\xfablica a tu cuenta de ",(0,i.kt)("strong",{parentName:"li"},"GitHub"),", para ello ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"},"sigue estos pasos"),".")),(0,i.kt)("p",null,"Ya est\xe1 listo."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.preveil.com/blog/public-and-private-key/"},"M\xe1s informaci\xf3n sobre c\xf3mo funciona"),"."))}m.isMDXComponent=!0}}]);