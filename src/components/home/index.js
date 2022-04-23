import React from "react";
import Header from "../header";
import AddExpenses from "../addExpenses";
import ShowExpenses from "../showExpenses";

function Home() {
  return (
    <div>
      <Header />
      <AddExpenses />
      <ShowExpenses />
    </div>
  );
}

export default Home;
