

//verificar si hay una sesion iniciada
export const isLogged = (req,res,next)=>{
if(!req.isAuthenticated()){
  return  res.redirect("/api/inicio")
}
next()
}