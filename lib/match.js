module.exports = require('an').directive(typeaheadMatch);

require('./bindHtmlUnsafe'); // need bind-html-unsafe to use this

var fs = require('fs');

function typeaheadMatch() {
  return {
    restrict:'EA',
    scope: {
      index:'=',
      match:'=',
      query:'='
    },
    replace: true,
    template: fs.readFileSync(__dirname + '/match.html')
  };
}
