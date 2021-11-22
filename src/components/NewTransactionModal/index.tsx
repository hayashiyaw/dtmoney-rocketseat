import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionModalProps{
  IsOpenModal: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ IsOpenModal, onRequestClose } : NewTransactionModalProps ){
  return(
    <Modal 
      isOpen={IsOpenModal} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}  
        className= "react-modal-close"        
      > 
        <img src={closeImg} alt="Fechar" />      
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"

        />
        <input
          type="number"
          placeholder="Valor"          
        />
        <input
          type="number"
          placeholder="categoria"          
        />

        <button type="submit">
          Cadastrar
        </button>        
      </Container>    
    </Modal>

  )
  
  

}