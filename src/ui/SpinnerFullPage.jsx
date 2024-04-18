import styled, { keyframes } from "styled-components";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import { useEffect } from "react";

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const StyledSpinner = styled.div`
  margin: 2.5rem;
  height: calc(100vh - 5rem);
`;

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerFull = styled.div`
  /* width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, var(--color-blue-900));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: ${rotate} 1.5s infinite linear; */
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-blue-900) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-blue-900));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

function SpinnerFullPage() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledSpinner isDarkMode={isDarkMode}>
      <SpinnerContainer>
        <SpinnerFull></SpinnerFull>
      </SpinnerContainer>
    </StyledSpinner>
  );
}

export default SpinnerFullPage;
