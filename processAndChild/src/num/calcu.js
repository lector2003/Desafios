 const count = (num)=>{
    let sum = 0
    for (let i = 0; i < num; i++) {
      
      sum+=i
        
    }
    return sum
}

process.on("message",(cant)=>{
  console.log("se ejecucta")
  const sum = count(cant)
  process.send(sum)
})