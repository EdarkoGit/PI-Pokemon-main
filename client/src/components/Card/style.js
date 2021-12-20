import styled from "styled-components";
import { lightBlack } from "../../styles/colors";
import { Link } from "react-router-dom";

export const CardStyle = styled(Link)`
  display: grid;
  align-items: end;
  width: 300px;
  height: 470px;
  background-color: ${lightBlack};
  div {
    display: grid;
    justify-items: start;
    padding: 5px;
    picture {
      justify-self: center;
    }
  }
`;
