import { Box, Container, Content } from "./styles.js";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UserCard from "../../components/userCard";
import Header from "../../components/Header";
import PhotoGalery from "../../components/PhotoGalery";
import axios from "axios";
import {useState, useEffect} from "react"

const Profile = () => {
  const params = useParams();
  const [user, setUser] = useState({})

  useEffect(() => {
    
    axios
      .get(
        `https://clickfinder-json-server.herokuapp.com/users/${parseInt(
          params.id
        )}`
      )
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <Container>
      <Header />
      <Box>
        <Content>
          <UserCard user={user} />
          <PhotoGalery />
        </Content>
      </Box>
    </Container>
  );
};

export default Profile;
