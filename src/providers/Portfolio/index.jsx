import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";
import { userInfoContext } from "../userInfo";
import { useIDGenerator } from "../IDGenerator";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const { userInfo, saveUserInfo } = useContext(userInfoContext);
  const { generateId } = useIDGenerator();
  const [portfolio, setPortfolio] = useState();

  const addPhoto = async (url) => {
    const {accessToken, id: userId} = userInfo;

    const photoId = generateId();
    const photo = { id: photoId, url };

    const newPortfolio = [...portfolio, photo];

    try {
      const response = await requestApi.patchAuth(
        `/users/${userId}`,
        { portfolio: newPortfolio },
        accessToken
      );

      saveUserInfo({user: {...response.data}, accessToken});
      setPortfolio(userInfo.portfolio);
    } catch {
      toast.error("Ops, ocorreu um erro ao enviar sua foto.");
    }
  };

  const deletePhoto = async (id) => {
    const {id :userId, accessToken} = userInfo;

    const newPortfolio = portfolio.filter((photo) => {
      return photo.id !== id;
    });

    try {
      const response = await requestApi.patchAuth(
        `/users/${userId}`,
        { portfolio: newPortfolio },
        userInfo.accessToken
      );

      saveUserInfo({user: {...response.data}, accessToken});
      setPortfolio(userInfo.portfolio);
    } catch {
      toast.error("Ops, ocorreu um erro ao enviar sua foto.");
    }
  };

  const getPortfolio = () => {
    setPortfolio(userInfo.portfolio ? userInfo.portfolio : [])
  }

  return (
    <PortfolioContext.Provider value={{ portfolio, addPhoto, deletePhoto, getPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
