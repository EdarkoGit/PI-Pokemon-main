import styled from "styled-components";
import { blue, lightBlack } from "../../styles/colors";
import { Link } from "react-router-dom";

export const CardStyle = styled(Link)`
  display: grid;
  align-items: end;
  width: 300px;
  height: 470px;
  background-color: ${lightBlack};
  transition: transform 1s ease, background-color 1s ease;
  &:hover {
    transform: scale(1.05);
    background-color: ${blue};
  }
  div {
    display: grid;
    justify-items: start;
    padding: 5px;
    picture {
      justify-self: center;
    }
  }
  .notFound {
    justify-items: center;
    align-self: center;
  }
`;
