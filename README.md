# France Relance - Aides Territoires - Ministère de la Transformation


### Structure du projet


| Location             |  Content                                   |
|----------------------|--------------------------------------------|
| `/src`               | VueJs App                                  |
| `/src/main.js`       | JS Entry Point                             |
| `/public/index.html` | Html Application Entry Point (`/`)         |
| `/public/static`     | Static Assets                              |
| `/dist/`             | Bundled Assets Output (`yarn build`)       |


## Environnement de développement


- [X] Yarn - [instructions](https://yarnpkg.com/en/docs/install)
- [X] Vue CLI 3 - [instructions](https://cli.vuejs.org/guide/installation.html)


## Installation locale

```
$ git clone https://github.com/MTES-MCT/relance-transformation/
$ cd relance-transformation
$ yarn install
```

## Lancer le serveur de développement

```
$ yarn serve
```

L'application tourne alors sur [`localhost:8080`](http://localhost:8080/)


## Compiler la version de prod

Dans ce cas, les pages ne sont pas rechargées automatiquement quand on fait des
modifications.

```
$ yarn build
$ node server.js
```

Les fichiers générés sont alors enregistrés dans le répertoire `/dist`.

L'application tourne alors sur [`localhost:3000`](http://localhost:3000/)
