import { Container, Content } from "./styles.js";
import Button from "../Button/index.jsx";
import { formatDate, typeTranslate } from "../../utils/index.jsx";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect, useState } from "react";
import { userInfoContext } from "../../providers/userInfo/index.jsx";
import { useEventList } from "../../providers/EventList";
import { HiExclamationCircle, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const EventCard = ({ event }) => {
  const history = useHistory();
  const { userInfo } = useContext(userInfoContext);
  const { deleteEvent, refuseEvent } = useEventList();
  const [isSolicited, setIsSolicited] = useState(false)

  useEffect(()=> {
    if(userInfo && event.photographers){
      setIsSolicited(event.photographers.includes(userInfo.id))
    }
  }, [userInfo])

  return (
    <Container>
      <Content>
        {userInfo.type === "cliente" ? (
          <>
            <div className="div-switchToggle">
              <h4>Orçamentos solicitados</h4>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>

            <Button onClick={() => history.push(`/events/${event.id}`)}>
              Ver Evento
            </Button>

            <div className="divider1"></div>

            <h3>Evento: {event.title}</h3>
            <h4>Tipo: {typeTranslate(event.type)}</h4>
            <h4>Data: {formatDate(event.date)}</h4>
            <h4>Local: {event.states}</h4>

            <div className="local-date">
              {event.public ? (
                <>
                  <HiOutlineEye className="icon" />
                  <h5>Visível para todos</h5>
                </>
              ) : (
                <>
                  <HiOutlineEyeOff className="icon" />
                  <h5>Apenas convidados</h5>
                </>
              )}
            </div>

            <Button beigeSchema onClick={() => deleteEvent(event.id)}>
              Excluir
            </Button>
          </>
        ) : (
          <>
            <div className="div-switchToggle">
              <h4>Orçamento enviado</h4>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="divider1"></div>

            <h2>Evento: {event.title}</h2>
            <h4>Tipo: {typeTranslate(event.type)}</h4>
            <h4>Data: {formatDate(event.date)}</h4>
            <h4>Local: {event.states}</h4>

            <div className="divider1"></div>
            <h4>Dados do Cliente </h4>
            <h4>Nome: {event.userInfos.name}</h4>
            <h4>Contato: {event.userInfos.number}</h4>
            <h4>E-mail: {event.userInfos.email}</h4>

            {event.public ? (
              <>
                <div className="local-date">
                  <HiOutlineEye className="icon" />
                  <h5>Visível para todos</h5>
                </div>
                 {isSolicited ? (<div className="solicitation"><h4>Você foi solicitado</h4><HiExclamationCircle /></div>) : null}
                 </>
              ) : (
                <div className="div-end">
                <div className="local-date">
                  <HiOutlineEyeOff className="icon" />
                  <h5>Apenas convidados</h5>
                </div>
                {isSolicited ? (<div className="solicitation"><h4>Você foi solicitado</h4><HiExclamationCircle /></div>) : null}
                </div>
              )}
            <Button beigeSchema onClick={() =>{refuseEvent(event.id)}}>
              Recusar evento
            </Button>
          </>
        )}
      </Content>
    </Container>
  );
};

export default EventCard;
