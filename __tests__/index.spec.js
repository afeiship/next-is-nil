(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.isNil is undefined/null sholud return true', function () {
      expect(nx.isNil(undefined)).toBe(true);
      expect(nx.isNil(null)).toBe(true);
      expect(nx.isNil('')).toBe(false);
      expect(nx.isNil(false)).toBe(false);
      expect(nx.isNil(true)).toBe(false);
      expect(nx.isNil([])).toBe(false);
      expect(nx.isNil({})).toBe(false);
      expect(nx.isNil(NaN)).toBe(false);
    });

    test('nx.isNil not undefined/null sholud return false', () => {
      expect(!nx.isNil(undefined)).toBe(false);
      expect(!nx.isNil(null)).toBe(false);
    });
  });
})();
