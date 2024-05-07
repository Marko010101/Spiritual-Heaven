import styled, { css } from "styled-components";
import HeaderMenu from "./HeaderMenu.jsx";
import UserAvatar from "../features/authentication/UserAvatar.jsx";
import { useMenuInfo } from "../context/MenuContext.jsx";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    gap: 4rem;
  }
  @media (max-width: 576px) {
    padding: 1.2rem 2rem 1rem 7rem;
  }
`;

function Header() {
  const { isMenuOpen } = useMenuInfo();

  return (
    <StyledHeader isMenuOpen={isMenuOpen}>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
