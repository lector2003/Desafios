Para empezar...

1-Clonar el repositorio.
2-Abrir la consola, y escribir el comando npm install.
3-Usar  variables de entorno que estan indicadas en la carpeta credentials
4-Para poder utilizar correctamente las funciones de envio de gmail y whatsapp, ingresar a la documentacion de Twilio y de nodemailer para remplazar credenciales.
5-Una vez se termine de instalar todos los modulos, escribir en la consola el comando npm start.
6-Para activar el modo cluster de la aplicacion escribir en consola npm run cluster

Detalles de la navegacion:
El proyecto se ve a traves del navegador, ya que utiliza motor de plantillas.
Al iniciar 
End Poinst de session.js:
Method Get...
"/inicio" Muestra las opciones para iniciar sesion o registrarse.
"/login" Muestra el formulario de login.
"/signup" Muestra el formulario del registro.
"/errLogin" Muestra la vista si hubo un fallo al iniciar sesion.
"/errSignup" Muestra la vista si hubo algun fallo al registrarse.

Method Post...
"/login" Al ingresar datos validos inicias sesion y te redirije a la vista de productos.
"/signup" Al registrarse ingresando datos validos, se creara automaticamente un carrito donde podra agregar sus productos, se redirijira a la vista de login para iniciar sesion, ademas se mandara un email al admin, con sus datos de registro.
"/logout" Se cerrara la sesion.

End Poinst de cart.js
Method Get...
"/cart/:id" Se mostrara todos los productos agregados al carrito.

Method Post...
"/cart/:id/:id_product" Se agregara al carrito el producto con el id correspondiente.
"/cart/:id" Se compraran los productos ingresados en el carrito, y se redirijira a la vista de productos nuevamente, ademas se mandara n mensaje de whatsapp y de email al administrador con su orden de compra.
"/cart/:id/products/:id_prod" Se borrara el producto del carrito segun el id correspondiente.

End Poinst de products.js
Method Get...
"/products" Se mostrara todos los productos agregados a la base de datos.


Aclaraciones:
-Agunas funciones en el controller de products no se usaron ya que son de un user admin. Como el desafio no lo pedia no lo hice, pero esta en marcha eso.
-Casi todos los end poinst tienen middlewares que estan exportados en la carpeta middleware, donde se indica que hace cada uno.
-Al registrarte la password se guarda encriptada en la base de datos.


