import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";
import { userInfoContext } from "../userInfo";

export const EventListContext = createContext();

export const EventListProvider = ({ children }) => {
  const { userInfo, saveUserInfo } = useContext(userInfoContext);
  const { type, accessToken, id } = userInfo;

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    async function getInitialState() {
      //O estado inicial do provider é criado a partir de um get do endpoint events.
      const response = await requestApi.getAuth(`/events`, accessToken);

      //A resposta dp servidor é filtrada baseado no tipo de usuário
      const initialList =
        type === "cliente"
          ? clientFilter(response.data)
          : photographerFilter(response.data);

      setEventList(initialList);
    }

    getInitialState();
  }, [userInfo]);

  //Filtra apenas os eventos criados pelo usuário logado
  function clientFilter(data) {
    return data.filter((event) => event.userId === id);
  }

  //Filtra os eventos que possuem o usuário logado na lista de fotógrafos
  //e que não foram recusados pelo usuário.
  function photographerFilter(data) {
    return data.filter(
      (event) =>
        event.photographers?.find((user) => user.id === id) &&
        !userInfo.refusedEvents?.includes(event.id)
    );
  }

  //Adiciona um novo evento à lista de eventos da API,
  //depois guarda a nova lista no state
  //Disponível apenas para o usuário do tipo cliente.
  const addEvent = async (eventData) => {
    try {
      const response = await requestApi.postAuth(
        `/events`,
        eventData,
        accessToken
      );
      setEventList([...eventList, response.data]);
    } catch {
      toast.error("Ops! Houve um problema ao tentar cadastrar o evento.");
    }
  };

  //Deleta um evento da lista de eventos da API,
  //depois guarda a nova lista no state
  //Disponível apenas para o usuário do tipo cliente.
  const deleteEvent = async (eventId) => {
    try {
      await requestApi.requestAuth(`/events/${eventId}`, accessToken, "delete");
      setEventList(eventList.filter((event) => event.id !== eventId));
    } catch {
      toast.error("Ops! Houve um problema ao tentar deletar o evento.");
    }
  };

  //Recusa um evento enviado por um usuário tipo cliente,
  //adicionando-o a uma lista de eventos recusados do usuário na API,
  //depois atualiza a lista do state com os eventos criados.
  //Disponível apenas para o usuário do tipo fotógrafo.
  const refuseEvent = async (eventId) => {
    const refusedEvents = userInfo.refuseEvents
      ? [...userInfo.refuseEvents, eventId]
      : [eventId];

    try {
      const response = await requestApi.patchAuth(
        `/users/${id}`,
        { refusedEvents },
        accessToken
      );
      saveUserInfo(response.data);
      setEventList(photographerFilter(eventList));
    } catch {
      toast.error("Ops! Houve um problema ao tentar recusar o evento.");
    }
  };

  return (
    <EventListContext.Provider
      value={{ eventsList: eventList, addEvent, deleteEvent, refuseEvent }}
    >
      {children}
    </EventListContext.Provider>
  );
};
