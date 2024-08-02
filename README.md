# Super Store

## Funcionamiento
Con los siguientes comandos desde este punto puedes iniciar el proyecto
```
cd frontend
npm run start
```

Con los siguientes comandos desde este punto puedes correr las pruebas unitarias
```
cd frontend
npm run test
```

# CODIGO
Se realiza un proyecto con código reutilizable, escalable y mantenible. Se utilizan las siguientes tecnologías:
- React
- Jest
- Enzyme
- React Testing Library
- React Hooks
- React Context
- React Router Dom
- Sass

## Estructura
- Se divide el proyecto en componentes, hooks, context, pages, services y utils.
- Se implementa el patrón de diseño de contenedor y presentacional.
- Se implementa una arquitectura hexagonal.
- Se implementa el principio de responsabilidad única.
- Se implementa el principio de inversión de dependencias.
- Se implementa el principio de segregación de interfaces.
- Se implementa el patrón 7-1 de Sass.
- Se centralizan colores y fuentes en variables de Sass.

## Linter
- Se implementa un sistema de linter con ESLint y Prettier para mantener un código limpio y ordenado.

## Pruebas
- Se realizan pruebas unitarias con Jest

## Componentes reutilizables
- Se implementan componentes reutilizables y configurables como Button, Input, Select, Table, Modal, entre otros con 
el fin de estandarizar su uso, sus estilos y reducir la duplicidad de código.

## Rutas
- Se implementa un sistema de rutas con React Router Dom con validación de roles para el ingreso a cada una de ellas 
de forma escalabe.

## Context
- Se implementa un sistema de context para el manejo de la autenticación, guardar información del usuario y consultas 
al backend, dando más eficiencia a la aplicación

## Hooks
- Se implementan hooks personalizados para el manejo de la autenticación, consultas al backend y validaciones.

## Estilos
- Se implementa un sistema de estilos con Sass y CSS Modules para evitar la duplicidad de código y mantener la experiencia
  del usuario.

# FUNCIONALIDADES

## Creación, edición y eliminación de productos
- Se implementa un sistema de creación, edición y eliminación de productos con validaciones y mensajes de error.

## Notificaciones
- Se implementa un sistema de notificaciones con el fin de informar al usuario de las acciones realizadas.

## Feature Flags
- Se implementa un sistema de feature flags para habilitar o deshabilitar funcionalidades de la aplicación y se simula
una consulta al backend por estos flags.

## Consultas al backend
- Se implementa un sistema de consultas al backend simulando peticiones con tiempos de 5 segundos de espera en cada petición,
  sea consulta, creación, edición y eliminación de productos.
- Se implementa un sistema de paginación con el fin de mostrar los productos de 10 en 10.

## Mocks
- Se crearon mocks de Feature Flags, Usuarios y Productos simulando una base de datos.

## Busqueda de productos
- Se implementa un sistema de busqueda de productos con el fin de encontrar productos de forma rápida y eficiente.

## Login
- Se implementa un sistema de login con autenticación de usuario y validación de roles.
- Se implementa un sistema de logout.

## Internacionalización
- Se implementa la internacionalización de una forma escalabe y extensible, permitiendo agregar más idiomas sin
  dificultad con i18next y react-i18next.

## Roles
- Se implementa un sistema de roles con el fin de restringir el acceso a ciertas rutas y componentes.
- Se tiene la posibilidad de ingresar a la plataforma sin necesidad de un login obteniendo así un role GUEST
- Se tienen dos usuarios con roles diferentes: admin y user.
```
tatiana@gmail.com - 123456 => ADMIN
julian@gmail.com - 123456 => USER
```

## Mejoras
- Por el tiempo y la complejidad del proyecto, se deja pendiente la implementación de pruebas de integración,
- Por el tiempo no se alcanza a agregar un filtro robusto o un ordenamiento de productos, realmente no es algo complejo
puesto que se tiene la base para hacerlo, lo tenia pensando en hacerlo similar a la busqueda de productos solo que 
teniendo en cuenta más campos y que fueran los seleccionados en el filtro pero no alcance a desarrollarlo


