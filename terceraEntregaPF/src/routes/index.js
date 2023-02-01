//importar librerias
import { Router } from "express";
import os from "os";
import cluster from "cluster";
import minimist from "minimist";

//importar loggs
import logger from "../services/loggers";

//importarrutas secundarias
import { sessionRoute } from "./session";
import { productsRoute } from "./products";
import { cartRoute } from "./cart";

//declarar la ruta principal
export const mainRoute = Router();

//nucleos de la pc
const numCpus = os.cpus.length;

//obtener los argumentos pasados
const arg = minimist(process.argv.slice(2));

//modo cluster
const modCluster = arg.cluster;

//logica de pasar a modo cluster o a modo fork
if (modCluster && cluster.isPrimary) {
  logger.info("se activo modo cluster");
  const clusterRouter= Router()
  clusterRouter.use("/",mainRoute)
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
    //ruta de sessiones
    mainRoute.use("/", sessionRoute);
    //ruta de productos
    mainRoute.use("/products", productsRoute);

    //ruta del carrito
    mainRoute.use("/cart", cartRoute);
  }
  cluster.on("exit", (worker) => {
    logger.error("no se murio el server");
    logger.info(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
} else {
    const forkRoute = Router()
    forkRoute.use("/",mainRoute)
}

 //ruta de sessiones
 mainRoute.use("/", sessionRoute);

 //ruta de productos
 mainRoute.use("/products", productsRoute);

 //ruta del carrito
 mainRoute.use("/cart", cartRoute);
