COMANDOS

node src/index.js --modo="cluster"

pm2 start src/index.js --watch -i (numero de nucleos a usar) -- (puerto a usar)

forever start src/index.js --modo="cluster"


Para iniciar nginx copiar la configuracion del repositorio a su configuracion e iniciar ngixn con "start ngixn"