import React, { useContext, useEffect } from "react";
import * as S from "./style";
import { MyContext } from "../context";

function ShowExpenses() {
  const {
    getExpenses,
    expenses,
    sweetConfirmForOne,
    setEditId,
    sweetConfirmForAll,
    alterCheck,
  } = useContext(MyContext);

  useEffect(() => {
      getExpenses()
  },)

  let total = 0;
  let totalFormatado = 0;
  let valor = 0;
  let valorFormatado = 0;
  let dataAmericana;
  let dataBrasileira;

  return (
    <>
      <S.List>
        {expenses.map((doc) => {
          total += doc.Valor;
          totalFormatado = total.toFixed(2);
          totalFormatado = totalFormatado.replace(".", ",");
          valor = doc.Valor;
          valorFormatado = valor.toFixed(2);
          valorFormatado = valorFormatado.replace(".", ",");
          dataAmericana = doc.Vencimento;
          dataBrasileira = dataAmericana.split('-').reverse().join('/');

          return (
            <S.Card key={doc.id} checked={doc.Checked}>
              <S.Row>
                <S.Name checked={doc.Checked} onClick={() => alterCheck(doc.id)}>{doc.Despesa}</S.Name>
                <S.Edit
                  checked={doc.Checked}
                  className="material-symbols-outlined"
                  onClick={(e) => setEditId(doc.id)}
                >
                  edit
                </S.Edit>
              </S.Row>
              <S.Row>
                <S.Span>
                  <S.Calendar className="material-symbols-outlined">
                    calendar_month
                  </S.Calendar>
                  {dataBrasileira}
                </S.Span>
                <S.Value>R$: {valorFormatado}</S.Value>
                <S.Delete
                  checked={doc.Checked}
                  className="material-symbols-outlined"
                  onClick={(e) => sweetConfirmForOne(doc.id)}
                >
                  delete
                </S.Delete>
              </S.Row>
            </S.Card>
          );
        })}
        <S.H1>Total: R$ {totalFormatado}</S.H1>
        <S.DelAll onClick={(e) => sweetConfirmForAll()}>
          Delete All Expenses
        </S.DelAll>
      </S.List>
    </>
  );
}

export default ShowExpenses;
