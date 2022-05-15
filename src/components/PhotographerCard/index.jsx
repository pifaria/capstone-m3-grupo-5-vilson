import Button from "../Button";
import { Container, Content } from "./styles";
import { HiOutlineCamera } from "react-icons/hi";

const PhotographerCard = () => {

  return (
    <Container>
      <Content>
          <div className="avatar"></div>
          <h4>Jennis Wilson</h4>
          <div className="profile"><HiOutlineCamera className="icon" /><h3>Ver perfil</h3></div>
        <div className="buttons">
          <Button >Solicitar</Button>
          <Button beigeSchema>
            Dispensar
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default PhotographerCard;
