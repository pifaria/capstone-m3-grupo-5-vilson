import { EventContainer, EmptyEventContainer } from "./styles.js";
import { useEventList } from "../../providers/EventList/index.jsx";
import EventCard from "../EventCard/index.jsx";
import { useState } from "react";
import { useUserInfo } from "../../providers/userInfo/index.jsx";

const EventList = () => {
  const { userInfo } = useUserInfo();
  const { eventsList, getEventList } = useEventList();

  useState(() => {
    if (!userInfo) {
      return;
    }

    getEventList();
  }, [userInfo]);


  return (
    <>
      {userInfo.type === "photographer" ? (
        <>
          {eventsList.length > 0 ? (
            <EventContainer>
              {eventsList.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </EventContainer>
          ) : (
            <EmptyEventContainer>
              <h1>Não há eventos disponíveis</h1>
            </EmptyEventContainer>
          )}
        </>
      ) : (
        <>
          {eventsList.length > 0 ? (
            <EventContainer>
              {eventsList.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </EventContainer>
          ) : (
            <EmptyEventContainer>
              <h1>Sua lista está vazia</h1>
            </EmptyEventContainer>
          )}
        </>
      )}
    </>
  );
};

export default EventList;
