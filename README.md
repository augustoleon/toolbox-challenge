# toolbox-challenge



Este challenge consta de dos aplicaciones: un servidor que nos devuelve una lista de archivos formateados y un cliente que consume dichos archivos. Cada aplicación tiene su propio conjunto de dependencias y se gestiona mediante un archivo `package.json` separado.

## Instalación ![Configuración](https://img.icons8.com/material-outlined/24/settings.png)

### Requisitos

- Node.js 14 o superior para levantar el server
- Node.js 16 o superior para levantar el client
- Docker (opcional, si usas Docker para levantar las aplicaciones)

### Server

1. Navega al directorio del server:

   ```bash
   cd server
   npm install

### Cliente

1. Navega al directorio del client:

   ```bash
   cd ../
   cd client
   npm install

### Docker (opcional)

1. Desde el root del proyecto:

   ```bash
   docker-compose up -d

2. Este comando inicia los contenedores en segundo plano.
3. Instala e inicia las aplicaciones.

## Inicia las aplicaciones ![Cohete](https://img.icons8.com/material-outlined/24/rocket.png)

1. Navega al directorio server
2. Puedes ejecutar ambas aplicaciones con un unico comando para iniciarlas:

   ```bash
   npm run start:serv:cli

3. De forma tradicional, iniciar el server:

   ```bash
   npm start

4. Navegar hasta el directorio client para iniciar:

   ```bash
   cd ../
   cd client
   npm start

## Inicia los test para el server ![Frasco de Experimento](https://img.icons8.com/material-outlined/24/test-tube.png)

1. Navega al directorio server:

   ```bash
   npm test

## Server  

- Running in **port 4000** 
- Base api url ```http://localhost:4000/api/v1```

## Obtener archivos formateados ```/files/data```
### Response json of ```/files/data```
```
{
    "data": [
            {
                "file": "test1.csv",
                "lines": [
                    {
                        "text": "CqMkfmeTRMO",
                        "number": "5049",
                        "hex": "3fb81f26737edf8a4a411e08683b6f30"
                    }
                ]
            },
            {
                "file": "test2.csv",
                "lines": [
                    {
                        "text": "CqMkfmeTRMO",
                        "number": "5049",
                        "hex": "3fb81f26737edf8a4a411e08683b6f30"
                    },
                    {
                        "text": "CqMkfmeTRMO",
                        "number": "5049",
                        "hex": "3fb81f26737edf8a4a411e08683b6f30"
                    }...
                ]
            }...
        ]

}
```
### CURL 
   ```bash
   curl --location 'localhost:4000/api/v1/files/data'

```
## Obtener lista de archivos ```/files/list```
### Response json of ```/files/list```
```
{
    "data": [
            "test1.csv",
            "test2.csv"...
        ]
}
```
### CURL 
   ```bash
   curl --location 'localhost:4000/api/v1/files/list'

```
## Client
- **Running in port 3000** 
- **Base url** ```http://localhost:3000```

