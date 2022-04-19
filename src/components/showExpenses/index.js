import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import { MyContext } from "../context";

function ShowExpenses() {
  const { getExpenses, expenses, deleteExpense } = useContext(MyContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Despesa</th>
            <th>Vencimento</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((doc) => {
            return (
              <tr key={doc.id}>
                <td>{doc.Despesa}</td>
                <td>{doc.Vencimento}</td>
                <td>{doc.Valor}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={(e) => deleteExpense(doc.id)}>Del</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ShowExpenses;
