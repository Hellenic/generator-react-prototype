# generator-react-prototype

> [Yeoman](http://yeoman.io) generator for quick prototypes, demos and PoCs. Comes with React, React-Router, Gulp, ES6, Browserify, etc.

## Getting Started

```
$ npm install -g yo                               # Install Yeoman (if you don't have it yet)...
$ npm install -g generator-react-prototype        # ...then install this generator...
$ yo react-prototype                              # ...and run it.
```

You can run the last command with `--skip-install` if you wish to skip
the installation of `npm` components. Now, when everything is ready, you can run these
tasks to help you develop your React components.

```
$ yo react-prototype:component [ComponentName]    # Generates a react component with the given name
$ gulp watch                                      # Starts up the local server and auto-reloads the browser
$ gulp build:production                           # Minifies your app, ready for production
$ gulp serve:production                           # Preview the built production files
```

## What's inside?

Bundled:

* React
* React-Router
* Gulp
* Browserify
* Watchify
* Babelify
* Less

Optional:

* Semantic UI

## License

MIT
