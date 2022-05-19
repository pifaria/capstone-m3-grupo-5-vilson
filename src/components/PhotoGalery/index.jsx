import { useState, useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import PhotoModal from "../PhotoModal";
import { Container, ContainerButton, Content, ContentList } from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { usePortfolio } from "../../providers/Portfolio";
import { useUserInfo } from "../../providers/userInfo";
import requestApi from "../../services/API";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { customStyles } from "../../styles/global";
import GaleryModal from "../GaleryModal";

function PhotoGalery() {
  const params = useParams();
  const [profileUser, setProfileUser] = useState({});

  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { portfolio, addPhoto, deletePhoto, getPortfolio } = usePortfolio();

  const { userInfo } = useUserInfo();
  const [maximizeEvent, setMaximizeEvent] = useState(false);
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    getPortfolio();
    requestApi
      .get(`/users/${parseInt(params.id)}`)
      .then((response) => {
        setProfileUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [userInfo]);

  function onDeletePhoto(id) {
    deletePhoto(id);
  }

  function onSendPhoto(event) {
    event.preventDefault();

    addPhoto(inputValue, () => {
      setOpenModal(false);
    });
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
              <div>
                <button onClick={() => setOpenModal(true)}>
                  <BsPlusCircle size={20} />
                </button>
                <span>Adicionar foto</span>
              </div>
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
                {portfolio?.length === 0 && (
                  <span>
                    Você ainda não cadastrou nenhuma foto. Mostre-nos seu
                    trabalho!
                  </span>
                )}
                {portfolio &&
                  portfolio.map(({ id, url }) => {
                    return (
                      <li key={id}>
                        <img
                          src={url}
                          alt="photos"
                          onClick={() => bigPicture(url)}
                        />
                        <button onClick={() => onDeletePhoto(id)}>
                          <AiOutlineCloseCircle />
                          <p>excluir foto</p>
                        </button>
                      </li>
                    );
                  })}
              </>
            ) : (
              <>
                {(!profileUser.portfolio || profileUser.portfolio.length === 0) && (
                  <span>Este usuário ainda não cadastrou nenhuma foto</span>
                )}
                {profileUser.portfolio &&
                  profileUser.portfolio.map(({ id, url }) => {
                    return (
                      <li key={id}>
                        <img
                          src={url}
                          alt="event"
                          onClick={() => bigPicture(url)}
                        />
                      </li>
                    );
                  })}
              </>
            )}
          </ContentList>

          <Modal isOpen={openModal} style={customStyles}>
            <GaleryModal
              onSendPhoto={onSendPhoto}
              setInputValue={setInputValue}
              setOpenModal={setOpenModal}
            />
          </Modal>
        </Content>
      </Container>
    </>
  );
}

export default PhotoGalery;
