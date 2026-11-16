import styled from 'styled-components/macro';

/*
 * Sits next to the cart button (top right). The z-index is above the cart
 * panel so the toggle stays reachable while the cart is open.
 */
export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.colors.onPrimary};
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  right: 50px;
  cursor: pointer;
  z-index: 100;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: -3px;
  }

  &:hover {
    filter: brightness(85%);
  }
`;
