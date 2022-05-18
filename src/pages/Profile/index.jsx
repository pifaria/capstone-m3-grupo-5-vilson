import { Box, Container, Content } from "./styles.js";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import UserCard from "../../components/userCard";
import Header from "../../components/Header";
import PhotoGalery from "../../components/PhotoGalery";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserInfo } from "../../providers/userInfo/index.jsx";

const Profile = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const { isAuthenticated } = useUserInfo();

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
      {!isAuthenticated && <Redirect to="/" />}
      {user.type === "photographer" ? (
        <>
          <Header placeholder="Pesquisar fotógrafo"/>
          <Box>
            <Content>
              <UserCard user={user} />
              <PhotoGalery />
            </Content>
          </Box>
        </>
      ) : (
        <>
          <Header placeholder="Pesquisar fotógrafo"/>
          <Box>
            <Content>
              <UserCard user={user} />
            </Content>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Profile;
