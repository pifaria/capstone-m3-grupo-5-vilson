import { Container } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo";
import { useRegisterModal } from "../../providers/RegisterModal";
import Budget from "../../components/Budget";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const { userInfo } = useContext(userInfoContext);
  const { openModal } = useRegisterModal();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header
        placeholder={"Pesquise um ?"}
        setAuthenticated={setAuthenticated}
      />

      <Button onClick={() => openModal()}> Adicionar evento</Button>

      {userInfo.type === "photographer" ? <Budget /> : null}
    </Container>
  );
};

export default Dashboard;
