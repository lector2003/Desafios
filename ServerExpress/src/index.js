const fs = require("fs");
const path = require("path");
const ruta = "productos.json";
const array = JSON.stringify([]);

const express = require("express");

const app = express();

const getAll = () => {
  try {
    const data = fs.readFileSync(`./${ruta}`, "utf-8");
    const dataParse = JSON.parse(data);
    return dataParse;
  } catch (error) {
    console.log(null);
  }
};

const productos = getAll();


app.get("/productos", (req, res) => {
  
  res.send({ productos });
});




app.get("/productoRamdon", (req, res) => {
  const getById = (id)=>{
      const ind = productos.findIndex((prod)=>prod.id === id)

      if(ind<0){
        throw new Error("El producto no existe")
      }
      return productos[ind]


   
  }
  const random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

  const productRamdon = getById(random(1,productos.length))

  res.send({productRamdon})

});

const PORT = 8081;

const server = app.listen(PORT, () => {
  console.log(`servidor escuchando ${server.address().port}`);
});

server.on("error", (error) => console.log(`error en servidor ${error}`));
