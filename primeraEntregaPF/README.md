  Para empezar...

1-Clonar el repositorio.
2-Abrir la consola, y escribir el comando npm install.
3-Una vez se termine de instalar todos los modulos, escribir en la consola el comando npm start.

Detalles de la navegacion:
End Poinst de product.js:
Method Get...
"/products" Trae todo los productos almacenados en el json. curl --location --request GET 'http://localhost:8080/api/products'
"/products/:id" Trae el producto segun su id. curl --location --request GET 'http://localhost:8080/api/products/11332d46-6384-4319-8090-0bb2ac5de7c3'

Method Post...
"/products" Agrega al json un producto. curl --location --request POST 'http://localhost:8080/api/products' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Mancuerna' \
--data-urlencode 'description=Pesa de 15kg' \
--data-urlencode 'price=1550' \
--data-urlencode 'stock=10' \
--data-urlencode 'image=https://www.google.com/url?sa=i&url=https%3A%2F%2Ftienda.gfitness.com.ar%2Fshop%2Fproduct%2F100413-10-mancuerna-hex-engomada-10kg-por-unidad-2251&psig=AOvVaw2sSeBjpzHW9teMalEwOqeX&ust=1666223726313000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPCV7J396voCFQAAAAAdAAAAABAF'

Method Put...
"/products/:id" Modifica algun parametro del producto correspondiente al id agregado. curl --location --request PUT 'http://localhost:8080/api/products/11332d46-6384-4319-8090-0bb2ac5de7c3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Mancuerna' \
--data-urlencode 'description=Pesa de 15kg' \
--data-urlencode 'price=3000' \
--data-urlencode 'stock=10' \
--data-urlencode 'image=https://www.google.com/url?sa=i&url=https%3A%2F%2Ftienda.gfitness.com.ar%2Fshop%2Fproduct%2F100413-10-mancuerna-hex-engomada-10kg-por-unidad-2251&psig=AOvVaw2sSeBjpzHW9teMalEwOqeX&ust=1666223726313000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPCV7J396voCFQAAAAAdAAAAABAF'

Method Delete...
"/products/:id"Borra un producto segun el id curl --location --request DELETE 'http://localhost:8080/api/products/11332d46-6384-4319-8090-0bb2ac5de7c3'


End Points de cart.js
Method Post...
"/cart" Crea un carrito nuevo y devuelve su id. curl --location --request POST 'http://localhost:8080/api/cart'
"/cart/:id/products" Agrega al carrito,segun su id, un producto del json de productos, segun el id del producto, y la cantidad de items necesaria. Ademas se fija la fecha en la que se agrego al carrito. curl --location --request POST 'http://localhost:8080/api/cart/24ffa74b-d683-4c51-8ae1-75a6882b4d8c/products' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'idProduct=11332d46-6384-4319-8090-0bb2ac5de7c3' \
--data-urlencode 'amount=5'


Method Delete...
"/cart/:id" Borra el carrito segun su id. curl --location --request DELETE 'http://localhost:8080/api/cart/24ffa74b-d683-4c51-8ae1-75a6882b4d8c'
"/cart/:id/products/:id_product" Borra un producto agregado al carrito, segun el id del producto y del carrito. curl --location --request DELETE 'http://localhost:8080/api/cart/24ffa74b-d683-4c51-8ae1-75a6882b4d8c/products/11332d46-6384-4319-8090-0bb2ac5de7c3'

Method Get...
"/cart/:id/products" Muestra los productos del carrito. curl --location --request GET 'http://localhost:8080/api/cart/24ffa74b-d683-4c51-8ae1-75a6882b4d8c/products'