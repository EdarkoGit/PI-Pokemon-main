import styled from "styled-components";
import { lightBlack } from "../../styles/colors";
import { displayGrid } from "../../styles/mixins";

export const NavbarStyle = styled.nav`
  margin-bottom: 20px;
  .list {
    ${displayGrid()}
    grid-template-columns: repeat(4,1fr);
    background-color: ${lightBlack};
    padding: 15px;
  }
`;
