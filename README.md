<h1 align="center">
  Cron Server
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/denismelo/cron-server">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/denismelo/cron-server">
  <img alt="Stars" src="https://img.shields.io/github/stars/denismelo/cron-server">
</p>

<p align="center">
  <a href="#clipboard-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#heavy_check_mark-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sos-exemplo">Exemplo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pick-iniciando-servidor">Iniciando Servidor</a>
</p>

<h1 align="center">
  <img alt="Home" src="https://res.cloudinary.com/denismelo/image/upload/v1608594392/github/task_3s_hr0nnl.gif" width="600" />
</h1>

## :clipboard: Sobre
Este repositório foi criado para ser utilizado como base para projetos node.js que necessitam rodar variadas tarefas de tempos em tempos.

## :gear: Tecnologias

Este projeto foi desenvolvido utilizando como base as seguintes tecnologias:

- [node.js](https://nodejs.org/)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://editorconfig.org/), [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/)

## :heavy_check_mark: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Npm**](https://www.npmjs.com/get-npm) instalado.


## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ https://github.com/denismelo/cron-server

  # Entrar no diretório:
  $ cd cron-server
```
## :sos: Exemplo
``` bash
  # Criar o arquivo Log.js na pasta /app/tasks/modules
  
  class Log {
    schedule() {
      return '*/3 * * * * *';
    }

    async handle() {
      console.log('Esta tarefa roda a cada 3 segundos. 🚀');
    }
  }

  module.exports = Log;
```

``` bash

  # No arquivo /app/tasks/modules/index.js inserir a linha:
  
  exports.Log = require('./Log');
```

## :pick: Iniciando servidor
```bash

  # Instalando as dependências:
  $ npm

  # Iniciando a aplicação:
  $ npm start
```
