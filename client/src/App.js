import React from "react";
import "./App.css";
import { Header } from "./components/header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TrasactionList from "./components/TrasactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TrasactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
