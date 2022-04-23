import styled from "styled-components";
import { corDestaque, corSecundaria, corPrimaria } from "../UI/variables";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${corPrimaria};
  height: 100vh;
  width: 100vw;
`;

export const H1 = styled.h1`
  font-size: 70px;
  color: ${corSecundaria};
  margin-top: 25vh;
  padding: 10px;
  font-family: "Montserrat Alternates", sans-serif;
  border: 5px solid ${corSecundaria};
  border-radius: 70px;

  &::first-letter {
    font-size: 80px;
    color: ${corDestaque};
  }
`;

export const Button = styled.button`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 20px;
  margin-top: 20px;
  width: 190px;
  height: 30px;
  border-radius: 50px;
  font-weight: bold;
  background-color: white;
  color: ${corPrimaria};
  cursor: pointer;
`;
