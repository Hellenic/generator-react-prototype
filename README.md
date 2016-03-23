# generator-react-prototype

> [Yeoman](http://yeoman.io) generator for quick prototypes, demos and PoCs. Comes with React, React-Router, Gulp, ES6, Browserify, etc.

This project should help you get started quickly when building
demos, prototypes or quick proof of concept work around area of
industrial internet. When you have plethora of APIs and realtime data, you can
create quick, nice-looking demo around that by using this generator.

It contains only the very necessary: Tools for creating quick and
nice looking UI with graphs and data. APIs to load data from different sources
and visualize it with Highcharts. Nothing extra; No tests, no linting whatsoever.

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

* React, React-Router
* Axios, Highcharts, Moment
* Gulp, Watchify, Browserify, Babelify
* Less
* Tools for using some APIs (Cumulocity, Trelab...)
* Graph components and some icons

Optional:

* Semantic UI

## License

MIT
