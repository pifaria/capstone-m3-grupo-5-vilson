import { Container, ModalHeader } from "./styles";
import Button from "../Button"

const GaleryModal = ({ onSendPhoto, setInputValue, setOpenModal }) => {
  return (
    <Container>
      <ModalHeader>
        <h3>Envie o link de sua foto</h3>
        <button onClick={() => setOpenModal(false)}>X</button>
      </ModalHeader>
      <form onSubmit={onSendPhoto}>
        <input onChange={({ target: { value } }) => setInputValue(value)} />
        <Button type="submit">Enviar</Button>
      </form>
    </Container>
  );
};

export default GaleryModal;
