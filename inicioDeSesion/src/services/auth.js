//importar librerias
import passport from "passport"
import {Strategy as StrategyLocal} from "passport-local"

//importar modelo de usuarios
import { UserModel } from "../models/user"

//congif strategy
const optionsStrategy = {
    usernameField:"email",
    passwordField:"password",
    passReqToCallback:true
}

//crear funcion de signup
const signup = async(req,email,password,done)=>{
    try {
        //verificar si ya esta registrado
        const user = await UserModel.findOne({email})

        if(user){
          return  done(null,false,{msg:"Email registrado"})
        }
        else{
            //encriptar password
            const newUser = new UserModel({email,password})

            newUser.password = await newUser.encryptPassword(password)

            //guardar usuario en la db
            await UserModel.create(newUser)

            //devolver usuario
          return  done(null,newUser)
        }
    } catch (error) {
        console.log(error)
    }
}

//crear funcion login
const login = async(req,email,password,done)=>{
    try {
        //verificar si existe el usuario
        const user = await UserModel.findOne({email})

        if(!user){
            return done(null,false,{msg:"Email incorrecto"})
        }else{
            const match = await user.comparePassword(password)

            if(!match){
                return done(null,false,{msg:"Contraseña inconrrecta"})
            }else{
                return done(null,user)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

//exportar ambas funciones
export const signupFuc = new StrategyLocal(optionsStrategy, signup)
export const loginFuc = new StrategyLocal(optionsStrategy,login)


//ejecutar serialize y deserialize
passport.serializeUser((user,done)=>{
    //se ejecuta serialize
    done(null,user._id)
})

passport.deserializeUser(async(userId,done)=>{
    try {
        console.log("Se ejecuta deserialize")

        //buscar ususario por id
        const user = await UserModel.findById(userId)

        done(null,user)
    } catch (error) {
        console.log(error)
    }
})
