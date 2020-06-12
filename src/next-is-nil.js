(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.isNil = function (inTarget) {
    return inTarget == null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isNil;
  }
})();
