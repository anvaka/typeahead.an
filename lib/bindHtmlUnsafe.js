module.exports = bindHtmlUnsafe;

require('an').directive(bindHtmlUnsafe);

function bindHtmlUnsafe() {
  return function (scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
}
