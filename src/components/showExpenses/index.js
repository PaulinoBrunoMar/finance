import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import { AuthContext } from "../context";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function ShowExpenses() {
  const { user } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  let userOn = null;

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    console.log(e);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  const getExpenses = async () => {
    const data = await getDocs(collection(db, userOn.uid));
    setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

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
                  <button>Del</button>
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
