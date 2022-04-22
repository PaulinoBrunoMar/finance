import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import { MyContext } from "../context";

function ShowExpenses() {
  const { getExpenses, expenses, deleteExpense, setEditId } =
    useContext(MyContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <S.List>
        {expenses.map((doc) => {
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
                <S.Span>{doc.Vencimento}</S.Span>
                <S.Value>R$: {doc.Valor}</S.Value>
                <S.Delete
                  className="material-symbols-outlined"
                  onClick={(e) => deleteExpense(doc.id)}
                >
                  delete
                </S.Delete>
              </S.Row>
            </S.Card>
          );
        })}
      </S.List>
      <h1>Total: R$</h1>
    </>
  );
}

export default ShowExpenses;
