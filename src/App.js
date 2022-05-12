import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
}

export default App;
