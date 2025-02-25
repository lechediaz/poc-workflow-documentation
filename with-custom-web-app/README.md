# Introducción

Esta aplicación web personalizada está construida con Next.js y para ejecutarla se facilita el uso desde contenedor de Docker.

## Ejecutar con Docker

Primero se debe construir la imagen de Docker:

```
docker build -t wf-docs .
```

Luego, se debe crear el contenedor de Docker:

```
docker run -d -p 3001:3000 wf-docs
```

Finalmente, visitar http://localhost:3001/ para ver la aplicación.