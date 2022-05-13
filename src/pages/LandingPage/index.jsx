import { Container, Content, Grid, Divider } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import LogoDark from "../../assets/LogoDark.svg";

import grid1 from "../../assets/grid1.png"
import grid2 from "../../assets/grid2.png";
import grid3 from "../../assets/grid3.png";
import grid4 from "../../assets/grid4.png";
import grid5 from "../../assets/grid5.png";

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
          <Button beigeSchema onClick={() => handleNavigation("/login")}>
            <h5>Login</h5>
          </Button>
          <Button onClick={() => handleNavigation("/signup")}>
            <h5>Cadastre-se</h5>
          </Button>
        </div>
      </Content>
      <Divider />
      <Grid>
        <div>
          <img className="normal" src={grid1}></img>
          <img className="big" src={grid3}></img>
        </div>
        <div>
          <img className="normal" src={grid2}></img>
          <img className="normal" src={grid4}></img>
          <img style={{marginTop: 10}} className="normal" src={grid5}></img>
        </div>
      </Grid>
    </Container>
  );
};

export default LandingPage;
