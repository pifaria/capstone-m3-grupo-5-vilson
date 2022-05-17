import { Container } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useRegisterModal } from "../../providers/RegisterModal";
import EventList from "../../components/EventList";
import UserCard from "../../components/userCard";
import { useUserInfo } from "../../providers/userInfo";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const { openModal } = useRegisterModal();
  const { isAuthenticated } = useUserInfo();
  
  return (
    <Container>
      {!isAuthenticated && <Redirect to="/" />}
      <Header placeholder={"Pesquisar evento"} />
      <main>
        <UserCard />
        <div className="container-dash">
          <div className="container-top">
            <p>Eventos</p>
            <div className="orange-bar"></div>
            <Button onClick={() => openModal()}>Adicionar</Button>
          </div>
          <EventList />
        </div>
        {/* {userInfo.type === "photographer" ? <Budget /> : null} */}
      </main>
    </Container>
  );
};

export default Dashboard;
