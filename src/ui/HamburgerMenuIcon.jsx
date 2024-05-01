import styled from "styled-components";
import { useMenuInfo } from "../context/MenuContext.jsx";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 3.5rem; /* Adjusted width */
  cursor: pointer;
`;

const Span = styled.span`
  background: var(--color-grey-900);
  border-radius: 0.5rem; /* Adjusted border-radius */
  height: 0.35rem; /* Adjusted height */
  margin: 0.35rem 0; /* Adjusted margin */
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &:nth-of-type(1) {
    width: 50%;
  }
  &:nth-of-type(2) {
    width: 100%;
  }
  &:nth-of-type(3) {
    width: 75%;
  }
`;

const Input = styled.input`
  &[type="checkbox"] {
    display: none;
  }

  &:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotateZ(45deg) translate(0.4rem, 0px); /* Adjusted translation */
  }

  &:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotateZ(-45deg);
  }

  &:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(1.5rem, -0.55rem) rotateZ(45deg); /* Adjusted translation */
  }
`;

const HamburgerMenuIcon = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuInfo();

  const handleCheckboxChange = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledLabel htmlFor="check">
      <Input
        type="checkbox"
        id="check"
        checked={isMenuOpen}
        onChange={handleCheckboxChange}
      />
      <Span></Span>
      <Span></Span>
      <Span></Span>
    </StyledLabel>
  );
};

export default HamburgerMenuIcon;
