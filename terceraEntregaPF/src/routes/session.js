//importar librerias
import { Router } from "express";
import passport from "passport"

//declarar ruta de sesiones
export const sessionRoute = Router()

//importar funciones del controller
import { renderIndex,renderLogin,renderSignup } from "../controllers/session";

//crear condiciones de login y de signup
const passportConditions={badRequestMenssages:"Falta password/email"}

//renderizar inicio
sessionRoute.get("/inicio",renderIndex)


//renderizar vista de login
sessionRoute.get("/login",renderLogin)

//logeo
sessionRoute.post("/login",passport.authenticate("login",{
    failureRedirect:"/api/errLogin"
}),(req,res)=>{
    res.json({msg:"Te logeaste"})
})

