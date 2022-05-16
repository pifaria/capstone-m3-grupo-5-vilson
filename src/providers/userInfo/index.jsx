<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from "react";
=======
import { createContext, useEffect, useState } from "react";
>>>>>>> c6b4c3236b9b0c65d6799c1f7c29d20d779ae74f

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
<<<<<<< HEAD
      value={{ isAuthenticated, userInfo, saveUserInfo, eraseUserInfo }}
=======
      value={{ isAuthenticated, userInfo, saveUserInfo }}
>>>>>>> c6b4c3236b9b0c65d6799c1f7c29d20d779ae74f
    >
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
