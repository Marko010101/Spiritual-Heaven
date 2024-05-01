import { Outlet } from "react-router-dom";

// import Uploader from ".././data/Uploader.jsx";

import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import styled, { css } from "styled-components";
import { useMenuInfo } from "../context/MenuContext.jsx";
import HamburgerMenuIcon from "./HamburgerMenuIcon.jsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  overflow-x: ${(props) => (props.isMenuOpen ? "hidden" : "auto")};

  @media (max-width: 1200px) {
    ${(props) =>
      props.isMenuOpen === false &&
      css`
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
      `}
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
  transition: all 0.2s;

  @media (max-width: 1200px) {
    padding: 3rem 3.5rem 4rem;
    
    ${(props) =>
      props.isMenuOpen &&
      css`
        overflow-x: hidden;
        overflow-y: hidden;
        filter: brightness(85%);
      `}
  }
  @media (max-width: 992px) {
    padding: 1.5rem 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const MenuIcon = styled.span`
  position: absolute;
  top: 1.3rem;
  left: 2.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: 2.5rem;
    width: 2.5rem;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
function AppLayout() {
  const { isMenuOpen, setIsMenuOpen } = useMenuInfo();

  return (
    <StyledAppLayout isMenuOpen={isMenuOpen}>
      <Header />

      <MenuIcon>
        <HamburgerMenuIcon />
      </MenuIcon>
      {/* <Uploader /> */}

      <Sidebar />
      <Main isMenuOpen={isMenuOpen}>
        <Container
          onClick={() => window.innerWidth < 1200 && setIsMenuOpen(false)}
        >
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
