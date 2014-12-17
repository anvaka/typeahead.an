module.exports = require('an').directive(typeaheadMatch);

require('./bindHtmlUnsafe'); // need bind-html-unsafe to use this

var fs = require('fs');
var defaultTemplate = fs.readFileSync(__dirname + '/match.html');

function typeaheadMatch($http, $templateCache, $compile, $parse) {
  return {
    restrict:'EA',
    scope: {
      index:'=',
      match:'=',
      query:'='
    },
    link:function (scope, element, attrs) {
      var tplUrl = $parse(attrs.templateUrl)(scope);
      if (tplUrl) {
        $http.get(tplUrl, {cache: $templateCache}).success(replaceElement);
      } else {
        replaceElement(defaultTemplate);
      }

      function replaceElement(tplContent) {
        element.replaceWith($compile(tplContent.trim())(scope));
      }
    }
  };
}
