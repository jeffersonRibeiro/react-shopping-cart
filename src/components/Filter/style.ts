import styled from 'styled-components/macro';

import CB from 'commons/Checkbox';

export const Container = styled.div``;

export const Checkbox = styled(CB)`
  display: inline-block;
  margin-bottom: 10px;

  /* Customize the label (the container) */
  label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 35px;
    height: 35px;
    font-size: 0.8em;
    margin-bottom: 8px;
    margin-right: 8px;
    border-radius: 50%;
    line-height: 35px;
    text-align: center;

    /* On mouse-over, add a border with the primary color */
    &:hover input ~ .checkmark {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    input:focus-visible ~ .checkmark {
      box-sizing: border-box;
      line-height: 30px;
      border: 3px solid ${({ theme }) => theme.colors.secondary};
    }

    /* When the checkbox is checked, add the primary color to background */
    & input:checked ~ .checkmark {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ececec;
    }

    /* Show the checkmark when checked */
    & input:checked ~ .checkmark:after {
      display: block;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      width: 35px;
      height: 35px;
      font-size: 0.8em;
      border-radius: 50%;
      box-sizing: border-box;
      line-height: 35px;
      text-align: center;
      color: ${({ theme }) => theme.colors.primary};
      background-color: #ececec;

      border: 1px solid transparent;
    }
  }
`;

export const Title = styled.h4`
  margin-top: 2px;
  margin-bottom: 20px;
`;
