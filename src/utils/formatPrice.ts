const formatPrice = (number: number, currency: string): string => {
  switch (currency) {
    case 'BRL':
      return number.toFixed(2).replace('.', ',');
    default:
      return number.toFixed(2);
  }
};

export default formatPrice;
