import { createContext, useContext, useState } from "react";

const IDGeneratorContext = createContext();

export const IDGeneratorProvider = ({ children }) => {
  const [lastId, setLastId] = useState(generateId())

  const generateId = () => {
    const newId = Date.now().toString(36) + Math.random().toString(36).substring(2);

    setLastId(newId);

    return lastId;
  }

  return (
    <IDGeneratorContext.Provider value={{lastId, generateId}}>
      { children }
    </IDGeneratorContext.Provider>
  )
}

export const useIDGenerator = () => useContext(IDGeneratorContext);
