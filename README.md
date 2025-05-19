# pipeline_devops_Karla
Buenos días, para mi prueba creé tres pipelines en diferentes archivos. 
- El primer pipeline ejecuta un script en Node.js que imprime: **'Hola mundo'** cada vez que se hace un push al repositorio.
- El segundo pipeline valida automáticamente los conflictos.
- El tercer piepeline elimina la rama de desarrollo automáticamente despues del merge.

## Probar flujos así:
- Primero: Se hace un cambio en la rama 'Prueba', se hace una modificación en cualquier archivo (se puede crear un archivo nuevo).
- Después de hacer el cambio, hacer commit.
- Luego hacer un PR a la rama main.
- Después de crear el PR se debe hacer el merge del PR.

- ## Debe responder así:
  Se debe mostrar el mensaje "Hola mundo", después debe verificar que no hayan conflictos en la rama y por último debe eliminar la rama origen del desarrollo.





