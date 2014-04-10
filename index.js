var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.dirname(require.resolve('chai-things')) + '/lib/chai-things.js'));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-things': ['factory', framework]};
