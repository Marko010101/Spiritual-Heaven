import styled, { css } from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 992px) {
    ${(props) =>
      props.isMenuOpen === true &&
      css`
        flex-direction: column;
        align-items: start;
      `}
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: start;
  }
`;

export default TableOperations;
