import styled from "styled-components";
import fondoPokemon from "../../images/fondoPokemon.png";
import { displayFlex } from "../../styles/mixins";

export const LandingStyle = styled.section`
  min-height: 100vh;
  background-image: url(${fondoPokemon});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  ${displayFlex()}
`;
