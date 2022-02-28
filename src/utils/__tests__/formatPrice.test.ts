import formatPrice from '../formatPrice';

describe('[utils] - formatPrice', () => {
  test('should replace price dot decimal with comma when currencyId is BRL', () => {
    expect(formatPrice(10.9, 'BRL')).toBe('10,90');
  });

  test('should return price as string as default when no currencyId match', () => {
    expect(formatPrice(10.9, 'USD')).toBe('10.90');
    expect(typeof formatPrice(10.9, 'USD')).toBe('string');
  });
});
