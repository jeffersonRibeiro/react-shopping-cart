import { renderHook } from '@testing-library/react-hooks';
import React, { ReactNode } from 'react';
import { CartProvider } from '..';
import useCart from '../useCart';

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe('[contexts] - cart-context', () => {
  describe('useCart', () => {
    let isOpen: boolean;
    const originalUseContext = React.useContext;

    const setupMockUseContext = (initialIsOpen: boolean = false) => {
      isOpen = initialIsOpen;
      const mockIsOpen = jest.fn().mockImplementation((updatedIsOpen) => {
        isOpen = updatedIsOpen;
        return isOpen;
      });
      const mockUseContext = jest.fn().mockImplementation(() => ({
        isOPen: initialIsOpen,
        setIsOpen: mockIsOpen,
      }));
      React.useContext = mockUseContext;
    };

    const resetMocks = () => {
      React.useContext = originalUseContext;
    };

    describe('openCart', () => {
      afterEach(() => {
        resetMocks();
      });

      test('should open cart', () => {
        setupMockUseContext();
        const { result } = renderHook(() => useCart(), { wrapper });

        expect(isOpen).toBe(false);
        result.current.openCart();
        expect(isOpen).toBe(true);
      });

      test('should close cart', () => {
        setupMockUseContext(true);
        const { result } = renderHook(() => useCart(), { wrapper });

        expect(isOpen).toBe(true);
        result.current.closeCart();
        expect(isOpen).toBe(false);
      });
    });
  });
});
