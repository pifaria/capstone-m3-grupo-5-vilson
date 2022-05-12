import { createContext, useState } from "react";

export const userInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const localUser = localStorage.getItem("userInfo");
  const initialUser = localUser ? JSON.parse(localUser) : null;

  const [userInfo, setUserInfo] = useState(initialUser);

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

  return (
    <userInfoContext.Provider value={{ userInfo, saveUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};
