/*!
 * name: @jswork/next-is-nil
 * description: Is null/undefined for next.
 * homepage: https://github.com/afeiship/next-is-nil
 * version: 1.0.0
 * date: 2020-11-21 09:53:28
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.isNil = function (inTarget) {
    return inTarget == null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isNil;
  }
})();
