# Aplicación Backend E-Commerce **Parte II**

## Proyecto: E-Commerce "MundoCamisetas"

En esta etapa del proyecto estaremos desarrollando la parte BACKEND del e-commerce de la web MUNDOCAMISETAS.
En la parte I iniciamos con los metodos y pruebas con POSTMAN.
En la parte II realizamos la incorporacion de handlebars y websocket para la comunicacion.

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

## Configuración
### Variables de entorno
`PORT`: El puerto en el que la aplicación se ejecutará (por defecto: 8080).\


## Uso
### Endpoints RAIZ de la API
**GET** `/api/products`: Obtiene la lista de pproductos.\
**GET** `/api/carts`: Obtiene la lista de carritos.

A continuacion, imágenes con las pruebas realizadas segun las rúbricas de la Pre Entrega 1:

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


## Autores y reconocimientos
* Fabio Bianchi - Desarrollador principal - 

## Contacto y soporte
Para preguntas o soporte, contacta a fabiobianchicaseros@gmail.com.

