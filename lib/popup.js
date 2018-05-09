module.exports = typeaheadPopup;

// we need these modules to run popup directive
require('./match');
require('./highlightFilter');

require('an').directive(typeaheadPopup);

var fs = require('fs');

function typeaheadPopup() {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: true,
    template: fs.readFileSync(__dirname + '/popup.html', 'utf8'),
    link: function(scope) {
      scope.isOpen = function() {
        return scope.matches.length > 0;
      };
    }
  };
}
