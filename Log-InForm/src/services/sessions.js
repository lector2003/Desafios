//importar librerias
import MongoStore from "connect-mongo"

//importar .env
import congif from "../congif"


//configuarion de sesiones
const ttlSeconds = 60

export const StoreOptions = {
    store:MongoStore.create({
        mongoUrl:congif.MONGO_ATLAS,
        crypto:{
            secret:congif.CRYPTO
        },
    }), 
    secret:congif.SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:ttlSeconds*1000
    }
    
}
