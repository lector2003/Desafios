//importar librerias
import { Router } from "express";
import passport from "passport";
import { UserModel } from "../models/user";
import {fork} from "child_process"
//nombrar la ruta principal
export const mainRoute = Router()

//importar middleware
import { isLogged } from "../middleware/session";
import path from "path";

//crear condiciones para el logeo y el registro
const passportConditions = {badRequestMessage:"Falta username/password"}

//route para signup
mainRoute.post("/signup",(req,res,next)=>{
    passport.authenticate("signup",passportConditions,(err,user,info)=>{
        if(err){
            return next(err)
        }
        if(!user){
            res.render("errSignup")
        }
        res.redirect("/api/login")
    })(req,res,next)
})

//renderizar vista sgnup
mainRoute.get("/signup",(req,res)=>{
    res.render("signup")
})

//route login
mainRoute.post("/login", passport.authenticate("login",{
    failureRedirect:"/api/errLogin"
}),(req,res)=>{
    res.redirect("/api/inicio")
})

mainRoute.get("/errLogin",(req,res)=>{
    res.render("errLogin")
})

//renderizar login
mainRoute.get("/login",(req,res)=>{
    res.render("login")
})

mainRoute.get("/inicio", isLogged,(req,res)=>{
    const user = req.user
    res.render("index", {user})
})

mainRoute.post("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/api/login")
})


//mostrar info
mainRoute.get("/info",(req,res)=>{
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

//ruta no bloqueante
mainRoute.get("/calculo",(req,res)=>{

    const {cant}= req.query

    const scripPath = path.resolve(__dirname,"../num/calcu.js")
    const computo = fork(scripPath)
    computo.send("start")
})