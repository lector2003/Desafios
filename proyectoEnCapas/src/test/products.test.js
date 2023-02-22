//importar librerias
import mongoose from "mongoose";
import request from "supertest"
import jest from "jest"

//importar server
import app from "../server";

//importar modelos de productos
import modelProducts from "../persistence/daos/mongoDb/schemas/products";

describe("test server news",()=>{
    beforeEach(async()=>{
        await mongoose.connection.collections["products"].drop()
    })

    it("push product",async()=>{
        jest.setTimeout(30000);
        const data = {
            name:"Pelota",
            description:"Redonda",
            image:".....",
            stock:10,
            price:4000
        }

        const response = await request(app)
            .post("/api/products")
            .send(data)
        expect(response.statusCode).toBe(200)
       // expect(response.body.name).toBe(data.name)
        expect(response.body.price).toBe(data.price)
    })

    it("get all prodcuts",async()=>{
      
        const data = {
            name:"Pelota",
            description:"Redonda",
            image:".....",
            stock:10,
            price:4000
        }

        await modelProducts.create(data)
        const response = await request(app)
            .get("/api/products")
        expect(response.statusCode).toBe(200)
     
        expect(response.body).toBeInstanceOf(Object)
    })
})