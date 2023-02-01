//importar librerias
import { Router } from "express";
import passport from "passport"

//funcion para mandar el email
import { sendEmailInfoUser } from "../controllers/email";

//declarar ruta de sesiones
export const sessionRoute = Router()

//importar funciones del controller
import { logOut, renderErrLogin, renderErrSignup, renderIndex,renderLogin,renderSigNup } from "../controllers/session";

//middleware
import { isLogged } from "../middlewares/session";

//crear condiciones de login y de signup
const passportConditions={badRequestMenssages:"Faltan campos para rellenar"}

//renderizar inicio
sessionRoute.get("/inicio",renderIndex)


//renderizar vista de login
sessionRoute.get("/login",renderLogin)

//logeo
sessionRoute.post("/login",passport.authenticate("login",{
    failureRedirect:"/api/errLogin",
    
}),async(req,res)=>{
    //crear carrito al iniciar sesion
   
    res.redirect("/api/products")

})


//renderizar la vista de errLogin
sessionRoute.get("/errLogin",renderErrLogin)

//renderizar vista de signup
sessionRoute.get("/signup",renderSigNup)

//signup
sessionRoute.post("/signup",(req,res,next)=>{
    passport.authenticate("signup",passportConditions,async(err,user,info)=>{
        if(err){
            return next
        }
        if(!user){
            res.redirect("/api/errSignup")
        }
        await sendEmailInfoUser(user)
        res.redirect("/api/login")
    })(req,res,next)

})

//renderizar vista de errSignup
sessionRoute.get("/errSignup",renderErrSignup)

//cerrar sesion
sessionRoute.post("/logout",isLogged,logOut)


//muestra la informacion del ususario
sessionRoute.get("/info",isLogged,(req,res)=>{
    const user =req.user
    res.json({user})
})