"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[465],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return c}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?t.createElement(g,i(i({ref:a},u),{},{components:n})):t.createElement(g,i({ref:a},u))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9779:function(e,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var t=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"graphql",title:"GraphQL",sidebar_label:"GraphQL"},s=void 0,p={unversionedId:"tutoriales/graphql",id:"tutoriales/graphql",title:"GraphQL",description:"GraphQL es un lenguaje de consulta para su API y un tiempo de ejecuci\xf3n del lado del servidor para ejecutar consultas mediante el uso de un sistema de tipos que defina para sus datos. GraphQL no est\xe1 vinculado a ninguna base de datos o motor de almacenamiento espec\xedfico y, en cambio, est\xe1 respaldado por su c\xf3digo y datos existentes.",source:"@site/docs/tutoriales/graphql.md",sourceDirName:"tutoriales",slug:"/tutoriales/graphql",permalink:"/docs/tutoriales/graphql",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/graphql.md",tags:[],version:"current",lastUpdatedBy:"JAMares",lastUpdatedAt:1657036450,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"graphql",title:"GraphQL",sidebar_label:"GraphQL"},sidebar:"docs",previous:{title:"Docker",permalink:"/docs/tutoriales/docker"},next:{title:"Gu\xeda GitHub",permalink:"/docs/tutoriales/guia-github"}},u={},d=[{value:"Consultas y Mutaciones",id:"consultas-y-mutaciones",level:2},{value:"Campos",id:"campos",level:3},{value:"Argumentos",id:"argumentos",level:3},{value:"Alias",id:"alias",level:3},{value:"Fragmentos",id:"fragmentos",level:3},{value:"Nombre de la Operaci\xf3n",id:"nombre-de-la-operaci\xf3n",level:3},{value:"Variables",id:"variables",level:3},{value:"Directivas",id:"directivas",level:3},{value:"Mutaciones",id:"mutaciones",level:3},{value:"Fragmentos en L\xednea",id:"fragmentos-en-l\xednea",level:3},{value:"Esquema y Tipos",id:"esquema-y-tipos",level:2},{value:"Type System",id:"type-system",level:3},{value:"Tipo de Idioma",id:"tipo-de-idioma",level:3},{value:"Campos y Tipos de Objetos",id:"campos-y-tipos-de-objetos",level:3},{value:"Argumentos",id:"argumentos-1",level:3},{value:"Los Tipos de Consulta y Mutaci\xf3n",id:"los-tipos-de-consulta-y-mutaci\xf3n",level:3},{value:"Tipos Escalares",id:"tipos-escalares",level:3},{value:"Tipos de Enumeraci\xf3n",id:"tipos-de-enumeraci\xf3n",level:3},{value:"Listas y Non-Null",id:"listas-y-non-null",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Tipos de Uni\xf3n",id:"tipos-de-uni\xf3n",level:3},{value:"Tipos de Entrada",id:"tipos-de-entrada",level:3},{value:"Ejecuci\xf3n",id:"ejecuci\xf3n",level:2},{value:"Ayuda de Idioma",id:"ayuda-de-idioma",level:2},{value:"Top 5",id:"top-5",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Servidor",id:"servidor",level:4},{value:"Cliente",id:"cliente",level:4},{value:"Herramientas",id:"herramientas",level:4},{value:"Servicios",id:"servicios",level:4}],m={toc:d};function c(e){var a=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," es un lenguaje de consulta para su API y un tiempo de ejecuci\xf3n del lado del servidor para ejecutar consultas mediante el uso de un sistema de tipos que defina para sus datos. GraphQL no est\xe1 vinculado a ninguna base de datos o motor de almacenamiento espec\xedfico y, en cambio, est\xe1 respaldado por su c\xf3digo y datos existentes."),(0,r.kt)("h2",{id:"consultas-y-mutaciones"},"Consultas y Mutaciones"),(0,r.kt)("h3",{id:"campos"},"Campos"),(0,r.kt)("p",null,"En su forma m\xe1s simple, GraphQL se trata de solicitar campos espec\xedficos en objetos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  lifebank {\n    name\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Esto es esencial para GraphQL, porque siempre obtiene lo que espera y el servidor sabe exactamente qu\xe9 campos solicita el cliente."),(0,r.kt)("h3",{id:"argumentos"},"Argumentos"),(0,r.kt)("p",null,"Cada campo y objeto anidado puede obtener su propio conjunto de argumentos, lo que convierte a GraphQL en un reemplazo completo para realizar m\xfaltiples b\xfasquedas de API. Incluso puede pasar argumentos a campos escalares para implementar transformaciones de datos una vez en el servidor, en lugar de en cada cliente por separado."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  lifebank(email: "blood@gmail.com") {\n    telephone\n    location    \n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank"\n        "location": "Costa Rica",\n    }\n  }\n}\n')),(0,r.kt)("p",null,"GraphQL viene con un conjunto predeterminado de tipos, pero un servidor GraphQL tambi\xe9n puede declarar sus propios tipos personalizados, siempre que se puedan serializar en su formato de transporte."),(0,r.kt)("h3",{id:"alias"},"Alias"),(0,r.kt)("p",null,"Los alias le permiten cambiar el nombre del resultado de un campo a lo que desee."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  mainLifebank: lifebank(email: "blood@gmail.com") {\n    name\n  }\n  secondaryLifebank: lifebank(email: "secondaryblood@gmail.com") {\n    name\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "mainLifebank": {\n        "name": "National Blood Bank"\n    },\n    "secondaryLifebank": {\n        "name": "National Rescue Blood Bank"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"fragmentos"},"Fragmentos"),(0,r.kt)("p",null,"GraphQL incluye unidades reutilizables llamadas fragmentos. Los fragmentos le permiten construir conjuntos de campos y luego incluirlos en consultas cuando lo necesite."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  leftComparison: lifebank(email: "blood@gmail.com") {\n    ...comparisonFields\n  }\n  rightComparison: lifebank(email: "secondaryblood@gmail.com") {\n    ...comparisonFields\n  }\n}\n\nfragment comparisonFields on Character {\n  name\n  location \n  telephone\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "leftComparison": {\n        "name": "National Blood Bank",\n        "location": "Costa Rica",\n        "urgencyLevel": "high" \n    },\n    "rightComparison": {\n        "name": "National Rescue Blood Bank",\n        "location": "Costa Rica",\n        "urgencyLevel": "medium" \n    }\n  }\n}\n')),(0,r.kt)("p",null,"El concepto de fragmentos se utiliza con frecuencia para dividir los requisitos de datos de aplicaciones complicados en partes m\xe1s peque\xf1as."),(0,r.kt)("h3",{id:"nombre-de-la-operaci\xf3n"},"Nombre de la Operaci\xf3n"),(0,r.kt)("p",null,"El nombre de la operaci\xf3n es un nombre significativo y expl\xedcito para su operaci\xf3n. Solo se requiere en documentos de operaciones m\xfaltiples, pero se recomienda su uso porque es muy \xfatil para la depuraci\xf3n y el registro del lado del servidor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query LifebankNameAndPhotos {\n  lifebank{\n    name\n    photos {\n        url\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank",\n        "photos": [\n            {\n                "url": "photo1.png"\n            },\n            {\n                "url": "photo2.png"\n            },\n            {\n                "url": "photo3.png"\n            }\n        ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Cuando algo sale mal, es m\xe1s f\xe1cil identificar una consulta en su c\xf3digo base por su nombre en lugar de intentar descifrar el contenido."),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("p",null,"GraphQL tiene una forma de primera clase de factorizar valores din\xe1micos fuera de la consulta y pasarlos como un diccionario separado. Estos valores se denominan variables."),(0,r.kt)("p",null,"Cuando comenzamos a trabajar con variables, debemos hacer tres cosas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reemplaza el valor est\xe1tico en la consulta con ",(0,r.kt)("inlineCode",{parentName:"li"},"$variableName"),"."),(0,r.kt)("li",{parentName:"ul"},"Declare ",(0,r.kt)("inlineCode",{parentName:"li"},"$variableName")," como una de las variables aceptadas por la consulta."),(0,r.kt)("li",{parentName:"ul"},"Pase variableName: valor en el diccionario de variables independiente, espec\xedfico del transporte (generalmente JSON).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "email": "blood@gmail.com"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query LifebankNameAndPhotos($email: Lifebank) {\n  lifebank(email: $email) {\n    name\n    photos {\n        url\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank",\n        "photos": [\n            {\n                "url": "photo1.png"\n            },\n            {\n                "url": "photo2.png"\n            },\n            {\n                "url": "photo3.png"\n            }\n        ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"directivas"},"Directivas"),(0,r.kt)("p",null,"Se puede adjuntar una directiva a la inclusi\xf3n de un campo o fragmento, y puede afectar la ejecuci\xf3n de la consulta de la forma que desee el servidor. La especificaci\xf3n principal de GraphQL incluye exactamente dos directivas, que deben ser compatibles con cualquier implementaci\xf3n de servidor GraphQL que cumpla con las especificaciones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@include"),"(if: Boolean) Solo incluya este campo en el resultado si el argumento es verdadero."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@skip"),"(if: Boolean) Omita este campo si el argumento es verdadero.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n    "email": "blood@gmail.com",\n    "withPhotos": false\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query Lifebank($email: Lifebank, $withPhotos: Boolean!) {\n  lifebank(name: $email) {\n    name\n    photos @include(if: $withPhotos) {\n        url\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n    "name": "National Blood Bank" \n   }\n}\n')),(0,r.kt)("h3",{id:"mutaciones"},"Mutaciones"),(0,r.kt)("p",null,"Se podr\xeda implementar cualquier consulta para provocar una escritura de datos. Sin embargo, es \xfatil establecer una convenci\xf3n de que cualquier operaci\xf3n que provoque escrituras debe enviarse expl\xedcitamente a trav\xe9s de una mutaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "email": "blood@gmail.com",\n  "urgencyLevel": "high"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"mutation ChangeUrgencyLevel($ep: Episode!, $review: ReviewInput!) {\n  updateUrgencyLevel(email: $email, urgencyLevel: $urgencyLevel) {\n    urgencyLevel\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "updateUrgencyLevel": {\n    "urgencyLevel": "high",\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Al igual que en las consultas, si el campo de mutaci\xf3n devuelve un tipo de objeto, puede solicitar campos anidados. Esto puede resultar \xfatil para obtener el nuevo estado de un objeto despu\xe9s de una actualizaci\xf3n."),(0,r.kt)("h3",{id:"fragmentos-en-l\xednea"},"Fragmentos en L\xednea"),(0,r.kt)("p",null,"Si est\xe1 consultando un campo que devuelve una interfaz o un tipo de uni\xf3n, necesitar\xe1 usar fragmentos en l\xednea para acceder a los datos del tipo concreto subyacente."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "ep": "JEDI"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query HeroForEpisode($ep: Episode!) {\n  hero(episode: $ep) {\n    name\n    ... on Droid {\n    primaryFunction\n    }\n    ... on Human {\n    height\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n    "name": "R2-D2",\n    "primaryFunction": "Astromech"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"esquema-y-tipos"},"Esquema y Tipos"),(0,r.kt)("h3",{id:"type-system"},"Type System"),(0,r.kt)("p",null,"Cada servicio GraphQL define un conjunto de tipos que describen completamente el conjunto de datos posibles que puede consultar en ese servicio. Luego, cuando llegan las consultas, se validan y ejecutan contra ese esquema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  lifebank {\n    name\n    email\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank ": {\n    "name": "National Blood Bank",\n    "email": "blood@gmail.com"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"tipo-de-idioma"},"Tipo de Idioma"),(0,r.kt)("p",null,'Los servicios GraphQL se pueden escribir en cualquier idioma. El "lenguaje de esquema GraphQL" - es similar al lenguaje de consulta y nos permite hablar sobre los esquemas GraphQL de una manera independiente del lenguaje.'),(0,r.kt)("h3",{id:"campos-y-tipos-de-objetos"},"Campos y Tipos de Objetos"),(0,r.kt)("p",null,"Los componentes m\xe1s b\xe1sicos de un esquema GraphQL son los tipos de objetos. En el lenguaje de esquema GraphQL, podr\xedamos representarlo as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"type Character {\n name: String!\n appearsIn: [Episode!]!\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Character")," es un tipo de objeto GraphQL, lo que significa que es un tipo con algunos campos. La mayor\xeda de los tipos de su esquema ser\xe1n tipos de objetos.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"appearsIn")," son campos del tipo Character. Eso significa que el name y appearsIn son los \xfanicos campos que pueden aparecer en cualquier parte de una consulta GraphQL que opera en el tipo \u2018Character\u2019.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"String")," es uno de los tipos escalares integrados - estos son tipos que se resuelven en un solo objeto escalar y no pueden tener sub-selecciones en la consulta.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[Episode!]!")," representa una matriz de objetos Episodio. Dado que tampoco admite valores NULL, siempre puede esperar una matriz (con cero o m\xe1s elementos) cuando consulta el campo \u2018appearsIn\u2019. "))),(0,r.kt)("h3",{id:"argumentos-1"},"Argumentos"),(0,r.kt)("p",null,"Cada campo de un tipo de objeto GraphQL puede tener cero o m\xe1s argumentos. Todos los argumentos en GraphQL se pasan por nombre espec\xedficamente, pueden ser obligatorios u opcionales. Cuando un argumento es opcional, podemos definir un valor predeterminado; si no se pasa el argumento de la unidad, se establecer\xe1 en METER de manera predeterminada."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"type Starship {\n id: ID!\n name: String!\n length(unit: LengthUnit = METER): Float\n}\n")),(0,r.kt)("h3",{id:"los-tipos-de-consulta-y-mutaci\xf3n"},"Los Tipos de Consulta y Mutaci\xf3n"),(0,r.kt)("p",null,"Cada servicio GraphQL tiene un tipo de consulta y puede tener o no un tipo de mutaci\xf3n. Estos tipos son los mismos que un tipo de objeto normal, pero son especiales porque definen el punto de entrada de cada consulta GraphQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Schema"',title:'"Schema"'},"schema {\n query: Query\n mutation: Mutation\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'query {\n  hero {\n    name\n  }\n  droid(id: "2000") {\n    name\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n        "name": "R2-D2"\n    },\n    "droid": {\n        "name": "C-3PO"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Las mutaciones funcionan de manera similar: usted define campos en el tipo de mutaci\xf3n, y esos est\xe1n disponibles como los campos de mutaci\xf3n ra\xedz que puede llamar en su consulta."),(0,r.kt)("h3",{id:"tipos-escalares"},"Tipos Escalares"),(0,r.kt)("p",null,"Los tipos escalares representan las hojas de la consulta. Sabemos esto porque esos campos no tienen subcampos, son las hojas de la consulta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  hero {\n    name\n    appearsIn\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n       "name": "R2-D2",\n       "appearsIn": [\n           "NEWHOPE",\n           "EMPIRE",\n           "JEDI"\n        ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"GraphQL viene con un conjunto de tipos escalares predeterminados listos para usar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int"),": Un entero de 32 bits con signo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float"),": Un valor de coma flotante de precisi\xf3n doble con signo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String"),": Una secuencia de caracteres UTF-8."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),": Verdadero o falso."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID"),": El tipo escalar de ID representa un identificador \xfanico El tipo de ID se serializa de la misma forma que una cadena.")),(0,r.kt)("h3",{id:"tipos-de-enumeraci\xf3n"},"Tipos de Enumeraci\xf3n"),(0,r.kt)("p",null,"Tambi\xe9n llamados Enums, los tipos de enumeraci\xf3n son un tipo especial de escalar que est\xe1 restringido a un conjunto particular de valores permitidos. Esto permite:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Valide que cualquier argumento de este tipo sea uno de los valores permitidos."),(0,r.kt)("li",{parentName:"ul"},"Comunicar a trav\xe9s del sistema de tipos que un campo siempre ser\xe1 uno de un conjunto finito de valores.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Enum"',title:'"Enum"'},"enum Episode {\n  NEWHOPE\n  EMPIRE\n  JEDI\n}\n")),(0,r.kt)("h3",{id:"listas-y-non-null"},"Listas y Non-Null"),(0,r.kt)("p",null,"El modificador de tipo Non-Null se utiliza al definir argumentos para un campo, lo que har\xe1 que el servidor GraphQL devuelva un error de validaci\xf3n si se pasa un valor nulo como ese argumento, ya sea en la cadena GraphQL o en las variables."),(0,r.kt)("p",null,"Las listas funcionan de manera similar, podemos usar un modificador de tipo para marcar un tipo como una Lista, lo que indica que este campo devolver\xe1 una matriz de ese tipo."),(0,r.kt)("p",null,"Los modificadores Non-Null y Lista se pueden combinar. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type"',title:'"Type"'},"type Character {\n  name: String!\n  appearsIn: [Episode]!\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "id": null\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query DroidById($id: ID!) {\n  droid(id: $id) {\n    name\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "errors": [\n    {\n       "message": "Variable \\"$id\\" of non-null type \\"ID!\\" must not be null.",\n       "locations": [\n        {\n          "line": 1,\n          "column": 17\n        }\n    ]\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"Una interfaz es un tipo abstracto que incluye un determinado conjunto de campos que un tipo debe incluir para implementar la interfaz."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Interface"',title:'"Interface"'},"interface Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Example 1"',title:'"Example','1"':!0},"type Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  starships: [Starship]\n  totalCredits: Int\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Example 2"',title:'"Example','2"':!0},"type Droid implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  primaryFunction: String\n}\n")),(0,r.kt)("p",null,"Las interfaces son \xfatiles cuando desea devolver un objeto o un conjunto de objetos."),(0,r.kt)("h3",{id:"tipos-de-uni\xf3n"},"Tipos de Uni\xf3n"),(0,r.kt)("p",null,"Los tipos de uni\xf3n son muy similares a las interfaces, pero no pueden especificar ning\xfan campo com\xfan entre los tipos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Union"',title:'"Union"'},"union SearchResult = Human | Droid | Starship\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  search(text: "an") {\n    __typename\n    ... on Human {\n        name\n        height\n    }\n\n    ... on Droid {\n        name\n        primaryFunction\n    }\n\n    ... on Starship {\n        name\n        length\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "search": [\n    {\n        "__typename": "Human",\n        "name": "Han Solo",\n        "height": 1.8\n    },\n    {\n        "__typename": "Human",\n        "name": "Leia Organa",\n        "height": 1.5\n    },\n    {\n        "__typename": "Starship",\n        "name": "TIE Advanced x1",\n        "length": 9.2\n    }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"tipos-de-entrada"},"Tipos de Entrada"),(0,r.kt)("p",null,"En el lenguaje de esquema GraphQL, los tipos de entrada tienen exactamente el mismo aspecto que los tipos de objetos normales, pero con la entrada de palabras clave en lugar de type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input Type"',title:'"Input','Type"':!0},"input ReviewInput {\n stars: Int!\n commentary: String\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "ep": "JEDI",\n  "review": {\n    "stars": 5,\n    "commentary": "This is a great movie!"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n  createReview(episode: $ep, review: $review) {\n    stars\n    commentary\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "createReview": {\n    "stars": 5,\n    "commentary": "This is a great movie!"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Los campos de un tipo de objeto de entrada pueden hacer referencia a tipos de objetos de entrada, pero no puede mezclar tipos de entrada y salida en su esquema. Los tipos de objetos de entrada tampoco pueden tener argumentos en sus campos."),(0,r.kt)("h2",{id:"ejecuci\xf3n"},"Ejecuci\xf3n"),(0,r.kt)("p",null,"Despu\xe9s de ser validada, un servidor GraphQL ejecuta una consulta GraphQL que devuelve un resultado que refleja la forma de la consulta solicitada, normalmente como JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type System"',title:'"Type','System"':!0},"type Query {\n    human(id: ID!): Human\n}\n\ntype Human {\n    name: String\n    appearsIn: [Episode]\n    starships: [Starship]\n}\n\nenum Episode {\n    NEWHOPE\n    EMPIRE\n    JEDI\n}\n\ntype Starship {\n    name: String\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  human(id: 1002) {\n    name\n    appearsIn\n    starships {\n        name\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "human": {\n        "name": "Han Solo",\n        "appearsIn": [\n            "NEWHOPE",\n            "EMPIRE",\n            "JEDI"\n        ],\n        "starships": [\n        {\n            "name": "Millenium Falcon"\n        },\n        {\n            "name": "Imperial shuttle"\n        }\n        ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Cada campo de cada tipo est\xe1 respaldado por una funci\xf3n llamada resolver que es proporcionada por el desarrollador del servidor GraphQL. Cuando se ejecuta un campo, se llama al resolutor correspondiente para producir el siguiente valor."),(0,r.kt)("h2",{id:"ayuda-de-idioma"},"Ayuda de Idioma"),(0,r.kt)("h3",{id:"top-5"},"Top 5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.javascript.com"},"JavaScript")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org"},"Go")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.php.net"},"PHP")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org"},"Python")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.java.com/en/"},"Java"))),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("h4",{id:"servidor"},"Servidor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphQL.js:")," La implementaci\xf3n de referencia de la especificaci\xf3n GraphQL, dise\xf1ada para ejecutar GraphQL en un entorno Node.js."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apollo Server:")," Un conjunto de paquetes de servidor GraphQL de Apollo que funcionan con varios marcos HTTP de Node.js (Express, Connect, Hapi, Koa, etc).")),(0,r.kt)("h4",{id:"cliente"},"Cliente"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apollo Client:")," Un potente cliente JavaScript GraphQL, dise\xf1ado para funcionar bien con React, React Native, Angular 2 o simplemente JavaScript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphQL Request:")," Un cliente GraphQL de JavaScript simple y flexible que funciona en todos los entornos de JavaScript (el navegador, Node.js y React Native), b\xe1sicamente un contenedor ligero alrededor de fetch.")),(0,r.kt)("h4",{id:"herramientas"},"Herramientas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphiQL:")," Un IDE de GraphQL interactivo en el navegador."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphQL CLI:")," Una herramienta de l\xednea de comandos para flujos de trabajo de desarrollo GraphQL comunes.")),(0,r.kt)("h4",{id:"servicios"},"Servicios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#apollo"},(0,r.kt)("strong",{parentName:"a"},"Apollo:"))," Un servicio en la nube para monitorear el rendimiento y el uso de su backend GraphQL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#hasura"},(0,r.kt)("strong",{parentName:"a"},"Hasura:"))," Hasura se conecta a sus bases de datos y microservicios y le brinda instant\xe1neamente una API GraphQL lista para producci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#postman"},(0,r.kt)("strong",{parentName:"a"},"Postman:"))," Un cliente HTTP que admite la edici\xf3n de consultas GraphQL.")))}c.isMDXComponent=!0}}]);