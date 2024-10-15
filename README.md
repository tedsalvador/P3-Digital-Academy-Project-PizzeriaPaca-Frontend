
# 🍕 Pizzería Paca 🍕

**Pizzería Paca** es una aplicación moderna y eficiente diseñada específicamente para gestionar de manera integral una pizzería. Desde la experiencia del cliente hasta la administración y logística interna, la aplicación ofrece soluciones innovadoras para optimizar pedidos, pagos y entregas, tanto en tienda como a domicilio. Con un frontend desarrollado en Vue.js y un backend robusto en Spring Boot, **Pizzería Paca** permite a los clientes hacer pedidos fácilmente, seguir su estado en tiempo real y acceder a promociones exclusivas, mientras que el personal de cocina y motoristas pueden gestionar sus tareas desde dashboards especializados. Además, la administración cuenta con herramientas avanzadas para la gestión de productos, facturación y análisis de ventas. ¡Todo lo que necesitas para hacer crecer tu pizzería, en una sola aplicación!

<img width="1911" alt="Captura de pantalla 2024-10-15 a las 12 47 25" src="https://github.com/user-attachments/assets/b61fbf34-0414-4ba8-bfc4-d23cecdf27e4">
<img width="1907" alt="7F6D9FB7-6855-4C0B-9748-875ECFF10994" src="https://github.com/user-attachments/assets/3ac9b6dd-fcc7-4f27-8db6-aa6f4b49984c">
<img width="1908" alt="9BD6FD88-F9EB-4402-8241-374CA2BBD3ED" src="https://github.com/user-attachments/assets/6f97653c-186c-419f-8a11-58ee1d3c28c2">
<img width="1903" alt="23F0374F-E6F1-4C56-913B-117B571F7E01" src="https://github.com/user-attachments/assets/08600641-a49a-42ec-afbf-4bf71c5dd596">
<img width="1751" alt="8C919DDE-6AB2-4F80-8249-B344C65D79DC" src="https://github.com/user-attachments/assets/85e4e30a-9154-4878-a122-0cfe8be565c6">
<img width="1917" alt="FB4913F8-DAFD-4162-8A97-D14FA7DB1D95" src="https://github.com/user-attachments/assets/4d61527a-580a-4c3b-94cd-d5f695f42de7">
<img width="1910" alt="E1A91401-F750-45E8-8165-C44116F7CC4B" src="https://github.com/user-attachments/assets/a2c38c4c-5a77-4800-a6fe-898da4819510">
<img width="1914" alt="BB4647EB-9A3B-43A5-BD14-204ACA365971" src="https://github.com/user-attachments/assets/5fd0b33d-4e2c-4031-bf04-59799b775883">
<img width="876" alt="3CF76F50-8E1A-4B29-971E-E496712D5F0B" src="https://github.com/user-attachments/assets/d5d04728-86c1-4abe-bd86-d0287c82b376">
<img width="925" alt="D2B26336-C963-48CF-8CF9-B619C8FCC850" src="https://github.com/user-attachments/assets/e073f047-2512-4c0f-ab67-d38ada7a259b">
<img width="438" alt="C183ED54-1584-4CA0-8BD0-8576FBC7D198" src="https://github.com/user-attachments/assets/cf85aed2-1824-418d-b021-f6915de47b16">
<img width="1906" alt="FB0A59AB-0EAE-4DD0-9201-93836C8D8346" src="https://github.com/user-attachments/assets/7122d0e6-3a4a-463c-8597-9b0c8c16d3d9">
<img width="942" alt="Captura de pantalla 2024-10-15 a la(s) 14 13 10" src="https://github.com/user-attachments/assets/c4ec453e-69fe-4678-ba45-29f050fa29f2">
<img width="942" alt="Captura de pantalla 2024-10-15 a la(s) 14 12 47" src="https://github.com/user-attachments/assets/6b420fec-8a95-4814-9ab6-ac005fe98ab2">
<img width="927" alt="Captura de pantalla 2024-10-15 a la(s) 14 14 42" src="https://github.com/user-attachments/assets/12631eac-1952-4483-bc9a-c723fb3eb4b2">
<img width="946" alt="Captura de pantalla 2024-10-15 a la(s) 14 15 17" src="https://github.com/user-attachments/assets/a91d599e-4e32-404c-aeac-c46cd6952b81">


## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Comenzando](#comenzando)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
    - [Frontend](#frontend)
    - [Backend](#backend)
- [Uso](#uso)
- [Endpoints de la API](#endpoints-de-la-api)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## 🌟 Características

- 🍕 **Pedidos en tienda y a domicilio**: Los clientes pueden realizar pedidos en el local a través de su móvil/tablets o desde la aplicación para entrega a domicilio.
- 🛒 **Carrito de compras**: Los usuarios pueden agregar, quitar o modificar productos en su cesta antes de confirmar el pedido.
- 💳 **Métodos de pago**: En el local se puede pagar en caja o con tarjeta, mientras que en los pedidos online se acepta tarjeta de crédito/débito o efectivo al momento de la entrega.
- 📦 **Seguimiento de pedidos**: Los clientes pueden ver el estado de sus pedidos.
- 📅 **Registro y perfil**: Los usuarios registrados pueden crear una cuenta, completar su perfil y acceder a ofertas exclusivas.
- 🍽️ **Dashboard de cocina**: Los empleados pueden gestionar y actualizar el estado de los pedidos (en curso, con retraso, listo).
- 🚚 **Dashboard de motoristas**: Los motoristas pueden actualizar el estado de los pedidos (en tránsito, entregado) y enviar notificaciones automáticas a los clientes.
- 🧾 **Dashboard administrativo**: Los administradores pueden gestionar productos, generar facturas simples en PDF y visualizar las ventas diarias, mensuales, trimestrales y anuales.

## 🛠️ Tecnologías

### Frontend
- **Vue.js 3**
- **Vite**
- **Pinia** para gestión del estado
- **Axios** para las solicitudes de API
- **Vue Router** para la navegación
- **Bootstrap** para el diseño de interfaz.
- **Vitest** para pruebas.
- **Librería drag-and-drop** para gestión de elementos arrastrables.
- **jsPDF** para la generación de PDFs desde la aplicación.
- **Firebase** para Realtime Database y Analytics.

### Backend
- **Java**
- **Spring Boot**
- **Spring Data JPA**
- **Base de datos MySQL**
- **Spring Security** para la autenticación
- **Firebase** para Realtime Database y Analytics.

## 🚀 Comenzando

### Requisitos Previos

- Node.js (v14 o posterior)
- npm o yarn
- Java JDK 11 o posterior
- Maven
- MySQL
- Cuenta de Firebase para la configuración de Realtime Database y Analytics

### Instalación

#### Frontend

1. Clona el repositorio del frontend:
```bash
git clone https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-PizzariaPaca-Frontend.git
```

2. Instala las dependencias del proyecto, incluidas las tecnologías adicionales:
```bash
npm install
```

3. Instala **Bootstrap**:
```bash
npm i bootstrap@5.3.3
```

4. Instala **Axios** para las solicitudes HTTP:
```bash
npm install axios
```

5. Instala la librería **drag-and-drop**:
```bash
npm install @formkit/drag-and-drop
```

6. Instala **jsPDF** para la descarga de PDFs:
```bash
npm install jspdf
```
7. Instala Firebase para la gestión en tiempo real y análisis:
```bash
npm install firebase
```

8. Configura Firebase en tu proyecto:
Accede a Firebase Console, crea un nuevo proyecto y habilita Realtime Database y Analytics.
Exporta las credenciales de tu proyecto de Firebase y configúralas en tu archivo .env.

9. Inicia el servidor de desarrollo:
```bash
npm run dev
```

10. Estructura de Carpetas: 


#### Backend

1. Clona el repositorio del backend:
```bash
git clone https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-PizzeriaPaca-Backend.git
```

2. Configura la conexión a la base de datos en `src/main/resources/application.properties`:
```application-properties:
spring.datasource.url=jdbc:mysql://localhost:3306/pizzeriapaca
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
```

3. Configura Firebase en el backend:
  Instala el SDK de Firebase:
 ```bash
  mvn install:firebase-admin
```

4. Ejecuta la aplicación:
```bash
mvn spring-boot:run
```

## 🎮 Uso

1. Abre el navegador y navega a `http://localhost:5173` (o el puerto especificado por Vite).
2. Regístrate o inicia sesión con una cuenta existente.
3. Realiza un pedido y sigue su estado desde el panel de usuario.
4. Los administradores pueden gestionar productos, ventas y facturación desde su dashboard.

## 🛣️ Endpoints de la API
- `POST /api/v1/login`: Permite a los usuarios iniciar sesión. Roles permitidos: `USER`, `ADMIN`, `KITCHEN`, `MOTORIST`.
- `POST /api/v1/register`: Permite a los usuarios crear una nueva cuenta. Acceso público.
- `GET /api/v1/all`: Recupera todos los datos de los usuarios. Solo para el rol `ADMIN`.
- `GET /api/v1/users`: Obtiene una lista de todos los usuarios. Solo para el rol `ADMIN`.
- `GET /api/v1/users/{id}`: Recupera información de un usuario específico según su ID. Roles permitidos: `USER`, `ADMIN`, `KITCHEN`, `MOTORIST`.
- `DELETE /api/v1/users/{id}`: Elimina un usuario específico por ID. Solo para el rol `ADMIN`.
- `POST /api/v1/products/{id}`: Crea un nuevo producto. Solo para el rol `ADMIN`.
- `PUT /api/v1/products/{id}`: Actualiza los detalles de un producto por ID. Solo para el rol `ADMIN`.
- `DELETE /api/v1/products/{id}`: Elimina un producto por ID. Solo para el rol `ADMIN`.
- `GET /api/v1/products/available`: Recupera todos los productos disponibles. Acceso público.
- `GET /api/v1/products/type/{productType}`: Recupera los productos por tipo (ej. pizzas, bebidas). Acceso público.
- `GET /api/v1/products/type/{productType}/available`: Recupera los productos disponibles de un tipo específico. Acceso público.
- `POST /api/v1/upload-image`: Sube una imagen de producto. Solo para el rol `ADMIN`.
- `POST /api/v1/images`: Sube una imagen genérica. Solo para el rol `ADMIN`.
- `GET /api/v1/images`: Obtiene todas las imágenes. Acceso público.
- `DELETE /api/v1/logout`: Cierra la sesión del usuario, eliminando la cookie de sesión.

Consulta los Endpoints de la API del proyecto: http://localhost:8080/swagger-ui/index.html#/

### Roles asignados:
- **USER**: Clientes que pueden acceder a su perfil, realizar pedidos y seguir su estado.
- **ADMIN**: Administradores con acceso a todos los endpoints para gestionar productos, usuarios y órdenes.
- **KITCHEN**: Empleados de cocina que pueden gestionar el estado de los pedidos.
- **MOTORIST**: Motoristas que pueden gestionar el estado de las entregas.

Estos endpoints siguen una política de seguridad basada en roles y requieren autenticación básica para su acceso, según la configuración de la seguridad.

Para más detalles sobre los endpoints, revisa la documentación completa de la API.

## 🤝 Contribuciones

¡Nos encantaría que contribuyeras a mejorar la aplicación Pizzería Paca! Aquí te explicamos cómo puedes hacerlo:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad: `git checkout -b feature/NuevaFuncionalidad`.
3. Realiza los commits necesarios: `git commit -m 'Agrega NuevaFuncionalidad'`.
4. Empuja los cambios a tu repositorio: `git push origin feature/NuevaFuncionalidad`.
5. Abre un Pull Request para que podamos revisar y fusionar tus cambios.

## 📜 Licencia

Este proyecto no tiene una licencia activa.

## 📞 Contacto: Equipo Developers.📫
- **Conchi:** xConchyx@gmail.com
- **Gisela:** hurtadogiselasoledad@gmail.com
- **Nacho:** nachorm9@hotmail.com
- **Arturo:** arturoavilamarketing@gmail.com
- **Pablo:** pablo_abadalvarez@hotmail.es
- **Ted:** tedpaul@hotmail.com
- **Oscar:** oscar15-91@hotmail.com

## 🔗 Links del Proyecto: 
- Frontend: [https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-PizzeriaPaca-Frontend.git](https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-PizzeriaPaca-Frontend.git)
- Backend: [https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-PizzeriaPaca-Backend.git](https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-PizzeriaPaca-Backend.git)

