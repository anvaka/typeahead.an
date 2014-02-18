var appName = 'demoapp'; // this should be fetched from r-app; Hardcoding for tests

var mainModule = angular.module(appName, []); // should this be exported to let programmatic access?

/**
 * This directive allows to specify custom CommonJS module to be a controller
 * of an element.
 * @example
   <doc:example>
    <file name="index.html">
      <body r-controller='./myController'>
        Hello {{name}}
      </body>
    </file>

    <file name="myController.js">
      module.exports = function ($scope) {
        $scope.name = 'CommonJS';
      }
    </file>
   </doc:example>
 */
mainModule.directive('rController', function ($compile, $controller) {
  return {
    restrict: 'A',
    priority: 501,
    link: function (scope, element, attrs) {
      var requireName = attrs.rController;
      var Type =  require(requireName);
      // mimicing what angular is doing for controllers:
      var locals = {
        $scope: element.scope(),
        $element: element,
        $attrs: attrs
      };
      $controller(Type, locals);
    }
  };
});

angular.bootstrap(document, [appName]);
