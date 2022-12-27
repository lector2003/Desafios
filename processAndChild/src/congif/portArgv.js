//importar librerias
 import minimist from "minimist";

 //establecer alias
const optionsMinimist = {
    alias:{
        p:"puerto"
    },
    default:{
        p:8080
    }
}

export const dataPort =minimist(process.argv.slice(2),optionsMinimist)

