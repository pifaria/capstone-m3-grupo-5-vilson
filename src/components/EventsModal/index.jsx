import { Container, Content, Header, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useRegisterModal } from "../../providers/RegisterModal";

const EventsModal = () => {
  const { closeModal } = useRegisterModal()
  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <Header>
          <h3>Listar eventos</h3>
          <button onClick={() => closeModal()}>X</button>
        </Header>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label>Título</label>
            <input {...register("title")} />
            <label>Descrição</label>
            <input {...register("description")} />
            <label>Tipo de evento</label>
            <select {...register("type")}>
              <option value="marriage">Casamento</option>
              <option value="party">Festa</option>
              <option value="essay">Ensaio</option>
              <option value="children">Ensaio Infantil</option>
              <option value="newborn">Newborn</option>
              <option value="fashion">Moda</option>
              <option value="publicity">Publicidade</option>
            </select>
            <label>Data</label>
            <input type="date" {...register("date")} />
            <label>Local</label>
            <input {...register("local")} />
            <label>Expectativa de orçamento</label>
            <input type="number" {...register("budget")} />
            <label>Privacidade</label>
            <select {...register("public")}>
              <option value={true}>Público</option>
              <option value={false}>Privado</option>
            </select>
            <button type="submit">Cadastrar evento</button>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default EventsModal;
