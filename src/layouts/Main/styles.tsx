import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainBody = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  height: calc(100% - 62px);
`;
export const MainWrapper = styled.div`
  width: 600px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid gray;
`;

export const ChatWrapper = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
`;

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #a9a8a8;
  display: flex;
  z-index: 200;

  & img {
    width: 64px;
    height: 64px;
  }
`;

export const ProjectLogo = styled.header`
  margin: 0 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 2rem;
  display: flex;

  & img {
    width: 40px;
    height: 40px;
  }
`;

export const NavIconsWrapper = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    width: 32px;
    height: 32px;
    margin-left: 15px;
  }

  & a:visited {
    color: black;
  }
  & a:hover {
    color: #393939;
  }
`;
