import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";
import { userInfoContext } from "../userInfo";
import { useIDGenerator } from "../IDGenerator"

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const { userInfo, saveUserInfo } = useContext(userInfoContext);
  const { generateId } = useIDGenerator();
  const [ portfolio, setPortfolio ] = useState(userInfo?.portfolio);

  const addPhoto = async (url) => {
    const photoId = generateId();
    const photo   = {id: photoId, url}

    const newPortfolio = userInfo.portfolio 
      ? [...userInfo.portfolio, photo]
      : [photo]

    try {
      const response = await requestApi.patchAuth(
        `/users/${userInfo.id}`,
        { portfolio:newPortfolio },
        userInfo.accessToken
      );

      saveUserInfo(response.data)
      setPortfolio(userInfo.portfolio);
    } catch {
      toast.error("Ops, ocorreu um erro ao enviar sua foto.");
    }
  };

  const deletePhoto = async (id) => {
    const newPortfolio = userInfo.portfolio.filter((photo) => {
      return photo.id === id;
    });

    try {
      const response = await requestApi.patchAuth(
        `/users/${userInfo.id}`,
        {portfolio: newPortfolio},
        userInfo.accessToken
      );

      saveUserInfo(response.data)
      setPortfolio(userInfo.portfolio);
    } catch {
      toast.error("Ops, ocorreu um erro ao enviar sua foto.");
    }
  };

  return (
    <PortfolioContext.Provider value={{portfolio, addPhoto, deletePhoto}}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
