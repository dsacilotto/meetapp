<h1 align="center">
    DESAFIO FINAL - MEETAPP
</h1>

Resolução do desafio [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) para obtenção do certificado.

---


## Tecnologias
Principais tecnologias utilizadas no desenvolvimento

##### *Obs:* Foi utilizado o editor [Visual Studio Code](https://code.visualstudio.com/) durante todo o desenvolvimento

### Back-end
-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Docker](https://www.docker.com/docker-community)
-   [Sequelize](http://docs.sequelizejs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [Redis](https://redis.io/)
-   [Nodemailer](https://nodemailer.com/about/)

### Front-end
-   [ReactJS](https://reactjs.org/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [React-Router](https://github.com/ReactTraining/react-router)
-   [Reactotron](https://infinite.red/reactotron)

### Mobile
-   [ReactJS](https://reactjs.org/)
-   [React Native](https://facebook.github.io/react-native/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [Reactotron](https://infinite.red/reactotron)

## Rodando o projeto
Para que toda a aplicação funcione corretamente é recomendado que as seguintes ferramentas estejam instaladas ao menos nas seguintes versões:
- Git -> 2.17.1
- NodeJS -> 10.16.3
- Yarn -> 1.19.1
- Docker -> 19.03.4

Após clonar o repositório siga os seguintes passos de cada aplicação:

### Back-end

```bash
# Configurando o docker do PostgreSQL
$ docker run --name database -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=meetapp -p 5432:5432 -d postgres 

# Configurando o docker do Redis
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Acessando a pasta do BE
$ seu/destino/meetapp/meetapp_backend

# Instalando as dependências 
$ yarn install

# Criando as tabelas no BD
$ yarn sequelize db:migrate

# Rodando a aplicação em modo de desenvolvimento
$ yarn dev
```
A aplicação estará disponível em: *http://localhost:3333*

### Front-end

```bash
# Acessando a pasta do Front
$ seu/destino/meetapp/meetapp_frontend

# Instalando as dependências 
$ yarn install

# Rodando a aplicação em modo de desenvolvimento
$ yarn start
```
A aplicação abrirá automaticamente no seu navegador padrão em : *http://localhost:3000*

### Mobile
***Obs:*** A aplicação mobile foi testada somente na plataforma Android

```bash
# Acessando a pasta do Mobile
$ seu/destino/meetapp/meetapp_mobile

# Instalando as dependências 
$ yarn install

# Rodando o Metro Bundler
$ yarn start

# Abra um novo terminal também acessando a pasta da aplicação

# Rodando a aplicação (necessário um emulador configurado ou um device com SO Android conectado via usb)
$ yarn android
```
---
Desenvolvido por Danilo Sacilotto :green_heart: