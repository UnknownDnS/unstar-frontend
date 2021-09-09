import React, { useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useInput from 'hooks/useInput';
import { LoginButton, LoginFooter, LoginForm, LoginHeader, LoginContainer, ErrorMsg } from './styles';
import unknownLogo from 'images/unknown-logo.jpg';
import { API_LOGIN, API_GET_USER } from 'const/api';
import { post, get, getWithAuth } from 'utils/axiosUtil';
import { COOKIE_EXPIRED_TIME, PROJECT_NAME, COOKIE_NAME } from 'const';
import Cookies from 'universal-cookie';
import useSWR from 'swr';

const LogIn = () => {
  const { data: userInfo, error, revalidate, mutate } = useSWR(API_GET_USER, getWithAuth);
  const [userId, onChangeUserId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [loginError, setLoginError] = useState(false);
  const cookies = new Cookies();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const param = {
        userName: userId,
        userPw: password,
      };
      post(API_LOGIN, param).then((res) => {
        if (res.code === 200) {
          console.log('로그인 성공');
          cookies.set(COOKIE_NAME, res.response.token, { path: '/', expires: new Date(Date.now() + COOKIE_EXPIRED_TIME) });
          console.log(`${process.env.REACT_APP_FRONT_DOMAIN_URL}/board`);
          window.location.href = `${process.env.REACT_APP_FRONT_DOMAIN_URL}/board`;
        } else {
          console.log('로그인 실패');
          setLoginError(true);
        }
      });
    },
    [userId, password],
  );

  if (userInfo) {
    return <Redirect to="/board" />;
  }

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
        <p>비밀번호</p>
        <input type="password" id="password" name="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
        {loginError && <ErrorMsg>아이디 또는 비밀번호가 틀렸습니다.</ErrorMsg>}
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
