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
  width: 60px;
  height: 35px;
  border-radius: 50px;
  margin-left: auto;
  font-weight: bold;
  color: ${corPrimaria};
  background-color: ${corButtons};
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

export const ReloadBtn = styled.div`
  margin-left: auto;
  color: ${corButtons};
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
