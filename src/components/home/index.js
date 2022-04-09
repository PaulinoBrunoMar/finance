import React, { useContext } from "react";
import { AuthContext } from "../context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function Home() {
  const { user, signOut } = useContext(AuthContext);
  let userOn = null;

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    userOn = user;
  }
  console.log(userOn);
  async function addExpense() {
    try {
      const docRef = await addDoc(collection(db, userOn.uid), {
        Despesa: "",
        Descrição: "",
        Vencimento: "",
        Valor: 0,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <h2>Bem Vindo {userOn.displayName}!</h2>
      <button onClick={signOut}>Sair</button>
      <br />
      <br />

      <div>
        <div>
          <label htmlFor="despesa">Despesa</label>
          <input type="text" id="despesa" placeholder="Insira a despesa" />
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input type="number" id="valor" placeholder="R$..." />
        </div>
        <div>
          <label htmlFor="vencimento">Vencimento</label>
          <input type="date" id="vencimento" />
        </div>
      </div>
      <button onClick={addExpense}>Adicionar despesa</button>

      <div>
        <h4>Suas despesas de Maio</h4>
        <p>
          Despesa 1: R$ 100,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 2: R$ 150,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 3: R$ 300,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 4: R$ 1000,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 5: R$ 500,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 6: R$ 600,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 7: R$ 70,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 8: R$ 30,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <p>
          Despesa 9: R$ 100,00 Vencimento: 10/05 <button>E</button>
          <button>D</button>
        </p>
        <h3>Total: R$ 2800,00</h3>
      </div>
    </div>
  );
}

export default Home;
