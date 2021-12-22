import styled from "styled-components";
import { morado } from "../../styles/colors";
export const SelectStyle = styled.section`
  .boxspan {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 300px;
    position: absolute;
    background-color: ${morado};
  }
`;
