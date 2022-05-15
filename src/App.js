import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import Modal from "react-modal";
import EventsModal from "./components/EventsModal";
import { useRegisterModal } from "./providers/RegisterModal";
import { customStyles } from "./styles/global";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
//Setando o pai do Modal, no nosso caso #root
Modal.setAppElement("#root");

function App() {
  const { modalIsOpen, closeModal } = useRegisterModal();
  

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EventsModal />
      </Modal>
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
