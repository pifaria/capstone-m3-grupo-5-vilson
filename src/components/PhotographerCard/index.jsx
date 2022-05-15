import Button from "../Button";
import { Container, Content } from "./styles";
import { HiOutlineCamera } from "react-icons/hi";

const PhotographerCard = () => {
    //gambiarra
    //necessario arrumar o componente button para os cards
    const style = {
        height: "20.71428680419922px",
        width: "58px",
        borderRadius: "2.367347002029419px",
      };

  return (
    <Container>
      <Content>
          <div className="avatar"></div>
          <h4>Jennis Wilson</h4>
          <div className="profile"><HiOutlineCamera className="icon" /><h3>Ver perfil</h3></div>
        <div className="buttons">
          <Button style={style}>Solicitar</Button>
          <Button style={style} beigeSchema>
            Dispensar
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default PhotographerCard;
