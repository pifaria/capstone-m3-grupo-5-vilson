import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";

export const userInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const localUser   = localStorage.getItem("userInfo");

    async function confirmToken(userData) {
      try {
        await requestApi.verifyToken(userData.accessToken);
        setUserInfo(userData);
        setIsAuthenticated(true);        
      } catch {
        toast.error("Sua sessão expirou, faça login novamente");
        eraseUserInfo();
      }
    }

    if (localUser) {
      const userData  = JSON.parse(localUser)
      confirmToken(userData);
    }
  }, []);

  //O parâmetro 'data' deve ser um objeto no mesmo formato da resposta da requisição de login da API
  /*ex.:{
	"accessToken": "xxx.xxx.xxx",
	"user": {
      ...
	  }
  }*/
  const saveUserInfo = (data) => {
    const { user, accessToken } = data;

    const newUserInfo = { ...user, accessToken };

    setUserInfo(newUserInfo);
    setIsAuthenticated(true)

    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  };

  const eraseUserInfo = () => {
    setUserInfo({});
    localStorage.removeItem("userInfo");
    setIsAuthenticated(false);
  }

  return (
    <userInfoContext.Provider
      value={{ isAuthenticated, userInfo, saveUserInfo, eraseUserInfo }}
    >
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
