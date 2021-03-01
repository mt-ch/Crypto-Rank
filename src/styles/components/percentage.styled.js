import styled from "styled-components";

export const PercentageStyled = styled.div`
  .arrow {
    margin-right: 0.25em;
    height: 0.75em;
  }

  .arrow-up {
    fill: green;
    transform: rotate(-90deg);
  }

  .arrow-middle {
    fill: black;
    transform: rotate(0deg);
  }

  .arrow-down {
    fill: red;
    transform: rotate(90deg);
  }
`;
