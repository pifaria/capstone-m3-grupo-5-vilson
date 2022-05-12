import { Container, Content } from "./styles";
import LogoDark from "../../assets/LogoDark.svg";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <img src={LogoDark}></img>
        <div className="text">
          <p>Encontre fotógrafos de forma rápida e eficaz</p>
          <p>Encontra clientes para seus ensaios</p>
        </div>
        <div className="buttons">
          <button onClick={() => handleNavigation("/login")}>Login</button>
          <button onClick={() => handleNavigation("/signup")}>
            Cadastre-se
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default LandingPage;
