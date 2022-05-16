import { Container } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo";
import { useRegisterModal } from "../../providers/RegisterModal";
import Budget from "../../components/Budget";
import EventList from "../../components/EventList";
import UserCard from "../../components/userCard";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const { openModal } = useRegisterModal();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header
        placeholder={"Pesquisar fotógrafo"}
        setAuthenticated={setAuthenticated}
      />
      <main>
        <UserCard />
        <div className="container-dash">
          <div className="container-top">
            <p>Eventos</p>
            <div className="orange-bar"></div>
            <Button onClick={() => openModal()}> Adicionar evento</Button>
          </div>
          <EventList />
        </div>
        {/* {userInfo.type === "photographer" ? <Budget /> : null} */}
      </main>
    </Container>
  );
};

export default Dashboard;
