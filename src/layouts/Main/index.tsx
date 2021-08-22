import loadable from '@loadable/component';
import React, { useCallback } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ProjectLogo, NavIconsWrapper, MainBody, MainContainer, NavBar, MainWrapper } from './styles';
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import unknownLogo from 'images/unknown-logo.jpg';
import Scrollbars from 'react-custom-scrollbars';
import { PROJECT_NAME } from 'const';

const Board = loadable(() => import('pages/Board'));
const Profile = loadable(() => import('pages/Profile'));

const Main = () => {
  return (
    <MainContainer>
      <NavBar>
        <ProjectLogo>
          <img src={unknownLogo} />
          {PROJECT_NAME}
        </ProjectLogo>
        <NavIconsWrapper>
          <Link to={'/board'}>
            <FaHome />
          </Link>
          <Link to={'/profile'}>
            <CgProfile />
          </Link>
        </NavIconsWrapper>
      </NavBar>
      <MainBody>
        <MainWrapper>
          <Scrollbars autoHide>
            <Switch>
              <Route path="/board" component={Board} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Scrollbars>
        </MainWrapper>
      </MainBody>
    </MainContainer>
  );
};

export default Main;
