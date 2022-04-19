import React, { useContext, useState } from "react";
import * as S from "./style";
import { MyContext } from "../context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function AddExpenses() {
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState();
  const [expiration, setExpiration] = useState("");

  /* const date = new Date(); // Ano, mês e dia
  const month = date.toLocaleString("default", { month: "long" }); */

  const { user, getExpenses } = useContext(MyContext);
  let userOn = null;

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    console.log(e);
  }

  async function addExpense() {
    try {
      const docRef = await addDoc(collection(db, userOn.uid), {
        Despesa: expenseName,
        Vencimento: expiration,
        Valor: parseFloat(cost),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    getExpenses();
  }

  return (
    <S.Div>
      <S.Inpput
        type="text"
        placeholder="Nome da Despesa..."
        onChange={(e) => setExpenseName(e.target.value)}
      ></S.Inpput>
      <S.Inpput
        type="number"
        placeholder="R$:"
        onChange={(e) => setCost(e.target.value)}
      ></S.Inpput>
      <S.Inpput
        type="date"
        placeholder="Vencimento da Despesa..."
        onChange={(e) => setExpiration(e.target.value)}
      ></S.Inpput>
      <S.Button onClick={addExpense}>Adicionar despesa</S.Button>
    </S.Div>
  );
}

export default AddExpenses;
