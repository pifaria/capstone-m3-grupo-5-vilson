import Button from "../Button";
import { Container, Content } from "./styles";
import { HiOutlineCamera, HiBadgeCheck, HiOutlineBan } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import requestApi from "../../services/API";
import { useUserInfo } from "../../providers/userInfo";

const PhotographerCard = ({ info, event }) => {
  const history = useHistory();
  const { userInfo } = useUserInfo();
  const [foundEvent, setFoundEvent] = useState([]);
  const [invited, setInvited] = useState(false);

  useEffect(() => {
    if (!event) {
      return;
    }
    requestApi
      .getAuth(`/events/${event.id}`, userInfo && userInfo.accessToken)
      .then((response) => {
        setFoundEvent(response.data);
        if (event.photographers.includes(info.id)) {
          setInvited(true);
        }
      })
      .catch((err) => console.log(err));
  }, [event]);

  const addPhotographerToEvent = () => {
    if (event.photographers) {
      if (event.photographers.includes(info.id)) {
        console.log("ja foi solicitado");
      } else {
        requestApi
          .patchAuth(
            `/events/${event.id}`,
            { photographers: [...event.photographers, info.id] },
            userInfo.accessToken
          )
          .then(() => setInvited(true));
      }
    } else {
      requestApi
        .patchAuth(
          `/events/${event.id}`,
          { photographers: [info.id] },
          userInfo.accessToken
        )
        .then(() => setInvited(true));
    }
  };



  return (
    <Container>
      <Content>
        <img src={info.avatar} alt="Foto de perfil" />
        <h4>{info.name}</h4>
        <div className="profile">
          <HiOutlineCamera className="icon" />
          <h3 onClick={() => history.push(`/profiles/${info.id}`)}>
            Ver perfil
          </h3>
        </div>
        <div className="buttons">
          {info.refusedEvents ? (
            <>
              <div className="solicitation">
                <h5>Orçamento recusado</h5>
                <HiOutlineBan className="icon" />
              </div>
              
            </>
          ) : (
            <>
              {invited ? (
                <div className="solicitation">
                  Orçamento solicitado
                  <HiBadgeCheck className="icon" />
                </div>
              ) : (
                <Button onClick={() => addPhotographerToEvent()}>
                  Solicitar orçamento
                </Button>
              )}
            </>
          )}
        </div>
      </Content>
    </Container>
  );
};

export default PhotographerCard;
