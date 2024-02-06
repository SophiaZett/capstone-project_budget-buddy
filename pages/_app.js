import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  const [transactionFilter, setTransactionFilter] = useState("all");

  function addTransaction(newTransaction) {
    const newTransactionWithId = { ...newTransaction, id: uuidv4() };
    setTransactions([newTransactionWithId, ...transactions]);
    console.log(newTransactionWithId);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactions={transactions}
        onAddTransaction={addTransaction}
        transactionFilter={transactionFilter}
        onFilterChange={setTransactionFilter}
      />
    </>
  );
}
