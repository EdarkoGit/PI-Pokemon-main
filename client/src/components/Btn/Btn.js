import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#90b4ee"};
  width: ${({ width }) => width || "100%"};
  color: ${({ color }) => color || "white"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding: ${({ padding }) => padding || "5px"};
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  border: none;
  outline: none;
  box-shadow: 0 0 2px 0.1px #202020;
  font-weight: bold;
  &:hover {
    box-shadow: 0 0 4px 0.1px #202020;
  }
`;
