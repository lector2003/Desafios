Para empezar...

1-Clonar el repositorio.
2-Abrir la consola, y escribir el comando npm install.
3-Una vez se termine de instalar todos los modulos, escribir en la consola el comando npm start.
4-Usar las variables de entorno MONGO_ATLAS, SECRET, CRYPTO

Detalles de la navegacion:
*Method GET:
"/login" Muestra el formulario para iniciar sesion.
"/signup"Muestra el formulario para registrarse.
"/inicio" Muestra el saludo de bienvenida.
"/errSignup" Muestra el mensaje de error del registro.
"/errLogin" Muestra el mensaje de error del login.

*Method POST:
"/signup"Al ingresar los datos validos se registra en la base de datos.
"/login" Al ingresar datos validos en el input se inicia sesion.
"/logOut" Se cierra la sesion y muestra un mensaje.
