const moment  = require("moment")

//formato del mensaje
function format(user, menssage){
    return{
        user,
        menssage,
       // timestampt: moment().format("h:mm a")
    }
}

module.exports = format