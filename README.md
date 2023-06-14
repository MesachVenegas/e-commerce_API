# Proyecto - Final

## Objetivo general

Aplicar todos los conocimientos vistos en clase para levantar esta API desde 0,
mas consideraciones de seguridad y para lanzar a producción en Railway / render.

### El proyecto debe cumplir con los siguientes puntos

1. Conectarse a una base de datos

2. Se deben crear los siguientes modelos:

    - [x] Users
    - [x] Products
    - [x] Carts
    - [x] Orders
    - [x] ProductInCart
    - [x] ProductInOrder
    - [x] Establecer las relaciones entre los modelos

3. Debe contener los siguientes puntos:

    - [x] Crear usuarios y encriptar sus contraseñas con Bcrypt
    - [x] Iniciar sesión y generar JWT
    - [x] Editar un usuario ( username y avatar )
    - [ ] Crear la validaciones pertinentes para cada endpoint ( express validator)
    - [x] Obtener todos los productos que su cantidad sea mayor que 0, debe incluir el nombre del usuario quien esta vendiendo el producto
    - [x] Crear un nuevo producto, incluyendo una imagen
    - [x] Poder editar la descripción de un producto
    - [x] Agregar un producto al carrito
    - [x] Mostrar todos los productos que el usuario tiene hasta el momento en su carrito
    - [ ] Realizar una compra, todos los productos en el carrito se marcan como comprados y
    - [x] El carrito cambia a status ‘purchased’
    - [x] Ver todas las ordenes del usuario
    - [x] Mandar un correo cuando un usuario crea una cuenta y
    - [ ] cuando realiza una compra
    - [ ] Tu api debe tener una página de documentación con los endpoints que usas y que se pueda probar, incluyendo los campos requeridos para las peticiones y una sección para incluir el token de autenticación si es necesario. (swagger)

4. Reto opcional

    - [ ] Generar un endpoint para recuperar contraseña.

> 💡 Tip: Para recuperar una contraseña un usuario llena un formulario donde solamente manda su correo electrónico. Posteriomente llega un mensaje a su correo electrónico con un enlace que incluye un token. Este enlace lo lleva a una pagina que tiene un formulario para restablecer la contraseña. Cuando da enviar, envía la contraseña nueva y el token del enlace.

## Diseño de la base de datos

![diagram](./Public//e-commerce_diagram.png)

## Iniciando la configuración

Para iniciar a trabajar con nuestro API es necesario primero establecer algunos ajustes, primero hay que establecer nuestras variables de entorno, entre las cuales esta las que nos permitirán conectarnos a la base de datos

|Variable |Description                          |
|:-------:|:------------------------------------|
|`DB_HOST`|Host desde el cual se accede a la DDBB|
|`DB_NAME`|Nombre de la base de datos a generar|
|`DB_PORT`|Puerto de conexión a la DDBB|
|`DB_USER`|Nombre de usuario con el que se accede|
|`DB_PASS`|Password para acceder a postgres|

[⭡backtotop](#proyecto---final)
