import styled from "styled-components";
import {
  corButtons,
  corDestaque,
  corSecundaria,
  corPrimaria,
} from "../UI/variables";

export const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 80px;
  text-align: start;
  background-color: ${corPrimaria};
  box-shadow: 0px 3px 3px ${corSecundaria};
`;

export const Img = styled.img`
  border: 3px solid ${corSecundaria};
  border-radius: 50%;
  width: 65px;
  height: 65px;
`;

export const H1 = styled.div`
  margin-left: 3%;
  font-size: 25px;
  font-weight: bold;
  color: ${corSecundaria};

  &::first-letter {
    color: ${corDestaque};
    font-size: 30px;
    font-weight: bolder;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 35px;
  border-radius: 50px;
  margin-left: auto;
  font-weight: bold;
  color: ${corPrimaria};
  background-color: ${corButtons};
`;
