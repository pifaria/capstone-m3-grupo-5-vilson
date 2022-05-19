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

  const { userInfo } = useUserInfo()
  
  return (
    <Container>
      {!isAuthenticated && <Redirect to="/" />}
      <Header placeholder={"Pesquisar fotógrafo"} />
      <main>
        <UserCard user={userInfo} />
        <div className="container-dash">
          <div className="container-top">
            <p>Eventos</p>
            <div className="orange-bar"></div>
            {userInfo.type === "photographer" ? null: <Button onClick={() => openModal()}>Adicionar</Button>}  
          </div>
          <EventList />
        </div>
        
      </main>
    </Container>
  );
};

export default Dashboard;
