import { Container, Content } from "./styles.js";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UserCard from "../../components/userCard";
import Header from "../../components/Header";
import PhotoGalery from "../../components/PhotoGalery";
//import { useUserInfo } from "../../providers/userInfo"

const Profile = () => {
  //const { userInfo } = useUserInfo()
  const params = useParams();

  return (
    <Container>
      <Header />
      <Content>
        <UserCard />
        <PhotoGalery />
      </Content>
    </Container>
  );
};

export default Profile;
