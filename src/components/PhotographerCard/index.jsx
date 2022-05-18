import Button from "../Button";
import { Container, Content } from "./styles";
import { HiOutlineCamera } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useEffect, useState } from "react";
import requestApi from "../../services/API";
import { useUserInfo } from "../../providers/userInfo";

const PhotographerCard = ({ info, event }) => {
  const history = useHistory();
  const { userInfo } = useUserInfo();
  const [foundEvent, setFoundEvent] = useState([]);

  useEffect(() => {
    requestApi
      .getAuth(`/events/${event.id}`, userInfo && userInfo.accessToken)
      .then((response) => {
        setFoundEvent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addPhotographerToEvent = () => {
    if (event.photographers) {
      if (event.photographers.includes(info.id)) {
        console.log("ja foi solicitado");
      } else {
        requestApi.patchAuth(
          `/events/${event.id}`,
          { photographers: [...event.photographers, info.id] },
          userInfo.accessToken
        );
      }
    } else {
      requestApi.patchAuth(
        `/events/${event.id}`,
        { photographers: [info.id] },
        userInfo.accessToken
      );
    }
  };

  console.log(event)

  return (
    <Container>
      <Content>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <img src={info.avatar} alt="Foto de perfil" />
        <h4>{info.name}</h4>
        <div className="profile">
          <HiOutlineCamera className="icon" />
          <h3 onClick={() => history.push(`/profiles/${info.id}`)}>
            Ver perfil
          </h3>
        </div>
        <div className="buttons">
          <Button onClick={() => addPhotographerToEvent()}>
            Solicitar orçamento
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default PhotographerCard;
