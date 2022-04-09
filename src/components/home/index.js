import React, { useContext } from "react";
import Header from "../header";
import AddExpenses from "../addExpenses";

function Home() {
  return (
    <div>
      <Header />
      <AddExpenses />

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
