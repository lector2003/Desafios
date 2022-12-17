//importar librerias
import passport from "passport"

//verificar si estalogeado
export const isLogged = (req,res,next)=>{
if(!req.isAuthenticated()){
  res.redirect("/api/login")
}
next()
}