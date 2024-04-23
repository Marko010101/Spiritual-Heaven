import { useState, useEffect } from "react";
import styled from "styled-components";

import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";
import Uploader from "../data/Uploader.jsx";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  margin-top: 5rem;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar({ isMenuOpen }) {
  const [isVisible, setIsVisible] = useState(isMenuOpen);

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

  if (!isVisible) return null;

  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
