/* eslint-disable react-hooks/exhaustive-deps */
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
  } = useContext(MyContext);

  useEffect(() => {
    getExpenses();
  }, []);

  let total = 0;

  return (
    <>
      <S.List>
        {expenses.map((doc) => {
          total += doc.Valor;
          return (
            <S.Card key={doc.id}>
              <S.Row>
                <S.Name>{doc.Despesa}</S.Name>
                <S.Edit
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
                  {doc.Vencimento}
                </S.Span>
                <S.Value>R$: {doc.Valor}</S.Value>
                <S.Delete
                  className="material-symbols-outlined"
                  onClick={(e) => sweetConfirmForOne(doc.id)}
                >
                  delete
                </S.Delete>
              </S.Row>
            </S.Card>
          );
        })}
        <S.H1>Total: R$ {total}</S.H1>
        <S.DelAll onClick={(e) => sweetConfirmForAll()}>
          Delete All Expenses
        </S.DelAll>
      </S.List>
    </>
  );
}

export default ShowExpenses;
