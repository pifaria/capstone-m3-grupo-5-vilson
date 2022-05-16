import { createContext, useEffect, useState } from "react";

export const userInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const localUser = localStorage.getItem("userInfo");

    if (localUser) {
      setUserInfo(JSON.parse(localUser));
      setIsAuthenticated(true);
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

    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  };

  const eraseUserInfo = () => {
    setUserInfo({});
    localStorage.removeItem("userInfo");
    setIsAuthenticated(false);
  }

  return (
    <userInfoContext.Provider
      value={{ isAuthenticated, userInfo, saveUserInfo }}
    >
      {children}
    </userInfoContext.Provider>
  );
};
