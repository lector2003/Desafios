//importar librerias 
import winston, {format} from "winston"

//importar componentes de formato
const {colorize,timestamp,combine,printf}=format


//formato de los logs 
const confWinston = {
    transports: [
      new winston.transports.Console({ level: "info" }),
      new winston.transports.File({
        level: "error",
        filename: "./loggs/logs.error.log",
      }),
      new winston.transports.File({
          level: "warn",
          filename: "./loggs/logs.warn.log",
        }),
    ], 
    format:combine(
      colorize(),
      timestamp({
          format:"MMM-DD-YYYY HH:mm:ss",
      }),
      printf((info)=>`${info.level}||${[info.timestamp]}||${info.message}`)
    )   
  };
  
  const logger = winston.createLogger(confWinston);
  
  export default logger