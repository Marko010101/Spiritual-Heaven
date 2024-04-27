import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";
import { useMenuInfo } from "../context/MenuContext.jsx";
// import Uploader from "../data/Uploader.jsx";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  margin-top: 6rem;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  transition: opacity 0.5s, transform 0.5s;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? "0%" : "-100%")});
`;

function Sidebar() {
  const { isMenuOpen } = useMenuInfo();
  const [isVisible, setIsVisible] = useState(isMenuOpen);
  console.log(`isVisible:`, isVisible);
  console.log(`isMenuOpen:`, isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (!isMenuOpen && window.innerWidth <= 1200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  if (!isMenuOpen && window.innerWidth <= 1200) return;

  return (
    <StyledSidebar isVisible={isVisible}>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
