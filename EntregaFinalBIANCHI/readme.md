# Aplicación Backend E-Commerce **Entrega Final**

## Proyecto: E-Commerce "MundoCamisetas"

En esta etapa del proyecto estaremos desarrollando la parte BACKEND del e-commerce de la web MUNDOCAMISETAS.
En la parte I iniciamos con los metodos y pruebas con POSTMAN.
En la parte II realizamos la incorporacion de handlebars y websocket para la comunicacion.
En la entrega final, modificamos la persistencia de archivos con la implementacion de MONGODB.

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Configuración](#configuración)
3. [Uso](#uso)
4. [Autores y Reconocimientos](#autores-y-reconocimientos)
5. [Contactos y Soporte](#contactos-y-soporte)

## Instalación
### Requisitos previos
- Node.js v16 o superior.
- Express.
- Handlebars.
- websocket.
- MongoDB.

## Configuración
### Variables de entorno
`PORT`: El puerto en el que la aplicación se ejecutará (por defecto: 8080).\


## Uso
### Endpoints RAIZ de la API
**GET** `/api/products`: Obtiene la lista de pproductos.\
**GET** `/api/carts`: Obtiene la lista de carritos.\
**GET** `/`: Obtiene mediante el motor de plantillas 'Handlebars' la lista de productos\
**GET** `/realtimeproducts`: Obtiene el formulario para el ingreso de un nuevo producto y mostrarlo en la misma pantalla. Todo con Handlebars.


A continuacion, imágenes con las pruebas realizadas segun las rúbricas de la Pre Entrega 1 y 2:

#GetProducts
![GetProducts](src/public/img/GetProducts.png)

#GetProductsLimit
![GetProductsLimit](src/public/img/GetProductLimit.png)

#GetProductByID
![GetProductByID](src/public/img/GetProductByID.png)

#PostProduct
![PostProduct](src/public/img/PostNewProduct.png)

#PutProduct
![PutProduct](src/public/img/PutProduct.png)

#DeleteProduct
![DeleteProduct](src/public/img/DeleteProduct.png)


------------


#PostCart
![PostCart](src/public/img/PostCart.png)

#GetCart
![GetCartByID](src/public/img/GetCartByID.png)

#PostProductToCartID
![PostProductToCartID](src/public/img/PostProductToCartID.png)

-------------------------------

**Implementacion de Handlebars**:

#Get de la ruta raiz "/": Lista de productos dentro del JSON.
![homeHandlebars](src/public/img/HomeHandlebars.png)

#Get de la ruta "/realTimeProducts": Formulario para el ingreso y muestra en pantalla de un nuevo producto.
![realTimeProducts](src/public/img/realTimeProductsHandlebars.png)


## Autores y reconocimientos
* Fabio Bianchi - Desarrollador principal - 

## Contacto y soporte
Para preguntas o soporte, contacta a fabiobianchicaseros@gmail.com.

