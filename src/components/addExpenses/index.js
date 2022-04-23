import React, { useContext, useEffect } from "react";
import * as S from "./style";
import { MyContext } from "../context";

function AddExpenses() {
  const {
    setExpenseName,
    expenseName,
    setCost,
    cost,
    setExpiration,
    expiration,
    addEditExpense,
    editId,
    editHandler,
  } = useContext(MyContext);

  useEffect(() => {
    if (editId !== undefined && editId !== "") {
      editHandler(editId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  return (
    <S.Div>
      <S.Inpput
        type="text"
        placeholder="Nome da Despesa..."
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      ></S.Inpput>
      <S.Inpput
        type="number"
        placeholder="R$:"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      ></S.Inpput>
      <S.Inpput
        type="date"
        placeholder="Vencimento da Despesa..."
        value={expiration}
        onChange={(e) => setExpiration(e.target.value)}
      ></S.Inpput>
      <S.Button onClick={addEditExpense}>Add/Edit</S.Button>
    </S.Div>
  );
}

export default AddExpenses;
