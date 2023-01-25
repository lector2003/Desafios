//importar librerias
import express from "express"
import minimist from "minimist"
import os from "os"
import cluster from "cluster"
import compression from "compression"
import  logger  from "./logger.js"





const app = express()

const arg = minimist(process.argv.slice(2))

const PORT = arg.puert || 8080

const numCpus = os.cpus.length

const modCluster = arg.cluster

//loggs warning







if(modCluster &&cluster.isPrimary){
    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
      }
    
      cluster.on('exit', (worker) => {
        logger.error("no se murio el server")
       logger.info(`Worker ${worker.process.pid} died at ${Date()}`);
        cluster.fork();
      });
    } else {
    
      app.get('/', (req, res) => {
        logger.info("Saludo del puerto")
        res.json({
          pid: process.pid,
          msg: `HOLA desde puerto ${PORT}`,
        });
      });
      
    
      app.get("/info",(req,res)=>{
        logger.info("informacion del servidor")
        const info = {
            argumentoDeEntrada:process.title,
            NombreDeLaPlataforma:process.platform,
            VersiónDeNodeJs:process.version,
            rss:process.memoryUsage(),
            ProcessId:process.pid,
            CarpetaDelProyecto:process.cwd()
    
        }
    
        res.json({
            info
        })
    })

    app.get("/infoGzip",compression(),(req,res)=>{
        logger.info("informacion del servidor comprimida")
        const info = {
            argumentoDeEntrada:process.title,
            NombreDeLaPlataforma:process.platform,
            VersiónDeNodeJs:process.version,
            rss:process.memoryUsage(),
            ProcessId:process.pid,
            CarpetaDelProyecto:process.cwd()
    
        }
    
        res.json({
            info
        })
    })


    app.use("*",(req,res)=>{
      const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

      logger.warn(`No se encuentra ${fullUrl}`)
      res.status(404).send(
       {
         err:"Pagina no encontrada"
       }
      )
   })
    
      app.listen(PORT, () =>
        logger.info(
          `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
        )
      );
    }
