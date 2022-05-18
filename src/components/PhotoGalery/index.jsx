import { useState, useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Container, ContainerButton, Content, ContentList } from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { usePortfolio } from "../../providers/Portfolio";
import { useUserInfo } from "../../providers/userInfo";
import PhotoModal from "../PhotoModal";

function PhotoGalery() {
  const params = useParams();
  const [profileUser, setProfileUser] = useState({});

  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { addPhoto, deletePhoto } = usePortfolio();

  const { userInfo } = useUserInfo();
  const [maximizeEvent, setMaximizeEvent] = useState(false);
  const [newUrl, setNewUrl] = useState("");

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

  const bigPicture = (imgUrl) => {
    setMaximizeEvent(true);
    setNewUrl(imgUrl);
  };

  return (
    <>
      {maximizeEvent && (
        <PhotoModal newUrl={newUrl} setMaximizeEvent={setMaximizeEvent} />
      )}
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
                      <>
                        <li key={id}>
                          <img
                            src={url}
                            alt="event"
                            onClick={() => bigPicture(url)}
                          />
                        </li>

                        <li>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg"
                            alt="taj"
                            onClick={() =>
                              bigPicture(
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg"
                              )
                            }
                          />
                        </li>

                        <li>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg"
                            alt="taj"
                          />
                        </li>
                        <li>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg"
                            alt="taj"
                          />
                        </li>
                        <li>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg"
                            alt="taj"
                          />
                        </li>
                        <li>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg"
                            alt="taj"
                          />
                        </li>
                        <li>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg"
                            alt="taj"
                          />
                        </li>
                      </>
                    );
                  })}
              </>
            )}
          </ContentList>

          <Modal isOpen={openModal}>
            <form onSubmit={onSendPhoto}>
              <input
                onChange={({ target: { value } }) => setInputValue(value)}
              />
              <button type="submit">Enviar</button>
            </form>
            <button onClick={() => setOpenModal(false)}>X</button>
          </Modal>
        </Content>
      </Container>
    </>
  );
}

export default PhotoGalery;
