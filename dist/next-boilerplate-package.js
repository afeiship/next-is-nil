/*!
 * name: @feizheng/next-is-nil
 * description: Is null/undefined for next.
 * url: https://github.com/afeiship/next-is-nil
 * version: 1.0.0
 * date: 2020-04-15 14:51:22
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.isNil = function() {
    //code goes here.
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isNil;
  }
})();

//# sourceMappingURL=next-is-nil.js.map
