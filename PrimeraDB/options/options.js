import dontenv from "dotenv"
dontenv.config()

export const options = {
    client:"mysql",
    connection:{
        host:"127.0.0.1",
        user:process.env.DB_USER,
        password:"",
        database:"ecommerce",
        port: 3307
    },
};