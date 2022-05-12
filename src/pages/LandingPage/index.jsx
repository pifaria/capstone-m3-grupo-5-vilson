import { Container, Content } from "./styles";
import LogoDark from "../../assets/LogoDark.svg";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button"

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
          <Button beigeSchema onClick={() => handleNavigation("/login")}><h5>Login</h5></Button>
          <Button onClick={() => handleNavigation("/signup")}>
          <h5>Cadastre-se</h5>
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default LandingPage;
