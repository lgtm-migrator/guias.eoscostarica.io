"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[9009],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(k,o(o({ref:a},c),{},{components:n})):t.createElement(k,o({ref:a},c))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9754:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"funciones-importantes",title:"Funciones Importantes en EOSIO",sidebar_label:"Funciones Importantes",description:"Funciones Importantes en EOSIO",keywords:["funciones importantes","EOSIO","EOS","EOS Costa Rica","Funciones EOSIO"]},s=void 0,u={unversionedId:"aprender-eosio/funciones-importantes",id:"aprender-eosio/funciones-importantes",title:"Funciones Importantes en EOSIO",description:"Funciones Importantes en EOSIO",source:"@site/docs/aprender-eosio/funciones-importantes.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/funciones-importantes",permalink:"/docs/aprender-eosio/funciones-importantes",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/funciones-importantes.md",tags:[],version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1657866548,formattedLastUpdatedAt:"15 jul 2022",frontMatter:{id:"funciones-importantes",title:"Funciones Importantes en EOSIO",sidebar_label:"Funciones Importantes",description:"Funciones Importantes en EOSIO",keywords:["funciones importantes","EOSIO","EOS","EOS Costa Rica","Funciones EOSIO"]},sidebar:"docs",previous:{title:"Cuentas y Permisos",permalink:"/docs/aprender-eosio/cuentas-permisos"},next:{title:"Llaves Privadas",permalink:"/docs/aprender-eosio/llaves-privadas"}},c={},d=[{value:"Cuenta Privilegiada EOSIO",id:"cuenta-privilegiada-eosio",level:2},{value:"Funciones Privilegiadas EOSIO",id:"funciones-privilegiadas-eosio",level:2},{value:"set_resource_limits",id:"set_resource_limits",level:3},{value:"set_prods",id:"set_prods",level:3},{value:"set_params",id:"set_params",level:3},{value:"set_privileged",id:"set_privileged",level:3},{value:"Acciones de Sistema",id:"acciones-de-sistema",level:2},{value:"new_account",id:"new_account",level:3},{value:"set code",id:"set-code",level:3},{value:"set abi",id:"set-abi",level:3},{value:"updateauth",id:"updateauth",level:3},{value:"deleteauth",id:"deleteauth",level:3},{value:"linkauth",id:"linkauth",level:3},{value:"unlinkauth",id:"unlinkauth",level:3},{value:"Contrato Nativo <code>eosio.token</code>",id:"contrato-nativo-eosiotoken",level:2},{value:"create",id:"create",level:3},{value:"issue",id:"issue",level:3},{value:"retire",id:"retire",level:3},{value:"transfer",id:"transfer",level:3}],p={toc:d};function m(e){var a=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cuenta-privilegiada-eosio"},"Cuenta Privilegiada EOSIO"),(0,r.kt)("p",null,"Esta cuenta tiene acceso ilimitado a los recursos de CPU, NET y RAM que representan la m\xe1xima autoridad de la red que puede ejecutar funciones privilegiadas."),(0,r.kt)("p",null,'Por lo general, esta autoridad se invoca mediante un contrato de firma m\xfaltiple (o "firma m\xfaltiple") que requerir\xe1 el consentimiento de una supermayor\xeda de los productores de bloques. Esta cuenta privilegiada se llamar\xe1 cuenta ',(0,r.kt)("inlineCode",{parentName:"p"},"eosio"),"."),(0,r.kt)("h2",{id:"funciones-privilegiadas-eosio"},"Funciones Privilegiadas EOSIO"),(0,r.kt)("p",null,"Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en s\xed pero en el entorno en el que se ejecuta el c\xf3digo de WebAssembly. EOSIO utiliza estas funciones integradas (intr\xednsecas) para intercambiar datos entre el c\xf3digo de contrato de WebAssembly y el nodo EOSIO ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),". Cada vez que la m\xe1quina virtual EOS (EOSVM), que ejecuta el c\xf3digo de WebAssembly, llega a un nivel intr\xednseco, el control del programa se transfiere al c\xf3digo del controlador de nodo para resolverlo. Una lista completa de funciones intr\xednsecas para EOSIO 2.0.X se puede encontrar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"},"aqu\xed"),"."),(0,r.kt)("h3",{id:"set_resource_limits"},"set_resource_limits"),(0,r.kt)("p",null,"Actualiza los limites de recursos asociados a una cuenta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account:  La cuenta destino\nram_bytes:  El limite de RAM en bytes\nnet_weight:  El weight para determinar su capacidad de NET\ncpu_weight:  El weight para determinar su capacidad de CPU\n")),(0,r.kt)("h3",{id:"set_prods"},"set_prods"),(0,r.kt)("p",null,"Establece una nueva lista de productores(validadores) activos. Una vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"schedule: JSON con lista de productores y sus signing keys\n")),(0,r.kt)("h3",{id:"set_params"},"set_params"),(0,r.kt)("p",null,"Modifica uno o varios par\xe1metros de la blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_block_net_usage"),": La cantidad maxima de uso de net en un bloque."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target_block_net_usage_pct"),": El porcentaje de uso m\xe1ximo de net, pasado este limite la red entra en modo congestion."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_transaction_net_usage"),": El uso m\xe1ximo de net que la chain va a permitir, mas all\xe1 de los limites de la cuenta."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base_per_transaction_net_usage"),": El monto base de uso neto facturado por una transacci\xf3n para cubrir imprevistos."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_num"),": El numerador para el descuento en el uso neto de datos sin contexto."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_den"),": El denominador para el descuento en el uso neto de datos sin contexto."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_block_cpu_usage"),": El uso m\xe1ximo de la CPU facturable (en microsegundos) para un bloque."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target_block_cpu_usage_pct"),": El porcentaje objetivo (1% == 100, 100% = 10,000) del uso m\xe1ximo de CPU; exceder esto desencadena el manejo de la congesti\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_transaction_cpu_usage"),": El uso m\xe1ximo de CPU facturable (en microsegundos) que la cadena permitir\xe1 independientemente de los l\xedmites de la cuenta."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_transaction_cpu_usage"),": El uso m\xednimo de CPU facturable (en microsegundos) que requiere la cadena."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_transaction_lifetime"),": El n\xfamero m\xe1ximo de segundos que la caducidad de una transacci\xf3n de entrada puede adelantarse a la hora del bloque en el que se incluye por primera vez."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deferred_trx_expiration_window"),": El n\xfamero de segundos despu\xe9s del tiempo en que una transacci\xf3n diferida puede ejecutarse primero hasta que caduque."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_transaction_delay"),": El n\xfamero m\xe1ximo de segundos que pueden imponerse como requisito de retraso mediante verificaciones de autorizaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_inline_action_size"),": Tama\xf1o m\xe1ximo permitido (en bytes) de una acci\xf3n en l\xednea."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_inline_action_depth"),": L\xedmite de profundidad de recursion al enviar acciones en l\xednea."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_authority_depth"),": L\xedmite de profundidad de recursion para verificar si una autoridad est\xe1 satisfecha.")),(0,r.kt)("h3",{id:"set_privileged"},"set_privileged"),(0,r.kt)("p",null,"Permite establecer como privilegiada a una cuenta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta que se quiere setear como privilegiada.\nis_priv:  0 para falso, mayor a 0 para verdadero.\n")),(0,r.kt)("h2",{id:"acciones-de-sistema"},"Acciones de Sistema"),(0,r.kt)("p",null,"Estas acciones no requieren ser ejecutadas por una cuenta privilegiada."),(0,r.kt)("h3",{id:"new_account"},"new_account"),(0,r.kt)("p",null,"Crea una cuenta nueva."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"creator: Nombre de la cuenta que crea la cuenta nueva.\nname: Nombre de la cuenta nueva.\nowner: Owner public key.\nactive: Active public key.\n")),(0,r.kt)("h3",{id:"set-code"},"set code"),(0,r.kt)("p",null,"Set code establecer o actualizar un contrato inteligente en una cuenta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta a la que se desea publicar un contrato.\ncode: El c\xf3digo en forma de BLOB binario.\n")),(0,r.kt)("h3",{id:"set-abi"},"set abi"),(0,r.kt)("p",null,"Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: El nombre de la cuenta destino.\nabi:  El abi.\n")),(0,r.kt)("h3",{id:"updateauth"},"updateauth"),(0,r.kt)("p",null,"Actualiza los permisos de una cuenta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account:  La cuenta que se desea modificar.\npemission:  El nombre del nuevo permiso.\nparent: El permiso padre del nuevo permiso.\nauth: El json definiendo la autorizaci\xf3n de permisos.\n")),(0,r.kt)("h3",{id:"deleteauth"},"deleteauth"),(0,r.kt)("p",null,"elimina la autorizaci\xf3n de permisos de una cuenta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta destino.\npermission: El nombre del permiso que se desea eliminar.\n")),(0,r.kt)("h3",{id:"linkauth"},"linkauth"),(0,r.kt)("p",null,"Asigna una acci\xf3n especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas ",(0,r.kt)("inlineCode",{parentName:"p"},"updateauth"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteauth"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"linkauth"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unlikauth"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"canceldelay"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: Cuenta destino.\ncode: Cuenta owner de la acci\xf3n que se desea linkear.\ntype: La acci\xf3n que se desea linkear.\nrequirement: El permiso a linkear.\n")),(0,r.kt)("h3",{id:"unlinkauth"},"unlinkauth"),(0,r.kt)("p",null,"Es la reversa de linkauth."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: Cuenta destino.\ncode: Cuenta owner de la acci\xf3n que se desea deslinkear.\ntype: La acci\xf3n que se desea deslinkear.\n")),(0,r.kt)("h2",{id:"contrato-nativo-eosiotoken"},"Contrato Nativo ",(0,r.kt)("inlineCode",{parentName:"h2"},"eosio.token")),(0,r.kt)("p",null,"Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio."),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"Le permite a una cuenta issuer crear un token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"issuer: La cuenta que crea el token.\nmaximum_supply: La cantidad maxima junto al s\xedmbolo del token.\n")),(0,r.kt)("h3",{id:"issue"},"issue"),(0,r.kt)("p",null,"Esta acci\xf3n distribuye a una cuenta una cantidad de tokens determinada."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"to: Cuenta a la que se distribuyen los tokens.\nquantity: La cantidad de tokens a distribuir.\nmemo: memo que acompa\xf1a la distribuci\xf3n inicial de tokens.\n")),(0,r.kt)("h3",{id:"retire"},"retire"),(0,r.kt)("p",null,"El opuesto a crear un token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"quantity: La cantidad de tokens a retirar.\nmemo : El memo que acompa\xf1a la transacci\xf3n.\n")),(0,r.kt)("h3",{id:"transfer"},"transfer"),(0,r.kt)("p",null,'Transfiere de una cuenta origen a una cuenta destino una cantidad "n" de tokens.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"from: Cuenta origen desde donde se debitan los tokens.\no: Cuenta destino a la que acreditar los tokens.\nquantity: La cantidad de tokens.\nmemo: Memo que acompa\xf1a la transacci\xf3n.\n")))}m.isMDXComponent=!0}}]);