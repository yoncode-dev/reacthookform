import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;
  label {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-weight: 700;
    user-select: none;
    color: #a0009d;

    input {
      position: absolute;
      opacity: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 18px;
      width: 18px;
      border-radius: 3px;
      background: #2c173a;
    }

    &:hover input ~ .checkmark {
      background: #f00;
    }

    input:checked ~ .checkmark {
      background: #f00;
    }

    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    input:checked ~ .checkmark:after {
      display: block;
    }

    .checkmark:after {
      left: 5px;
      top: 2px;
      width: 5px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;
