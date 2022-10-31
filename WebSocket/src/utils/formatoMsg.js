const moment  = require("moment")

function formato(User, Msg){
    return{
        User,
        Msg,
        hora: moment().format("h:mm a")
    }
}

module.exports = formato