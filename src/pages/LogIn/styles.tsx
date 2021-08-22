import styled from '@emotion/styled';
import { INPUT_BORDER } from 'common/colors';
import { Button } from 'common/styles';
import { GRAY } from 'common/colors';

export const LoginContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  position: relative;
  top: 10%;
  background-color: #fff;
`;

export const LoginHeader = styled.header`
  margin: 30px 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 2.5rem;
  display: flex;

  & img {
    width: 64px;
    height: 64px;
  }
`;

export const LoginForm = styled.form`
  border: 1px solid #a9a8a8;
  padding: 15px;

  & input {
    border-radius: 4px;
    border: 1px solid ${INPUT_BORDER};
    box-sizing: border-box;
    width: 100%;
    color: black;
    background-color: white;
    height: 44px;
    font-size: 18px;
    margin: 15px 0;
    padding: 10px;

    &:focus {
      border: 1px solid #a09f9f;
      box-shadow: 0 0 10px #afbbc4;
    }
  }
`;

export const LoginButton = styled(Button)`
  margin-bottom: 30px;
  background-color: ${GRAY[7]};

  &:hover {
    background-color: ${GRAY[5]};
  }
`;

export const LoginFooter = styled.div`
  margin: 1rem 0;
  text-align: center;
  font-size: 1rem;

  & > a {
    font-weight: bold;
    color: #5f5d5d;
    text-decoration: none;

    &:visited {
      color: #5f5d5d;
    }

    &:hover {
      color: #737171;
    }
  }
`;

export const ErrorMsg = styled.div`
  color: red;
  margin: 5px 0;
  font-size: 0.8rem;
`;
