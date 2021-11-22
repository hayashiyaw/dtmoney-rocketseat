import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModelOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModelOpen(false);
  }

  return (    
    <>      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />   

      <Dashboard />
      <NewTransactionModal 
        IsOpenModal={isNewTransactionModelOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />    
      <GlobalStyle />
    </>
  );
}





