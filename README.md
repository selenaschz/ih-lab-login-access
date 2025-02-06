## Ironhack - lab login access

En este lab vamos a construir una app full stack (API + WEB) que nos permita registrar a un usuario, hacer login y acceder a la página principal (perfil del usuario) únicamente si el usuario tiene una sesión activa.

### API

Implementa el API. Utiliza postman para verificar que todo funciona

Consigue crear un usuario, hacer login, hacer logout y acceder a la ruta de perfil únicamente si has hecho login antes. Verifica que no puedes acceder a ruta de perfil tras hacer logout.

### WEB

Implementa la web, teniendo el API arrancado en otra terminal. Empieza por la página Home, haz un fetch al perfil del usuario y verifica que se redirige automáticamente a la página de login si se produce un error 401.

Implementa el login mediante un formulario que use el API de login (método login del servicio). Tras hacer login debes poder acceder a la página Home sin problemas y pintar en ella los datos del perfil de usuario

Implementa el registro mediante otro formulario que use el API de registro, para poder crear usuarios nuevos.
