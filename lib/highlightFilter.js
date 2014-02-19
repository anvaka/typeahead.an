module.exports = highlightFilter;

require('an').filter(highlightFilter);

function highlightFilter() {
  return function(matchItem, query) {
    return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
  };
}

function escapeRegexp(queryToEscape) {
  return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
