import styled from "styled-components";
import {
  corButtons,
  corDestaque,
  corSecundaria,
  corPrimaria,
} from "../UI/variables";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${corPrimaria};
  height: 100vh;
  width: 100vw;
`;

export const H1 = styled.h1`
  font-size: 80px;
  color: ${corSecundaria};
  margin-top: 30vh;

  &::first-letter {
    font-size: 105px;
    color: ${corDestaque};
  }
`;

export const Icon = styled.img``;

export const Button = styled.button`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 20px;
  width: 220px;
  height: 30px;
  border-radius: 50px;
  font-weight: bold;
  background-color: ${corButtons};
  color: ${corPrimaria};
`;