"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[4991],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return a?t.createElement(g,s(s({ref:n},u),{},{components:a})):t.createElement(g,s({ref:n},u))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4489:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var t=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],i={id:"instalacion-de-nodos",title:"Instalaci\xf3n de Nodos",sidebar_label:"Instalaci\xf3n de Nodos",description:"Instalaci\xf3n de Nodos para EOSIO",keywords:["Instalaci\xf3n de Nodos","EOSIO","C\xf3mo se crea un nodo","C\xf3mo se instala un nodo","Instalar nodos"]},l="Configuraci\xf3n de un Nodo Productor",d={unversionedId:"tutoriales/instalacion-de-nodos",id:"tutoriales/instalacion-de-nodos",title:"Instalaci\xf3n de Nodos",description:"Instalaci\xf3n de Nodos para EOSIO",source:"@site/docs/tutoriales/instalacion-de-nodos.md",sourceDirName:"tutoriales",slug:"/tutoriales/instalacion-de-nodos",permalink:"/docs/tutoriales/instalacion-de-nodos",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/instalacion-de-nodos.md",tags:[],version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1657866548,formattedLastUpdatedAt:"15 jul 2022",frontMatter:{id:"instalacion-de-nodos",title:"Instalaci\xf3n de Nodos",sidebar_label:"Instalaci\xf3n de Nodos",description:"Instalaci\xf3n de Nodos para EOSIO",keywords:["Instalaci\xf3n de Nodos","EOSIO","C\xf3mo se crea un nodo","C\xf3mo se instala un nodo","Instalar nodos"]},sidebar:"docs",previous:{title:"Guia Markdown",permalink:"/docs/tutoriales/guia-markdown"},next:{title:"Instalaci\xf3n Red Privada EOSIO",permalink:"/docs/tutoriales/instalacion-de-red-privada"}},u={},p=[{value:"Instale EOSIO desde Binarios Precompilados",id:"instale-eosio-desde-binarios-precompilados",level:2},{value:"Configuraci\xf3n del Nodo",id:"configuraci\xf3n-del-nodo",level:2},{value:"<code>config.ini</code>",id:"configini",level:3},{value:"<code>genesis.json</code>",id:"genesisjson",level:3},{value:"<code>start.sh</code>",id:"startsh",level:3},{value:"Crear la cuenta <code>testproducer</code>",id:"crear-la-cuenta-testproducer",level:3},{value:"Registrar <code>testproducer</code> como un Nodo Productor",id:"registrar-testproducer-como-un-nodo-productor",level:3},{value:"Desinstalar <code>eosio</code>",id:"desinstalar-eosio",level:3},{value:"Iniciar un Nodo Usando un Snapshot",id:"iniciar-un-nodo-usando-un-snapshot",level:2},{value:"Nodos de Redes de Prueba",id:"nodos-de-redes-de-prueba",level:2},{value:"Configurar un Nodo en Jungle Testnet",id:"configurar-un-nodo-en-jungle-testnet",level:3},{value:"Configurar un Nodo en Kylin Testnet",id:"configurar-un-nodo-en-kylin-testnet",level:3}],c={toc:p};function m(e){var n=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuraci\xf3n-de-un-nodo-productor"},"Configuraci\xf3n de un Nodo Productor"),(0,r.kt)("p",null,"En EOSIO, un nodo productor y otros tipos de nodos se definen y diferencian habilitando los ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/nodeos/plugins/index"},"Plugins de Nodeos")," espec\xedficos. Por ejemplo, para definir un nodo no productor, es necesario exceptuar ",(0,r.kt)("inlineCode",{parentName:"p"},"producer_plugin"),". Esta posibilidad de personalizaci\xf3n permite exponer uno o varios servicios de forma p\xfablica o privada habilitando uno o varios de esos plugins."),(0,r.kt)("p",null,'Si estas tratando de configurar un "Full Node", puede que te resulte \xfatil ',(0,r.kt)("a",{parentName:"p",href:"https://eoscommunity.org/t/where-is-the-best-guide-on-setting-up-a-full-eos-node/621"},"este enlace"),"."),(0,r.kt)("p",null,"Procedamos a configurar un Nodo Productor utilizando la tecnolog\xeda EOSIO. Tambi\xe9n puede encontrar m\xe1s informaci\xf3n \xfatil sobre este tema ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.0/nodeos/usage/node-setups/producing-node"},"aqu\xed"),"."),(0,r.kt)("h2",{id:"instale-eosio-desde-binarios-precompilados"},"Instale EOSIO desde Binarios Precompilados"),(0,r.kt)("p",null,"Descarga la \xfaltima versi\xf3n de EOSIO para tu sistema operativo desde: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/releases/tag/v2.0.6"},"Github"),"."),(0,r.kt)("p",null,"Por ejemplo, para ubuntu 18.04 necesitas descargar ",(0,r.kt)("inlineCode",{parentName:"p"},"eosio_2.0.6-1-ubuntu-18.04_amd64.deb"),"."),(0,r.kt)("p",null,"Puedes usar apt para instalarlo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://github.com/EOSIO/eos/releases/download/v2.1.0-rc2/eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb\n$ sudo dpkg -i ./eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb\n")),(0,r.kt)("p",null,"El comando anterior descarga todas las dependencias e instala EOSIO en ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/opt/eosio"),"."),(0,r.kt)("h2",{id:"configuraci\xf3n-del-nodo"},"Configuraci\xf3n del Nodo"),(0,r.kt)("p",null,"Una vez instalados los binarios pre-compilados siguiendo los comandos anteriores, vamos a crear un directorio llamado ",(0,r.kt)("inlineCode",{parentName:"p"},"testproducer")," y los archivos ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," en el:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir testproducer\n\n$ touch ~/testproducer/config.ini\n$ touch ~/testproducer/genesis.json\n$ touch ~/testproducer/start.sh\n")),(0,r.kt)("p",null,"Ahora, escribamos algo de c\xf3digo en esos archivos:"),(0,r.kt)("h3",{id:"configini"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.ini")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"agent-name = testproducer\n\n# PLUGINS\n# Necesario para procesar y agregar datos de la cadena en un nodo EOSIO.\nplugin = eosio::chain_plugin\n# Expone la funcionalidad a la interfaz RPC API\nplugin = eosio::chain_api_plugin\n# Necesario para habilitar cualquier funcionalidad de la API RPC proporcionada por una instancia de nodeos o keosd.\nplugin = eosio::http_plugin\n# Carga la funcionalidad necesaria para que un nodo produzca bloques.\nplugin = eosio::producer_plugin\n# Expone una serie de endpoints para el producer_plugin a la interfaz RPC API.\nplugin = eosio::producer_api_plugin\n\n# CHAIN \nchain-state-db-size-mb = 16384\nreversible-blocks-db-size-mb = 512\ncontracts-console = true\nabi-serializer-max-time-ms = 2000\nwasm-runtime = wabt\nenable-stale-production = false\npause-on-startup = false\nmax-irreversible-block-age = -1\ntxn-reference-block-lag = 0\n\n# BLOCK PRODUCER\nproducer-name = testproducer\n\n# PEERING NETWORK\np2p-server-address =  TESTPRODUCER_IP:9876     # CAMBIAR ESTO SEGUN IP DEL NODO\np2p-listen-endpoint = 0.0.0.0:9876\np2p-max-nodes-per-host = 150\nmax-clients = 150\nconnection-cleanup-period = 30\nsync-fetch-span = 2000\nallowed-connection = any\n\np2p-peer-address = SEED_NODE_IP:SEED_NODE_PORT\np2p-peer-address = PEER1_NODE_IP:PEER1_NODE_PORT\np2p-peer-address = PEER2_NODE_IP:PEER2_NODE_PORT\np2p-peer-address = API_NODE_IP:API_NODE_PORT\n# Puedes continuar a\xf1adiendo nods peer aqu\xed\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ten en cuenta que arriba hay elementos que deben ser reemplazados con sus valores correspondientes.")),(0,r.kt)("h3",{id:"genesisjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"genesis.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initial_timestamp": "2018-12-05T08:55:11.000",\n  "initial_key": "EOS_PUB_DEV_KEY",\n  "initial_configuration": {\n    "max_block_net_usage": 1048576,\n    "target_block_net_usage_pct": 1000,\n    "max_transaction_net_usage": 524288,\n    "base_per_transaction_net_usage": 12,\n    "net_usage_leeway": 500,\n    "context_free_discount_net_usage_num": 20,\n    "context_free_discount_net_usage_den": 100,\n    "max_block_cpu_usage": 100000,\n    "target_block_cpu_usage_pct": 500,\n    "max_transaction_cpu_usage": 50000,\n    "min_transaction_cpu_usage": 100,\n    "max_transaction_lifetime": 3600,\n    "deferred_trx_expiration_window": 600,\n    "max_transaction_delay": 3888000,\n    "max_inline_action_size": 4096,\n    "max_inline_action_depth": 4,\n    "max_authority_depth": 6\n  },\n  "initial_chain_id": "0000000000000000000000000000000000000000000000000000000000000000"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sustituye ",(0,r.kt)("inlineCode",{parentName:"p"},"EOS_PUB_DEV_KEY")," por su valor correspondiente. Para ver c\xf3mo generar un par de claves, consulta ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"},"nuestra gu\xeda")," sobre este tema.")),(0,r.kt)("h3",{id:"startsh"},(0,r.kt)("inlineCode",{parentName:"h3"},"start.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\nDATA_DIR="blockchain"\nCONFIG_DIR="./blockchain/config"\nEOS_PUB_KEY=EOS_PUB_KEY  #REEMPLAZA ESTO CON SU VALOR CORRESPONDIENTE\nEOS_PRIV_KEY=EOS_PRIV_KEY #REEMPLAZA ESTO CON SU VALOR CORRESPONDIENTE\necho "Starting Producer Node...";\nset -e;\nulimit -n 65535\nulimit -s 64000\nmkdir -p $CONFIG_DIR\ncp ./config.ini $CONFIG_DIR/config.ini\npid=0;\nnodeos=$"nodeos \\\n --config-dir $CONFIG_DIR \\\n --data-dir $DATA_DIR \\\n --blocks-dir $DATA_DIR/blocks \\\n --signature-provider $EOS_PUB_KEY=KEY:$EOS_PRIV_KEY" ;\nterm_handler() {\n if [ $pid -ne 0 ]; then\n   kill -SIGTERM "$pid";\n   wait "$pid";\n fi\n exit 0;\n}\nstart_nodeos() {\n $nodeos &\n sleep 10;\n if [ -z "$(pidof nodeos)" ]; then\n   $nodeos --hard-replay-blockchain &\n fi\n}\nstart_fresh_nodeos() {\n echo \'Starting new chain from genesis JSON\'\n $nodeos --delete-all-blocks --genesis-json genesis.json &\n}\ntrap \'echo "Shutdown of EOSIO service...";kill ${!}; term_handler\' 2 15;\nif [ ! -d $DATA_DIR/blocks ]; then\n start_fresh_nodeos &\nelif [ -d $DATA_DIR/blocks ]; then\n start_nodeos &\nfi\npid="$(pidof nodeos)"\nwhile true\ndo\n tail -f /dev/null & wait ${!}\ndone\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tal vez necesites asignar permisos de ejecuci\xf3n a ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh"),", para ello ejecuta ",(0,r.kt)("inlineCode",{parentName:"p"},"$ chmod 755 start.sh"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ejecute el script ",(0,r.kt)("inlineCode",{parentName:"strong"},"start.sh"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./start.sh\n")),(0,r.kt)("p",null,"Para una informaci\xf3n m\xe1s detallada sobre el comando anterior, por favor ve ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer"},"aqu\xed"),"."),(0,r.kt)("h3",{id:"crear-la-cuenta-testproducer"},"Crear la cuenta ",(0,r.kt)("inlineCode",{parentName:"h3"},"testproducer")),(0,r.kt)("p",null,"En una red blockchain basada en EOSIO, la creaci\xf3n de cuentas conlleva el consumo de ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"},"RAM"),", por lo que es necesario pagar por las nuevas cuentas. En el siguiente comando sustituye ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATOR")," por una cuenta existente y con recursos suficientes para ejecutar la operaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cleos -u http://URL_NODO_DESTINO create account CREATOR testproducer EOS_PUB_KEY\n")),(0,r.kt)("p",null,"Dependiendo de la red para la que est\xe9s configurando el nodo, puedes crear una cuenta con los siguientes enlaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://monitor3.jungletestnet.io/#account"},"Creaci\xf3n de cuentas en Jungle Testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kylin.eosx.io/tools/account/create"},"Creaci\xf3n de cuentas en Kylin Testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.eosx.io/tools/account/create"},"Creaci\xf3n de cuentas en la red EOS"))),(0,r.kt)("h3",{id:"registrar-testproducer-como-un-nodo-productor"},"Registrar ",(0,r.kt)("inlineCode",{parentName:"h3"},"testproducer")," como un Nodo Productor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cleos -u http://URL_NODO_DESTINO system regproducer testproducer EOS_PUB_KEY "www.testproducer.testlink" 0\n')),(0,r.kt)("p",null,"Para una informaci\xf3n m\xe1s detallada sobre el comando anterior, por favor ve ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer"},"aqu\xed"),"."),(0,r.kt)("p",null,"Ahora, el nodo est\xe1 configurado. Si configuraste este nodo para operar en una Red Privada, necesitas asegurarte de que tu nodo est\xe1 incluido en la de productores. Consulta nuestra ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/tutoriales/instalacion-de-red-privada"},"gu\xeda")," para ver m\xe1s informaci\xf3n sobre esto."),(0,r.kt)("p",null,"Por otro lado, si quieres producir bloques en una red de prueba, los poseedores de tokens tienen que votar por ti para estar entre los 21 principales productores de bloques."),(0,r.kt)("h3",{id:"desinstalar-eosio"},"Desinstalar ",(0,r.kt)("inlineCode",{parentName:"h3"},"eosio")),(0,r.kt)("p",null,"Para desinstalar los binarios construidos/instalados de EOSIO y sus dependencias, ejecuta:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -r eosio\n")),(0,r.kt)("h2",{id:"iniciar-un-nodo-usando-un-snapshot"},"Iniciar un Nodo Usando un Snapshot"),(0,r.kt)("p",null,"En algunas situaciones, es conveniente iniciar un nodo utilizando un ",(0,r.kt)("strong",{parentName:"p"},"snapshot"),", si se desea crear un estado de la red v\xe1lido desde el que iniciar. Se recomienda borrar todos los datos existentes en el directorio: ",(0,r.kt)("inlineCode",{parentName:"p"},"~./local/share/eosio/nodeos/data/*"),"."),(0,r.kt)("p",null,"Supongamos que vamos a utilizar un ",(0,r.kt)("strong",{parentName:"p"},"snapshot")," de Jungle Testnet. Procede a ejecutar el siguiente comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://backup.cryptolions.io/Jungle/snapshots/latest-snapshot.bin -P ~./local/share/eosio/nodeos/data/snapshots/\n")),(0,r.kt)("p",null,"Ahora que el ",(0,r.kt)("strong",{parentName:"p"},"snapshot")," se ha descargado, puedes utilizar el mismo script ",(0,r.kt)("a",{parentName:"p",href:"#startsh"},(0,r.kt)("inlineCode",{parentName:"a"},"start.sh"))," para iniciar el nodo, s\xf3lo tienes que eliminar la bandera ",(0,r.kt)("inlineCode",{parentName:"p"},"--genesis-json")," en el script, por lo que la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"start_fresh_nodes")," en el archivo se ver\xe1 as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"start_fresh_nodeos() {\n echo 'Starting new chain from genesis JSON'\n $nodeos --delete-all-blocks &\n}\n")),(0,r.kt)("p",null,"Para obtener m\xe1s informaci\xf3n, ve ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.1/nodeos/replays/how-to-replay-from-a-snapshot"},"aqu\xed"),". Adem\xe1s, ve ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/search?query=snapshot"},"aqu\xed"),' para ver todas las entradas de documentos disponibles para "Snapshot" en el portal ',(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/"},"developer.eos.io"),"."),(0,r.kt)("h2",{id:"nodos-de-redes-de-prueba"},"Nodos de Redes de Prueba"),(0,r.kt)("h3",{id:"configurar-un-nodo-en-jungle-testnet"},"Configurar un Nodo en Jungle Testnet"),(0,r.kt)("p",null,"Si quieres configurar un nodo en Jungle Testnet, puedes ir a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOS-Jungle-Testnet/Node-Manual-Installation"},"EOS Jungle Testnet - Node Manual Installation")," en Github. Tambi\xe9n puedes usar ",(0,r.kt)("a",{parentName:"p",href:"http://monitor.jungletestnet.io/#register"},"Testnet Auto-Installer script"),". Estas herramientas fueron creadas por ",(0,r.kt)("a",{parentName:"p",href:"https://cryptolions.io/home"},"cryptolions.io")),(0,r.kt)("h3",{id:"configurar-un-nodo-en-kylin-testnet"},"Configurar un Nodo en Kylin Testnet"),(0,r.kt)("p",null,"Para configurar un nodo en el Kylin Testnet, por favor ve al repositorio ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cryptokylin/CryptoKylin-Testnet"},"CryptoKylin-Testnet")," y sigue las instrucciones all\xed."),(0,r.kt)("h1",{id:"referencias"},"Referencias"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.eos.io/search?query=snapshot"},"Informaci\xf3n sobre Snapshots"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://monitor.jungletestnet.io/#register"},"Cryptolions Testnet Auto-Installer script"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cryptokylin/CryptoKylin-Testnet"},"CryptoKylin-Testnet Github repo"))))}m.isMDXComponent=!0}}]);