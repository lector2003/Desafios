//importar faker
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

//levantar tunel
const socket = io();

//recibir mensajes del servidor
socket.on("mensajes", (data) => {
  console.log(data);
});

//simular envio de mensajes
faker.locale = "es";
const sendMenssages = async(amount) => {
  const user = [];
  for (let i = 0; i < amount; i++) {
   await user.push({
      author: {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        edad: faker.random.numeric(),
        alias: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
      },
       text:faker.lorem.lines() }
            );
  }

return user
};


const form = document.getElementById("formId")

form.addEventListener("submit", async(e)=>{
  e.preventDefault()

  const amount = document.getElementById("amountFake").value

  const users = await sendMenssages(amount)

  socket.emit("data", users)

  document.getElementById("amountFake").value = ""
})
