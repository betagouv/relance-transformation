# France Relance - Aides Territoires - Ministère de la Transformation


### Structure du projet


| Location             |  Content                                   |
|----------------------|--------------------------------------------|
| `/backend`           | Django Backend                             |
| `/src`               | VueJs App                                  |
| `/src/main.js`       | JS Entry Point                             |
| `/public/index.html` | Html Application Entry Point (`/`)         |
| `/public/static`     | Static Assets                              |
| `/dist/`             | Bundled Assets Output (`yarn build`)       |


## Environnement de développement


- [X] Yarn - [instructions](https://yarnpkg.com/en/docs/install)
- [X] Vue CLI 3 - [instructions](https://cli.vuejs.org/guide/installation.html)
- [X] Python 3 - [instructions](https://wiki.python.org/moin/BeginnersGuide)
- [X] Pipenv - [instructions](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv)


## Installation locale

```
$ git clone https://github.com/MTES-MCT/relance-transformation/
$ cd relance-transformation
```


```
$ yarn install
$ pipenv install --dev && pipenv shell
$ python manage.py migrate
```

## Lancer le serveur de développment

```
$ python manage.py runserver
```

En parallèle dans une autre fenêtre :

```
$ yarn serve
```

- Application Vue : [`localhost:8080`](http://localhost:8080/)
- Application Django et fichiers `statics` : [`localhost:8000`](http://localhost:8000/).

On est donc dans un mode "dual dev server" avec :
- Le serveur de Webpack et son "hot module replacement".
- Le backend Django sur le port 8000.
- La config proxy qui permet de "router" les requêtes vers le backend Django est dans [`vue.config.js`](/vue.config.js) 

Pour une utilisation en mode "single dev server", on peut lancer le serveur de développement Django's
sur le port `:8000`, et il faudra faire le build de l'app Vue app avant.

Dans ce cas, les pages ne son pas rechargé automatiquement quand on fait des modifications.

```
$ yarn build
$ python manage.py runserver
```
