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
    template: fs.readFileSync(__dirname + '/popup.html'),
    link: function(scope, element, attrs) {
      scope.isOpen = function() {
        return scope.matches.length > 0;
      };
    }
  };
}
