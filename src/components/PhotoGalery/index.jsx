import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Container, ContainerButton, Content, ContentList } from "./styles";

import { usePortfolio } from "../../providers/Portfolio";

function PhotoGalery() {
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { portfolio, addPhoto, deletePhoto } = usePortfolio();

  function onDeletePhoto(id) {
    deletePhoto(id);
  }

  function onSendPhoto(event) {
    event.preventDefault();

    addPhoto(inputValue);
  }

  return (
    <Container>
      <ContainerButton>
        <button onClick={() => setOpenModal(true)}>+</button>
        <div className="orange-bar"></div>
        <p>Portfólio</p>
      </ContainerButton>
      <Content>
        <ContentList>
          {portfolio &&
            portfolio.map(({ id, url }) => {
              return (
                <li key={id}>
                  <img src={url} alt="photo" />
                  <button onClick={() => onDeletePhoto(id)}>x</button>
                </li>
              );
            })}
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
