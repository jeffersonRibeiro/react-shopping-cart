import styled from 'styled-components';

export const BuyButton = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;

  transition: background-color 0.2s;
`;

export const Container = styled.div`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #eee;

    ${BuyButton} {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Stopper = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.6em;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: default;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;

  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const Price = styled.div`
  height: 60px;

  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  b {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;

export const Installment = styled.p`
  color: #9c9b9b;
`;
