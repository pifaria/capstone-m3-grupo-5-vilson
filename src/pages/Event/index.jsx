import { Container, Content, EventinfoCard } from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PhotographerList from "../../components/PhotographerList";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import real_brasileiro from "../../assets/real_brasileiro.svg";
import { formatDate, typeTranslate } from "../../utils";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { useUserInfo } from "../../providers/userInfo";
import requestApi from "../../services/API";

const Event = () => {
  const params = useParams();
  const { userInfo } = useUserInfo();
  const [event, setEvent] = useState();

  useEffect(() => {
    if (userInfo) {
      requestApi
        .getAuth(`/events/${params.id}`, userInfo && userInfo.accessToken)
        .then((response) => {
          setEvent(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [userInfo]);

  return (
    <Container>
      <Header placeholder="Pesquisar tag" />
      <Content>
          <PhotographerList eventData={event} />
        <EventinfoCard>
          <h1>{event && event.title}</h1>
          <div className="divider1"></div>
          <h3>{event && typeTranslate(event.type)}</h3>
          <div className="div-description">
            <HiOutlineClipboardList className="icon" />
            <p>Descrição: {event && event.description}</p>
          </div>
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
          <div className="local-date">
            {event && event.public ? (
              <>
                <HiOutlineEye className="icon" />
                <h5>Visível</h5>
              </>
            ) : (
              <>
                <HiOutlineEyeOff className="icon" />
                <h5>Privado</h5>
              </>
            )}
          </div>
          <span>Expectativa de orçamento</span>
          <div className="budget">
            <img src={real_brasileiro} alt="real"></img>
            <h2>
              {/* {event &&
                parseInt(event.budget.replace(".", ""))
                  .toFixed(2)
                  .replace(".", ",")} */}
            </h2>
          </div>
        </EventinfoCard>
      </Content>
    </Container>
  );
};

export default Event;
