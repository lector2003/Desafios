
//logear por nombre
export const login = (req,res)=>{
    //traer nombre del req.body
    const {name}= req.body
     
   if(!name){
    return res.status(401).json({
        msg:"Datos invalidos"
   })
   }
   
   req.session.info={
    logedIn:true,
    userName:name
   }


 res.redirect("/api/loged")

}

//vista del login
export const viewLogin=(req,res)=>{
    res.render("index")
}


//vista de la sesion
export const loged = (req,res)=>{

    const info = req.session.info
   res.render("saludo", {info})
}

//cerrar sesion
export const logOut=(req,res)=>{

    const info=req.session.info?.userName

    if(info){
        req.session.destroy(err=>{
            if(!err){
                res.render("byebye",{info})
            }else{
                res.redirect("/api/login")
            }
        })
    }else{
        res.redirect("/api/login")
    }
}




