# README – BACKEND

# Backend – API de Gestión de Colaboradores
Este proyecto corresponde al backend de un sistema de gestión de colaboradores, desarrollado con Node.js, Express y MySQL, exponiendo una API REST.



## Tecnologías utilizadas
- Node.js
- Express.js
- MySQL
- JavaScript
- dotenv
- cors y nodemon 

## Estructura del proyecto
src/
 controllers/
 colaboradorcontroller.js
route/
 colaboradorruta.js
 services/
 colaboradorservice.js
 app.js
 db.js

## Instalación y ejecución
Ingresamos desde carpeta DATOSEMPLEADOSBE e instalamos dependencias con NPM INSTALL
e instalamos npm install express mysql2 cors dotenv
npm install nodemon --save-dev
para la ejecución del proyecto hacemos npm run dev y se abrirá el localhost:3000

### Requisitos previos
- Node.js v18 o superior
- MySQL
- framework express.js

### Configuración y Creación Base de datos
Crear en la base de datos de MySQL 
CREATE DATABASE TEST;
use TEST;
CREATE TABLE colaboradores (
  IDCOLABORADOR INT AUTO_INCREMENT PRIMARY KEY,
  NOMBRE VARCHAR(100),
  APELLIDO VARCHAR(100),
  DIRECCION VARCHAR(200),
  EDAD INT,
  PROFESION VARCHAR(100),
  ESTADOCIVIL VARCHAR(50)
);



