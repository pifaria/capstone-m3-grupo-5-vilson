import { Container, Content, Header, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useRegisterModal } from "../../providers/RegisterModal";
import { useContext } from "react";
import { EventListContext } from "../../providers/EventList";
import { userInfoContext } from "../../providers/userInfo";
import SelectStates from "../SelectStates";
import Button from "../Button";
import * as yup from "yup";
// import { isDate, parse } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateId } from "../../utils";

const EventsModal = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Seu evento precisa de um título"),

    description: yup
      .string()
      .required("Escreva uma descrição do seu evento"),

    type: yup.string().required("Selecione uma opção"),

    date: yup
      .date()
      .required("Quando será seu evento?")
      .min(new Date(), "Data do evento não pode ser antes de hoje."),

    states: yup.string().required("Selecione um estado."),

    budget: yup
      .string()
      .required("Qual expectativa de orçamento?")
      .matches(
        /^([0-9]).{2,}$/,
        "O orçamento precisa ter um valor numérico."
      ),

    public: yup.bool().required("Por favor escolha quem pode ver esse evento."),
  });

  const { closeModal } = useRegisterModal();
  const { addEvent } = useContext(EventListContext);
  const { userInfo } = useContext(userInfoContext);
  const { name, email, number, id } = userInfo;

  const onSubmitFunction = (data) => {
    const identifiedData = {
      ...data,
      userInfos: { name, email, number },
      userId: id,
      hash: generateId()
    };
    addEvent(identifiedData, closeModal);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Content>
        <Header>
          <h3>Cadastrar evento</h3>
          <button className="closeModal" onClick={() => closeModal()}>
            X
          </button>
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
            <input type="string" {...register("budget")} />
            <label>Visível Para:</label>
            <select {...register("public")}>
              <option value={true}>Todos os fotógrafos</option>
              <option value={false}>Apenas convidados</option>
            </select>
            <Button beigeSchema type="submit">
              Enviar
            </Button>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default EventsModal;
