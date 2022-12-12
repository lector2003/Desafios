export const validateLogin = (req,res,next)=>{
    if(req.session.info&&req.session.info.logedIn){
        next()
    }else{
       res.redirect("/api/login")
    }
}