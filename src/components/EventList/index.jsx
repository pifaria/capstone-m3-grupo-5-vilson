import { Container } from "./styles.js";
import { useEventList } from "../../providers/EventList/index.jsx";
import EventCard from "../EventCard/index.jsx";

const EventList = () => {
  const { eventsList } = useEventList();

  return (
    <Container>
      {eventsList.length > 0 &&
        eventsList.map((event) => <EventCard key={event.id} event={event} />)}
    </Container>
  );
};

export default EventList;
