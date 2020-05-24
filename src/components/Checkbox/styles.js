import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  width: 35px;
  height: 35px;
  font-size: 0.8em;
  margin-bottom: 8px;
  margin-right: 8px;
  border-radius: 50%;
  line-height: 35px;
  text-align: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  font-size: 0.8em;
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
  color: #1b1a20;
  background-color: #ececec;

  border: 1px solid transparent;

  ${Label} > ${Input}:hover ~ & {
    border: 1px solid #1b1a20;
  }

  ${Input}:checked ~ & {
    background-color: #1b1a20;
    color: #ececec;
  }

  ${Input}:checked ~ &:after {
    display: block;
  }
`;
