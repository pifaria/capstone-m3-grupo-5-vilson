import { Box, Container, Content } from "./styles.js";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UserCard from "../../components/userCard";
import Header from "../../components/Header";
import PhotoGalery from "../../components/PhotoGalery";
import { usePhotographerList } from "../../providers/PhotographerList/index.jsx";

const Profile = () => {
  const { photographerList } = usePhotographerList()
  const params = useParams();
  
  
  const found = photographerList.find((photographer) => {
    return photographer.id === parseInt(params.id);
  });

  return (
    <Container>
      <Header />
      <Box>
        <Content>
          <UserCard user={found} />
          <PhotoGalery />
        </Content>
      </Box>
    </Container>
  );
};

export default Profile;
