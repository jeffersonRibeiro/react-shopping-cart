import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #eee;
  }
`;

export const Stopper = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.6em;
  background-color: #1b1a20;
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
    background-color: #eabf00;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const InstallmentStyle = styled.div`
  color: #9c9b9b;
  font-size: 0.6em;
  margin-top: 2px;
`;

export const Price = styled.div`
  font-size: 1.5em;
  height: 60px;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const BuyButton = styled.button`
  background-color: #1b1a20;
  width: 100%;
  border: 0;
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;

  transition: background-color 0.2s;

  ${Container}:hover & {
    background-color: #eabf00;
  }
`;
