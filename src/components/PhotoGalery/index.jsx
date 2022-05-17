import { useState, useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Container, ContainerButton, Content, ContentList } from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { usePortfolio } from "../../providers/Portfolio";
import { useUserInfo } from "../../providers/userInfo";

function PhotoGalery() {
  const params = useParams();
  const [profileUser, setProfileUser] = useState({});

  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { addPhoto, deletePhoto } = usePortfolio();

  const { userInfo } = useUserInfo();

  console.log(userInfo);
  console.log(profileUser);

  useEffect(() => {
    axios
      .get(
        `https://clickfinder-json-server.herokuapp.com/users/${parseInt(
          params.id
        )}`
      )
      .then((response) => {
        setProfileUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function onDeletePhoto(id) {
    deletePhoto(id);
  }

  function onSendPhoto(event) {
    event.preventDefault();

    addPhoto(inputValue);
  }

  return (
    <Container>
      {userInfo.id === profileUser.id ? (
        <>
          <ContainerButton>
            <button onClick={() => setOpenModal(true)}>+</button>
            <div className="orange-bar"></div>
            <p>Portfólio</p>
          </ContainerButton>
        </>
      ) : (
        <>
          <ContainerButton>
            <div className="orange-bar"></div>
            <p>Portfólio</p>
          </ContainerButton>
        </>
      )}
      <Content>
        <ContentList>
          {userInfo.id === profileUser.id ? (
            <>
              {profileUser.portfolio &&
                profileUser.portfolio.map(({ id, url }) => {
                  return (
                    <li key={id}>
                      <img src={url} alt="photo" />
                      <button onClick={() => onDeletePhoto(id)}>x</button>
                    </li>
                  );
                })}
            </>
          ) : (
            <>
              {profileUser.portfolio &&
                profileUser.portfolio.map(({ id, url }) => {
                  return (
                    <li key={id}>
                      <img src={url} alt="photo" />
                    </li>
                  );
                })}
            </>
          )}
        </ContentList>

        <Modal isOpen={openModal}>
          <form onSubmit={onSendPhoto}>
            <input onChange={({ target: { value } }) => setInputValue(value)} />
            <button type="submit">Enviar</button>
          </form>
          <button onClick={() => setOpenModal(false)}>X</button>
        </Modal>
      </Content>
    </Container>
  );
}

export default PhotoGalery;
