import styled from "styled-components";
import { blue } from "../../styles/colors";
import { displayGrid } from "../../styles/mixins";

export const DetailStyle = styled.div`
  ${displayGrid()}
  .detail {
    background-color: ${blue};
    padding: 10px;
    width: 310px;
    border-radius: 20px 20px 0px 20px;
  }
`;
