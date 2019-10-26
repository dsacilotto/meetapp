<h1 align="center">
    DESAFIO FINAL - MEETAPP
</h1>

Resolução do desafio [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) para obtenção do certificado.

---

## Tecnologias

Principais tecnologias utilizadas no desenvolvimento

##### _Obs:_ Foi utilizado o editor [Visual Studio Code](https://code.visualstudio.com/) durante todo o desenvolvimento

### Back-end

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/docker-community)
- [Sequelize](http://docs.sequelizejs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Nodemailer](https://nodemailer.com/about/)

### Front-end

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React-Router](https://github.com/ReactTraining/react-router)
- [Reactotron](https://infinite.red/reactotron)

### Mobile

- [ReactJS](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Reactotron](https://infinite.red/reactotron)

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
$ sua/pasta/destino/meetapp/meetapp_backend

# Instalando as dependências
$ yarn install

# Crie um arquivo .env na raiz no projeto contendo as configurações do Redis, PostgreSQL, etc.
# Siga como exemplo o arquivo env.example para saber quais os dados necessários

# Criando as tabelas no BD
$ yarn sequelize db:migrate

# Rodando a aplicação em modo de desenvolvimento
$ yarn dev
```

A aplicação estará disponível em: _http://localhost:3333_

### Front-end

```bash
# Acessando a pasta do Front
$ sua/pasta/destino/meetapp/meetapp_frontend

# Instalando as dependências
$ yarn install

# Rodando a aplicação em modo de desenvolvimento
$ yarn start
```

A aplicação abrirá automaticamente no seu navegador padrão em : _http://localhost:3000_

### Mobile

**_Obs:_** A aplicação mobile foi testada somente na plataforma Android

```bash
# Acessando a pasta do Mobile
$ sua/pasta/destino/meetapp/meetapp_mobile

# Instalando as dependências
$ yarn install

# Rodando o Metro Bundler
$ yarn start

# Abra um novo terminal também acessando a pasta da aplicação

# Rodando a aplicação (necessário um emulador configurado ou um device com SO Android conectado via usb)
$ yarn android
```

---

Desenvolvido por Danilo Sacilotto de Souza :green_heart:
