import { renderHook } from '@testing-library/react-hooks';
import { ICartProduct } from 'models';
import React, { ReactNode } from 'react';
import { ProductsProvider } from '..';
import useProducts from '../useProducts';

import { mockProducts } from 'utils/test/mocks';

const wrapper = ({ children }: { children: ReactNode }) => (
  <ProductsProvider>{children}</ProductsProvider>
);

describe('[contexts] - products-context', () => {
  describe('useProducts', () => {
    let isFetching: boolean;
    let products: ICartProduct[];
    let filters: string[];
    const originalUseContext = React.useContext;

    const setupMockUseContext = (options: { [key: string]: any } = {}) => {
      isFetching = false;
      products = options.initialProducts || [];
      filters = options.initialFilters || [];

      const mockSetIsFetching = jest.fn().mockImplementation((newState) => {
        isFetching = newState;
        return isFetching;
      });

      const mockSetProducts = jest
        .fn()
        .mockImplementation((fetchedProducts) => {
          products = fetchedProducts;
          return products;
        });
      const mockSetFilters = jest.fn().mockImplementation((activeFilters) => {
        filters = activeFilters;
        return filters;
      });

      const mockUseContext = jest.fn().mockImplementation(() => ({
        isFetching: false,
        setIsFetching: mockSetIsFetching,
        products: options.initialProducts,
        setProducts: mockSetProducts,
        filters: options.initialFilters,
        setFilters: mockSetFilters,
      }));
      React.useContext = mockUseContext;
    };

    const resetMocks = () => {
      React.useContext = originalUseContext;
    };

    describe('fetchProducts', () => {
      afterEach(() => {
        resetMocks();
      });

      test('should filter products', async () => {
        setupMockUseContext({ initialProducts: mockProducts });

        const { result } = renderHook(() => useProducts(), { wrapper });

        expect(products).toEqual(mockProducts);
        await result.current.filterProducts(['M']);
        expect(products).toEqual([
          {
            availableSizes: ['M', 'ML'],
            currencyFormat: '$',
            currencyId: 'USD',
            description: '',
            id: 13,
            installments: 5,
            isFreeShipping: true,
            price: 29.45,
            sku: 51498472915966370,
            style: 'Tule',
            title: 'Black Tule Oversized',
          },
        ]);
      });
    });
  });
});
