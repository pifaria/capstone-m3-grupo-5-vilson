import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";
import { useUserInfo } from "../userInfo";

export const EventListContext = createContext();

export const EventListProvider = ({ children }) => {
  const { userInfo, saveUserInfo } = useUserInfo();
  const { type, accessToken, id } = userInfo || {};

  const [eventList, setEventList] = useState([]);

  //Filtra apenas os eventos criados pelo usuário logado
  function clientFilter(data) {
    return data.filter((event) => event.userId === id);
  }

  //Filtra os eventos que possuem o usuário logado na lista de fotógrafos
  //e que não foram recusados pelo usuário.
  function photographerFilter(data) {
    return data.filter((event) => {
      const canSee =
        event.public === true ||
        event.photographers?.find((userId) => userId === id);

      const isRefused = userInfo.refusedEvents?.includes(event.id);

      const recomended = event.states === userInfo.states && event.type === userInfo.tags

      return canSee && !isRefused && recomended
    });
  }

  //Adiciona um novo evento à lista de eventos da API,
  //depois guarda a nova lista no state
  //Opcional: Recebe callbacks para sucesso e falha.
  //Disponível apenas para o usuário do tipo cliente.
  const addEvent = async (eventData, onSuccess, onFailed) => {
    const data = { ...eventData, userId: id };

    try {
      const response = await requestApi.postAuth(`/events`, data, accessToken);
      toast.success("Evento cadastrado com sucesso!");
      setEventList([...eventList, response.data]);

      if (onSuccess) onSuccess();
    } catch {
      toast.error("Ops! Houve um problema ao tentar cadastrar o evento.");

      if (onFailed) onFailed();
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
      toast.success("Você recusou o evento!");
    } catch {
      toast.error("Ops! Houve um problema ao tentar recusar o evento.");
    }
  };

  const getEventList = async () => {
    const response = await requestApi.getAuth(`/events`, accessToken);

    const initialList =
      type === "cliente"
        ? clientFilter(response.data)
        : photographerFilter(response.data);

    setEventList(initialList);
  };

  return (
    <EventListContext.Provider
      value={{
        eventsList: eventList,
        addEvent,
        deleteEvent,
        refuseEvent,
        getEventList,
      }}
    >
      {children}
    </EventListContext.Provider>
  );
};

export const useEventList = () => useContext(EventListContext);
