
Para empezar...

1-Clonar el repositorio.
2-Abrir la consola, y escribir el comando npm install.
3-Usar  variables de entorno que estan indicadas en el archivo .env
4-Una vez se termine de instalar todos los modulos, escribir en la consola el comando npm start.

Method Get...
"/products" Trae todo los productos almacenados en el json.
"/products/:id" Trae el producto segun su id.

Method Post...
"/products" Agrega al json un producto.

Method Delete...
"/products/:id"Borra un producto segun el id curl

End Points de cart.js
Method Post...
"/cart" Crea un carrito nuevo y lo muestra.
"/cart/:idCart/:idProd" Agrega al carrito,segun su id, un producto del json de productos, segun el id del producto.


Method Delete...
"/cart/:id" Borra el carrito segun su id.
"/cart/:idCart/:idProd" Borra un producto agregado al carrito, segun el id del producto y del carrito.

Method Get...
"/cart/:id" Muestra los productos del carrito.
