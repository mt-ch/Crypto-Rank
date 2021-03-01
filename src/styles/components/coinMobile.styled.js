import styled from "styled-components";

export const CoinTableMobileStyled = styled.div`
  .coin-info {
    height: 18vh;
  }

  p {
    font-weight: bold;
  }

  .coin-symbol {
    text-transform: uppercase;
    color: grey;
    font-weight: normal;
  }

  .coin-icon {
    height: 1.3em;
    width: 1.3em;
    margin-left: 0.25em;
  }

  .coin-mcap {
    font-weight: bold;
    color: grey;
    max-width: 8em;
  }

  @media (min-width: 500px) {
    .coin-mcap {
      width: 12em;
    }
  }

  .coin-percent-cell {
    width: 10em;
  }

  thead a {
    display: flex;
    min-width: 1.5em;
  }

  .last-col {
    justify-content: end;
  }

  .percentage-col {
    justify-content: center;
  }

  .mcap-col {
    justify-content: center;
  }

  .table td {
    vertical-align: middle !important;
    padding: 0;
  }

  thead a.ascending::after {
    content: "↑";
    margin-left: 0.25em;
    fill: white;
    font-size: 0.7em;
  }

  thead a.descending::after {
    content: "↓";
    font-size: 0.7em;
    margin-left: 0.25em;
  }
`;

export const CoinTableDesktopStyled = styled.div`
  p {
    font-weight: normal;
  }
  .coin-icon {
    margin: 0;
  }

  .coin-supply {
    position: absolute;
    right: 0;
    transform: scaleX(-1);
  }

  .rank-col {
    justify-content: start;
  }

  .coin-supply-cell {
    min-width: 3.5em;
  }

  .coin-icon-cell {
    max-width: 0.25em;
  }

  .price-col,
  .volume-col {
    justify-content: center;
  }

  .supply-col {
    justify-content: end;
  }

  thead a {
    width: calc(100%+1.5em);
    min-height: 4vh;
  }

  .rank-badge{
  }

  @media (min-width: 800px) {
    .coin-name-cell {
      min-width: 20vw;
    }

    .coin-supply-cell {
      max-width: 8vw;
    }

    .coin-percent-cell {
      width: 10vw;
    }
  }
`;
