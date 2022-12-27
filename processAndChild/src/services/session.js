//importar librerias
import MongoStore from 'connect-mongo'

//importar variables de entorno
import congif from '../congif'

//configuracion de las sesiones
export const StoreOpcion = {
    store:MongoStore.create({
        mongoUrl:congif.MONGO_ATLAS,
        crypto:{
            secret:congif.CRYPTO
        }
    }),
    secret:congif.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:180*1000
    }
}