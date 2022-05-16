import { createContext, useContext, useEffect, useState } from "react";
import requestApi from "../../services/API";

const PhotographerListContext = createContext();

export const PhotographerListProvider = ({ children }) => {
  const [photographerList, setPhotographerList] = useState([]);

  const filterPhotographers = (filter) => {
    return photographerList.filter(photographer => photographer.tags === filter);
  }

  const getPhotographers = async () => {
    const { data } = await requestApi.get("/users?type=photographer");

    setPhotographerList(data);

    return data
  }

  return (
    <PhotographerListContext.Provider
      value={{ photographerList, filterPhotographers, getPhotographers }}
    >
      {children}
    </PhotographerListContext.Provider>
  );
};

export const usePhotographerList = () => useContext(PhotographerListContext);
