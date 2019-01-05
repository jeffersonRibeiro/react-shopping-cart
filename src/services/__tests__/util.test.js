import util from '../util';

describe('util', () => {
  describe('formatPrice()', () => {
    it('should replace dot by comma when currency is BRL', () => {
      expect(util.formatPrice(10, 'BRL')).toEqual('10,00');
    });

    it('should by default return decimal separated by dot', () => {
      expect(util.formatPrice(10)).toEqual('10.00');
    });
  });
});
