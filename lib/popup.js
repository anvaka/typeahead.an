module.exports = typeaheadPopup;

// we need these modules to run popup directive
require('./match');
require('./highlightFilter');

require('an').directive(typeaheadPopup);

var fs = require('fs');

function typeaheadPopup() {
  return {
    restrict:'EA',
    scope:{
      matches:'=',
      query:'=',
      active:'=',
      position:'=',
      select:'&'
    },
    replace:true,
    template: fs.readFileSync(__dirname + '/popup.html'),
    link:function (scope, element, attrs) {
      scope.templateUrl = attrs.templateUrl;

      scope.isOpen = function () {
        return scope.matches.length > 0;
      };

      scope.isActive = function (matchIdx) {
        return scope.active == matchIdx;
      };

      scope.selectActive = function (matchIdx) {
        scope.active = matchIdx;
      };

      scope.selectMatch = function (activeIdx) {
        scope.select({activeIdx:activeIdx});
      };
    }
  };
}
