import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useInput from 'hooks/useInput';
import { LoginButton, LoginFooter, LoginForm, LoginHeader, LoginContainer } from './styles';
import unknownLogo from 'images/unknown-logo.jpg';

const LogIn = () => {
  const [userId, onChangeUserId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(userId, password);
    },
    [userId, password],
  );

  return (
    <LoginContainer>
      <LoginForm onSubmit={onSubmit}>
        <LoginHeader>
          <img src={unknownLogo} />
          Unstargram
        </LoginHeader>
        <p>아이디</p>
        <div>
          <input type="text" id="userId" name="userId" placeholder="아이디" autoComplete="off" value={userId} onChange={onChangeUserId} />
        </div>
        <p>비밀번호</p>
        <input type="password" id="password" name="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
        <LoginButton>로그인</LoginButton>
        <LoginFooter>
          회원이 아닌가요?&nbsp;
          <Link to="/signup">회원가입</Link>
        </LoginFooter>
      </LoginForm>
    </LoginContainer>
  );
};

export default LogIn;
