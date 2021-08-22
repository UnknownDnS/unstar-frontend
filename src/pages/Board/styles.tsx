import styled from '@emotion/styled';
import { Button } from 'common/styles';
import { PRIMARY } from 'common/colors';

export const BoardInputContainer = styled.div`
  height: 60px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
`;

export const BoardInputModal = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  background-color: #e6e8e9;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  padding: 15px;

  & > textarea {
    width: 100%;
    min-height: 60px;
  }
`;

export const ModalHeader = styled.div`
  height: 50px;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
`;
