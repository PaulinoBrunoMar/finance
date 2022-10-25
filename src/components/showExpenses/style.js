import styled from "styled-components";
import { corButtons, corSecundaria, corPrimaria } from "../UI/variables";

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
  opacity: ${(props) => (props.checked ? "0.5" : "1")};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const Name = styled.span`
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  font-style: ${props => props.checked ? 'italic' : 'none'};
  font-weight: bolder;
  font-size: 24px;
  color: ${corPrimaria};
`;

export const Span = styled.span`
  font: bold;
  color: ${corPrimaria};
`;

export const Calendar = styled(Span)`
  position: relative;
  top: 5px;
  margin-right: 5px;
`;

export const Value = styled(Span)`
  font-size: 20px;
`;

export const Edit = styled.button`
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${corPrimaria};
  color: ${corButtons};
  cursor: pointer;
  visibility: ${props => props.checked ? 'hidden' : 'visible'};;
`;
export const Delete = styled(Edit)`
  color: #cd5c5c;
`;

export const DelAll = styled(Edit)`
  color: #cd5c5c;
  margin-top: 10px;
  font-size: 15px;
  width: 100%;
`;

export const H1 = styled.h1`
  margin-left: auto;
  margin-top: 10px;
  color: ${corPrimaria};
`;
