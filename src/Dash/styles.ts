import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(-45deg, #080f28, #650161);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Formcontent = styled.div`
  background: rgb(0 0 0 /60%);
  border-radius: 5px;
  margin: 90px 30px;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #f00;
    margin-bottom: 32px;
  }

  form {
    width: 100%;
  }
`;

export const Buttonform = styled.button`
  width: 100%;
  padding: 16px;
  color: #fff;
  background: #f00;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  margin-top: 32px;
`;
