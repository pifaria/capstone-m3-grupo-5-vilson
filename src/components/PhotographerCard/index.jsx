import Button from "../Button";
import { Container, Content } from "./styles";
import { HiOutlineCamera, HiBadgeCheck } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import requestApi from "../../services/API";
import { useUserInfo } from "../../providers/userInfo";

const PhotographerCard = ({ info, event }) => {
  const history = useHistory();
  const { userInfo } = useUserInfo();
  const [invited, setInvited] = useState(false);
  const [refused, setRefused] = useState(false);

  useEffect(() => {
    if (!event) {
      return;
    }

    if (event.photographers?.includes(info.id)) {
      setInvited(true);

      if(info.refusedEvents?.includes(event.id)){
        setRefused(true);
      }
    }
  }, [event]);

  const addPhotographerToEvent = (event) => {
    if (invited) {
      return;
    }

    requestApi
      .getAuth(`/events/${event.id}`, userInfo.accessToken)
      .then((response) => {
        const eventData = response.data;
        const photographers = eventData.photographers
          ? [...eventData.photographers, info.id]
          : [info.id];

        requestApi
          .patchAuth(
            `/events/${event.id}`,
            { photographers },
            userInfo.accessToken
          )
          .then(() => setInvited(true))
          .catch();
      });
  };

  return (
    <Container>
      <Content>
        {invited && (
          <>
            <HiBadgeCheck />
          </>
        )}
        {refused && <span>Recusado</span>}
        <img src={info.avatar} alt="Foto de perfil" />
        <h4>{info.name}</h4>
        <div className="profile">
          <HiOutlineCamera className="icon" />
          <h3 onClick={() => history.push(`/profiles/${info.id}`)}>
            Ver perfil
          </h3>
        </div>
        <div className="buttons">
          <Button onClick={() => event && addPhotographerToEvent(event)}>
            Solicitar orçamento
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default PhotographerCard;
