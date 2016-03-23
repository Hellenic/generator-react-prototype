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
      'You\'re using the #hackteam\'s fantastic ' + chalk.bgWhite(chalk.magenta('react-prototype')) + ' generator.'
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
    // Project files
    this._copyTpl('_package.json', 'package.json');
    this._copyTpl('_gulpfile.js', 'gulpfile.js');
    this._copy('gitignore', '.gitignore');
    this._copy('editorconfig', '.editorconfig');
    this._copyTpl('README.md', 'README.md');

    // App files
    this._copyTpl('app/index.html', 'app/index.html');
    this._copy('app/app.js', 'app/app.js');
    this._copy('app/favicon.ico', 'app/favicon.ico');

    // Rest of the folders
    this._copy('app/api/', 'app/api/');
    this._copy('app/components/', 'app/components/');
    this._copy('app/graphs/', 'app/graphs/');
    this._copy('app/images/', 'app/images/');
    this._copy('app/styles/', 'app/styles/');
    this._copy('app/utils/', 'app/utils/');
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
