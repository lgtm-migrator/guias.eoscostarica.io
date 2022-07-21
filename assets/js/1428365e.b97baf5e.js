"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[1386],{3905:function(e,a,o){o.d(a,{Zo:function(){return u},kt:function(){return m}});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),l=function(e){var a=t.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},u=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),m=n,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return o?t.createElement(k,s(s({ref:a},u),{},{components:o})):t.createElement(k,s({ref:a},u))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9674:function(e,a,o){o.r(a),o.d(a,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var t=o(7462),n=o(3366),r=(o(7294),o(3905)),s=["components"],i={id:"uso-de-recursos",title:"Uso de Recursos EOSIO",sidebar_label:"Uso de Recursos",description:"Uso de recursos del blockchain de EOSIO",keywords:["uso de recursos","recursos EOSIO","eosio","eos","EOS","EOS Costa Rica"]},c=void 0,l={unversionedId:"aprender-eosio/uso-de-recursos",id:"aprender-eosio/uso-de-recursos",title:"Uso de Recursos EOSIO",description:"Uso de recursos del blockchain de EOSIO",source:"@site/docs/aprender-eosio/uso-de-recursos.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/uso-de-recursos",permalink:"/docs/aprender-eosio/uso-de-recursos",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/uso-de-recursos.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1658367012,formattedLastUpdatedAt:"21 jul 2022",frontMatter:{id:"uso-de-recursos",title:"Uso de Recursos EOSIO",sidebar_label:"Uso de Recursos",description:"Uso de recursos del blockchain de EOSIO",keywords:["uso de recursos","recursos EOSIO","eosio","eos","EOS","EOS Costa Rica"]},sidebar:"docs",previous:{title:"Algoritmo de Consenso DPoS",permalink:"/docs/aprender-eosio/mecanismo-de-consenso"},next:{title:"Componentes EOSIO",permalink:"/docs/aprender-eosio/componentes-eosio"}},u={},d=[{value:"Tipos de Recursos",id:"tipos-de-recursos",level:2},{value:"RAM",id:"ram",level:3},{value:"CPU",id:"cpu",level:3},{value:"Network (NET)",id:"network-net",level:3},{value:"L\xedmites de Recursos de la Cuenta",id:"l\xedmites-de-recursos-de-la-cuenta",level:2},{value:"Contabilidad de Recursos",id:"contabilidad-de-recursos",level:2},{value:"CPU y NET como Recursos El\xe1sticos",id:"cpu-y-net-como-recursos-el\xe1sticos",level:2},{value:"Asignaci\xf3n de Recursos de EOS",id:"asignaci\xf3n-de-recursos-de-eos",level:2}],p={toc:d};function m(e){var a=e.components,o=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tipos-de-recursos"},"Tipos de Recursos"),(0,r.kt)("p",null,"Las cuentas podr\xe1n utilizar los siguientes recursos en la red:"),(0,r.kt)("h3",{id:"ram"},"RAM"),(0,r.kt)("p",null,"En una red EOSIO, la RAM es el espacio de almacenamiento de memoria donde la cadena de bloques almacena datos, se mide en kilobytes (KiB). Si su contrato necesita almacenar datos en una tabla de blockchain, como en una base de datos, puede almacenarlos en la RAM de blockchain."),(0,r.kt)("p",null,"RAM es un recurso muy importante y es limitado. Se utiliza al ejecutar muchas acciones que est\xe1n disponibles en la cadena de bloques, al crear una nueva cuenta, por ejemplo, la informaci\xf3n de esa cuenta se almacena en la memoria de la cadena de bloques. Adem\xe1s, cuando una cuenta acepta un nuevo tipo de token, se debe crear un nuevo registro en alg\xfan lugar de la memoria de blockchain que contenga el saldo del nuevo token aceptado, y esa memoria, el espacio de almacenamiento en blockchain, debe ser comprada por el cuenta que transfiere el token o por la cuenta que acepta el nuevo tipo de token."),(0,r.kt)("p",null,"RAM es referido como ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," en el siguiente resultado del comando ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos get account"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},"memory:\nquota: 86.68 KiB\nused: 11.62 KiB\n")),(0,r.kt)("p",null,"Puede encontrar m\xe1s detalles sobre RAM como recurso del sistema en la gu\xeda ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"},"RAM Contratos EOSIO"),"."),(0,r.kt)("h3",{id:"cpu"},"CPU"),(0,r.kt)("p",null,"La CPU est\xe1 procesando la potencia, la cantidad de CPU que tiene una cuenta se mide en microsegundos (\u03bcs), se conoce como ",(0,r.kt)("inlineCode",{parentName:"p"},"CPU bandwith"),", el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos get account")," emite la cantidad de tiempo de procesamiento que una cuenta tiene a su disposici\xf3n al presionar acciones a un contrato."),(0,r.kt)("p",null,"Puede encontrar m\xe1s detalles sobre la CPU como recurso del sistema en la gu\xeda ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu"},"CPU Contratos EOSIO"),"."),(0,r.kt)("h3",{id:"network-net"},"Network (NET)"),(0,r.kt)("p",null,"Como CPU y RAM, NET tambi\xe9n es un recurso muy importante en las cadenas de bloques basadas en EOSIO. NET es el ancho de banda de la red medido en bytes de transacciones y se conoce como ",(0,r.kt)("inlineCode",{parentName:"p"},"net bandwidth"),"."),(0,r.kt)("p",null,"Puede encontrar m\xe1s detalles sobre NET como recurso del sistema en la gu\xeda ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net"},"NET Contratos EOSIO"),"."),(0,r.kt)("h2",{id:"l\xedmites-de-recursos-de-la-cuenta"},"L\xedmites de Recursos de la Cuenta"),(0,r.kt)("p",null,"Cada cuenta en una cadena de bloques basada en EOSIO tiene l\xedmites de recursos para CPU / NET y RAM asociados. Estos l\xedmites especifican cu\xe1nto de cada recurso puede usar la cuenta y se pueden cambiar din\xe1micamente llamando a la API privilegiada ",(0,r.kt)("inlineCode",{parentName:"p"},"set_resource_limits"),"."),(0,r.kt)("p",null,"La diferencia entre los l\xedmites de recursos de CPU / NET y RAM es que la RAM, dado que es un recurso limitado, una vez utilizada, la \xfanica forma de recuperarla es liberar el espacio de almacenamiento utilizado. Por otro lado, CPU y NET se repondr\xe1n por completo cuando la cuenta no est\xe9 utilizando la red durante un per\xedodo de tiempo. Por defecto, este per\xedodo se establece en 24 horas."),(0,r.kt)("h2",{id:"contabilidad-de-recursos"},"Contabilidad de Recursos"),(0,r.kt)("p",null,"Cuando un usuario (cuenta) desea interactuar con un contrato inteligente (otra cuenta), se crea una transacci\xf3n con una acci\xf3n que especifica la funci\xf3n inteligente para llamar junto con la cuenta (nivel de permiso) que autoriza la acci\xf3n."),(0,r.kt)("p",null,"Luego, despu\xe9s de firmar con las claves que autorizan el nivel de permiso especificado en la acci\xf3n, la transacci\xf3n se transmite a la red hasta que alcanza el productor de bloques actual en la programaci\xf3n."),(0,r.kt)("p",null,"El productor de bloques ejecutar\xe1 todas las acciones dentro de la transacci\xf3n y facturar\xe1 el tiempo utilizado para ejecutarlas (CPU) a la primera cuenta que autoriza la primera acci\xf3n. Adem\xe1s, facturar\xe1 a la primera cuenta de autorizaci\xf3n por el tama\xf1o de la transacci\xf3n (NET)."),(0,r.kt)("p",null,"Si las acciones realizadas por el contrato inteligente implican alg\xfan tipo de almacenamiento de datos, el contrato inteligente puede elegir usar los recursos de RAM de cualquiera de las cuentas de autorizaci\xf3n de transacciones o usar los recursos de RAM de la cuenta del contrato inteligente."),(0,r.kt)("h2",{id:"cpu-y-net-como-recursos-el\xe1sticos"},"CPU y NET como Recursos El\xe1sticos"),(0,r.kt)("p",null,"El ",(0,r.kt)("inlineCode",{parentName:"p"},"resource limit manager")," de una cadena de bloques basada en EOSIO es la parte del protocolo que realiza un seguimiento de la cantidad de recursos de red disponibles en cualquier momento y cu\xe1ntos recursos est\xe1 usando cada cuenta."),(0,r.kt)("p",null,"En particular, trata la CPU y NET como recursos el\xe1sticos que permiten a los usuarios consumir m\xe1s recursos de los que tienen derecho mientras este recurso est\xe1 por debajo del uso deseado (no congestionado)."),(0,r.kt)("p",null,"Un recurso el\xe1stico tiene las siguientes propiedades."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El uso deseado."),(0,r.kt)("li",{parentName:"ul"},"El uso m\xe1ximo."),(0,r.kt)("li",{parentName:"ul"},"El n\xfamero de per\xedodos de agregaci\xf3n que contribuyen al uso promedio."),(0,r.kt)("li",{parentName:"ul"},"El multiplicador por el cual el espacio virtual puede sobrevender el uso cuando no est\xe1 congestionado."),(0,r.kt)("li",{parentName:"ul"},"La tasa a la cual un recurso congestionado contrae su l\xedmite."),(0,r.kt)("li",{parentName:"ul"},"La velocidad a la que un recurso no congestionado expande sus l\xedmites.")),(0,r.kt)("p",null,"Veamos la configuraci\xf3n predeterminada para el recurso de CPU como ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"const static uint32_t default_max_block_cpu_usage = 200'000; /// max block cpu usage in microseconds\nconst static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;\nconst static uint32_t block_cpu_usage_average_window_ms  = 60*1000l; \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"elastic_limit_parameters cpu_limit_parameters = {\n    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct), //10% of 200ms\n    config::default_max_block_cpu_usage,                                                          //200ms\n    config::block_cpu_usage_average_window_ms / config::block_interval_ms,                        //60s (120 blocks)\n    1000,                                                                                         //x1000 multiplier\n    {99, 100},                                                                                    //contract ratio 0.99 \n    {1000, 999}                                                                                   //expand ratio 1.001\n};\n")),(0,r.kt)("p",null,"Al hacer de la CPU un recurso el\xe1stico, se crear\xe1 una CPU virtual que oscilar\xe1 entre el valor m\xe1s bajo posible, que es el uso m\xe1ximo especificado, y el valor m\xe1s alto posible, que es el valor m\xe1s bajo posible multiplicador."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"virtual cpu = [[maximum usage, maximum usage * multiplier]]\n")),(0,r.kt)("p",null,"El l\xedmite de la CPU virtual se contraer\xe1 (expandir\xe1) mediante la ",(0,r.kt)("inlineCode",{parentName:"p"},"relaci\xf3n de contrato (expandir)")," cuando la utilizaci\xf3n promedio est\xe9 por encima (debajo) del uso deseado, lo que significa que ",(0,r.kt)("inlineCode",{parentName:"p"},"lo m\xe1ximo que una cuenta puede consumir durante los per\xedodos de inactividad es 1000x (multiplicador) ancho de banda se garantiza bajo congesti\xf3n"),"."),(0,r.kt)("p",null,"La utilizaci\xf3n promedio de la CPU se calcula utilizando un EMA (Promedio m\xf3vil exponencial) que otorga un mayor peso e importancia al uso m\xe1s reciente."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def update_elastic_limit(current_limit, average_usage, elastic_resource_limit):\n    result = current_limit\n    if average_usage > elastic_resource_limit.target:\n        result = result * elastic_resource_limit.contract_rate\n    else:\n        result = result * elastic_resource_limit.expand_rate\n\n    return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)\n")),(0,r.kt)("h2",{id:"asignaci\xf3n-de-recursos-de-eos"},"Asignaci\xf3n de Recursos de EOS"),(0,r.kt)("figure",{class:"video_container"},(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/N6CTRdx6NVE",frameborder:"0",allowfullscreen:"true"}," ")))}m.isMDXComponent=!0}}]);