import Button from "../Button";
import { Container, Content } from "./styles";
import { HiOutlineCamera } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PhotographerCard = ({ info }) => {
  const history = useHistory()
  return (
    <Container>
      <Content>
        <div className="avatar"></div>
        <h4>{info.name}</h4>
        <div className="profile">
          <HiOutlineCamera className="icon" />
          <h3 onClick={() => history.push(`/profiles/${info.id}`)}>Ver perfil</h3>
        </div>
        <div className="buttons">
          <Button>Solicitar orçamento</Button>
          <Button>Excluir</Button>
        </div>
      </Content>
    </Container>
  );
};

export default PhotographerCard;
