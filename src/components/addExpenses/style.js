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
`;

export const Button = styled.button`
  height: 40px;
  width: 160px;
  border-radius: 50px;
  padding: 5px;
  font-weight: bold;
  background-color: ${corButtons};
  color: ${corPrimaria};
  cursor: pointer;
`;
