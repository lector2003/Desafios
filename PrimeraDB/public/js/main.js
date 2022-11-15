//levantar tunel
const socket = io();

//renderizar productos
const renderHtml = (data)=>{
    const html = data
    .map((element, index)=>{
        return `<div class="historial">
                    <p>Nombre: ${element.name}</p>
                    <p>Precio: ${element.price}</p>
                    <img src=${element.image}  >
                    </div>`
    }).join("")

    document.getElementById("historialContainer").innerHTML=html
}



//recibir productos del servidor
socket.on("productos",(data)=>{
    renderHtml(data)
})

//Mandar productos agregados al form
const addMenssage = (e)=>{

    const data = {
        name: document.getElementById("title").value,
         price:document.getElementById("price").value,
         image:document.getElementById("thumbail").value
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
                <p class="name">${element.user}</p><span class="hora">(${element.timestamp}):</span>
       
            <p class="msg"> ${element.menssage}</p>
            </div>
            `
        }).join(" ")

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
        const   menssage = document.getElementById("msg").value
        const email = document.getElementById("email").value

        const User = {
            menssage: menssage,
           user: email
        }
        socket.emit("chatMensaje", User )
        
        //limpiar input
        document.getElementById("msg").value = ""

     })

