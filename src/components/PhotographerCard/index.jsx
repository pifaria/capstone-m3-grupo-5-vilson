import Button from "../Button";
import { Container, Content } from "./styles";
import { HiOutlineCamera } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PhotographerCard = ({ info }) => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <img src={info.avatar} alt="Foto de perfil"/>
        <h4>{info.name}</h4>
        <div className="profile">
          <HiOutlineCamera className="icon" />
          <h3 onClick={() => history.push(`/profiles/${info.id}`)}>
            Ver perfil
          </h3>
        </div>
        <div className="buttons">
          <Button>Solicitar orçamento</Button>
        </div>
      </Content>
    </Container>
  );
};

export default PhotographerCard;
