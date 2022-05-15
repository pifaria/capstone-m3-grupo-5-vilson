import { Container } from "./styles.js";
import {
  EventListContext,
  useEventList,
} from "../../providers/EventList/index.jsx";
import EventCard from "../EventCard/index.jsx";
import Button from "../Button/index";
import { userInfoContext } from "../../providers/userInfo/index.jsx";
import { useContext } from "react";

const EventList = () => {
  const { userInfo } = useContext(userInfoContext);
  const { eventsList } = useContext(EventListContext);
  console.log(eventsList);
  return (
    <Container>
      {eventsList.length > 0 &&
        eventsList.map((element, index) => (
          <li key={index}>
            <EventCard>
              {userInfo.type === "client" ? (
                <>
                  <p> Tique </p>
                  <Button>Ver Evento</Button>
                </>
              ) : (
                <>
                  <p> Tique </p>
                  <h3>{element.userInfos.name}</h3>
                  <h4>{element.userInfos.number}</h4>
                  <h4>{element.userInfos.email}</h4>
                </>
              )}
              <h3>{element.tags}</h3>
              <h3>{element.title}</h3>
              <h4>{element.description}</h4>
              <h4>{element.date}</h4>
              <h4>{element.local}</h4>
              <h4>{element.state}</h4>
              <Button beigeSchema>Excluir</Button>
            </EventCard>
          </li>
        ))}
    </Container>
  );
};

export default EventList;
