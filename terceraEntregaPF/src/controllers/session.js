
//renderizar el inicio
export const renderIndex = (req,res)=>{
    res.render("index")
}

//renderizar form del login
export const renderLogin = (req,res)=>{
    res.render("login")
}

//renderizar form del signup
export const renderSigNup = (req,res)=>{
    res.render("signup")
}

//renderizar vista de error de logeo
export const renderErrLogin = (req,res)=>{
    res.render("errLogin")
}

//renderizar vista de error de signup
export const renderErrSignup = (req,res)=>{
    res.render("errSignup")
}

//logout
export const logOut = (req,res)=>{
    req.session.destroy()
    res.redirect("/api/inicio")
}

