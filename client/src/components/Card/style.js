import styled from "styled-components";
import { lightBlack } from "../../styles/colors";

export const CardStyle = styled.div`
  display: grid;
  align-items: end;
  width: 300px;
  height: 450px;
  background-color: ${lightBlack};
  a {
    display: grid;
    justify-items: start;
    padding: 5px;
    picture {
      justify-self: center;
    }
  }
`;
