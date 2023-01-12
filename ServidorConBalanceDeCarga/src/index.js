const express= require("express")

const minimist = require("minimist")
const os = require("os")
const cluster = require("cluster")
const optionalsArgsObject={
    alias:{
       m:"modo",
       p:"puerto"
    },
    default:{
        modo:"fork",
        puerto:"8080"
    }
}



const arg=minimist(process.argv.slice(2), optionalsArgsObject)
const PORT = arg.puerto

const app = express()

const numCpus = os.cpus.length

console.log(arg.modo)



if(arg.modo == "cluster" ){

    if(clus = cluster.isPrimary){
        for (let i = 0; i < numCpus; i++) {
            cluster.fork()
            
        }
    
        cluster.on("exit",(worker,code)=>{
            cluster.fork()
        })
    }
    
}else{

    app.get("/",(req,res)=>{
        res.json(
            {
                msg:"Hplaa",
                proceso:`proceso ${process.pid}`
            }
        )
    })
    
    app.get("/slow",(req,res)=>{
        let term = false
        for (let i = 0; i < 100000000000000; i++) {
          term = true
            
        }   
    
        res.send(
            {
                term,
                msg:"Termino",
                proceso:process.pid
            }
        )
    })

    app.get("/api/ramdoms",(req,res)=>{
        res.json({msg:"Dirigiendo"})
    })
    app.get("/dead",(req,res)=>{
        res.json({msg:`Proceso con id ${process.pid} destruido`})
        process.exit(0)
    })
}



app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})