import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 5%;

  transition: background-color 0.2s, opacity 0.2s;

  &::before {
    content: '';
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 5%;
  }
`;

export const Details = styled.div`
  width: 57%;
  display: inline-block;
  vertical-align: middle;
`;

export const Title = styled.p`
  color: #ececec;
  margin: 0;
`;

export const Desc = styled.p`
  color: #5b5a5e;
  margin: 0;
`;

export const Price = styled.div`
  display: inline-block;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: right;
  width: 25%;
`;

export const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  top: 15px;
  right: 5%;
  border-radius: 50%;
  position: absolute;
  background-size: auto 100%;
  background-image: url(${require('static/delete-icon.png')});
  background-repeat: no-repeat;
  z-index: 2;
  cursor: pointer;
  border: 0;
  background-color: transparent;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    background-position-x: -17px;
  }
`;

export const ChangeQuantity = styled.button`
  color: #b7b7b7;
  border: 0;
  background-color: #000;
  width: 25px;
  height: 25px;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.2;
  }
`;

export const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 15%;
  height: auto;
  margin-right: 3%;
`;
