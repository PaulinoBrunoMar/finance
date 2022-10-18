import styled from "styled-components";
import { corButtons, corSecundaria, corPrimaria } from "../UI/variables";

export const Div = styled.div`
  border: solid 1px ${corSecundaria};
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${corPrimaria};
`;

export const Inpput = styled.input`
  padding: 10px;
  height: 45px;
  width: 160px;
  font-weight: bold;
  color: ${corPrimaria};
  background-color: white;
`;

export const Button = styled.button`
  height: 40px;
  width: 160px;
  border-radius: 50px;
  padding: 5px;
  font-weight: bold;
  background-color: ${corButtons};
  color: ${corPrimaria};
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;

  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
`;
