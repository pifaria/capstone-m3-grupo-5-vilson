import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";
import { requestApi, requestAuth } from "./services/API";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

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
    const eventList = await requestAuth("/events", token)

    console.log(eventList);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <button onClick={signupHandler}>Cadastrar</button>
      <button onClick={loginHandler}>Login</button>
      <button onClick={checkEvents}>Mostrar Eventos</button>
    </div>
  );
}

export default App;
