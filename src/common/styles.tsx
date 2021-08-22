import styled from '@emotion/styled';
import { GRAY, PRIMARY, ERROR, WARNING, INFO, SUCCESS } from './colors';

///////////////////////////
//  buttons
///////////////////////////
export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: ${GRAY[7]};
  border: none;
  font-size: 1rem;
  font-weight: 500;
  height: 44px;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: ${GRAY[6]};
  }
`;

export const PrimaryBtn = styled(Button)`
  background-color: ${PRIMARY.main};
  &:hover {
    background-color: ${PRIMARY.light};
  }
`;

export const ErrorBtn = styled(Button)`
  background-color: ${ERROR.main};
  &:hover {
    background-color: ${ERROR.light};
  }
`;

export const WarningBtn = styled(Button)`
  background-color: ${WARNING.main};
  &:hover {
    background-color: ${WARNING.light};
  }
`;

export const SuccessBtn = styled(Button)`
  background-color: ${SUCCESS.main};
  &:hover {
    background-color: ${SUCCESS.light};
  }
`;

export const InfoBtn = styled(Button)`
  background-color: ${INFO.main};
  &:hover {
    background-color: ${INFO.light};
  }
`;

export const ModalForm = styled.form`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
  color: black;
  background-color: white;
  height: 44px;
  font-size: 18px;
  padding: 10px;
`;
