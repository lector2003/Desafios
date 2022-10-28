//manipulacion del doom


//creacion del producto


const socket = io()

//envio del emit

    const addMenssage = (e)=>{
      
        const data = {
            title: document.getElementById("title").value,
            price:document.getElementById("price").value,
            thumbail:document.getElementById("thumbail").value
        }

        socket.emit("data", data)
        return false
    }
    



