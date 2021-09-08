import React, { useCallback, useState } from 'react';
import { LoginButton, ErrorMsg, LoginFooter, LoginForm, LoginHeader, LoginContainer } from 'pages/LogIn/styles';
import unknownLogo from '../../images/unknown-logo.jpg';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { PROJECT_NAME } from 'const';
import { post } from 'utils/axiosUtil';
import { API_SIGNUP } from 'const/api';

const SignUp = () => {
  const [userId, onChangeUserId] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [passwordError, setPasswordError] = useState(false);
  const [userIdError, setUserIdError] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(userId, name, password, passwordCheck);
      const param = {
        userName: userId,
        userPw: password,
        nickName: name,
      };
      post(API_SIGNUP, param).then((res) => {
        if (res.code === 200) {
          window.location.href = 'http://localhost:3000/login';
        } else {
          console.log('회원가입 실패');
        }
      });
    },
    [userId, name, password, passwordCheck],
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setPasswordError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  return (
    <LoginContainer>
      <LoginForm onSubmit={onSubmit}>
        <LoginHeader>
          <img src={unknownLogo} />
          {PROJECT_NAME}
        </LoginHeader>
        <p>아이디</p>
        <div>
          <input type="text" id="userId" name="userId" placeholder="아이디" autoComplete="off" value={userId} onChange={onChangeUserId} />
        </div>
        <p>이름</p>
        <div>
          <input type="text" id="name" name="name" placeholder="이름" autoComplete="off" value={name} onChange={onChangeName} />
        </div>
        <p>비밀번호</p>
        <input type="password" id="password" name="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
        <p>비밀번호 확인</p>
        <input
          type="password"
          id="passwordCheck"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        {passwordError && <ErrorMsg>비밀번호가 일치하지 않습니다</ErrorMsg>}
        {userIdError && <ErrorMsg>이미 존재하는 아이디 입니다</ErrorMsg>}
        <LoginButton>회원가입</LoginButton>
        <LoginFooter>
          이미 회원이신가요?&nbsp;
          <Link to="/login">로그인</Link>
        </LoginFooter>
      </LoginForm>
    </LoginContainer>
  );
};

export default SignUp;
