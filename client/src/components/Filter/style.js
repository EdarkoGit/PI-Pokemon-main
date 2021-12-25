import styled from "styled-components";
import { displayGrid } from "../../styles/mixins";
export const FilterStyle = styled.form`
  ${displayGrid()}
  justify-items: stretch;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 450px;
  margin: 0 auto;
  .all {
    grid-column: 3/4;
  }
  .order {
    grid-column: 3/4;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    .all {
      grid-column: 4/5;
    }
    .order {
      grid-column: 5/6;
    }
  }
`;
