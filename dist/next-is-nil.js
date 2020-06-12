/*!
 * name: @feizheng/next-is-nil
 * description: Is null/undefined for next.
 * homepage: https://github.com/afeiship/next-is-nil
 * version: 1.0.0
 * date: 2020-06-12T00:51:52.083Z
 * license: MIT
 */

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

//# sourceMappingURL=next-is-nil.js.map
