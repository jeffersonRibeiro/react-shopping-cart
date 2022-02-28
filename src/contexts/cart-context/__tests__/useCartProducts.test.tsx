import { renderHook } from '@testing-library/react-hooks';
import { ICartProduct } from 'models';
import React, { ReactNode } from 'react';
import { CartProvider } from '..';
import useCartProducts from '../useCartProducts';
import * as useCartTotalModule from '../useCartTotal';

import { mockCartProducts } from 'utils/test/mocks';

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe('[contexts] - cart-context', () => {
  describe('useProducts', () => {
    let products: ICartProduct[];
    const originalUseContext = React.useContext;

    const setupMockUseContext = (initialProducts: ICartProduct[] = []) => {
      products = initialProducts;
      const mockSetProducts = jest
        .fn()
        .mockImplementation((updatedProducts) => {
          products = [...updatedProducts];
          return products;
        });
      const mockUseContext = jest.fn().mockImplementation(() => ({
        products: initialProducts,
        setProducts: mockSetProducts,
      }));
      React.useContext = mockUseContext;
    };

    const resetMocks = () => {
      React.useContext = originalUseContext;
    };

    describe('addProducts', () => {
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

      test('should update product quatity in cart when product is already in cart', () => {
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

    describe('removeProducts', () => {
      afterEach(() => {
        resetMocks();
      });

      test('should remove product from cart', () => {
        const mockCartProduct = mockCartProducts[0];
        setupMockUseContext([mockCartProduct]);

        const mockUpdateCartTotal = jest.fn();
        useCartTotalModule.default = jest.fn().mockImplementation(() => ({
          total: {},
          updateCartTotal: mockUpdateCartTotal,
        }));

        const { result } = renderHook(() => useCartProducts(), { wrapper });

        expect(products).toHaveLength(1);
        result.current.removeProduct(mockCartProduct);
        expect(products).toHaveLength(0);
        expect(mockUpdateCartTotal).toHaveBeenNthCalledWith(1, products);
      });

      test('should not remove product from cart when product is new', () => {
        setupMockUseContext([mockCartProducts[0]]);

        const mockUpdateCartTotal = jest.fn();
        useCartTotalModule.default = jest.fn().mockImplementation(() => ({
          total: {},
          updateCartTotal: mockUpdateCartTotal,
        }));

        const { result } = renderHook(() => useCartProducts(), { wrapper });

        expect(products).toHaveLength(1);
        result.current.removeProduct(mockCartProducts[1]);
        expect(products).toHaveLength(1);
        expect(mockUpdateCartTotal).toHaveBeenNthCalledWith(1, products);
      });

      test('should increase product quantity', () => {
        const mockCartProduct = mockCartProducts[0];
        setupMockUseContext([mockCartProduct]);

        const mockUpdateCartTotal = jest.fn();
        useCartTotalModule.default = jest.fn().mockImplementation(() => ({
          total: {},
          updateCartTotal: mockUpdateCartTotal,
        }));

        const { result } = renderHook(() => useCartProducts(), { wrapper });

        expect(products[0].quantity).toBe(1);
        result.current.increaseProductQuantity(mockCartProduct);
        expect(products[0].quantity).toBe(2);
        expect(mockUpdateCartTotal).toHaveBeenNthCalledWith(1, products);
      });

      test('should decrease product quantity', () => {
        const mockCartProduct = mockCartProducts[0];
        setupMockUseContext([mockCartProduct]);

        const mockUpdateCartTotal = jest.fn();
        useCartTotalModule.default = jest.fn().mockImplementation(() => ({
          total: {},
          updateCartTotal: mockUpdateCartTotal,
        }));

        const { result } = renderHook(() => useCartProducts(), { wrapper });

        expect(products[0].quantity).toBe(1);
        result.current.decreaseProductQuantity(mockCartProduct);
        expect(products[0].quantity).toBe(0);
        expect(mockUpdateCartTotal).toHaveBeenNthCalledWith(1, products);
      });
    });
  });
});
