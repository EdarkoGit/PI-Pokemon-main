import styled from "styled-components";
import { displayGrid } from "../../styles/mixins";

export const PokemonStyle = styled.section`
  ${displayGrid()};
  .containerCards {
    ${displayGrid()};
    gap: 5px;
    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 960px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
