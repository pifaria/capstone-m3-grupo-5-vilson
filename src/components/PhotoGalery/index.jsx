import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Container, Content, ContentList } from "./styles";

function PhotoGalery({photos, addPhoto, deletePhoto}) {
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function onDeletePhoto(id) {
    deletePhoto(id);
  }

  function onSendPhoto(event) {
    event.preventDefault();

    addPhoto(inputValue);
  }

  return (
    <Container>
      <Content>
        <button onClick={() => setOpenModal(true)}>+</button>
        <ContentList>
          {photos.map(({ id, url }) => {
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
