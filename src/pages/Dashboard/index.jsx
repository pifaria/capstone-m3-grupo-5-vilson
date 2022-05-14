import { Container } from "./styles";
import Header from "../../components/Header";
import { Redirect } from "react-router-dom";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header
        placeholder={"Pesquise um ?"}
        setAuthenticated={setAuthenticated}
      />
    </Container>
  );
};

export default Dashboard;
