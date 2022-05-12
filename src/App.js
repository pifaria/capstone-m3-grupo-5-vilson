import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import { requestApi, requestAuth } from "./services/API";
import { useState } from "react";
import Modal from "react-modal";
import EventsModal from "./components/EventsModal";
import { useRegisterModal } from "./providers/RegisterModal";
import { customStyles } from "./styles/global";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
//Setando o pai do Modal, no nosso caso #root
Modal.setAppElement("#root");

function App() {
  const [token, setToken] = useState(null);
  const { modalIsOpen, closeModal, openModal } = useRegisterModal();

  async function signupHandler() {
    const resp = await requestApi.post("/register", {
      email: "raniery@kenzie.com",
      password: "1234",
    });

    setToken(resp.accessToken);
  }

  async function loginHandler() {
    const resp = await requestApi.post("/login", {
      email: "raniery@kenzie.com",
      password: "1234",
    });

    setToken(resp.accessToken);
  }

  async function checkEvents() {
    const eventList = await requestAuth("/events", token);

    console.log(eventList);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <button onClick={signupHandler}>Cadastrar</button>
      <button onClick={loginHandler}>Login</button>
      <button onClick={checkEvents}>Mostrar Eventos</button>
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
