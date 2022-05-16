import { Container, Content, PhotographersList, EventCard} from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PhotographerCard from "../../components/PhotographerCard";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Event = () => {
  const params = useParams();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://clickfinder-json-server.herokuapp.com/users")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((err) => console.log(err));
    }, []);
    
  return (
    <Container>
      <Header />
      <Content>
        <PhotographersList>
          {userList.length > 0 &&
            userList.map((photographer, index) => {
              if (photographer.type === "fotógrafo"){
                return <PhotographerCard key={index} info={photographer} />;
              }
            })}
        </PhotographersList>
        <EventCard>
          <h1>Evento {params.id}</h1>
        </EventCard>
      </Content>
    </Container>
  );
};

export default Event;
