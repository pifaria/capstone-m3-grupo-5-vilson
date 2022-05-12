import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import Modal from "react-modal";
import EventsModal from "./components/EventsModal";
import { useRegisterModal } from "./providers/RegisterModal";

import "react-toastify/dist/ReactToastify.css";

//Estilização padrão do Modal

const customStyles = {
  content: {
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//Setando o pai do Modal, no nosso caso #root
Modal.setAppElement("#root");

function App() {
  const { modalIsOpen, closeModal, openModal } = useRegisterModal()

  return (
    <div className="App">
      <GlobalStyle />
      <button onClick={() => openModal()}>teste</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EventsModal />
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default App;
