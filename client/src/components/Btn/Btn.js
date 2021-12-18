import styled from "styled-components";

export const Btn = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || "#0071e3"};
  width: ${({ width }) => width || "120px"};
  color: ${({ color }) => color || "white"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding: ${({ padding }) => padding || "3px"};
  border-radius: ${({ borderRadius }) => borderRadius || "5px"};
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  border: none;
  outline: none;
  box-shadow: 0px 0.1px 2px 0.1px black;
  font-weight: bold;
`;
