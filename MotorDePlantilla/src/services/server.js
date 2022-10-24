const { urlencoded } = require("express")
const express = require("express")
const path = require("path")
const mainRouter = require("../routes/index")

const app = express()
 app.use(express.json())
 app.use(urlencoded({extended:true}))

 const viewPath = path.resolve(__dirname, "../../views")
 app.use(express.static("public"))
 app.set("view engine", "ejs")
app.set("views", viewPath)

 app.use("/api", mainRouter)

 module.exports = app