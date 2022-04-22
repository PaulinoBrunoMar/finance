import styled from "styled-components";
import {
  corButtons,
  corDestaque,
  corSecundaria,
  corPrimaria,
} from "../UI/variables";

export const List = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

export const Card = styled.div`
  border: solid 1px ${corSecundaria};
  border-radius: 5px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-weight: bold;
  background-color: ${corSecundaria};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Name = styled.span`
  font-weight: bolder;
  font-size: 22px;
  color: ${corPrimaria};
`;

export const Span = styled.span`
  font: bold;
  color: ${corPrimaria};
  margin-right: 55px;
`;

export const Value = styled(Span)`
  font-size: 20px;
`;

export const Edit = styled.button`
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-left: auto;
  background-color: ${corPrimaria};
  color: ${corButtons};
`;
export const Delete = styled(Edit)`
  color: #cd5c5c;
`;
