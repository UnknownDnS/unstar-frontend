import styled from '@emotion/styled';
import { Input } from 'common/styles';

export const BoardChildContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  min-height: 200px;
  padding: 10px;
  margin: 20px;
  & + & {
    margin-top: 20px;
  }
`;

export const BoardChildHeader = styled.div`
  height: 40px;
`;

export const BoardChildBody = styled.div`
  margin: 5px 0;
  padding: 5px 0;
  min-height: 130px;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

export const BoardChildFooter = styled.div`
  display: flex;
  margin-top: 5px;

  & > p {
    margin: 0 10px 0 auto;
  }

  & button {
    width: 80px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

export const CommentsWrapper = styled.div`
  & form {
    display: flex;
  }

  & input {
    margin: 15px 10px 0 0;
  }
`;
