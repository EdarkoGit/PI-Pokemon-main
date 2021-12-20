import styled from "styled-components";
import { blue, lightBlack } from "../../styles/colors";
import { displayGrid } from "../../styles/mixins";

export const PagedStyle = styled.div`
  ${displayGrid()}
  padding: 5px;
  div {
    display: flex;
    align-items: center;
    .numbers {
      background-color: ${lightBlack};
      border: none;
      margin-left: 2px;
      margin-right: 2px;
      width: 30px;
      padding: 5px;
      color: ${blue};
      box-shadow: 0px 0px 4px 0px;
    }
  }
`;
