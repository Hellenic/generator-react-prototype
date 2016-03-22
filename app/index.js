'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore.string');

var ReactPrototypeGenerator = yeoman.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'You\'re using the fantastic #hackteam\'s' + chalk.purple('react-prototype') + ' generator.'
    ));

    var prompts = [{
      type: 'input',
      name: 'project',
      message: 'What is the project\'s name?',
      default: this.appname
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'Semantic UI',
        value: 'includeSemantic',
        checked: true
      }]
    }];

    this.prompt(prompts, function (answers) {
      var features = answers.features || [];

      this.projectName = answers.project;

      function hasFeature(feat) { return features.indexOf(feat) !== -1; }

      this.includeSemantic = hasFeature('includeSemantic');

      done();
    }.bind(this));
  },

  getContext: function() {
    return {
      _: _,
      projectName: this.projectName,
      semantic: this.includeSemantic
    };
  },

  writing: function() {
    this._copyTpl('_package.json', 'package.json');
    this._copyTpl('_gulpfile.js', 'gulpfile.js');
    this._copy('gitignore', '.gitignore');
    this._copy('editorconfig', '.editorconfig');

    this._copyTpl('app/index.html', 'app/index.html');
    this._copy('app/favicon.ico', 'app/favicon.ico');

    this._copyTpl('app/main.less', 'app/styles/main.less');
    this._copy('app/app.js', 'app/scripts/app.js');
    this._copyTpl('app/home.js', 'app/scripts/components/home.js');
  },

  _copy: function(from, to) {
    this.fs.copy(this.templatePath(from), this.destinationPath(to));
  },

  _copyTpl: function(from, to) {
    this.fs.copyTpl(this.templatePath(from), this.destinationPath(to), this.getContext());
  },

  install: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});

module.exports = ReactPrototypeGenerator;
