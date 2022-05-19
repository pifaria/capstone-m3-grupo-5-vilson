import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";
import { useUserInfo } from "../userInfo";

export const EventListContext = createContext();

export const EventListProvider = ({ children }) => {
  const { userInfo, saveUserInfo } = useUserInfo();
  const { type, accessToken, id } = userInfo || {};

  const [eventList, setEventList] = useState([]);

  function clientFilter(data) {
    return data.filter((event) => event.userId === id);
  }

  async function photographerFilter(data) {
    const {data: user} = await requestApi.get(`/users/${id}`)

    return data.filter((event) => {
      const canSee =
        event.public === true ||
        event.photographers?.find((userId) => userId === id);

      const isRefused = user.refusedEvents?.includes(event.id);

      const recomended = event.states === userInfo.states && event.type === userInfo.tags

      return canSee && !isRefused && recomended
    });
  }

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

  const deleteEvent = async (eventId) => {
    try {
      await requestApi.requestAuth(`/events/${eventId}`, accessToken, "delete");
      setEventList(eventList.filter((event) => event.id !== eventId));
    } catch {
      toast.error("Ops! Houve um problema ao tentar deletar o evento.");
    }
  };

  const refuseEvent = async (eventId) => {
    const {data: user} = await requestApi.get(`users/${id}`)

    const refusedEvents = user?.refusedEvents
      ? [...user.refusedEvents, eventId]
      : [eventId];

    try {
      const response = await requestApi.patchAuth(
        `/users/${id}`,
        { refusedEvents },
        accessToken
      );
      saveUserInfo({user: response.data, accessToken});
      getEventList();
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
        : await photographerFilter(response.data);

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
