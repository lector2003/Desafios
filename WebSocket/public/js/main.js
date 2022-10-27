//manipulacion del doom
const title = document.getElementById("title").value
const price = document.getElementById("price").value
const url = document.getElementById("thumbail").value

//creacion del producto
const data = {
    title: title,
    price:price,
    thumbail: url
}

const socket = io()

//envio del emit

        socket.emit("dataProduct", data)
    



