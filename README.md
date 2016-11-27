# IT Staff Augmentation Offshoring
En un terminal, iniciar en la raíz del proyecto `node app`.

Los archivos `countries.js` y `roles.js` contienen las palabras claves para los filtros por países y por roles, respectivamente.

El prográma filtra principalmente por países de procedencia, y luego por palabras claves encontradas en los roles actuales. Finalmente organiza los perfiles por cantidad de recomendaciones.

## Posibles mejoras
1. Si los archivos `countries.js` o `roles.js` devuelven un arreglo vacío, el programa incluye a todos los perfiles de cualquier país, o rol, respectivamente; en caso de que estos archivos contengan información, excluyen al resto de los perfiles. Podrían agregarse los perfiles cuya procedencia no se cuentre en `countries.js` al final del arreglo que devuelve el programa.

2. Mayor robustez en la lógica de filtrado por rol.

3. Mayor modularidad.
