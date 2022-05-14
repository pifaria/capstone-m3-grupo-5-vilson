// fazer os imports
import { createContext, useContext, useState } from "react";
export const BudgetContext = createContext([]);

export const BudgetProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  const budgetStatus = (event) => {
    setStatus(!status);
    event.status = status;
  };

  return (
    <BudgetContext.Provider value={{ budgetStatus }}>
      {children}
    </BudgetContext.Provider>
  );
};
