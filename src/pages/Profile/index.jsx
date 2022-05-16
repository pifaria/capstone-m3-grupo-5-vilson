import { Container } from "./styles.js";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Profile = () => {
  const params = useParams();
  return (
    <Container>
      <h1>Profile user {params.id} </h1>
    </Container>
  );
};

export default Profile;
