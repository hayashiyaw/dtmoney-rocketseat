import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions"


export function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModelOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModelOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
      <NewTransactionModal
        IsOpenModal={isNewTransactionModelOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}





