//importar librerias
import passport from "passport";
import { Strategy as StrategyLocal } from "passport-local";

//importar funcion para crear carrito
import { createCart } from "../controllers/cart";

//impotar model de usarios
import modelUsers from "../models/users";

//importar loggs
import logger from "./loggers";

//congif strategy 
const optionsStrategy = {
    usernameField:"email",
    passwordField:"password",
    passReqToCallback:true
}


//crear funcion para registrar usuarios
const signup = async(req,email,password,done)=>{
    try {
        //verificar si el usuario ya esta registrado
        const userEmail = await modelUsers.findOne({email})

        if(userEmail){
            return done(null,false,{msg:"Usuario ya registrado"})
        }else{
            //moldear usuario y crear carrito
            phoneNumber=549
            const cart = await createCart()
            logger.info(cart)
            const {name,age,phoneNumber}=req.body
            const user = modelUsers({email,password,name,age,...phoneNumber,cart})

            //encriptar password
            user.password = await user.encryptPassword(password)

            //guardar usuario en la base de datos
            await modelUsers.create(user)

            //devolver usuario 
            return done(null,user)
        }


    } catch (error) {
        logger.error(error)
    }
}

//funcion para logear usuario
const login = async(req,email,password,done)=>{
    try {
        //verificar que el email este registrado
        const user = await modelUsers.findOne({email})



        if(!user){
           return done(null,false,{msg:"Email no registrado"})
        }else{
            //verificar password 
            const match = await user.comparePassword(password)

            if(!match){
              return  done(null,false,{msg:"Contraseña incorrecta"})
            }else{
                
              return  done(null,user)
            }
        }

    } catch (error) {
        logger.error(error)
    }
}

//exportar ambas funciones
export const loginFuc =new StrategyLocal(optionsStrategy,login)
export const signupFuc = new StrategyLocal(optionsStrategy,signup)


//ejecutar serialize y deserialize
passport.serializeUser((user,done)=>{
    logger.info("se ejecuta serialize")
    done(null,user._id)
})

passport.deserializeUser(async(userId,done)=>{ 
    try {
        logger.info("se ejecuta deserialize")
       const user =await modelUsers.findById(userId) 
       done(null,user)
    } catch (error) {
        logger.error(error)
    }
})