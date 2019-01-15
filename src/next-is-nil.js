(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.isNil = function(inObj) {
    // no:eqeqeq
    return inObj == null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isNil;
  }
})();
