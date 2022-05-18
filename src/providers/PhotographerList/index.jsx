import { createContext, useContext, useEffect, useState } from "react";
import requestApi from "../../services/API";

const PhotographerListContext = createContext();

export const PhotographerListProvider = ({ children }) => {
  const [photographerList, setPhotographerList] = useState([]);

  const getPhotographers = async (params = {}) => {
    const {type: tags} = params;

    params.type = "photographer";

    console.log({...params, tags})

    const { data } = await requestApi.get("/users", {
      params: {...params, tags},
    });

    setPhotographerList(data);

    return data;
  };

  return (
    <PhotographerListContext.Provider
      value={{
        photographerList,
        getPhotographers,
      }}
    >
      {children}
    </PhotographerListContext.Provider>
  );
};

export const usePhotographerList = () => useContext(PhotographerListContext);
