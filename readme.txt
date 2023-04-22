
CRUD:

Base datos de todos los alumnos matriculados.

POST: 
      - Se ingresan nuevos usuarios siendo el rut (numero de identifacion) los digitos para almacenar 
        en la base de datos. 
      - El rut debe tener entre 7 y 8 digitos. (express-validator)
      - Al ingresar un rut ya existente, envia el mensaje de "alumno existente". (Middleware).
      - Se verifica que cada campo de datos este completo y con sus respectivas propiedades (express-validator).

GET BY ID: 
      - Se obtienen datos del alumno matriculado buscando por el numero de rut a traves del metodo PARAMS.
      - En caso de no encontrar el rut, envia el mensaje de "Alumno no existe" (Middleware).

GET ALL:
      - Retorna todos los alumnos matriculados.

PUT:
      - Se chequea si el alumno matriculado existe en la base de datos. (Middleware).
      - Se comprueba que todos los datos del campo esten llenos y con sus respectivas propiedades (express-validator).
      - Se modifican los datos del alumno matriculado.

DELETE:
      - Se ingresa el rut por metodo PARAMS y si es que no existe, envia el mensaje. (Middleware).
      - Se eliminan los datos del alumno matriculado.


      



