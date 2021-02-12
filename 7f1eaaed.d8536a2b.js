(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{134:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=u(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(t),d=n,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return t?r.a.createElement(m,o(o({ref:a},c),{},{components:t})):r.a.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),i=(t(0),t(134)),l={id:"llaves-github",title:"Llaves de GitHub",sidebar_label:"Llaves de GitHub"},o={unversionedId:"tutoriales/llaves-github",id:"tutoriales/llaves-github",isDocsHomePage:!1,title:"Llaves de GitHub",description:"\xbfPor qu\xe9 necesitamos Llaves de GitHub?",source:"@site/docs/tutoriales/llaves-github.md",slug:"/tutoriales/llaves-github",permalink:"/docs/tutoriales/llaves-github",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/llaves-github.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1613167723,sidebar_label:"Llaves de GitHub",sidebar:"docs",previous:{title:"Gu\xeda GitHub",permalink:"/docs/tutoriales/guia-github"},next:{title:"React JS",permalink:"/docs/tutoriales/tutorial-react"}},s=[{value:"\xbfPor qu\xe9 necesitamos Llaves de GitHub?",id:"\xbfpor-qu\xe9-necesitamos-llaves-de-github",children:[]},{value:"\xbfC\xf3mo generar una nueva clave SSH en Windows?",id:"\xbfc\xf3mo-generar-una-nueva-clave-ssh-en-windows",children:[]},{value:"\xbfC\xf3mo a\xf1adir su clave SSH al ssh-agent?",id:"\xbfc\xf3mo-a\xf1adir-su-clave-ssh-al-ssh-agent",children:[]}],c={toc:s};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\xbfpor-qu\xe9-necesitamos-llaves-de-github"},"\xbfPor qu\xe9 necesitamos Llaves de GitHub?"),Object(i.b)("p",null,"Definamos primero a GitHub como un sistema de control de versiones distribuidas en l\xednea basado en un navegador para aquellos desarrolladores de software que utilizan el sistema de control de revisiones Git. Git utiliza la autenticaci\xf3n de clave p\xfablica SSH y no una autenticaci\xf3n por contrase\xf1a.  Cada usuario del sistema tiene que generar una clave."),Object(i.b)("p",null,"El ",Object(i.b)("inlineCode",{parentName:"p"},"SSH")," es tambi\xe9n conocido como Secure Shell o Secure Socket Shell. ",Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh"},"M\xe1s sobre SSH en GitHub"),". Las claves SSH se utilizan para autenticar conexiones seguras que se generan a trav\xe9s de un algoritmo criptogr\xe1fico de clave p\xfablica, siendo los m\xe1s comunes RSA o DSA. Se trata de una f\xf3rmula unidireccional que garantiza que la clave p\xfablica puede derivarse de la clave privada, pero que la clave privada no puede derivarse de la clave p\xfablica."),Object(i.b)("h2",{id:"\xbfc\xf3mo-generar-una-nueva-clave-ssh-en-windows"},"\xbfC\xf3mo generar una nueva clave SSH en Windows?"),Object(i.b)("p",null,"Esta gu\xeda es para usuarios de Windows, m\xe1s informaci\xf3n para Linux y Mac ",Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"en este sitio"),"."),Object(i.b)("p",null,"Los entornos Windows no tienen un shell Unix est\xe1ndar por defecto. Ser\xe1 necesario instalar programas de shell externos para tener una experiencia completa de keygen. La opci\xf3n m\xe1s directa es utilizar Git Bash."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Abra Git Bash")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Pega el texto de abajo, sustituyendo ",Object(i.b)("inlineCode",{parentName:"p"},'"your_email@example.com"')," por tu direcci\xf3n de correo electr\xf3nico de GitHub"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t ed25519 -C "your_email@example.com"\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTA:"),"\nSi est\xe1 utilizando un sistema heredado que no soporta el algoritmo ",Object(i.b)("inlineCode",{parentName:"p"},"ed25519"),", utilice:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n')),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Le pedir\xe1 un archivo para guardar la clave, s\xf3lo tiene que pulsar enter. Esto acepta la ubicaci\xf3n del archivo por defecto. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"En el indicador (shell), escriba una frase de contrase\xf1a segura. Por razones de seguridad debe ser lo m\xe1s compleja posible."))),Object(i.b)("p",null,"\xa1Ahora tienes una nueva clave SSH!"),Object(i.b)("h2",{id:"\xbfc\xf3mo-a\xf1adir-su-clave-ssh-al-ssh-agent"},"\xbfC\xf3mo a\xf1adir su clave SSH al ssh-agent?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Aseg\xfarate de que el ssh-agent se est\xe1 ejecutando ",Object(i.b)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases"},"m\xe1s informaci\xf3n"),", o in\xedcialo manualmente:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"#iniciar el agente ssh en segundo plano\n$ eval $(ssh-agent -s)\n> Agent pid 59566\n")),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTA:"),"\nSi sigue este flujo de generaci\xf3n de claves ssh, no es necesario iniciar el agente ssh."),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A\xf1ade tu clave privada SSH al ssh-agent. Si cre\xf3 su clave con un nombre diferente, o si est\xe1 a\xf1adiendo una clave existente que tiene un nombre diferente, sustituya ",Object(i.b)("inlineCode",{parentName:"li"},"id_ed25519")," en el comando por el nombre de su archivo de clave privada.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ ssh-add ~/.ssh/id_ed25519\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ahora necesitas a\xf1adir tu clave p\xfablica a tu cuenta de ",Object(i.b)("strong",{parentName:"li"},"GitHub"),", para ello ",Object(i.b)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"},"sigue estos pasos"),".")),Object(i.b)("p",null,"Ya est\xe1 listo."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.preveil.com/blog/public-and-private-key/"},"M\xe1s informaci\xf3n sobre c\xf3mo funciona"),"."))}u.isMDXComponent=!0}}]);