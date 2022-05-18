import { Container } from "./styles.js";
import {useEventList} from "../../providers/EventList/index.jsx";
import EventCard from "../EventCard/index.jsx";
import { useState } from "react";
import { useUserInfo } from "../../providers/userInfo/index.jsx";

const EventList = () => {
  const { userInfo } = useUserInfo();
  const { eventsList, getEventList } = useEventList();

  useState(() => {
    if(!userInfo) {
      return;
    }

    getEventList();
  }, [userInfo]);

  return (
    <Container>
      {eventsList.length > 0 &&
        eventsList.map((event) => <EventCard key={event.id} event={event} />)}
    </Container>
  );
};

export default EventList;
