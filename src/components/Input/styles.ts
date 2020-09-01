import styled from 'styled-components';

interface ContainerTypes {
  focused: boolean;
}

export const Container = styled.div<ContainerTypes>`
  width: 100%;
  background: #2c173a;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 32px;
  display: flex;
  border: 1px solid ${(props) => (props.focused ? '#f00' : 'transparent')};

  input {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: none;
    background: transparent;
    color: #fff;
    ::placeholder {
      color: #ffffff45;
    }
  }

  svg {
    margin: 5px;
    color: #f00;
  }
`;

export const Title = styled.span`
  color: #a0009d;
  font-weight: 700;
  display: block;
`;

export const Errostyle = styled.span`
  color: #f00;
  width: 100%;
  display: block;
  flex: 1;
  text-align: right;
  font-size: 12px;
  font-weight: 700;
`;

export const Headerinput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
`;
