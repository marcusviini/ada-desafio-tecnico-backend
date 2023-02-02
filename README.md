# Sistema de To-Do List

### Features
- [x] Login - [POST] http://localhost:5000/login
- [x] Create Card - [POST] http://localhost:5000/cards
- [x] Get Cards - [GET] http://localhost:5000/cards
- [x] Update Card - [PUT] http://localhost:5000/cards/:id
- [x] Delete Card - [POST] http://localhost:5000/cards/:id

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). 

# Acesse a pasta do projeto no terminal/cmd
$ cd BACK

# Vá para a pasta do service-grpc
$ cd service-grpc

# Instale as dependências
$ npm install

# Copie o arquivo .env.example para .env

# Crie as migrations do banco de dados
$ npm run migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor grpc inciará na porta:5001

# Acesse a pasta do projeto em um novo terminal/cmd
$ cd BACK

# Vá para a pasta do service-gateway
$ cd service-gateway

# Instale as dependências
$ npm install

# Copie o arquivo .env.example para .env

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5000 - acesse <http://localhost:5000> 


# Acesse a pasta do projeto em um novo terminal/cmd
$ cd BACK

# Vá para a pasta do service-gateway
$ cd service-token

# Instale as dependências
$ npm install

# Copie o arquivo .env.example para .env

# Execute a aplicação em modo de desenvolvimento
$ npm run dev



# A documentação com swagger estará disponível em <http://localhost:5000/docs>  

### 🛠 Tecnologias

As seguintes ferramentas e tecnologias foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [GRPC](https://grpc.io/)
- [Express](https://expressjs.com/pt-br/)
- [Yup](https://www.npmjs.com/package/yup/)
