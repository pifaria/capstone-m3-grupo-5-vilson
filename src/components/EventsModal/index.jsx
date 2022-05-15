import { Container, Content, Header, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useRegisterModal } from "../../providers/RegisterModal";
import { useContext } from "react";
import { EventListContext } from "../../providers/EventList"
import { userInfoContext } from "../../providers/userInfo"
import SelectStates from "../SelectStates";

const EventsModal = () => {
  const { closeModal } = useRegisterModal()
  const { register, handleSubmit } = useForm();

  const { addEvent } = useContext(EventListContext)
  const { userInfo } = useContext(userInfoContext)
  const {name, email, number, id} = userInfo

  const onSubmitFunction = (data) => {
    const identifiedData = {...data, userInfos:{name, email, number} , userId: id }
     addEvent(identifiedData)
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
            <SelectStates register={register} name="states" />
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
