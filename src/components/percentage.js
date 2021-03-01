import React from "react";
import { PercentageStyled } from "../styles/components/percentage.styled";
import Arrow from "../assets/arrow";

const Percentage = ({ value }) => {
  const result = Math.sign(value);

  return (
    <PercentageStyled>
      {result == 1 ? (
        <p>
          <Arrow className={"arrow arrow-up"} />
          {value}%
        </p>
      ) : null}
      {result == -1 ? (
        <p>
          <Arrow className={"arrow arrow-down"} />
          {value}%
        </p>
      ) : null}
      {result == 0 ? (
        <p>
          <Arrow className={"arrow arrow-middle"} />
          {value}%
        </p>
      ) : null}
    </PercentageStyled>
  );
};
export default Percentage;
