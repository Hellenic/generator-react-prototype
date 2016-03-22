'use strict';

var yeoman = require('yeoman-generator');

var ComponentGenerator = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    this.argument('componentName', { type: String, defaults: 'Component' });
    this.pkg = require('../package.json');
  },

  writing: function() {
    var componentFileName = this._.slugify(this.componentName);

    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath('app/scripts/components/' + componentFileName + '.js'),
      this
    );
  }
});

module.exports = ComponentGenerator;
