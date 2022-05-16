import {Container} from "./styles.js"
import Button from "../Button/index.jsx";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo/index.jsx";
import {useEventList} from "../../providers/EventList"

const EventCard = ({event}) => {
    const history = useHistory()
    const { userInfo } = useContext(userInfoContext);
    const { deleteEvent } = useEventList()

    return (
        <Container >
            {userInfo.type === "cliente" ? (
                <>
                  <p> Tique </p>
                  <Button onClick={()=> history.push(`/events/${event.id}`)}>Ver Evento</Button>
                </>
              ) : (
                <>
                  <p> Tique </p>
                  <h3>{event.userInfos.name}</h3>
                  <h4>{event.userInfos.number}</h4>
                  <h4>{event.userInfos.email}</h4>
                </>
              )}
              <h3>{event.tags}</h3>
              <h3>{event.title}</h3>
              <h4>{event.description}</h4>
              <h4>{event.date}</h4>
              <h4>{event.local}</h4>
              <h4>{event.state}</h4>
              <Button beigeSchema onClick={() => deleteEvent(event.id)}>Excluir</Button>
        </Container>
    )
};

export default EventCard;