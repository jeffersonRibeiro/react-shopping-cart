import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ICartProduct } from 'models';
import React, { ReactNode } from 'react';
import { CartProvider } from '.';
import useCartProducts from './useCartProducts';
import * as useCartTotalModule from './useCartTotal';

import { mockCartProducts } from 'utils/test/mocks';

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe('[contexts] - cart-context', () => {
  const setup = () => {
    return render(<CartProvider />);
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('useProducts', () => {
    const originalUseContext = React.useContext;
    let products: ICartProduct[] = [];

    const setupMockUseContext = (initialProducts: ICartProduct[] = []) => {
      const mockSetProducts = jest
        .fn()
        .mockImplementation((updatedProducts) => {
          products = [...products, ...updatedProducts];
          return products;
        });
      const mockUseContext = jest.fn().mockImplementation(() => ({
        products: initialProducts,
        setProducts: mockSetProducts,
      }));
      React.useContext = mockUseContext;
    };

    const resetMocks = () => {
      products = [];
      React.useContext = originalUseContext;
    };

    afterEach(() => {
      resetMocks();
    });

    test('should addProduct and update cartTotal', () => {
      setupMockUseContext();
      const mockUpdateCartTotal = jest.fn();
      useCartTotalModule.default = jest.fn().mockImplementation(() => ({
        total: {},
        updateCartTotal: mockUpdateCartTotal,
      }));

      const mockCartProduct = mockCartProducts[0];
      const { result } = renderHook(() => useCartProducts(), { wrapper });

      expect(products).toHaveLength(0);
      result.current.addProduct(mockCartProduct);
      expect(products).toHaveLength(1);
      expect(products).toEqual([mockCartProduct]);
      expect(mockUpdateCartTotal).toHaveBeenNthCalledWith(1, products);
    });

    test('should update product quatity in cart', () => {
      const mockCartProduct = mockCartProducts[0];
      setupMockUseContext([mockCartProduct]);

      const mockUpdateCartTotal = jest.fn();
      useCartTotalModule.default = jest.fn().mockImplementation(() => ({
        total: {},
        updateCartTotal: mockUpdateCartTotal,
      }));

      const { result } = renderHook(() => useCartProducts(), { wrapper });

      result.current.addProduct(mockCartProduct);
      expect(products[0].quantity).toBe(2);
    });
  });
});
