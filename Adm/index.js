const fs = require("fs");
const path = require("path");
const ruta = "productos.json";
const array = JSON.stringify([]);


class Admi {
  constructor(nameArc) {
    if(!fs.existsSync(ruta)){
      fs.writeFileSync(ruta, array)
    }else{
      this.nameArc = ruta;
    }
  }

  getAll() {
    try {
      const data = fs.readFileSync(ruta, "utf-8");
      const dataParse = JSON.parse(data);
      console.log(dataParse);
      return dataParse;
    } catch (error) {
      console.log(null);
    }
  }

  async save(obj) {
    try {
      const data = await fs.promises.readFile(this.nameArc, "utf-8");
      const dataPar = JSON.parse(data);
      if (dataPar.length) {
        const newProduct = {
          title: obj.title,
          price: obj.price,
          id: dataPar[dataPar.length - 1].id + 1,
        };
        dataPar.push(newProduct);
        const dataStri = JSON.stringify(dataPar, null, "\t")
        await fs.promises.writeFile(this.nameArc, dataStri);
        console.log("se ejecuta");
      } else {
        const newProduct = {
          title: obj.title,
          price: obj.price,
          id: 1,
        };
        dataPar.push(newProduct);
        const dataStri = JSON.stringify(dataPar, null, "\t")
        await fs.promises.writeFile(this.nameArc,dataStri);
      }
    } catch (error) {
      console.log(error);
    }
  }

 async getById(id){
  const data = await fs.promises.readFile(this.nameArc, "utf-8");
      const dataPar = JSON.parse(data);

      const ind = dataPar.findIndex((prod)=>prod.id === id)

      if(ind<0){
        throw new Error("El producto no existe")
      }
      console.log(dataPar[ind])
  }

  async detelledAll(){

    await fs.promises.writeFile(this.nameArc, array)
  }

  async detelledById(id){

    try {
      const data = await fs.promises.readFile(this.nameArc, "utf-8");
      const dataPar = JSON.parse(data);
      const ind = dataPar.findIndex((prod)=>prod.id === id)

      if(ind < 0){
        return
      }else{
        dataPar.splice(ind, 1)
        const dataCheck = JSON.stringify(dataPar, null, "\t")
        await fs.promises.writeFile(this.nameArc,dataCheck)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

