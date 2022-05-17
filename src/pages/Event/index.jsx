import { Container, Content, EventinfoCard } from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PhotographerList from "../../components/PhotographerList";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import real_brasileiro from "../../assets/real_brasileiro.svg";
import { formatDate } from "../../utils";
import { useEventList } from "../../providers/EventList/index.jsx";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { useUserInfo } from "../../providers/userInfo";
import { Redirect } from "react-router-dom";

const Event = () => {
  const params = useParams();
  const { isAuthenticated } = useUserInfo();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://clickfinder-json-server.herokuapp.com/users")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { eventsList } = useEventList();
  const found = eventsList.find((event) => {
    return event.id === parseInt(params.id);
  });

  const formatedDate =  formatDate(found.date)

  return (
    <Container>
      {!isAuthenticated && <Redirect to="/"/>}
      <Header
        placeholder="Pesquisar tag"
      />
      <Content>
        <PhotographerList/>
        <EventinfoCard>
          <h1>{found && found.title}</h1>
          <div className="divider1"></div>
          <h3>{found && found.type}</h3>
          <p>{found && found.description}</p>
          <div className="divider2"></div>
          <div className="infos">
            <div className="local-date">
              <HiOutlineCalendar className="icon" />
              <h5>{found && formatedDate}</h5>
            </div>
            <div className="local-date">
              <HiOutlineLocationMarker className="icon" />
              <h5>{found && found.states}</h5>
            </div>
          </div>

          <span>Expectativa de orçamento</span>
          <div className="budget">
            <img src={real_brasileiro} alt="real"></img>
            <h2>
              {found && parseInt(found.budget.replace(".", "")).toFixed(2).replace(".", ",")}
            </h2>
          </div>
        </EventinfoCard>
      </Content>
    </Container>
  );
};

export default Event;
