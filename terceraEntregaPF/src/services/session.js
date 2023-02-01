//importar librerias
import MongoStore from "connect-mongo"

//importar credenciales
import { credentials } from "../credentials/credentials"

//configuracion de las sesiones
export const StoreOpcion={
    store:MongoStore.create({
        mongoUrl:credentials.StringConnection,
        crypto:{
            secret:credentials.CRYPTO
        }
    }),
    secret:credentials.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:180*10000000000000
    }
}