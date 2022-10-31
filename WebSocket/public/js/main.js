//Levantar el tunel
const socket = io();


//funcion para renderizar los productos
 const renderHtml = (data)=>{
     const html = data
     .map((element, index)=>{
         return `<div class="historial">
                     <p>Nombre: ${element.title}</p>
                     <p>Precio: ${element.price}</p>
                     <img src=${element.thumbail}  >
                     </div>`
     })

     document.getElementById("historialContainer").innerHTML=html
 }

 //recibir los productos
 socket.on("dataProductos", (data)=>{
     renderHtml(data)
 })


//Mandar productos agregados al form
 const addMenssage = (e)=>{
 
   const data = {
       title: document.getElementById("title").value,
        price:document.getElementById("price").value,
        thumbail:document.getElementById("thumbail").value
    }
     socket.emit("data", data);

     //limpiar los inputs
     document.getElementById("title").value = ""
     document.getElementById("price").value = ""
     document.getElementById("thumbail").value = ""

     return false
     
     }

      //Funcion renderizar mensaje
     const renderMsg = (data)=>{
        const html = data
        .map((element)=>{
            return ` <div class="mensajes">
                <p class="name">${element.User}</p><span class="hora">(${element.hora}):</span>
       
            <p class="msg"> ${element.Msg}</p>
            </div>
            `
        })

        document.querySelector(".chat").innerHTML=html
    }

    

       //recibir el mensaje del servidor
       socket.on("mensaje", (data)=>{
        renderMsg(data)
 
     })

     //Declaracion de  entrada de mensaje

     const ChatForm = document.getElementById("chatForm")
        
     ChatForm.addEventListener("submit", (e)=>{
        e.preventDefault()

        //envio de datos del chat al servidor
        const   Msg = document.getElementById("msg").value
        const email = document.getElementById("email").value

        const user = {
            Msg: Msg,
           User: email
        }
        socket.emit("chatMensaje", user )
        
        //limpiar input
        document.getElementById("msg").value = ""

     })

    

    

    


     
    


