import React, { useContext, useState } from "react";
import * as S from "./style";
import { AuthContext } from "../context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function AddExpenses() {
  const [expense, setExpense] = useState("");
  const [cost, setCost] = useState();
  const [expiration, setExpiration] = useState("");

  /* const date = new Date(); // Ano, mês e dia
  const month = date.toLocaleString("default", { month: "long" }); */

  const { user } = useContext(AuthContext);
  let userOn = null;

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    console.log(e);
  }

  async function addExpense() {
    try {
      const docRef = await addDoc(collection(db, userOn.uid), {
        Despesa: expense,
        Vencimento: expiration,
        Valor: parseFloat(cost),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <S.Div>
      <S.Inpput
        type="text"
        placeholder="Nome da Despesa..."
        onChange={(e) => setExpense(e.target.value)}
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
