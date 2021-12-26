import styled, { css } from "styled-components";
import { blue, lightBlack } from "../../styles/colors";
import { displayGrid } from "../../styles/mixins";

const xD = () => css`
  display: grid;
  align-items: center;
  grid-template-columns: 185px auto;
  width: 200px;
  gap: 4px;
`;

export const CreateStyle = styled.section`
  ${displayGrid()};
  form {
    ${displayGrid()};
    justify-items: start;
    gap: 5px;
    width: 310px;
    padding: 10px;
    background-color: ${lightBlack};
    .name {
      input {
        width: 185px;
        margin-right: 19px;
        color: white;
        padding: 3px 0 3px 15px;
        outline: none;
        border: none;
        background-color: ${blue};
        border-radius: 20px;
        &::placeholder {
          color: #d6d6d6;
          padding-left: 3px;
        }
      }
    }
    .stats {
      display: grid;
      grid-template-columns: 60px 1fr 11px;
    }
    .containerFile {
      position: relative;
      .file {
        opacity: 0;
        position: absolute;
        top: 0;
      }
      .image {
        ${xD()};
      }
    }
    .types {
      ${xD()};
    }
  }
`;
