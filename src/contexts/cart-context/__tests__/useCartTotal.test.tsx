import { renderHook } from '@testing-library/react-hooks';
import { ICartTotal } from 'models';
import React, { ReactNode } from 'react';
import { CartProvider } from '..';
import useCartTotal from '../useCartTotal';

import { mockCartTotal, mockCartProducts } from 'utils/test/mocks';

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe('[contexts] - cart-context', () => {
  describe('useCartTotal', () => {
    let total: ICartTotal | {};
    const originalUseContext = React.useContext;

    const setupMockUseContext = (initialTotal: ICartTotal | {} = {}) => {
      total = initialTotal;
      const mockSetTotal = jest.fn().mockImplementation((updatedTotal) => {
        total = updatedTotal;
        return total;
      });
      const mockUseContext = jest.fn().mockImplementation(() => ({
        total: initialTotal,
        setTotal: mockSetTotal,
      }));
      React.useContext = mockUseContext;
    };

    const resetMocks = () => {
      React.useContext = originalUseContext;
    };

    describe('updateCartTotal', () => {
      afterEach(() => {
        resetMocks();
      });

      test('should update cart total', () => {
        setupMockUseContext(mockCartTotal);
        const { result } = renderHook(() => useCartTotal(), { wrapper });

        expect(total).toEqual({
          productQuantity: 1,
          installments: 1,
          totalPrice: 10.9,
          currencyId: 'USD',
          currencyFormat: '$',
        });

        result.current.updateCartTotal(mockCartProducts);

        expect(total).toEqual({
          productQuantity: 3,
          installments: 12,
          totalPrice: 50.05,
          currencyId: 'USD',
          currencyFormat: '$',
        });
      });
    });
  });
});
