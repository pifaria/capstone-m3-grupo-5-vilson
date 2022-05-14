import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";
import { userInfoContext } from "../userInfo";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const { userInfo, saveUserInfo } = useContext(userInfoContext);
  const [ portfolio, setPortfolio ] = useState(userInfo?.portfolio);

  //Recebe como parametro um objeto photo com id e url
  const addPhoto = async (photo) => {
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
