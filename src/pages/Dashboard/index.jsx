import { Container } from "./styles";
import Header from "../../components/Header";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo";
import Budget from "../../components/Budget";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const { userInfo } = useContext(userInfoContext);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header
        placeholder={"Pesquise um ?"}
        setAuthenticated={setAuthenticated}
      />

      {userInfo.type === "photographer" ? <Budget /> : null}
    </Container>
  );
};

export default Dashboard;
