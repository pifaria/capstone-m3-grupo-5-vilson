import { Container, Content, EventinfoCard } from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PhotographerList from "../../components/PhotographerList";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import real_brasileiro from "../../assets/real_brasileiro.svg";
import { formatDate, typeTranslate } from "../../utils";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { useUserInfo } from "../../providers/userInfo";
import { Redirect } from "react-router-dom";
import requestApi from "../../services/API";

const Event = () => {
  const params = useParams();
  const { userInfo, isAuthenticated } = useUserInfo();
  const [event, setEvent] = useState();

  useEffect(() => {
    requestApi
      .getAuth(`/events/${params.id}`, userInfo.accessToken)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <Container>
      {!isAuthenticated && <Redirect to="/" />}
      <Header placeholder="Pesquisar tag" />
      <Content>
        <PhotographerList eventData={event}/>
        <EventinfoCard>
          <h1>{event && event.title}</h1>
          <div className="divider1"></div>
          <h3>{event && typeTranslate(event.type)}</h3>
          <p>{event && event.description}</p>
          <div className="divider2"></div>
          <div className="infos">
            <div className="local-date">
              <HiOutlineCalendar className="icon" />
              <h5>{event && formatDate(event.date)}</h5>
            </div>
            <div className="local-date">
              <HiOutlineLocationMarker className="icon" />
              <h5>{event && event.states}</h5>
            </div>
          </div>

          <span>Expectativa de orçamento</span>
          <div className="budget">
            <img src={real_brasileiro} alt="real"></img>
            <h2>
              {event &&
                parseInt(event.budget.replace(".", ""))
                  .toFixed(2)
                  .replace(".", ",")}
            </h2>
          </div>
        </EventinfoCard>
      </Content>
    </Container>
  );
};

export default Event;
