import styled, { css } from "styled-components";
import Logout from "../features/authentication/Logout.jsx";
import ButtonIcon from "./ButtonIcon.jsx";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { useMenuInfo } from "../context/MenuContext.jsx";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;

  @media (max-width: 460px) {
    ${(props) =>
      props.isMenuOpen &&
      css`
        & > li:nth-child(1),
        & > li:nth-child(2) {
          display: none;
        }
      `}
  }
`;

function HeaderMenu() {
  const { isMenuOpen } = useMenuInfo();

  const navigate = useNavigate();

  return (
    <StyledHeaderMenu isMenuOpen={isMenuOpen}>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
